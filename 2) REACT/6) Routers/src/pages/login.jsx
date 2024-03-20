import LoginForm from "../components/login"
import { Row, Col } from "antd"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config/firebase";

function Login() {
    const loginUser = (values) => {
        signInWithEmailAndPassword(auth, `${values.username}@gmail.com`, values.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log('user-->', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorMessage---->', errorMessage);

            });
    }
    return (

        <div className="pt-5">
            <Row className="justify-content-center pt-5" >
                <Col>
                    <h1>Login Page</h1>
                    <LoginForm loginUser={loginUser} />
                    Don't have an account? <Link to={"/signup"} >signup</Link>
                </Col>
            </Row>
        </div >

    )
}
export default Login