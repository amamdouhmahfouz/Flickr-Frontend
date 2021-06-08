import react from 'react';
import ReactDOM from 'react-dom';
import ExplorePage from './ExplorePage';
import {render,screen,fireEvent,act,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../storev2/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'


it( " renders without crashing", ()=>{

    const div=document.createElement("div");
    render(<Provider store={store}><Router><ExplorePage/></Router></Provider>,div);
    })


it("shows explore item on clicking tab1", ()=> {
    const { getByTestId } = render(<Provider store={store}><Router><ExplorePage/></Router></Provider>);
    const exploreTab = getByTestId("tab1");
    const exploreItem = getByTestId("exploreItem");

    fireEvent.click(exploreTab);
    expect(exploreItem).not.toBeNull();
})