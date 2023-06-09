import React from 'react';
import ContactUsPage from './ContactUsPage';
import HowItWorksPage from './HowItWorksPage';
import HomePage from './HomePage';

const MainPage = () => {
    return (
        <div>
            <HomePage />
            <HowItWorksPage />
            <ContactUsPage />
        </div>
    );
};

export default MainPage;
