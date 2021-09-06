import { render, screen } from "@testing-library/react";
import NumberChart from "./NumberChart"

test('render hello world',() => {

    const chartValue = 85
    render(<NumberChart  value={chartValue}/>);

    const numberValue = screen.getByText(chartValue);
    expect(numberValue).toBeInTheDocument();
})