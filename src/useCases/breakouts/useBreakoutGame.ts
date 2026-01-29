import type { RefObject } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { breakoutConfig } from "@/domains/breakouts/config";
import { resetGame, updateState } from "@/domains/breakouts/game";
import type { BreakoutInput, BreakoutState } from "@/domains/breakouts/types";

interface UseBreakoutGame {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    status: BreakoutState["status"];
    score: number;
    restart: () => void;
    statusLabel: string;
}

export const useBreakoutGame = (): UseBreakoutGame => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [state, setState] = useState<BreakoutState>(() => resetGame(breakoutConfig));
    const inputRef = useRef<BreakoutInput>({ left: false, right: false });
    const stateRef = useRef(state);
    const statusRef = useRef(state.status);
    const scoreRef = useRef(state.score);

    useEffect(() => {
        stateRef.current = state;
        statusRef.current = state.status;
        scoreRef.current = state.score;
    }, [state]);

    const statusLabel = useMemo(() => {
        return state.status === "playing"
            ? "プレイ中"
            : state.status === "won"
              ? "クリア!"
              : "ゲームオーバー";
    }, [state.status]);

    const restart = useCallback(() => {
        const next = resetGame(breakoutConfig);
        setState(next);
        stateRef.current = next;
        statusRef.current = next.status;
        scoreRef.current = next.score;
    }, []);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        if (key === "arrowleft" || key === "a") {
            inputRef.current.left = true;
            event.preventDefault();
        }
        if (key === "arrowright" || key === "d") {
            inputRef.current.right = true;
            event.preventDefault();
        }
        if (event.code === "Space") {
            event.preventDefault();
            if (statusRef.current !== "playing") {
                restart();
            }
        }
    }, [restart]);

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
        const key = event.key.toLowerCase();
        if (key === "arrowleft" || key === "a") {
            inputRef.current.left = false;
        }
        if (key === "arrowright" || key === "d") {
            inputRef.current.right = false;
        }
    }, []);

    const draw = useCallback(
        (context: CanvasRenderingContext2D, current: BreakoutState) => {
        context.clearRect(0, 0, breakoutConfig.width, breakoutConfig.height);
        context.fillStyle = "#0b1120";
        context.fillRect(0, 0, breakoutConfig.width, breakoutConfig.height);

        for (const brick of current.bricks) {
            if (!brick.active) {
                continue;
            }
            context.fillStyle = brick.color;
            context.fillRect(brick.x, brick.y, brick.width, brick.height);
        }

        context.fillStyle = "#e2e8f0";
        context.fillRect(current.paddle.x, current.paddle.y, current.paddle.width, current.paddle.height);

        context.beginPath();
        context.fillStyle = "#f8fafc";
        context.arc(current.ball.x, current.ball.y, current.ball.radius, 0, Math.PI * 2);
        context.fill();

        if (current.status !== "playing") {
            context.fillStyle = "rgba(2, 6, 23, 0.75)";
            context.fillRect(0, 0, breakoutConfig.width, breakoutConfig.height);
            context.fillStyle = "#f8fafc";
            context.font = "bold 22px sans-serif";
            context.textAlign = "center";
            context.fillText(
                current.status === "won" ? "CLEAR!" : "GAME OVER",
                breakoutConfig.width / 2,
                breakoutConfig.height / 2 - 6,
            );
            context.font = "12px sans-serif";
            context.fillStyle = "#94a3b8";
            context.fillText(
                "Press Space to restart",
                breakoutConfig.width / 2,
                breakoutConfig.height / 2 + 18,
            );
            context.textAlign = "start";
        }
        },
        [],
    );

    const loop = useCallback(
        (context: CanvasRenderingContext2D) => {
        const next =
            statusRef.current === "playing"
                ? updateState(stateRef.current, breakoutConfig, inputRef.current)
                : stateRef.current;
        stateRef.current = next;
        if (next.status !== statusRef.current || next.score !== scoreRef.current) {
            statusRef.current = next.status;
            scoreRef.current = next.score;
            setState(next);
        }
        draw(context, next);
        },
        [draw],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }

        let animationFrameId = 0;
        const tick = () => {
            loop(context);
            animationFrameId = requestAnimationFrame(tick);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        animationFrameId = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, [handleKeyDown, handleKeyUp, loop]);

    return useMemo(
        () => ({
            canvasRef,
            status: state.status,
            score: state.score,
            restart,
            statusLabel,
        }),
        [restart, state.status, state.score, statusLabel],
    );
};
