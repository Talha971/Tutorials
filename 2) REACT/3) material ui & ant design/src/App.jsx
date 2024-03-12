import './App.css';
import Button from '@mui/material/Button';
import BasicMenu from './components/BasicMenu';

function App() {
  return (
    <div className="App">
      <p>Button from material ui</p>
      <Button className='myBtn' variant="contained">Contained</Button>
      <hr />
      <p>basic menu from material ui</p>
      <BasicMenu />
      <hr />

    </div>
  );
}

export default App;
