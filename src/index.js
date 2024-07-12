import ReactDOM from "react-dom/client";
import React from "react";
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <App />

    </QueryClientProvider>
  </React.StrictMode>

);
