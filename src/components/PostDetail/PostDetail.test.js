import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import PostDetail from './PostDetail';


describe("Post detail testing", () => { 

    test('action buttons rendering correctly',  () => {
        
        const { getByTestId } = render(<Provider store={store}><PostDetail match={{params: {id: 1}, isExact: true, path: "", url: ""}} postId="1"/></Provider>);
        const shareBtn = getByTestId("share-btn");
        expect(shareBtn).not.toBeNull();

        const favBtn = getByTestId("faved-btn");
        expect(favBtn).not.toBeNull();

        const downloadBtn = getByTestId("download-btn");
        expect(downloadBtn).not.toBeNull();
    })

    test('stats asnum faves, view, and comments should be 0',  () => {
        
        const { getByTestId } = render(<Provider store={store}><PostDetail match={{params: {id: 1}, isExact: true, path: "", url: ""}} postId="1"/></Provider>);
        const countViews = getByTestId("count-views");
        expect(countViews.textContent).toBe("");

        const countFaves = getByTestId("count-faves");
        expect(countFaves.textContent).toBe("");

        const countComments = getByTestId("count-comments");
        expect(countComments.textContent).toBe("");
    })

    test('albums and galleries count initially zero',  () => {
        
        const { getByTestId } = render(<Provider store={store}><PostDetail match={{params: {id: 1}, isExact: true, path: "", url: ""}} postId="1"/></Provider>);
        const galleriessCount = getByTestId("galleries-count");
        expect(galleriessCount.textContent).toBe("This photo is in 0 galleries");

    })

    test('add tags button',  () => {
        
        const { getByTestId } = render(<Provider store={store}><PostDetail match={{params: {id: 1}, isExact: true, path: "", url: ""}} postId="1"/></Provider>);
        const addTagsBtn = getByTestId("add-tags");
        expect(addTagsBtn).not.toBeNull();
    
        fireEvent.click(addTagsBtn);
        const inputAddTags = getByTestId("input-add-tags");
        expect(inputAddTags).not.toBeNull();
        
    })

})



