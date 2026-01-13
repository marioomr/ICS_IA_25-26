import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

export default function CardPreview({ children }) {
  const { theme } = useTheme();

  // Calculamos color de sombra derivado del primaryColor
  const shadowColor = useMemo(() => {
    const color = theme.primaryColor.replace("#", "");
    return `#${color.slice(0, 6 - 2)}aa`; // versión más oscura simplificada
  }, [theme.primaryColor]);

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem 0",
        backgroundColor: theme.primaryColor,
        color: "#fff",
        fontSize: theme.fontSize,
        textTransform: theme.textTransform,
        boxShadow: `2px 2px 10px ${shadowColor}`
      }}
    >
      {children}
    </div>
  );
}
