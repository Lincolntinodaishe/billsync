import React from 'react';

function BillList({ bills }) {
  return (
    <div>
      <h3>Your Bills</h3>
      {bills.length === 0 && <p>No bills yet.</p>}
      {bills.map(bill => {
        const share = (bill.amount / bill.participants.length).toFixed(2);
        return (
          <div key={bill.id} className="bill-item">
  <strong>{bill.title}</strong><br />
  Amount: ${bill.amount} <br />
  Paid by: {bill.paidBy} <br />
  Split between: {bill.participants.join(', ')} <br />
  Each person owes: ${share}
</div>
        );
      })}
    </div>
  );
}

export default BillList;
