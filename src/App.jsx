import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import HowTo from "./components/HowTo";
import Installation from "./components/Installation";
import TryIt from "./components/TryIt";
import "./App.css";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/how-to" element={<HowTo />} />
                    <Route path="/install" element={<Installation />} />
                    <Route path="/try-it" element={<TryIt />} />
                    <Route
                        exact
                        path="/"
                        element={<Navigate to="/home" replace />}
                    />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
