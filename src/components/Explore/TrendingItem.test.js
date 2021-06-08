import react from 'react';
import ReactDOM from 'react-dom';
import TrendingItem from './TrendingItem';
import {render,screen,fireEvent,act,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../storev2/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

it( " renders without crashing", ()=>{

    const div=document.createElement("div");
    render(<Provider store={store}><Router><TrendingItem/></Router></Provider>,div);
    })

it("shows item's title on rendering", ()=> {
    const { getByTestId } = render(<Provider store={store}><Router><TrendingItem/></Router></Provider>);
    const itemTitle = getByTestId("title");
    expect(itemTitle).not.toBeNull();
})