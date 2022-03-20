import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";
import Markdown from "react-markdown";
import Image from "next/image";

export default function MarkDownFormatter({ markdown }) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[gfm]}
        className="h-auto min-h-[30rem]"
        components={{
          img: (image) => {
            return (
              <div className="h-80 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
          },
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
            ) : inline ? (
              <code className={className} {...props}>
                {children}
              </code>
            ) : (
              <div
                className="overflow-auto p-2 m-2"
                style={{ color: "rgb(150 160 175)" }}
              >
                <code className={className} {...props}>
                  {children}
                </code>
              </div>
            );
          },
        }}
      >
        {markdown.toString()}
      </Markdown>
    </div>
  );
}
