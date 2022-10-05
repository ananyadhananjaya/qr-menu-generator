// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

const CreateMenu = () => {
  const supabseUrl = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabseUrl, anonKey)

  const handleGet = async () => {
    const { data } = await supabase
      .from('menuList')
      .select()
      .eq('hash', 'test12f34')
    console.log(data)
  }

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from('menuList')
      .insert([{ hash: 'test123', menus: { test: 'hello world' } }])

    console.log(data, error)
  }

  return (
    <div>
      <button onClick={handleGet}>Get</button>
      <button onClick={handleInsert}>Insert</button>
    </div>
  )
}

export default CreateMenu
