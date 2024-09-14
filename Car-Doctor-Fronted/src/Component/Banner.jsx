import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from "../../public/assets/images/banner/1.jpg"
import banner2 from "../../public/assets/images/banner/2.jpg"
import banner3 from "../../public/assets/images/banner/3.jpg"
import banner4 from "../../public/assets/images/banner/4.jpg"
import banner5 from "../../public/assets/images/banner/5.jpg"
import banner6 from "../../public/assets/images/banner/6.jpg"


// import required modules
import { Autoplay} from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='md:mx-auto'>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center" style={{ backgroundImage: `url(${banner1})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mx-auto'>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center" style={{ backgroundImage: `url(${banner2})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mx-auto '>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center" style={{ backgroundImage: `url(${banner3})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mx-aut'>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center " style={{ backgroundImage: `url(${banner4})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mx-auto'>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center " style={{ backgroundImage: `url(${banner5})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='md:mx-auto '>
                        <div
                            className="relative w-full   bg-cover  h-[600px]  flex justify-start items-center " style={{ backgroundImage: `url(${banner6})` }}>
                            <div className="text-neutral-content space-y-6 ml-24">
                                <h1 className='font-bold md:text-6xl text-6xl text-white leading-tight'>
                                Affordable <br /> Price For Car <br />ervicing
                                </h1>
                                <p className='text-xl text-white'>There are many variations of passages of  available, <br />but the majority have suffered alteration in some form</p>
                                <div className='md:space-x-5 items-center '>
                                    <button className='bg-[#FF3811] rounded-md text-xl  font-semibold text-white px-8 py-4 border-none  mb-2'>Discover More</button>
                                    <button className='bg-transparent border rounded-lg text-xl text-white  font-semibold px-8 py-4 border-white '>Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;