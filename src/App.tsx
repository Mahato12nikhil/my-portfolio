import { Provider } from "react-redux";
import "./App.css";
import { ThemeProvider } from "./hooks/useTheme";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./state/store";

function App() {

  return (
    <Provider store={store}>
       <ThemeProvider> 
          <AppRoutes />
      </ThemeProvider>
    </Provider>
   
  );
}

export default App;
