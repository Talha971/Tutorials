import { Row, Col, Input, Card } from 'antd';
import CustomInput from './components/custom input/customInput';
import './App.css';

// Dashboard
// import Dashboard from './pages/Dashboard';
// function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//     </div>
//   );
// }



// // Grid system of ant design
function App() {
  const onHandleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    // gutter is useed as margin ====> gutter{ [10, 10] }
    <Row justify={"space-evenly"}>
      {/* ismain bs ke muqable 12 ki jaga 24 hote hain */}
      {/* <Col span={12} style={{ border: "1px solid" }}> */}
      {/* ismain hm span use nhi kate responsive keliye */}
      {/* span ki jaga hm xl,lg etc use karte hain */}

      <Col xl={22} lg={12} md={10} sm={4} style={{ border: "1px solid" }}>
        <Card>
          <CustomInput Placeholder='name'></CustomInput>
        </Card>
      </Col>
      <Col xl={22} lg={12} md={10} sm={4} style={{ border: "1px solid" }}>
        <Row>
          <Col span={12}>
            <Card >
              <CustomInput Placeholder='name' />
            </Card>
          </Col>

          <Col span={12}>
            <Card>
              <CustomInput Placeholder='Email' />

            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <CustomInput onChange={onHandleChange} />

            </Card>
          </Col>
        </Row>
      </Col>
    </Row >
  )
}






export default App;
