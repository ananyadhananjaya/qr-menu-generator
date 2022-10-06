import { supabase } from '../GET/getMenus'

export const updateMenu = async (hash, menu) => {
  const { data, error } = await supabase
    .from('menuList')
    .update({ menus: menu })
    .match({ hash: hash })

  console.log(data, error)
}
