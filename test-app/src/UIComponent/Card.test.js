import { render, screen } from "@testing-library/react";
import Card from "./Card"

test('render  card',() => {

    render(<Card title={"hi"}>hello</Card>);

    const result = screen.getByText("hello");
    expect(result).toBeInTheDocument();

    const title = screen.getByText("hi");
    expect(title).toBeInTheDocument();

})