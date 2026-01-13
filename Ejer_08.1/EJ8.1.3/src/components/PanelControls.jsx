import { useTheme } from "../context/ThemeContext";
import { memo } from "react";

function PanelControls() {
  const { theme, dispatch } = useTheme();

  return (
    <div style={{ padding: "1rem", borderRight: "1px solid #ccc", width: 200 }}>
      <div>
        <label>Color:</label>
        <input
          type="color"
          value={theme.primaryColor}
          onChange={e => dispatch({ type: "SET_PRIMARY_COLOR", payload: e.target.value })}
        />
      </div>
      <div>
        <label>Tamaño:</label>
        <input
          type="range"
          min="10"
          max="40"
          value={theme.fontSize}
          onChange={e => dispatch({ type: "SET_FONT_SIZE", payload: +e.target.value })}
        />
      </div>
      <div>
        <label>Transformar texto:</label>
        <button onClick={() => dispatch({ type: "SET_TEXT_TRANSFORM", payload: "none" })}>Normal</button>
        <button onClick={() => dispatch({ type: "SET_TEXT_TRANSFORM", payload: "uppercase" })}>MAYÚSCULAS</button>
        <button onClick={() => dispatch({ type: "SET_TEXT_TRANSFORM", payload: "capitalize" })}>Capitalizar</button>
      </div>
    </div>
  );
}

export default memo(PanelControls);
