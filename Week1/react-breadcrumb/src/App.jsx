import './App.css'
import { Breadcrumb } from './components/Breadcrumb';


function App() {
  const breadpath = ['Home', 'Shopping', 'Computer', 'SSD'];

  return(  <div className = "Breadcrumbs">
    <Breadcrumb paths = {breadpath}/>
  </div>
  );
}

export default App
