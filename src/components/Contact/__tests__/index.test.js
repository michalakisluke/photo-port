import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    //Baseline test
    it('renders', () => {
        render(<ContactForm />);
    })
    //Snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Text renders properly', () => {
    it('inserts text into h1', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })

    it('inserts text into button', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    })
});
