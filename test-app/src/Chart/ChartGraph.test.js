import { render, screen } from "@testing-library/react";
import AreaChartGraph from "./AreaChartGraph";
import LineChartGraph from "./LineChartGraph";
import ScatterChart from "./ScatterGraph";
import DoughnutChart from "./DoughnutChart";


jest.mock('recharts', () => {
    const OriginalModule = jest.requireActual('recharts');

    return {
        ...OriginalModule,
        ResponsiveContainer: ({ children }) => (
            <OriginalModule.ResponsiveContainer width={400} height={300}>
                {children}
            </OriginalModule.ResponsiveContainer>
        ),
    };
});
test('render  area chart',() => {

    const {container} = render(<AreaChartGraph />
    );
    expect(container.querySelector('.recharts-area')).toBeTruthy();
    
  
})

test('render  line chart',() => {

    const {container} = render(<LineChartGraph />);
    expect(container.querySelector('.recharts-line')).toBeTruthy();   
  
})


test('render Doughnut chart',() => {

    const {container} = render(<DoughnutChart />);
    expect(container.querySelector('.recharts-pie-sector')).toBeTruthy();   
  
})