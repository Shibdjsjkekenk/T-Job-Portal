import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science & DA",
    "Graphic Designer",
    "FullStack Developer",
    "Accountant"
];

const CategoryCarousel = () => {
    const controls = useAnimation(); // To control the animation
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Detect visibility

    useEffect(() => {
        if (inView) {
            controls.start("visible"); // Start animation when in view
        }
    }, [controls, inView]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <>
     <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
          </div>
        </div>
      </div>
            <motion.div
                ref={ref}
                className="pt-10 text-center"
                initial="hidden" // Hidden state
                animate={controls} // Controlled by `inView`
                variants={{
                    hidden: { opacity: 0, scale: 0.8 }, // Hidden state
                    visible: { opacity: 1, scale: 1 }   // Visible state
                }}
                transition={{ duration: 0.5 }} // Smooth animation
            >
                <h1 className="text-3xl font-bold leading-[56px]">
                    Find & Get Your <span className="text-[#6A38C2]"> Jobs....</span>
                </h1>
                <p>
                Our mission is to empower careers and businesses by providing a seamless,<br></br> reliable, and user-friendly job search experience. 
                </p>
            </motion.div>
            <div className='mx-auto max-w-5xl bg-crosol'>

                <Carousel className="w-full max-w-2xl mx-auto my-15">
                    <CarouselContent>
                        {category.map((cat, index) => (
                            <CarouselItem key={index} className=" lg:basis-1/4">
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full btn-circle find-get">
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="btn-bg-p disabled:opacity-100 hover:shadow-none bg-customYellow" />
                    <CarouselNext className="btn-bg-n disabled:opacity-100 hover:shadow-none bg-customYellow" />
                </Carousel>
            </div>
        </>

    );
};

export default CategoryCarousel;
