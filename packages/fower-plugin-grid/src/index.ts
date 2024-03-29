import { FowerPlugin } from '@fower/core'

function isMatch(key: string) {
  return /^gridTemplateColumns$/i.test(key)
}

function toStyle(key: string, value: any): any {
  const style: any = {}

  if (key.startsWith('gridTemplateColumns')) {
    style.gridTemplateColumns = `repeat(${value}, minmax(0px, 1fr))`
  }

  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
