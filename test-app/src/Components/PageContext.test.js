import { render, screen } from "@testing-library/react";
import PageContent from "./PageContext";

test('render  pageContext',() => {

    const {container} = render(<PageContent />);
    expect(container.firstChild).toHaveClass("container-fluid");

    expect(container.querySelector('.row-cols-3')).toBeTruthy();
    
  
})