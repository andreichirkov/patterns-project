type Mods = Record<string, boolean | string>

// Пример
const obj: Mods = {
  hovered: true,
  keke: false
}

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(" ")
}
