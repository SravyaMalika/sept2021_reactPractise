import { render, screen } from "@testing-library/react";
import Header from "./Sidebar";

test('render  header',() => {

    const {container} = render(<Header />);
    expect(container.firstChild).toHaveClass('nav flex-column');
   
})