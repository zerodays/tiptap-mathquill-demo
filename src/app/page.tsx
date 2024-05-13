import TiptapEditor from "@/components/editor";
import { createElement } from "react";
import { IconType } from "react-icons";
import { FaDev, FaGithub, FaNpm } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-black bg-dot-white/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex grow items-center flex-wrap gap-x-8 justify-between container">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-5xl font-bold text-white">
            Tiptap Mathquill Extension
          </h1>
          <h2 className="text-2xl font-semibold text-white">
            A WYSIWYG editor with Mathquill support
          </h2>
          <div className="flex gap-x-4">
            <LinkIcon
              href="https://github.com/zerodays/tiptap-mathquill"
              icon={FaGithub}
            />
            <LinkIcon
              href="https://www.npmjs.com/package/@zerodays/tiptap-mathquill"
              icon={FaNpm}
            />
            <LinkIcon href="/" icon={FaDev} />
          </div>
        </div>
        <TiptapEditor />
      </div>
    </main>
  );
}

interface LinkIconProps {
  href: string;
  icon: IconType;
  size?: number;
}

const LinkIcon = ({ href, icon: Icon, size = 34 }: LinkIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-white hover:text-gray-100"
  >
    {createElement(Icon, { size })}
  </a>
);
