import React, { useState, useEffect } from 'react';
const API = "https://jsonplaceholder.typicode.com/users";
import "./App.css";
import './index.css';
import UserData from './components/UserData';

function App() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-slate-400">
            <th className="border border-gray-800 p-2">ID</th>
            <th className="border border-gray-800 p-2 items-start">Name</th>
            <th className="border border-gray-800 p-2">Email</th>
            <th className="border border-gray-800 p-2">Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
