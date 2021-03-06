import { Route, Switch } from "react-router-dom";
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import Clinics from './pages/Clinics';
import Dentists from './pages/Dentists';
import Managers from './pages/Managers';
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/appointments">
          <Appointments/>
        </Route>
        <Route path="/clients">
          <Clients/>
        </Route>
        <Route path="/clinics">
          <Clinics/>
        </Route>
        <Route path="/dentists">
          <Dentists/>
        </Route>
        <Route path="/managers">
          <Managers/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
