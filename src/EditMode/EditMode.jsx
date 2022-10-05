import Heading from '../Heading'
import TipTapEditor from '../TipTapEditor'
import QRCode from 'react-qr-code'
import CreateMenu from '../Supabase/POST/createMenu'

const EditMode = () => {
  return (
    <div>
      <Heading />
      <TipTapEditor />
      <QRCode
        size={256}
        style={{ height: '200px', maxWidth: '100%', width: '100px' }}
        value={''}
        viewBox={`0 0 256 256`}
      />
      <CreateMenu />
    </div>
  )
}

export default EditMode
