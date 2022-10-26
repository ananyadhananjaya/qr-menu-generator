import { useLoaderData } from 'react-router-dom'
import { EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import CreateMenu from '../Supabase/POST/createMenu'

const ViewMode = () => {
  const data = useLoaderData()

  const editor = useEditor({
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
    content: data[0].menus
  })

  return (
    <div>
      {/* <CreateMenu />
      <EditorContent editor={editor} /> */}
      Check
    </div>
  )
}

export default ViewMode
