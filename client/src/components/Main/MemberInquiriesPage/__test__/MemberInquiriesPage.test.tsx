import MemberInquiriesPage from '../MemberInquiriesPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<MemberInquiriesPage />컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        member: {
            inquiriesdata: [
                {
                    _id: '1234',
                    name: '김진석',
                    email: 'k0502s@naver.com',
                    opinion: '문의 사항 내용 테스트',
                },
            ],
            totalPages: 1,
        },
    });

    it('문의 사항 데이터가 테이블 표 값에 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <MemberInquiriesPage />
            </Provider>
        );
        const name = getByTestId('inquiries-name');
        const email = getByTestId('inquiries-email');
        const opinion = getByTestId('inquiries-opinion');
        const button = getByTestId('inquiries-button');

        fireEvent.click(button);

        expect(name).toHaveTextContent('김진석');
        expect(email).toHaveTextContent('k0502s@naver.com');
        expect(opinion).toHaveTextContent('문의 사항 내용 테스트');
        expect(button).toBeEnabled();
    });
});
