import { getValue } from '@styli/core'
import { StyliPlugin } from '@styli/types'
import { isValidPropValue } from '@styli/utils'

export function isSpaceKey(key: string) {
  return /^space[xXyY]?(-[\dA-Za-z]+)?$/.test(key)
}

const spaceMap: any = {
  all: ['margin-left', 'margin-right', 'margin-top', 'margin-bottom'],
  x: ['margin-left', 'margin-right'],
  y: ['margin-top', 'margin-bottom'],
}

export function spacePropToStyle(propKey: string, propValue: any) {
  const [, pos = 'all', , val] = propKey.match(/^space([XY])?(-([\dA-Za-z]+))?$/) || []
  const position = pos.toLowerCase() as any

  const value = isValidPropValue(propValue) ? propValue : val

  let style: any = {}
  spaceMap[position].forEach((key: string) => {
    style[key] = getValue(value)
  })

  return {
    '>div': {
      ...style,
    },
  }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-space',
    isMatch: isSpaceKey,
    onVisitProp(atom) {
      atom.type = 'prefix'
      atom.style = spacePropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}