import React, { useState } from 'react';

function AddBillForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState('');
  const [paidBy, setPaidBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !participants || !paidBy) return;

    const participantList = participants.split(',').map(name => name.trim());

    onAdd({
      title,
      amount: parseFloat(amount),
      participants: participantList,
      paidBy,
    });

    setTitle('');
    setAmount('');
    setParticipants('');
    setPaidBy('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Bill title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Participants (comma-separated)"
        value={participants}
        onChange={e => setParticipants(e.target.value)}
      />
      <input
        type="text"
        placeholder="Paid by"
        value={paidBy}
        onChange={e => setPaidBy(e.target.value)}
      />
      <button type="submit">Add Bill</button>
    </form>
  );
}

export default AddBillForm;
