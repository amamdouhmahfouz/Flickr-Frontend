import React from 'react'
import Upload from '../Upload/Upload'
import { render } from '@testing-library/react'

it ('Renders Upload page correctly', () => {
    const {getByText} = render(<Upload />)
    expect(getByText('Choose photos and videos to upload')).toBeTruthy()
})