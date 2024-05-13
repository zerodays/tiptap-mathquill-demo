"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { BackgroundGradient } from "./ui/background-gradient";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Toggle from "./ui/toggle";
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  StrikethroughIcon,
} from "lucide-react";
import MathButton from "./ui/math-button";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "text-sm font-normal tracking-wider",
        },
      }),
      Placeholder.configure({
        placeholder: "Type something...",
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "p-5 overflow-scroll focus-visible:outline-none",
      },
    },
  });

  return (
    <div className="flex flex-col gap-y-4">
      <EditorToolbar editor={editor} />
      <BackgroundGradient className="rounded-[22px] bg-zinc-900">
        <EditorContent editor={editor} className="w-full h-[200px]" />
      </BackgroundGradient>
      <MathToolbar editor={editor} />
    </div>
  );
};

interface EditorToolbarProps {
  editor: Editor | null;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  return (
    <div className="flex space-x-4">
      <Toggle
        editor={editor}
        name="bold"
        icon={BoldIcon}
        action={(c) => c.toggleBold()}
      />
      <Toggle
        editor={editor}
        name="italic"
        icon={ItalicIcon}
        action={(c) => c.toggleItalic()}
      />
      <Toggle
        editor={editor}
        name="strike"
        icon={StrikethroughIcon}
        action={(c) => c.toggleStrike()}
      />
      <Toggle
        editor={editor}
        name="code"
        icon={CodeIcon}
        action={(c) => c.toggleCode()}
      />
    </div>
  );
};

interface MathToolbarProps {
  editor: Editor | null;
}

const MathToolbar = ({ editor }: MathToolbarProps) => {
  return (
    <div className="flex space-x-4">
      <MathButton
        editor={editor}
        symbol={{
          commands: "fraction",
          display: "\\frac{a}{b}",
        }}
      />
      <MathButton
        editor={editor}
        symbol={{
          commands: "\\sqrt{}",
          display: "\\sqrt{x}",
        }}
      />
      <MathButton
        editor={editor}
        symbol={{
          commands: "\\int",
          display: "\\int",
        }}
      />
      <MathButton
        editor={editor}
        symbol={{
          commands: "\\sum",
          display: "\\sum",
        }}
      />
      <MathButton
        editor={editor}
        symbol={{
          commands: "\\infty",
          display: "\\infty",
        }}
      />
      <MathButton
        editor={editor}
        symbol={{
          commands: "\\alpha",
          display: "\\alpha",
        }}
      />
    </div>
  );
};

export default TiptapEditor;
