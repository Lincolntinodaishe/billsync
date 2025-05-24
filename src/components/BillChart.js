import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function BillChart({ bills }) {
  if (!bills || bills.length === 0) {
    return <p style={{ marginTop: '20px' }}>No bills to show yet 📉</p>;
  }

  const totalsByPerson = bills.reduce((acc, bill) => {
    acc[bill.paidBy] = (acc[bill.paidBy] || 0) + bill.amount;
    return acc;
  }, {});

  const data = Object.keys(totalsByPerson).map((name) => ({
    name,
    total: totalsByPerson[name],
  }));

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>💰 Total Paid by Person</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BillChart;

