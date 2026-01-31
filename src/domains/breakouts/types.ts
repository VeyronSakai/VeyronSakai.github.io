export type GameStatus = "playing" | "won" | "lost";

export type Direction = -1 | 1;

export type BreakoutInput = {
    left: boolean;
    right: boolean;
};

export type Brick = {
    x: number;
    y: number;
    width: number;
    height: number;
    active: boolean;
    color: string;
};

export type Paddle = {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
};

export type Ball = {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
};

export type BreakoutState = {
    status: GameStatus;
    score: number;
    ball: Ball;
    paddle: Paddle;
    bricks: Brick[];
    remainingBricks: number;
};

export type BreakoutConfig = {
    width: number;
    height: number;
    paddleWidth: number;
    paddleHeight: number;
    paddleOffset: number;
    paddleSpeed: number;
    ballRadius: number;
    ballSpeed: number;
    ballStartOffset: number;
    brickRows: number;
    brickColumns: number;
    brickGap: number;
    brickTop: number;
    brickSide: number;
    brickHeight: number;
    brickColors: string[];
};
