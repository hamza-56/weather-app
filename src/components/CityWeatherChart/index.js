import {
	LineChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Line,
	Label,
	ResponsiveContainer,
} from 'recharts';

import './styles.css';

const CityWeatherChart = ({ cityName, weekData }) => {
	const weeklyWeather = Object.keys(weekData).map((dayData) => (
		<div className="card m-auto mb-4" key={dayData}>
			<div className="d-flex card-body">
				<h5 class="card-title my-auto">{dayData}</h5>
				<ResponsiveContainer width="85%" height="100%">
					<LineChart
						data={weekData[dayData]}
						margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
						<XAxis dataKey="time">
							<Label value="Time Of Day" offset={-3} position="insideBottom" />
						</XAxis>
						<Tooltip />
						<CartesianGrid strokeDasharray="2 2" />
						<Line
							type="monotone"
							dataKey="temp_min"
							stroke="#0000FF"
							yAxisId={0}
							label="Min Temp"
						/>
						<Line type="monotone" dataKey="temp" stroke="#ff7300" yAxisId={0} />
						<Line
							type="monotone"
							dataKey="temp_max"
							stroke="#FF0000"
							yAxisId={2}
						/>
						<Line
							type="monotone"
							dataKey="humidity"
							stroke="#2E8B57"
							yAxisId={1}
						/>
						<Line
							type="monotone"
							dataKey="pressure"
							stroke="#FF7F50"
							yAxisId={2}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	));

	return (
		<div className="pt-5 w-100">
			<h3>{cityName}</h3>
			{weeklyWeather}
			<hr />
		</div>
	);
};

export default CityWeatherChart;
