import { render, screen } from "@testing-library/react";
import Card from "./Card"

test('render  card',() => {

    render(<Card title={"hi"}>hello</Card>);

    const result = screen.getByText("hello");
    expect(result).toBeInTheDocument();

    const title = screen.getByText("hi");
    expect(title).toBeInTheDocument();

})

test('render  card with height',() => {

    const {container} = render(<Card height={"200px"}>hello</Card>);

    
    expect(container.querySelector('.card').style.height).toMatch("200px");


})