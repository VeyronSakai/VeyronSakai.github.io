import { renderHook } from "@testing-library/react";
import { useBreakoutGame } from "@/use-cases/breakouts/useBreakoutGame";

describe("useBreakoutGame", () => {
    it("exposes initial status and score", () => {
        const { result } = renderHook(() => useBreakoutGame());
        expect(result.current.status).toBe("playing");
        expect(result.current.score).toBe(0);
        expect(result.current.statusLabel).toBe("プレイ中");
    });
});
