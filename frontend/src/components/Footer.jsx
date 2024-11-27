import React from 'react'
import Footerbg from '../assets/footer-bg.jpeg'

import Location from '../assets/location.png'
import Phone from '../assets/phone-call.png'
import Gmail from '../assets/mail.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Youtube from '../assets/youtube.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <>

            <div className=" flex items-center justify-between gap-[65px] mt-10 mb-0">
                <div className="w-2/4  w-[169%] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Footerbg})` }}>
                    <div className='text-center my-[60px] mb-0'>
                       
                        <div className='my-[78px] pl-[451px] mt-[51px] mb-[26px] flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4'>
                            <div className='flex flex-col items-center lg:items-start space-y-2 lg:space-y-0'>
                                <p className='text-base font-bold text-white text-center lg:text-left'>Sign up to our newsletter</p>
                                <p className=' font-bold text-center lg:text-left text-xs text-custom-yellow text-white'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className='hidden lg:flex items-center max-w-sm border rounded-full focus-within:shadow pl-2'>
                                <input type="text" name='email' placeholder="Enter Email Address" className='w-full outline-none px-2 py-1 bg-transparent h-[44px] w-[279px] pl-[19px]' />
                                <div className=' cursor-pointer min-w-[50px] text-[12px] w-[135px] h-11 bg-[#0060AF] text-xs p-3.5 rounded-full flex items-center justify-center rounded-r-full text-white'>
                                    Enquire Now
                                </div>
                            </div>
                        </div>


                        <div className="flex px-8">
                            <div className="w-2/5 p-4 mt-[-85px]">
                                <div className='float-left'>
                                    <h1 className='text-2xl font-bold text-white'>T Job<span className='text-[#F83002] gradient-background'> Portal</span></h1>
                                </div>
                                <div className='pt-[24px] flex float-left items-center gap-x-23'>
                                 
                                 <div>
                                     <p class="text-left text-sm font-normal text-white pt-5">At T Job Portal, we connect talent with opportunity. As a trusted platform for job seekers and employers, we simplify the hiring process with innovative tools and personalized solutions. Our mission is to empower careers and businesses by providing a seamless, reliable, and user-friendly job search experience. Whether you're looking for your dream job or the perfect candidate, T Job Portal is here to make it happen.</p>
                                 </div>
                             </div>
                           

                                <div className='pt-[24px] flex float-left items-center gap-x-23'>
                                    <div>
                                        <img src={Phone} alt="logo" className="w-7 h-7" />

                                    </div>
                                    <div>
                                        <p class="text-left text-sm font-normal text-white"><a href='tel:918042552555'>+91–8779597022</a> </p>
                                    </div>
                                </div>

                               
                            </div>

                            <div className="w-3/5 p-4 flex space-x-4 ">

                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">About</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">About T Job Portal</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">About Journey</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Group Companies</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">Category</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">Job Find</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Post Job</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Update Job</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Add Company</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">SetUp Profile</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-5">Services</p>
                                    <ul className="pl-[20px]">
                                        <li className="text-sm font-semibold text-white pt-3 text-left pl-0">New Courses</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Upload Resume</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Get Company</li>
                                        <li className="text-sm font-semibold text-white pt-2 text-left pl-0">Job Seeker</li>
                                    </ul>
                                </div>
                                <div className="flex-1 p-2">
                                    <p className="text-[17px] font-bold text-[#EEDCB2] text-left pl-0">Downloads</p>
                                    <ul className="pl-0">
                                        <li className="text-sm pt-3 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Become a Recruiter</li>
                                        <li className="text-sm pt-2 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Blogs</li>
                                        <li className="text-sm pt-2 text-left pl-0 text-[17px] font-bold text-[#EEDCB2]">Contact</li>
                                    </ul>
                                    <div className='flex justify-center gap-[20px] pt-8 pb-8 pl-0'>

                                        <img src={Facebook} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Instagram} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Youtube} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                        <img src={Twitter} alt="logo" className="w-5 h-5 border border-white p-0.5 rounded-full" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className='bg-[#0060AF] p-3 grid grid-cols-3 gap-4 px-8'>
                <div className='flex items-center justify-center text-white ' >
                    <p className='ml-[-222px] text-sm font-medium'>Terms & Conditions</p>
                </div>
                <div className='flex items-center justify-center text-white'>
                    <p className='text-sm font-medium'> ALL RIGHTS RESERVED</p>
                </div>
                <div className='flex items-center justify-center text-white ' >
                    <p className='mr-[-222px] text-sm font-medium'>Privacy Policy</p>
                </div>
            </div>

        </>

    )
}

export default Footer