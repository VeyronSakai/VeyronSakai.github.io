import { breakoutConfig } from "@/domains/breakouts/config";
import { createInitialState, resetGame, updateState } from "@/domains/breakouts/game";

describe("breakout domain", () => {
    it("creates initial state with expected layout", () => {
        const state = createInitialState(breakoutConfig);
        expect(state.status).toBe("playing");
        expect(state.score).toBe(0);
        expect(state.bricks.length).toBe(
            breakoutConfig.brickRows * breakoutConfig.brickColumns,
        );
        expect(state.remainingBricks).toBe(state.bricks.length);
    });

    it("moves paddle based on input", () => {
        const state = resetGame(breakoutConfig);
        const next = updateState(state, breakoutConfig, { left: false, right: true });
        expect(next.paddle.x).toBeGreaterThan(state.paddle.x);
    });

    it("sets lost status when ball leaves the bottom", () => {
        const state = resetGame(breakoutConfig);
        const next = updateState(
            {
                ...state,
                ball: {
                    ...state.ball,
                    y: breakoutConfig.height + state.ball.radius + 1,
                    vy: 0,
                },
            },
            breakoutConfig,
            { left: false, right: false },
        );
        expect(next.status).toBe("lost");
    });

    it("can reset the game with a fresh score", () => {
        const state = resetGame(breakoutConfig);
        const withScore = { ...state, score: 10 };
        const reset = resetGame(breakoutConfig);
        expect(withScore.score).toBe(10);
        expect(reset.score).toBe(0);
    });
});
