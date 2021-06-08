import React from 'react'
import YouAbout from '../YouAbout/YouAbout'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../storev2/store';

it ('Renders YouAbout page stats correctly', () => {
    const {getByText} = render(<Provider store={store}>< YouAbout match={{params: {id: 1}, isExact: true, path: "", url: ""}}/></Provider>)
    expect(getByText('views')).toBeTruthy()
    expect(getByText('tags')).toBeTruthy()
})

it ('Renders YouAbout email and join date correctly', () => {
    const {getByText} = render(<Provider store={store}>< YouAbout match={{params: {id: 1}, isExact: true, path: "", url: ""}}/></Provider>)
    expect(getByText('Joined')).toBeTruthy()
    expect(getByText('Email')).toBeTruthy()
})