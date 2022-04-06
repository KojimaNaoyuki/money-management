import logo from './logo.svg';
import './App.css';

import SpendingCard from './component/presentaional/organisms/SpendingCard';

function App() {
  return(
    <>
      <SpendingCard cardTitle="固定支出" nowSpending="48000" Budget="52000" />
    </>
  );
}
export default App;
