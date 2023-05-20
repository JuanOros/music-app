import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
