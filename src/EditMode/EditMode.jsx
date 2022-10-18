import TipTapEditor from '../TipTapEditor'
import { EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import QRCode from 'react-qr-code'
import CreateMenu from '../Supabase/POST/createMenu'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateMenu } from '../Supabase/UPDATE/updateMenu'
import { initialContent } from '../../utilities/constants'

const EditMode = () => {
  const { hash } = useParams()
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
    content: initialContent
  })

  return (
    <div>
      <TipTapEditor editor={editor} />
      <QRCode
        size={256}
        style={{ height: '200px', maxWidth: '100%', width: '100px' }}
        value={''}
        viewBox={`0 0 256 256`}
      />
      {editor && <CreateMenu hash={hash} content={editor.getJSON()} />}
      {editor && (
        <button onClick={() => updateMenu(hash, editor.getJSON())}>
          Update
        </button>
      )}
      <button onClick={() => console.log(editor.getHTML())}>Consol log</button>
    </div>
  )
}

export default EditMode
