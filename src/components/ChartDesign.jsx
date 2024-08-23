'use client';
import { 
  PieChart,
  BarChart, 
  Pie,
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

import chartData from '../data/chartData.js';

function ChartDesign() {

  const colors = ["#A7AFAC", "#020024", "#00C6C3"];
   
  const data01 = [
    { "name": "Group A", "value": 9670 },
    { "name": "Group B", "value": 1274 },
    { "name": "Group C", "value": 16908 },
  ];

  const data02 = [
    { "name": "Group A", "value": 9670, "color": "#A7AFAC" },
    { "name": "Group B", "value": 1274, "color": "#00C6C3" },
    { "name": "Group C", "value": 16908, "color": "#020024" },
  ];

  return (
    <div className='flex w-full'>
    <div className='shadow-[#E6E6E6E5] shadow-xl p-5 rounded-[10px]'>
    <ResponsiveContainer width={200} height={250}>
        <PieChart>
          <Pie 
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            // cornerRadius={10}
          />
          <Pie 
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={220}
            endAngle={-45}
            paddingAngle={10}
            cornerRadius={15}
            fill={({ index }) => colors[index % colors.length]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-[5px] mb-[7px]">
                {" "}
                <div className="h-[18px] w-[18px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[100px] h-[18px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
              <div className="flex gap-[5px] mb-[7px]">
                {" "}
                <div className="h-[18px] w-[18px] rounded-full bg-[#FFFFFF80]"></div>
                <div className="w-[100px] h-[18px] bg-[#FFFFFF80] rounded-[40px]"></div>
              </div>
    </div>
      <ResponsiveContainer width={400} height={250}>
        <BarChart
          data={chartData}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}
          barSize={10}
          barCategoryGap="2%"
          barGap={2}
        >
          <Legend />
          <Bar dataKey="h" fill="#020024" radius={[10, 10, 10, 10]} />
          <Bar dataKey="r" fill="#00C6C3" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>

      
    </div>
  );
}

export default ChartDesign;
