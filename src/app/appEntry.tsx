import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { store } from "./appStore";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@/app/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
