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
  <form
    onSubmit={handleSubmit}
    className="bg-white p-4 rounded-lg shadow mb-6 space-y-4"
  >
    <input
      type="text"
      placeholder="Bill title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      placeholder="Participants (comma-separated)"
      value={participants}
      onChange={(e) => setParticipants(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input
      type="text"
      placeholder="Paid by"
      value={paidBy}
      onChange={(e) => setPaidBy(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
    >
      Add Bill
    </button>
  </form>
);

}

export default AddBillForm;
