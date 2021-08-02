import logo from './logo.svg';
import './App.scss';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Example1 />
        <Example2 />
      </header>
    </div>
  );
}

export default App;
