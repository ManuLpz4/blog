import type { MDXComponents } from 'mdx/types'

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyList,
  TypographyP,
} from './components/ui/typography'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: TypographyH1,
    h2: TypographyH2,
    h3: TypographyH3,
    h4: TypographyH4,
    p: TypographyP,
    blockquote: TypographyBlockquote,
    ul: TypographyList,
  }
}
