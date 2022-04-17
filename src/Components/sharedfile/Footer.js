import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='h-44 bg-black flex justify-center items-center text-white'>
            <div className='text-center'>
            <h1> &copy; {year} || Mmr creation ltd</h1>
            <p>All copyright reserved</p>
            </div>
        </div>
    );
};

export default Footer;