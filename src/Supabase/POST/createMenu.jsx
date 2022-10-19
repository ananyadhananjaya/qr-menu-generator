// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
import '../../../styles/editPage.scss'

const CreateMenu = (props) => {
  const { content, hash } = props
  const supabseUrl = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabseUrl, anonKey)

  const handleGet = async () => {
    const { data } = await supabase.from('menuList').select().eq('hash', hash)
    console.log(data)
  }

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from('menuList')
      .insert([{ hash: hash, menus: content }])

    console.log(content, data, error)
  }

  return (
    <div>
      <button onClick={handleGet}>Get</button>
      <button className="button-add-menu" onClick={handleInsert}>
        Insert
      </button>
    </div>
  )
}

export default CreateMenu
