declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }

  const classnames: IClassNames
  export = classnames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;