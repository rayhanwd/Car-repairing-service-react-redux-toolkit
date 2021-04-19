import React from 'react';
import Header from './Header/Header';
import Features from './Features/Features';
import Satisfaction from './Satisfaction/Satisfaction';
import Services from './Services/Services';
import NewsLetter from './NewsLetter/NewsLetter';
import Feedback from './CustomerFeedback/Feedback';
import Footer from './Footer/Footer';

const Home = () => {
    document.title="Home";
    return (
        <>
            <Header></Header>
            <Features></Features>
            <Satisfaction></Satisfaction>
            <Services></Services>
            <Feedback></Feedback>
            <NewsLetter></NewsLetter>
            <Footer></Footer>    
        </>
    );
};

export default Home;