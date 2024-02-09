import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
        {t('Редактировать')}
      </Button>
    </div>
  )
}
