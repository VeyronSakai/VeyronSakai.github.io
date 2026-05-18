import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownArticleProps = {
    body: string;
};

// Markdown 本文をダークテーマの prose スタイルでレンダリングする。
// react-markdown は dangerouslySetInnerHTML を使わず安全。
export const MarkdownArticle = ({body}: MarkdownArticleProps) => {
    return (
        <div
            className="prose prose-invert prose-slate max-w-none prose-a:text-indigo-400 prose-headings:text-slate-100"
        >
            {/*
                prose: タイポグラフィ整形
                prose-invert: 暗背景用に色反転
                prose-slate: slate 系カラー
                max-w-none: prose の最大幅制限を解除
                prose-a:text-indigo-400: リンク色 indigo-400
                prose-headings:text-slate-100: 見出し色 slate-100
            */}
            <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
        </div>
    );
};
