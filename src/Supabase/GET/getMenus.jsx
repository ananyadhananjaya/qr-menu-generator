import { createClient } from '@supabase/supabase-js'
export const supabseUrl = import.meta.env.VITE_SUPABASE_URL
export const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabseUrl, anonKey)

export const handleGetMenus = async (hash) => {
  const { data } = await supabase.from('menuList').select().eq('hash', hash)
  console.log(data)
  return data
}
