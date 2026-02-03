import {breakoutConfig} from "@/domains/breakouts/config";
import {useBreakoutGame} from "@/useCases/breakouts/useBreakoutGame";

export const BreakoutPanel = () => {
    const {canvasRef, score, statusLabel} = useBreakoutGame();

    return (
        <div className="w-full max-w-md lg:w-105">
            {/* w-full: 幅100%, max-w-md: 最大幅28rem, lg:w-[420px]: lgで幅420px */}
            <div className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-4 shadow-lg shadow-indigo-500/10">
                {/*
                    rounded-2xl: 角丸2xl
                    border: 枠線
                    border-slate-700/60: 枠線色 slate-700 60%不透明
                    bg-slate-800/40: 背景色 slate-800 40%不透明
                    p-4: パディング1rem
                    shadow-lg: 大きめ影
                    shadow-indigo-500/10: 影色 indigo-500 10%不透明
                */}
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                    {/* mb-3: 下マージン0.75rem, flex: flexbox, items-center: 縦軸中央揃え, justify-between: 両端揃え, text-xs: 文字サイズ小, text-slate-400: 文字色 slate-400 */}
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
                {/*
                    w-full: 幅100%
                    rounded-lg: 角丸大
                    bg-slate-950/70: 背景色 slate-950 70%不透明
                    ring-1: 枠線1px
                    ring-slate-700/50: 枠線色 slate-700 50%不透明
                */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    {/*
                        mt-3: 上マージン0.75rem
                        flex: flexbox
                        flex-wrap: 折り返し
                        items-center: 縦軸中央揃え
                        justify-between: 両端揃え
                        gap-2: 間隔0.5rem
                        text-xs: 文字サイズ小
                        text-slate-400: 文字色 slate-400
                    */}
                    <span>操作: ← → / A D</span>
                    <span>P/Escでポーズ</span>
                    <span className="text-indigo-300">{statusLabel}</span>
                    {/* text-indigo-300: 文字色 indigo-300 */}
                </div>
            </div>
        </div>
    );
};
