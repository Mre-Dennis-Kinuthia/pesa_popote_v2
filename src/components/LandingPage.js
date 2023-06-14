// LandingPage.js
// LandingPage.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Section from "./Section";
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NavigationBar from '../components/NavigationBar';
import dummyText from "../DummyText";


const LandingPage = () => {
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [showRegisterPage, setShowRegisterPage] = useState(false);
    const navigate = useNavigate();

    const toggleLoginPage = () => {
        setShowLoginPage((prevState) => !prevState);
    };

    const toggleRegisterPage = () => {
        setShowRegisterPage((prevState) => !prevState);
    };

    const handleSuccessfulLogin = () => {
        navigate('/dashboard'); // Redirect to the dashboard route
    };

    return (
        <div className="LandingPage">
            <NavigationBar
                baseUrl="http://localhost:3000/api/users"
                toggleLoginPage={toggleLoginPage}
                toggleRegisterPage={toggleRegisterPage}
            />
            {showLoginPage ? (
                <LoginPage onCancel={toggleLoginPage} onSuccess={handleSuccessfulLogin} />
            ) : showRegisterPage ? (
                <RegisterPage onCancel={toggleRegisterPage} />
            ) : (
                <>
                    <Section
                        title="Home"
                        subtitle={dummyText}
                        dark={true}
                        id="Home"
                    />
                    <Section
                        title="About Us"
                        subtitle={dummyText}
                        dark={false}
                        id="About Us"
                    />
                    <Section
                        title="How It Works"
                        subtitle={dummyText}
                        dark={true}
                        id="How It Works"
                    />
                    <Section
                        title="Contact Us"
                        subtitle={dummyText}
                        dark={true}
                        id="Contact Us"
                    />
                </>
            )}
            {/* Add a button to toggle the login page */}
        </div>
    );
}

export default LandingPage;
