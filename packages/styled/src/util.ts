import { createStyle, css, Sheet, styleManager } from '@styli/core'
import { Args } from './types'

// handle inline style
export function getInLineParsedProps(props: any, value: any, args: Args) {
  const sheet = new Sheet(props, value)
  const parsedProps: any = sheet.getParsedProps()

  if (Array.isArray(props.style)) {
    parsedProps.style = [createStyle(...args), sheet.toStyles(), props.style]
  } else {
    parsedProps.style = {
      ...createStyle(...args),
      ...sheet.toStyles(),
      ...props.style,
    }
  }

  return parsedProps
}

// handle css style
export function getCssParsedProps(props: any, value: any, args: Args) {
  const sheet = new Sheet(props, value)
  const parsedProps: any = sheet.getParsedProps()

  const { className = '' } = props || {}
  styleManager.insertStyles(sheet.toCss())
  const finalClassName = `${css(...args)} ${sheet.getClassNames()} ${className}`.trim()

  if (finalClassName) parsedProps.className = finalClassName

  return parsedProps
}
