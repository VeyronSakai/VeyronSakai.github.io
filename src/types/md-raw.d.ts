// `?raw` クエリ付き Markdown インポートを文字列として型付けする。
declare module "*.md?raw" {
    const content: string;
    export default content;
}
