import { BuildOptions } from "./types/config"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // Чтобы можно было зайти в приложение с любого роута
    historyApiFallback: true,
    hot: true
  }
}
