
import './App.css';
import { routes } from './Router/Route';
import Menu from './Components/Menu';
function App() {
  return (
    <div>
       <Menu />
     {routes}
    </div>
  );
}

export default App;
