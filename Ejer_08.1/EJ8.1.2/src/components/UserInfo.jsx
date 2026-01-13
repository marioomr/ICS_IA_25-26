import { useAuth } from "../context/AuthContext";

export default function UserInfo() {
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <div style={{ position: "fixed", top: 10, right: 10 }}>
      <label>
        Usuario:
        <select value={currentUser} onChange={e => setCurrentUser(e.target.value)}>
          <option value="Ana">Ana</option>
          <option value="Luis">Luis</option>
          <option value="Invitado">Invitado</option>
        </select>
      </label>
      <p>Actual: {currentUser}</p>
    </div>
  );
}
