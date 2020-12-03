import React, { createElement, ElementType, forwardRef, ComponentProps } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { styli } from '@styli/core'
import { themeContext } from '@styli/theming'
import { AtomicProps } from '@styli/types'
import { getCssParsedProps, getInLineParsedProps } from './util'
import { StyledComponent, InjectedProps, Args } from './types'

const { Consumer } = themeContext

/**
 * style any Component
 * @param component tag name or React Component
 * @param args
 *
 * @example
 *
 * ```
 * styled(View)
 *
 * styled(View, 'f-20 fontBold', 'textCenter', { color: 'red' })
 *
 * styled(View, {
 *   color: 'red'
 * })
 * ```
 */
export function styled<C extends keyof JSX.IntrinsicElements | ElementType>(
  component: C,
  ...args: Args
): StyledComponent<
  JSX.LibraryManagedAttributes<C, ComponentProps<C>> & AtomicProps & InjectedProps
> {
  const StyledComponent = forwardRef((props: any = {}, ref) => {
    return (
      <Consumer>
        {(value: any) => {
          const inline = styli.getConfig('inline')
          const parsedProps = inline
            ? getInLineParsedProps(props, value, args)
            : getCssParsedProps(props, value, args)
          return createElement(component, { ref, ...parsedProps })
        }}
      </Consumer>
    )
  })

  hoistNonReactStatics(StyledComponent, component as any)
  return StyledComponent
}
