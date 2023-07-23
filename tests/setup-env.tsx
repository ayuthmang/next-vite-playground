import matchers from '@testing-library/jest-dom/matchers'
import React from 'react'
import { vi, expect } from 'vitest'

// To prevent a page that using 'next/image' from error.
// Ref: https://github.com/vercel/next.js/discussions/32325#discussioncomment-3164774
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

expect.extend(matchers)
