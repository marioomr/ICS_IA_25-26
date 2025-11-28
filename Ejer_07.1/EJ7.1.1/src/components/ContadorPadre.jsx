import React, { useState } from 'react';
import ListaIntermedia from './ListaIntermedia';

function generateUsers(n = 500) {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
      isOnline: Math.random() > 0.5,
    });
  }
  return users;
}

export default function ContadorPadre() {
  console.log('ContadorPadre render');
  const [count, setCount] = useState(0);
  const users = generateUsers(500); // sin optimizar

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
      <ListaIntermedia users={users} />
    </div>
  );
}
