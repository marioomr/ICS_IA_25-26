import { useTheme } from "../context/ThemeContext";
import { memo } from "react";

function TextoPreview() {
  const { theme } = useTheme();
  return (
    <p style={{ fontSize: theme.fontSize, textTransform: theme.textTransform }}>
      Texto de ejemplo
    </p>
  );
}

export default memo(TextoPreview);
