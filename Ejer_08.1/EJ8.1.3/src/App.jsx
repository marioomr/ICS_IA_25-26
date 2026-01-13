import { ThemeProvider } from "./context/ThemeContext";
import PanelControls from "./components/PanelControls";
import CardPreview from "./components/CardPreview";
import BotonPreview from "./components/BotonPreview";
import TextoPreview from "./components/TextoPreview";
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ display: "flex" }}>
        <PanelControls />
        <div style={{ flex: 1, padding: "1rem" }}>
          <CardPreview>
            <h3>Card Preview</h3>
            <TextoPreview />
            <BotonPreview />
          </CardPreview>
        </div>
      </div>
    </ThemeProvider>
  );
}
