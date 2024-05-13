import { Editor } from "@tiptap/react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export interface MathSymbol {
  commands: string | string[];
  label?: string;
  display: string;
}

interface MathButtonProps {
  editor: Editor | null;
  symbol: MathSymbol;
}

const MathButton = ({ editor, symbol }: MathButtonProps) => {
  const insert = (commands: string | string[]) => {
    // If there's no editor, return
    if (!editor) {
      return;
    }

    const insertAction = (s: string) => {
      // Get the insert callback
      console.log("insertAction", s);
    };

    // If it's a string, just insert it, otherwise insert all the commands
    const exec =
      typeof commands === "string"
        ? () => insertAction(commands)
        : () => commands.forEach(insertAction);

    exec();
  };

  return (
    <button
      className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center bg-zinc-800 p-2 hover:bg-zinc-700 rounded-md font-semibold transition-colors duration-200"
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        insert(symbol.commands);
      }}
    >
      <BlockMath>{symbol.display}</BlockMath>
    </button>
  );
};

export default MathButton;
