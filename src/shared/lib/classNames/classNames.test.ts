import { classNames } from "shared/lib/classNames/classNames"

describe("classNames", () => {
  test("With only first param", () => {
    expect(classNames("name")).toBe("name")
  })

  test("With second param: array of strings", () => {
    const expected = "class1 class2 class3"
    expect(classNames("class1", {}, ["class2", "class3"])).toBe(expected)
  })

  test("With all params: array of strings and mods too", () => {
    const expected = "class1 class2 class3 hovered scrollable"
    expect(
      classNames("class1", { hovered: true, scrollable: true }, [
        "class2",
        "class3"
      ])
    ).toBe(expected)
  })

  test("With all params: one of mods is false", () => {
    const expected = "class1 class2 class3 hovered"
    expect(
      classNames("class1", { hovered: true, scrollable: false }, [
        "class2",
        "class3"
      ])
    ).toBe(expected)
  })

  test("With all params: one of mods is undefined", () => {
    const expected = "class1 class2 class3 hovered"
    expect(
      classNames("class1", { hovered: true, scrollable: undefined }, [
        "class2",
        "class3"
      ])
    ).toBe(expected)
  })
})
