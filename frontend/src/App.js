import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
