import React, { PureComponent } from 'react';
import {PieChart,Pie} from 'recharts';

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class DoughnutChart extends PureComponent {
	render() {
		return (
            <PieChart width={350} height={250}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              innerRadius = {40}
              fill="#8884d8"
             
            />
          </PieChart>
		);
	}
}