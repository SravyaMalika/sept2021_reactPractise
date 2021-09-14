import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('render  header',() => {

    const {container} = render(<Header />);
    expect(container.querySelector("nav")).toBeTruthy();
    expect(container.querySelector(".icon")).toBeTruthy();
})