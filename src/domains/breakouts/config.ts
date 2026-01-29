import type { BreakoutConfig } from "@/domains/breakouts/types";

export const breakoutConfig: BreakoutConfig = {
    width: 420,
    height: 280,
    paddleWidth: 90,
    paddleHeight: 12,
    paddleOffset: 28,
    paddleSpeed: 5.2,
    ballRadius: 6,
    ballSpeed: 3.2,
    ballStartOffset: 40,
    brickRows: 5,
    brickColumns: 8,
    brickGap: 8,
    brickTop: 24,
    brickSide: 18,
    brickHeight: 14,
    brickColors: ["#6366f1", "#8b5cf6", "#22c55e", "#f97316", "#38bdf8"],
};
