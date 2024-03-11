import './App.css';
import Card from './components/card';
import Input from './components/input';
function App() {
  const arr = ["one", "two", "three"]
  const getData = (a) => {
    console.log(a);
  }
  return (
    <div className="App">


      <p>props concept</p>
      {/* props eg 1 */}
      <Card name="Talha" />
      <Card name="Taha" />

      {/* props eg 2 */}
      {/* ////////////////////////////////////////////////////////////////////// */}
      {/*       
      {
        arr.map((v, i) => (
          <Card key={i} v={v} i={i} getData={getData} />
          
          ))
        } */}

      {/* prop eg3 */}
      <Input onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default App;
