import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import No1 from "../assets/no-1.webp";
import NoBg from "../assets/no-bg.webp";
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const HeroSection = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <>
      <div className="flex items-center justify-center max-w-auto bg-[#f6f6f6de] relative z-10 " style={{ marginTop: "63px" }}>
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl py-10">
          {/* Left column: Form with border */}


          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }} // Start from the left
            animate={{ opacity: 1, x: 0 }}    // Slide in to its original position
            transition={{ duration: 0.8 }}    // Adjust the animation speed
          >
            <div className="">
              <div className="flex flex-col gap-5 my-10">
                <span className="px-4 py-2 rounded-full bg-[rgba(226,229,235,0.72)] text-[#F83002] font-medium w-[35%] no-1">
                  No. 1 <span className="text-[#6A38C2]">TJob</span> App in India
                </span>
                <h1 className="text-5xl font-bold leading-[56px]">
                  Search, Apply & <br /> Get Your{" "}
                  <span className="text-[#6A38C2]">Dream Jobs</span>
                </h1>
                <p>
                  At T Job Portal, we connect talent with opportunity. As a trusted platform for job seekers and employers, we simplify the hiring process with innovative tools and personalized solutions.
                </p>
                
                <div className="flex w-[55%] shadow-lg border border-gray-200 pl-12 rounded-full items-center gap-4 bg-white">
                  <input
                    type="text"
                    placeholder="Find your dream jobs"
                    onChange={(e) => setQuery(e.target.value)}
                    className="outline-none border-none w-full"
                  />
                  <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                    <Search className="h-5 w-5" />
                  </Button>
                  
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Right column: Image with animation */}
          <div
            className="w-full md:w-1/2 flex items-center justify-center p-4"
            style={{ backgroundImage: `url(${NoBg})` }}
          >
            <div className="animate-bounce-custom">
              <img
                src={No1}
                alt="logo"
                className="w-full rounded-md ml-[78px]"
              />
            </div>
          </div>
        </div>
      </div>
 
    </>

  );
};

export default HeroSection;
