import { render, screen } from "@testing-library/react";
import NumberChart from "./NumberChart"

test('render number',() => {

    const chartValue = 85;
    const helpvalue = 96;
    render(<NumberChart  value={chartValue} percentValue={helpvalue}/>);

    const numberValue = screen.getByText(chartValue);
    
    expect(numberValue).toBeInTheDocument();

    const value = screen.getByText(helpvalue);
    expect(value).toBeInTheDocument();
})