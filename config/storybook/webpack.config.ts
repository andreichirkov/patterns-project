import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    // Выйти на 2 уровня выше и зайти в папку src
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // Находим правило которое обрабатывает svg, и исключаем обработку
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      }
    }

    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config.plugins.push(
    new DefinePlugin({
      __IS_DEV__: true
    })
  )

  config.module.rules.push(buildCssLoader(true))
  return config
}
