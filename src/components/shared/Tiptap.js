"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { useState } from "react";
import React from "react";

import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, BulletList, OrderedList, ListItem],
    content: `
    <p>
      I like lists. Let’s add one:
    </p>
    <ul>
      <li>This is a bullet list.</li>
      <li>And it has three list items.</li>
      <li>Here is the third one.</li>
    </ul>
    <p>
      Do you want to see one more? I bet! Here is another one:
    </p>
    <ol>
      <li>That’s a different list, actually it’s an ordered list.</li>
      <li>It also has three list items.</li>
      <li>And all of them are numbered.</li>
    </ol>
    <p>
      Lists would be nothing without list items.
    </p>
  `,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md p-4 max-w-2xl mx-auto">
      {/* Toolbar */}
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            Toggle bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            Toggle ordered list
          </button>
          <button
            onClick={() =>
              editor.chain().focus().splitListItem("listItem").run()
            }
            disabled={!editor.can().splitListItem("listItem")}
          >
            Split list item
          </button>
          <button
            onClick={() =>
              editor.chain().focus().sinkListItem("listItem").run()
            }
            disabled={!editor.can().sinkListItem("listItem")}
          >
            Sink list item
          </button>
          <button
            onClick={() =>
              editor.chain().focus().liftListItem("listItem").run()
            }
            disabled={!editor.can().liftListItem("listItem")}
          >
            Lift list item
          </button>
        </div>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
