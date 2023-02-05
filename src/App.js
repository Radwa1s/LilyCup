import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Paypal from "./Paypal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.PAYPAL_CLIENT_ID,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Paypal />} />
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
