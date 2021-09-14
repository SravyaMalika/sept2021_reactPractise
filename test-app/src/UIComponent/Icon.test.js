import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

test('render  card',() => {

    render(<Icon>hello</Icon>);

    const result = screen.getByText("hello");
    expect(result).toHaveClass("icon");


})