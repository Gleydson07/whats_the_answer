import { getByText, render } from '@testing-library/react'
import { Statistics } from './Index'

jest.mock('../../hooks/useQuestions', () => {
    return { useQuestions() {
        return {
            quiz: {
                corrects: 3,
                incorrects: 7,
                total: 10
            }
        }
    }}
})

it('should be renders correctly', () => {
    const { getByText } = render(
        <Statistics/>
    )

    // debug();
    expect(getByText('Statistics'));
})