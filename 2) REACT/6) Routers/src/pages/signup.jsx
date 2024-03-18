import { Row, Col } from "antd"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm";
import { createUserWithEmailAndPassword } from "../config/firebase";

function Login() {
    return (

        <div className="pt-5">
            <Row className="justify-content-center pt-5" >
                <Col>
                    <h1>Signup Page</h1>
                    <SignupForm />
                    Already have an account? <Link to={"/"}>login</Link>
                </Col>
            </Row>
        </div >

    )
}
export default Login