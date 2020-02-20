import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import { Blog } from "./pages/blog";
import { Book } from "./pages/blog";

import { About } from "./pages/about";
import Contacts from "./pages/contacts";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/blog", component: Blog, exact: true },
  { path: "/book/:id", component: Book, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/contacts", component: Contacts, exact: true }
];

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route component={() => <div>Not found</div>} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
