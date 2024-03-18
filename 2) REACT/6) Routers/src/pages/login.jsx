import LoginForm from "../components/login"
import { Row, Col } from "antd"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Login() {
    return (

        <div className="pt-5">
            <Row className="justify-content-center pt-5" >
                <Col>
                    <h1>Login Page</h1>
                    <LoginForm />
                    Don't have an account? <Link to={"/signup"} >signup</Link>
                </Col>
            </Row>
        </div >

    )
}
export default Login