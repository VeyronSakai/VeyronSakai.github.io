import { breakoutConfig } from "@/domains/breakouts/config";
import { useBreakoutGame } from "@/useCases/breakouts/useBreakoutGame";

export const BreakoutPanel = () => {
    const { canvasRef, score, statusLabel } = useBreakoutGame();

    return (
        <div className="w-full max-w-md lg:w-[420px]">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-4 shadow-lg shadow-indigo-500/10">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                    <span>ブロック崩し</span>
                    <span>スコア {score}</span>
                </div>
                <canvas
                    ref={canvasRef}
                    width={breakoutConfig.width}
                    height={breakoutConfig.height}
                    className="w-full rounded-lg bg-slate-950/70 ring-1 ring-slate-700/50"
                    aria-label="ブロック崩しゲーム"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <span>操作: ← → / A D</span>
                    <span>Spaceで再開</span>
                    <span className="text-indigo-300">{statusLabel}</span>
                </div>
            </div>
        </div>
    );
};
