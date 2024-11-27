import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LatestJobs = () => {
    const { allJobs } = useSelector((store) => store.job);

    // Animation variants for container and each child
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time delay between children
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: {
                duration: 0.5,
            },
        },
    };

    // `useInView` hook to detect when the section is in the viewport
    const [ref, inView] = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

    return (
        <div className="max-w-auto bg-gradient-to-r from-[#F0F8FF] to-[#fefcf0]">
            <div className="max-w-6xl mx-auto pt-10 pb-10 my-20">
                <h1 className="text-4xl font-bold text-center pb-5">
                    <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
                </h1>
                <motion.div
                    ref={ref} // Attach ref to the container
                    className="grid grid-cols-3 gap-8 my-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"} // Trigger animation based on scroll
                >
                    {allJobs.length <= 0 ? (
                        <span>No Job Available</span>
                    ) : (
                        allJobs
                            ?.slice(0, 6) // Show only the first 6 jobs
                            .map((job) => (
                                <motion.div
                                    key={job._id}
                                    variants={childVariants} // Apply animation to each card
                                >
                                    <LatestJobCards job={job} />
                                </motion.div>
                            ))
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default LatestJobs;
