import { cn } from "@/utils/cn";
import { ChainedCommands, Editor, useCurrentEditor } from "@tiptap/react";
import { LucideIcon } from "lucide-react";
import { createElement } from "react";

interface ToggleProps {
  name: string;
  icon: LucideIcon;
  editor: Editor | null;
  action: (c: ChainedCommands) => ChainedCommands;
}

const Toggle = ({ name, icon, editor, action }: ToggleProps) => {
  return (
    <button
      aria-label={`toggle ${name}`}
      onClick={() => editor && action(editor.chain().focus()).run()}
      disabled={!editor || !action(editor.can().chain().focus()).run()}
      className={cn(
        "border cursor-pointer text-white bg-zinc-800 rounded-md p-2 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-800 focus:ring-opacity-50 transition-colors duration-200 ease-in-out",
        editor?.isActive(name) ? "border-white" : "border-transparent"
      )}
    >
      {createElement(icon, { size: 16 })}
    </button>
  );
};

export default Toggle;
