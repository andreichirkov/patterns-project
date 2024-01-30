export type Mods = Record<string, boolean | string | undefined>

// Пример
const obj: Mods = {
  hovered: true,
  keke: 'false',
  lol: undefined,
}

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(" ")
}
