import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Login from "../pages/login";
import AppLayout from "../components/layout";
import AppNotFound from "../components/notFound";
import { useEffect, useState } from "react";
import SignupPage from "../pages/signup";
import { auth, onAuthStateChanged } from "../config/firebase";
import { Spin } from "antd";
import SettingsPage from "../pages/settings";
import UsersPage from "../pages/users";



function AppRouter() {

    // Basic Routes concept

    // const [user, setUser] = useState(true)
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={user ? <Navigate to={'/profile/kdsjh'} /> : < Login />} />
    //             <Route path="/home" element={<AppLayout> <Home /> </AppLayout>} />
    //             {/* :username--> aik param hai route ka */}
    //             <Route path="/profile/:username" element={<AppLayout><Profile /> </ AppLayout>} />
    //             {/* *---> ka matlab hai ke galat url/path jab bhi aaye */}
    //             <Route path="*" element={<AppNotFound />} />

    //         </Routes>
    //     </BrowserRouter>
    // )

    const [isUser, setInUser] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('user-->', user);
            if (user) {
                setInUser(true)
            }
            else {
                setInUser(false)
            }
            setLoader(false)
        })
    }, [])
    return (
        <div>
            {
                loader ?
                    <div style={{ textAlign: "center", padding: "200px" }}>
                        <Spin size="large" />
                    </div >
                    :
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={isUser ? <Navigate to={"/profile"} /> : <Login />} />
                            <Route path="/signup" element={isUser ? <Navigate to={"/profile"} /> : <SignupPage />} />
                            <Route path="/profile" element={isUser ? <Profile /> : <Navigate to={"/"} />} >
                                <Route path="settings" element={<SettingsPage />} />
                            </Route>
                            <Route path="/users" element={isUser ? <UsersPage /> : <Navigate to={"/"} />} />

                        </Routes>
                    </BrowserRouter>
            }
        </div >
    )
}
export default AppRouter