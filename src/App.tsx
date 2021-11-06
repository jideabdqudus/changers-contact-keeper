import React from "react";
import "./App.css";
import { Navbar } from "./layout";
import { ContactForm, ContactFilter, Contacts } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route>
          <Navbar />
          <div className="container">
            <div className="grid-2">
              <div>
                <ContactForm />
              </div>
              <div>
                <ContactFilter />
                <Contacts />
              </div>
            </div>
          </div>
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
