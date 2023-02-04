import { render, screen, cleanup} from '@testing-library/react'
import LoginPage from '../loginPage'

test('should render login component', () => {
    render(<LoginPage/>);
    //const emailTextBox = screen.getByTestId('emailTextBox');
    expect(queryByTestId.getByTestId('emailTextBox')).toBeInTheDocument();
    
})