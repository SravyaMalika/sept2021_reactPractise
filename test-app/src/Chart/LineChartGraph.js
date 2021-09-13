import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer
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
	{
		name: "Block E",
		l1: 2500,
		l2: 5000,
		l3: 7000,
		amt: 10000,
	},
];

export default function LineChartGraph() {
	return (
		<div style={{
			backgroundColor: "white",
			height:"100%"
		}}>
			<ResponsiveContainer width="100%" height="100%">
			<LineChart
				
				data={data}
				
			>
				<CartesianGrid vertical={false} strokeDasharray="3"/>

				<XAxis dataKey="name" axisLine={false} tickLine={false} />
				<YAxis axisLine={false} tickLine={false} />
				<Line
					type="linear"
					dataKey="l3"
					stroke="#8884d8"
					dot={false}

				/>
				<Line
					type="linear"
					dataKey="l2"
					stroke="red"
					activeDot={{ r: 8 }}
					dot={false}
				/>
				<Line type="linear"
					dataKey="l1"
					stroke="#82ca9d" 
					dot={false}
					/>
					
			</LineChart>

			</ResponsiveContainer>

		
		</div>
	);
}
