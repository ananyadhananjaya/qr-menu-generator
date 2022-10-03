import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<h1>Hello World!</h1>'
  })

  return <EditorContent editor={editor} />
}

export default TipTapEditor
