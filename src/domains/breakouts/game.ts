import type {
    BreakoutConfig,
    BreakoutInput,
    BreakoutState,
    Brick,
    GameStatus,
} from "@/domains/breakouts/types";

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

const createBricks = (config: BreakoutConfig) => {
    const brickWidth =
        (config.width - config.brickSide * 2 - config.brickGap * (config.brickColumns - 1)) /
        config.brickColumns;
    const bricks: Brick[] = [];
    for (let row = 0; row < config.brickRows; row += 1) {
        for (let col = 0; col < config.brickColumns; col += 1) {
            bricks.push({
                x: config.brickSide + col * (brickWidth + config.brickGap),
                y: config.brickTop + row * (config.brickHeight + config.brickGap),
                width: brickWidth,
                height: config.brickHeight,
                active: true,
                color: config.brickColors[row % config.brickColors.length],
            });
        }
    }
    return bricks;
};

const updateStatus = (state: BreakoutState, status: GameStatus) => ({
    ...state,
    status,
});

export const createInitialState = (config: BreakoutConfig) => {
    const bricks = createBricks(config);
    return {
        status: "playing",
        score: 0,
        ball: {
            x: config.width / 2,
            y: config.height - config.ballStartOffset,
            radius: config.ballRadius,
            vx: 0,
            vy: 0,
        },
        paddle: {
            width: config.paddleWidth,
            height: config.paddleHeight,
            x: (config.width - config.paddleWidth) / 2,
            y: config.height - config.paddleOffset,
            speed: config.paddleSpeed,
        },
        bricks,
        remainingBricks: bricks.length,
    } satisfies BreakoutState;
};

export const resetBall = (state: BreakoutState, config: BreakoutConfig) => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    return {
        ...state,
        ball: {
            ...state.ball,
            x: config.width / 2,
            y: config.height - config.ballStartOffset,
            vx: direction * config.ballSpeed * 0.75,
            vy: -config.ballSpeed,
        },
    };
};

export const resetGame = (config: BreakoutConfig) => resetBall(createInitialState(config), config);

const checkBrickCollision = (brick: Brick, state: BreakoutState) => {
    if (!brick.active) {
        return false;
    }
    const { ball } = state;
    const withinX = ball.x + ball.radius > brick.x && ball.x - ball.radius < brick.x + brick.width;
    const withinY = ball.y + ball.radius > brick.y && ball.y - ball.radius < brick.y + brick.height;
    if (!withinX || !withinY) {
        return false;
    }
    const overlapLeft = ball.x + ball.radius - brick.x;
    const overlapRight = brick.x + brick.width - (ball.x - ball.radius);
    const overlapTop = ball.y + ball.radius - brick.y;
    const overlapBottom = brick.y + brick.height - (ball.y - ball.radius);
    const minOverlapX = Math.min(overlapLeft, overlapRight);
    const minOverlapY = Math.min(overlapTop, overlapBottom);
    return minOverlapX < minOverlapY ? "x" : "y";
};

export const updateState = (
    state: BreakoutState,
    config: BreakoutConfig,
    input: BreakoutInput,
) => {
    if (state.status !== "playing") {
        return state;
    }

    const direction = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    const nextPaddleX = clamp(
        state.paddle.x + direction * state.paddle.speed,
        0,
        config.width - state.paddle.width,
    );

    let ballX = state.ball.x + state.ball.vx;
    let ballY = state.ball.y + state.ball.vy;
    let ballVx = state.ball.vx;
    let ballVy = state.ball.vy;

    if (ballX - state.ball.radius <= 0) {
        ballX = state.ball.radius;
        ballVx = Math.abs(ballVx);
    }
    if (ballX + state.ball.radius >= config.width) {
        ballX = config.width - state.ball.radius;
        ballVx = -Math.abs(ballVx);
    }
    if (ballY - state.ball.radius <= 0) {
        ballY = state.ball.radius;
        ballVy = Math.abs(ballVy);
    }

    const hitPaddle =
        ballY + state.ball.radius >= state.paddle.y &&
        ballY - state.ball.radius <= state.paddle.y + state.paddle.height &&
        ballX >= nextPaddleX &&
        ballX <= nextPaddleX + state.paddle.width &&
        ballVy > 0;
    if (hitPaddle) {
        ballY = state.paddle.y - state.ball.radius;
        const hitPoint =
            (ballX - (nextPaddleX + state.paddle.width / 2)) / (state.paddle.width / 2);
        const angle = clamp(hitPoint, -1, 1) * (Math.PI / 3);
        ballVx = config.ballSpeed * Math.sin(angle);
        ballVy = -config.ballSpeed * Math.cos(angle);
    }

    let score = state.score;
    let remainingBricks = state.remainingBricks;
    let hitAxis: "x" | "y" | null = null;
    let hitIndex = -1;
    for (let index = 0; index < state.bricks.length; index += 1) {
        const brick = state.bricks[index];
        if (!brick.active) {
            continue;
        }
        const axis = checkBrickCollision(brick, {
            ...state,
            ball: { ...state.ball, x: ballX, y: ballY },
        });
        if (axis) {
            hitAxis = axis;
            hitIndex = index;
            break;
        }
    }

    const bricks = state.bricks.map((brick, index) => {
        if (index !== hitIndex) {
            return brick;
        }
        score += 1;
        remainingBricks -= 1;
        return { ...brick, active: false };
    });

    if (hitAxis === "x") {
        ballVx = -ballVx;
    } else if (hitAxis === "y") {
        ballVy = -ballVy;
    }

    let nextState: BreakoutState = {
        ...state,
        score,
        remainingBricks,
        paddle: {
            ...state.paddle,
            x: nextPaddleX,
        },
        ball: {
            ...state.ball,
            x: ballX,
            y: ballY,
            vx: ballVx,
            vy: ballVy,
        },
        bricks,
    };

    if (remainingBricks <= 0) {
        nextState = updateStatus(nextState, "won");
    } else if (ballY - state.ball.radius > config.height) {
        nextState = updateStatus(nextState, "lost");
    }

    return nextState;
};
