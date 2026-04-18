"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useRef, useState } from "react";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  List, ListOrdered, Quote, Code, Heading1, Heading2, Heading3,
  Link as LinkIcon, ImageIcon, Undo, Redo, Minus, Maximize2, Minimize2,
} from "lucide-react";

interface TipTapEditorProps {
  value: string;
  onChange: (html: string) => void;
  onUploadImage?: (file: File) => Promise<string>;
}

export default function TipTapEditor({ value, onChange, onUploadImage }: TipTapEditorProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false }),
      Placeholder.configure({ placeholder: "Start writing your blog post here…" }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: { class: "tiptap-editor outline-none min-h-[360px] px-6 py-5" },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (!url) return;
    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUploadImage) return;
    try {
      const url = await onUploadImage(file);
      editor?.chain().focus().setImage({ src: url }).run();
    } catch {
      // error handled by parent
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  if (!editor) return null;

  const T = (active: boolean) => ({
    className: "w-7 h-7 rounded-lg flex items-center justify-center transition-all",
    style: active
      ? { background: "var(--primary)", color: "#fff" }
      : { background: "var(--gray-light)", color: "var(--black)" },
  });

  return (
    <div
      className={isFullscreen ? "fixed inset-0 z-50 flex flex-col bg-white" : "rounded-2xl overflow-hidden"}
      style={isFullscreen ? {} : { border: "1px solid var(--gray-border)" }}
    >

      {/* Heading styles injected inline */}
      <style>{`
        .tiptap-editor h1 { font-size: 2rem; font-weight: 700; color: var(--black); margin: 1.5rem 0 0.75rem; line-height: 1.2; }
        .tiptap-editor h2 { font-size: 1.5rem; font-weight: 700; color: var(--black); margin: 1.25rem 0 0.6rem; line-height: 1.3; }
        .tiptap-editor h3 { font-size: 1.2rem; font-weight: 600; color: var(--black); margin: 1rem 0 0.5rem; line-height: 1.4; }
        .tiptap-editor p { margin-bottom: 1rem; line-height: 1.75; }
        .tiptap-editor ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
        .tiptap-editor ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
        .tiptap-editor li { margin-bottom: 0.3rem; line-height: 1.7; }
        .tiptap-editor blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1.25rem 0; color: var(--gray-text); font-style: italic; }
        .tiptap-editor code { background: var(--primary-light); color: var(--primary); font-family: monospace; padding: 0.15rem 0.4rem; border-radius: 0.3rem; font-size: 0.875em; }
        .tiptap-editor pre { background: var(--black); color: #e2e8f0; padding: 1.25rem; border-radius: 0.75rem; overflow-x: auto; margin-bottom: 1rem; }
        .tiptap-editor pre code { background: none; color: inherit; padding: 0; }
        .tiptap-editor a { color: var(--primary); text-decoration: underline; }
        .tiptap-editor strong { font-weight: 700; }
        .tiptap-editor img { max-width: 100%; border-radius: 0.75rem; margin: 1rem 0; }
        .tiptap-editor hr { border: none; border-top: 1px solid var(--gray-border); margin: 1.5rem 0; }
        .tiptap-editor .is-editor-empty:first-child::before { content: attr(data-placeholder); float: left; color: var(--gray-text); pointer-events: none; height: 0; }
      `}</style>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2.5" style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>

        <button type="button" onClick={() => editor.chain().focus().undo().run()} {...T(false)} title="Undo"><Undo size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} {...T(false)} title="Redo"><Redo size={13} strokeWidth={2} /></button>

        <div className="w-px h-5 mx-1" style={{ background: "var(--gray-border)" }} />

        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} {...T(editor.isActive("heading", { level: 1 }))} title="Heading 1"><Heading1 size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} {...T(editor.isActive("heading", { level: 2 }))} title="Heading 2"><Heading2 size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} {...T(editor.isActive("heading", { level: 3 }))} title="Heading 3"><Heading3 size={13} strokeWidth={2} /></button>

        <div className="w-px h-5 mx-1" style={{ background: "var(--gray-border)" }} />

        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}      {...T(editor.isActive("bold"))}      title="Bold"><Bold size={13} strokeWidth={2.5} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}    {...T(editor.isActive("italic"))}    title="Italic"><Italic size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} {...T(editor.isActive("underline"))} title="Underline"><UnderlineIcon size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()}    {...T(editor.isActive("strike"))}    title="Strikethrough"><Strikethrough size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleCode().run()}      {...T(editor.isActive("code"))}      title="Code"><Code size={13} strokeWidth={2} /></button>

        <div className="w-px h-5 mx-1" style={{ background: "var(--gray-border)" }} />

        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}  {...T(editor.isActive("bulletList"))}  title="Bullet List"><List size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} {...T(editor.isActive("orderedList"))} title="Numbered List"><ListOrdered size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()}  {...T(editor.isActive("blockquote"))}  title="Blockquote"><Quote size={13} strokeWidth={2} /></button>
        <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} {...T(false)} title="Divider"><Minus size={13} strokeWidth={2} /></button>

        <div className="w-px h-5 mx-1" style={{ background: "var(--gray-border)" }} />

        <button type="button" onClick={addLink} {...T(editor.isActive("link"))} title="Insert Link"><LinkIcon size={13} strokeWidth={2} /></button>

        {onUploadImage && (
          <>
            <button type="button" onClick={() => fileRef.current?.click()} {...T(false)} title="Upload Image">
              <ImageIcon size={13} strokeWidth={2} />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageFile} />
          </>
        )}

        <div className="ml-auto">
          <button
            type="button"
            onClick={() => setIsFullscreen((v) => !v)}
            {...T(false)}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 size={13} strokeWidth={2} /> : <Maximize2 size={13} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className={isFullscreen ? "bg-white flex-1 overflow-y-auto" : "bg-white"}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
