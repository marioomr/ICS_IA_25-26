import { useEffect, useState } from "react";

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === "") return setResults([]);

      fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchTerm}`
      )
        .then(res => res.json())
        .then(data => setResults(data));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar username..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <ul>
        {results.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
