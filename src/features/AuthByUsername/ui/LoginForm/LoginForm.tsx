import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'
import i18n from 'shared/config/i18n/i18n'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={i18n.t('Вы ввели неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t('Введите имя пользователя')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  )
})
