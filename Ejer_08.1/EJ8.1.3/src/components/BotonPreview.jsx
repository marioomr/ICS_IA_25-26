import { useTheme } from "../context/ThemeContext";
import { memo } from "react";

function BotonPreview() {
  const { theme } = useTheme();
  return (
    <button style={{ fontSize: theme.fontSize, textTransform: theme.textTransform }}>
      Botón Preview
    </button>
  );
}

export default memo(BotonPreview);
