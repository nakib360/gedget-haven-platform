import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router'; 
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from 'recharts';

const Statistics = () => {
  const dataFetch = useLoaderData();
  const data = dataFetch.electronics;

  return (
    <div className='px-5 md:px-20'>
      <Helmet>
        <title>Statistics | Gedget haven</title>
      </Helmet>
      <p className='text-3xl font-bold mb-5 text-black'>Statistics</p>
      <div className='pr-3 md:px-5 bg-white rounded-2xl py-10' style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="rating"
              fill="red"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            <Bar
              dataKey="price"
              fill="#9538e2"
              activeBar={<Rectangle fill="gold" stroke="#9538e2" />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
