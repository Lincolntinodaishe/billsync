import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { auth } from './firebase';
import AddBillForm from './components/AddBillForm';
import BillList from './components/BillList';
import Login from './components/Login';
import { db } from './firebase';
import BillChart from './components/BillChart';


function App() {
  const [user, setUser] = useState(null);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'bills'), where('uid', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const billsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBills(billsData);
    });

    return () => unsubscribe();
  }, [user]);

  const addBill = async (bill) => {
    if (!user) return;
    try {
      await addDoc(collection(db, 'bills'), {
        ...bill,
        uid: user.uid, // associate bill with user
      });
    } catch (err) {
      console.error("Error adding bill:", err);
    }
  };

 return (
  <div style={{ padding: '20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>BillSync</h1>
      <h2 style={{ fontWeight: 'normal', color: '#555' }}>
        Smart bill tracker for roommates & friends 💸
      </h2>
      <Login user={user} setUser={setUser} />
      {user && (
     <>
      <AddBillForm onAdd={addBill} />
      <BillList bills={bills} />
      <BillChart bills={bills} />
     </>
   )}
    </div>
  </div>
);

}

export default App;
