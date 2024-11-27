import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import PostJobs from './PostJobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import CategoryCarousel from './CategoryCarousel';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <PostJobs />
      <Footer />
    </div>

  )
}

export default Home