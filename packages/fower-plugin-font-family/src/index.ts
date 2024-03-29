import { FowerPlugin } from '@fower/core'
import { downFirst } from '@fower/utils'

export function isMatch(key: string) {
  return /^font(Sans|Serif|Mono)?$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      const { key } = atom
      const fontFamilies: any = parser.config.theme.fontFamilies
      const postfix = key.replace(/^font/i, '')
      const styleValue = fontFamilies[downFirst(postfix)]
      atom.style = { fontFamily: styleValue }
      return atom
    },
  }
}
