import React from 'react';
import parts from '../../public/assets/images/about_us/parts.jpg'
import person from '../../public/assets/images/about_us/person.jpg'

const AboutUS = () => {
    return (
        <div className='flex md:flex-row flex-col my-7 container mx-auto'>
            <div className='relative md:w-1/2'>
                <div className='md:h-[450px] h-60 w-60 md:w-[450px] bg-cover' style={{ backgroundImage: `url(${person})` }}>
                </div>
                <div className='absolute md:bottom-0 bottom-[-10px] md:right-6 left-36 bg-blend-darken border-white border-[16px] rounded-xl w-40 h-40 md:w-96 md:h-72 bg-cover' style={{ backgroundImage: `url(${parts})` }}>
                </div>
            </div>
            <div className='md:w-1/2 pl-5'>
                <h3 className='text-xl mb-5 font-bold text-[#FF3811]'>About Us</h3>
                <h1 className='text-5xl mb-8 font-bold text-black'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className='font-normal mb-5 text-base md:w-4/5  text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='font-normal mb-8 text-base md:w-4/5  text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='bg-[#FF3811] text-xl text-white px-6 py-4 rounded-md font-semibold'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUS;