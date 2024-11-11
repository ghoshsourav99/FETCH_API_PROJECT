import React from 'react';

const UserData = ({ users }) => {
  return (
    <>
      {users.map(user => (
        <tr key={user.id} className="hover:bg-gray-50">
          <td className="border border-gray-300 p-2">{user.id}</td>
          <td className="border border-gray-300 p-2 justify-items-start">{user.name}</td>
          <td className="border border-gray-300 p-2">{user.email}</td>
          <td className="border border-gray-300 p-2">{`${user.address.street}, ${user.address.city}`}</td>
        </tr>
      ))}
    </>
  );
};

export default UserData;
