import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({className}: ProfilePageProps)  => {
  const {t} = useTranslation()

  return (
    <div className={classNames('pr')}>
      profile
    </div>
  )
}

export default ProfilePage