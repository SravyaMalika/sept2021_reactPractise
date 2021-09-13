import React, { PureComponent } from 'react';
import {PieChart,Pie,ResponsiveContainer} from 'recharts';

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];


export default class DoughnutChart extends PureComponent {
	render() {
		return (
    
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={210}
              cy={100}
              outerRadius={80}
              innerRadius = {40}
              fill="#8884d8"
             
            />
          </PieChart>
      </ResponsiveContainer>
          
   
     
          
		);
	}
}