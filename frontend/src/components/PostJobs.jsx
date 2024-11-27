import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'
import NoBg from '../assets/no-bg.webp'
import No1 from '../assets/post-job.webp'
import { motion } from 'framer-motion';

const PostJobs = () => {
    return (
        <>
        <div className="flex items-center justify-center max-w-auto ">

            <div className="flex flex-col md:flex-row items-center w-full max-w-6xl ">

                {/* Left column: Form with border */}
                <div className="w-full md:w-1/2   ">
                    <div className=''>
                        <div className='flex flex-col gap-5 my-10'>
                            <span className='  px-4 py-2 rounded-full bg-[rgba(226,229,235,0.72)] text-[#F83002] text-[18px] font-extrabold text-center w-[25%] hurry-up'>Hurry <span className='text-[#6A38C2]'>Up!</span></span>
                            <h1 className='text-5xl font-bold leading-[56px] '>Post Your <span className='text-[#6A38C2]'>Jobs & Internships<br /></span></h1>
                            <p><b>Find the right candidate from a diverse talent
                            pool for your role.</b></p>
                                <p>Whether you're looking for your dream job or the perfect candidate, T Job Portal is here to make it happen.</p>
                            <div className="">
                                <Button className="rounded-full bg-[#6A38C2] h-[56px]">
                                    <h3 className='text-[20px] p-4 '>Post Jobs Now
                                    </h3>
                                    <div className="post-job-arrow">
                                        <ArrowUpRight className='h-5 w-5' />
                                    </div>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Right column: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-4" style={{ backgroundImage: `url(${NoBg})` }}>
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: false, amount: 0.2 }} // Configure the viewport behavior
                        >
                            <img src={No1} alt="logo" className="w-full rounded-md mr-[78px]" />
                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
        
        
        </>
    )
}

export default PostJobs