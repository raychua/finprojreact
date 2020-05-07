import React from "react";
import "./App.css";
import FinancialProjectApp from "./components/FinancialProjectApp";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FinancialProjectApp />
      </div>
    </Provider>
  );
}

export default App;
