import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//Ensures after each test there will be no leftover memory data that could give false results
afterEach(cleanup);

describe('Nav component', () => {
    //Baseline test
    it('renders', () => {
        render(<Nav />);
    })

    //Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })

});

describe('Emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});

describe('Links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})