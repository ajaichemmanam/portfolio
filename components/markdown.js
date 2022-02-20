import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";
import Markdown from "react-markdown";

export default function MarkDownFormatter({ markdown }) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[gfm]}
        className="h-auto min-h-[30rem]"
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown.toString()}
      </Markdown>
    </div>
  );
}