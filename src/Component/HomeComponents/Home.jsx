import React from 'react';
import AboutMe from './AboutMe';
import Blog from './Blog';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className="container mt-5">
            <AboutMe/>
            <Services/>
            <Portfolio/>
            <Skills/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;