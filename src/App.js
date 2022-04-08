import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SpendingCard1 from './component/presentaional/organisms/SpendingCard1';
import SpendingCard2 from './component/presentaional/organisms/SpendingCard2';
import SpendingCard3 from './component/presentaional/organisms/SpendingCard3';
import SumSpendingCard from './component/presentaional/organisms/SumSpendingCard';

import ConfirmationPage from './component/container/ConfirmationPage';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/confirmation'><ConfirmationPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
