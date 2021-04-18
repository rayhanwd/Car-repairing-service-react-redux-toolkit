import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Features from '../Features/Features';
import NewsLetter from '../NewsLetter/NewsLetter';
import Satisfaction from '../Satisfaction/Satisfaction';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from './../Header/Header';
const Home = () => {
    document.title="Home";
    return (
        <>
            <Header></Header>
            <Features></Features>
            <Satisfaction></Satisfaction>
            <Services></Services>
            <CustomerReview></CustomerReview>
            <NewsLetter></NewsLetter>
            <Footer></Footer>    
        </>
    );
};

export default Home;