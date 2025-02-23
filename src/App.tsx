import "./App.css";
import { ThemeProvider } from "./hooks/useTheme";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <ThemeProvider> 
        <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
