import './App.css';
import 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Base from './components/base'
function App() {
  return (
    <div className="App">
      <div>
        Vendor List
      </div>
      <div>{<Base />}</div>
    </div>
  );
}

export default App;
