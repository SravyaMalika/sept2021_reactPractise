import { render, screen } from "@testing-library/react";
import CardOptions from "./CardOptions"

test('render tabs in card',() => {

    const Tabs = [{type:"text",name:"Day"},
    {type:"text",name:"Month"},
    {type:"text",name:"Year"},
    {type:"text",name:"5Year"}
    ];

  const DropDownItem = {name:"Last 30 Days",menuItems:["opt1","opt2"]} 

    render(<CardOptions  tabs={Tabs} dropdown={DropDownItem}/>);

    const result = screen.getByText("Day");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass('card-tabs')

})

test('render icon tabs in card', () => {

    const Tabs = [{ type: "icon", name: "PieChart" }];
   

    render(<CardOptions tabs={Tabs}  />);

    const result = screen.getAllByTestId("PieChart");
    expect(result[0]).toHaveClass('card-tabs active card-tab-icon')
})

test('render only dropDown without tabs', () => {
    const DropDownItem = { name: "Last 30 Days", menuItems: ["opt1", "opt2"] };
    render(<CardOptions dropDown={DropDownItem} />);

    const result = screen.getAllByText("Last 30 Days");
    expect(result[0]).not.toHaveClass('card-tabs')

})