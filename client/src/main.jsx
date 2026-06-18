import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { TripProvider } from "./context/TripsContext.jsx";
import {TaskProvider} from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TripProvider>
          <TaskProvider>
                <App />
          </TaskProvider>
          
        </TripProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);