import { EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import { useEffect, useState } from 'react'
import '../index.scss'

const TipTapEditor = ({ editor, content }) => {
  const [value, setValue] = useState('')

  const editorTest = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      ListItem,
      BulletList,
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: 'custom-heading-class'
        }
      })
    ],
    editorProps: {
      attributes: {
        class: 'custom-input-class'
      }
    },
    content: content
  })

  const [isEditable, setIsEditable] = useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isEditable}
          onChange={() => setIsEditable(!isEditable)}
        />
        Check to Edit
      </div>
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
            }
          >
            h1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
            }
          >
            h2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
            }
          >
            h3
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            bullet list
          </button>
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
      {/* <button
        onClick={() => {
          console.log(editor.getJSON())
          editorTest.commands.setContent(editor.getJSON())
        }}
      >
        Get Content
      </button> */}
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 64,
          width: '100%'
        }}
      ></div>
      {/* <EditorContent editor={editorTest} /> */}
    </>
  )
}

export default TipTapEditor
