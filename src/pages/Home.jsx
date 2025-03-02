import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
        <div className='w-screen h-screen bg-[linear-gradient(to_bottom,#ccf1e0,#FFFFFF)] flex items-center justify-between'>
        <Header />
        <Main />
        <Footer />
        </div>
        </>
    );
}

export default Home;