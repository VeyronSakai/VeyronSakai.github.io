import type {ReactNode} from "react";

type IconWithTextProps = {
    icon: ReactNode;
    text: string;
};

export const IconWithText = ({icon, text}: IconWithTextProps) => {
    return (
        <div className="flex items-center gap-2 text-slate-300">
            {/*
                flex: flexbox
                items-center: 縦軸中央揃え
                gap-2: 間隔0.5rem
                text-slate-300: 文字色 slate-300
            */}
            {icon}
            <span>{text}</span>
        </div>
    );
};
