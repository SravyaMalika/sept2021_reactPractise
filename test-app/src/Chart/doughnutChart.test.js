import { render, screen } from "@testing-library/react";
import DoughnutChart from "./DoughnutChart";

test('render hello world',() => {

    const chartValue = 85
    render(<DoughnutChart/>);

    const numberValue = screen.getByText(chartValue);
    expect(numberValue).toBeInTheDocument();
})