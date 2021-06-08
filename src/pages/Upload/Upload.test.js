import React from 'react'
import Upload from '../Upload/Upload'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../storev2/store';

it ('Renders Upload page correctly', () => {
    const {getByText} = render(<Provider store={store}>< Upload /></Provider>)
    expect(getByText('Choose photos and videos to upload')).toBeTruthy()
    expect(getByText('wut')).toBeTruthy()
})