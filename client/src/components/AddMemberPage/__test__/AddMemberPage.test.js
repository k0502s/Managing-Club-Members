import React from 'react';
import AddMemberPage from '../AddMemberPage';
import { render, fireEvent } from '@testing-library/react';

describe('<AddMemberPage />', () => {
    it('matches snapshot', () => {
        const utils = render(<AddMemberPage />);
        utils.getByText('이름');
    });
});
