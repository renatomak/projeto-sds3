import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
