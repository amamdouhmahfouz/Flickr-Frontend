import react from 'react';
import ReactDOM from 'react-dom';
import AccountSettings from './AccountSettings';
import {render,screen,fireEvent,act,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../storev2/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'


 // testing that the searchPage render correctly
 it( "AccountSettings rendering without crashing", ()=>{

    const div=document.createElement("div");
    render(<Provider store={store}><Router><AccountSettings/></Router></Provider>,div);
    
    
    
    })
// testing that tab1 renders

it("render tab1 correct",()=>{

    const {getByTestId}=render(<Provider store={store}><Router><AccountSettings/></Router></Provider>);
    const tab1button=getByTestId("a");
    
    
    })



