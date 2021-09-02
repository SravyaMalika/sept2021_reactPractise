import React from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
} from "recharts";

const data = [
{
	name: "Block A",
	l1: 4000,
	l2: 2400,
  l3: 2000,
	amt: 2400,
},
{
	name: "Block B",
	l1: 3000,
	l2: 1398,
  l3: 8000,
	amt: 2210,
},
{
	name: "Block C",
	l1: 2000,
	l2: 9800,
  l3: 2000,
	amt: 2290,
},
{
	name: "Block D",
	l1: 2780,
	l2: 3908,
  l3: 4000,
	amt: 2000,
},
];

export default function LineChartGraph() {
return (
	<div style={{ 
				backgroundColor: "white" }}>

		<LineChart
		width={500}
		height={300}
		data={data}
		margin={{
			top: 5,
			right: 30,
			left: 20,
			bottom: 5,
		}}
		>
	
		<XAxis dataKey="name" />
		<YAxis />
    <Line
			type="monotone"
			dataKey="l3"
			stroke="#8884d8"
			
		/>
		<Line
			type="monotone"
			dataKey="l2"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
		<Line type="monotone"
				dataKey="l1"
				stroke="#82ca9d" />
		</LineChart>

	</div>
);
}
