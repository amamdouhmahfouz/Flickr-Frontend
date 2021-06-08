import React from 'react'
import YouCover from '../YouCover/YouCover'
import { render } from '@testing-library/react'




const DUMMY_IMAGES = ['https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg', 
'https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg'];


it("renders Followers and Following" , () => {
    const { getByText } = render(<YouCover userId='5' currPics={DUMMY_IMAGES}/>)
    expect(getByText('0 Following')).toBeTruthy();
    expect(getByText('0 Followers .')).toBeTruthy();
})
