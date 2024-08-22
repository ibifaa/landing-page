'use client';
import { 
  BarChart, 
  Bar, 
  Rectangle, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

import chartData from '../data/chartData.js';

function ChartDesign(props) {
    console.log('ChartDesign rendered');
    console.log(chartData);

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{ right: 30 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" />
          <YAxis /> */}
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Legend />
          <Bar dataKey="h" fill="#020024" activeBar={<Rectangle fill="pink" stroke="blue"  radius="10px" />} />
          <Bar dataKey="r" fill="#00C6C3" activeBar={<Rectangle fill="gold" stroke="purple"   radius="10px" />} />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default ChartDesign;

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div>
//         <p>{label}</p>
//         <p>Hospitalized
//           <span>{payload[0].value}</span>
//         </p>
//         <p>Recovered</p>
//         <span>{payload[1].value}</span>
//       </div>
//     );
//   }
//   return null;
// };

