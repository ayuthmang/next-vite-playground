import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '../page'

test('Home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))

  expect(main.getByText('Get started by editing')).toBeDefined()
  expect(
    main.getByText('Learn about Next.js in an interactive course with quizzes!')
  ).toBeInTheDocument()
})
