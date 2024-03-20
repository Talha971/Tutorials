import { Row, Col } from "antd"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm";
import { createUserWithEmailAndPassword,auth } from "../config/firebase";

function Login() {
    const registerUser = (values) => {
        console.log('values', values);
        createUserWithEmailAndPassword(auth, `${values.username}@gmail.com`, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user-->', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorMessage------>', errorMessage);
            });
    }
    return (

        <div className="pt-5">
            <Row className="justify-content-center pt-5" >
                <Col>
                    <h1>Signup Page</h1>
                    <SignupForm registerUser={registerUser} />
                    Already have an account? <Link to={"/"}>login</Link>
                </Col>
            </Row>
        </div >

    )
}
export default Login