import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Login from "../pages/login";
import AppLayout from "../components/layout";
import AppNotFound from "../components/notFound";
import { useState } from "react";
import SignupPage from "../pages/signup";
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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter