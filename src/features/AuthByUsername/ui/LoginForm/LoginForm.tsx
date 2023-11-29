import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import { memo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState"
import { loginActions } from "../../model/slice/loginSlice"
import cls from "./LoginForm.module.scss"

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t("Введите имя пользователя")}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        value={password}
        onChange={onChangePassword}
      />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t("Войти")}
      </Button>
    </div>
  )
})
