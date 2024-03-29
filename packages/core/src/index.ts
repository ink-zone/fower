import { store } from './store'
export * from './css'
export * from './isAtomicArgsValid'
export * from './createStyle'
export * from './keyframes'
export * from './injectGlobalStyle'
export * from './atom'
export * from './sheet'
export * from './typings'
export { Parser } from './parser'

import { injectGlobalStyle } from './injectGlobalStyle'

injectGlobalStyle({
  '*, ::before, ::after': {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e5e5e5',
    boxSizing: 'border-box',
  },
})

const { setConfig, getConfig, setTheme, getTheme, setMode, getMode, addAtom, composeAtom } = store

export const fowerStore = store

export { setConfig, getConfig, setTheme, getTheme, setMode, getMode, addAtom, composeAtom }
