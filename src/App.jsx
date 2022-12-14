import Heading from './Heading'
import TipTapEditor from './TipTapEditor/TipTapEditor'
import QRCode from 'react-qr-code'
import CreateMenu from './Supabase/POST/createMenu'
import { initialContent } from '../utilities/constants'

const App = () => {
  return (
    <div>
      <Heading />
      <TipTapEditor />
      <QRCode
        size={256}
        style={{ height: '200px', maxWidth: '100%', width: '100px' }}
        value={
          'https://maustrauk.medium.com/creating-qr-code-and-pdf-document-by-react-js-cd5868af0b8e'
        }
        viewBox={`0 0 256 256`}
      />
      <CreateMenu />
    </div>
  )
}

export default App
