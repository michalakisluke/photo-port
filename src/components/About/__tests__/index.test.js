import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//Ensures after each test there will be no leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    //First test
    it('renders', () => {
        render(<About />);
    })

    //Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})