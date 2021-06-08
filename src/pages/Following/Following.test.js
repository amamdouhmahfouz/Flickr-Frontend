import React from 'react'
import Following from '../Following/Following'
import { render } from '@testing-library/react'
import {jest} from '@jest/globals'

it ('Renders following page correctly', () => {
    const {getByText} = render(<Following />)
    expect(getByText('Show:')).toBeTruthy()
})