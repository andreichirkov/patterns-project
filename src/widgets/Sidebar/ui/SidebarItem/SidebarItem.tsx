import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  return (
    <AppLink to={item.path} theme={AppLinkTheme.SECONDARY} className={cls.item}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
}
