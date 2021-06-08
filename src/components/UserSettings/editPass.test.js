import react from 'react';
import ReactDOM from 'react-dom';
import EditPass from './editPass';
import {render,screen,fireEvent,act,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../storev2/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'


// testing tht the EDIT PASS render correctly
it( "Edit pass rendering without crashing", ()=>{

    const div=document.createElement("div");
    render(<Provider store={store}><Router><EditPass/></Router></Provider>,div);
    
    
    
    })