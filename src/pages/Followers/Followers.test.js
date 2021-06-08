import React from 'react'
import Followers from '../Followers/Followers'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../storev2/store';

it ('Renders head of followers page correctly', () => {
    const {getByText} = render(<Provider store={store}>< Followers match={{params: {id: 1}, isExact: true, path: "", url: ""}}/></Provider>)
    expect(getByText('People you follow')).toBeTruthy()
    expect(getByText('Show:')).toBeTruthy()
})

it ('Renders editing part correctly', () => {
    const {getByText} = render(<Provider store={store}>< Followers match={{params: {id: 1}, isExact: true, path: "", url: ""}}/></Provider>)
    expect(getByText('Name')).toBeTruthy()
    expect(getByText('Public photos')).toBeTruthy()
    expect(getByText('You list them as..')).toBeTruthy()
})