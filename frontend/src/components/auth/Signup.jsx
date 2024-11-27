import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import Signup1 from '../../assets/signup.png'
import { Loader2, Eye, EyeOff } from 'lucide-react' // Make sure these icons are available
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import Breadcrumb from '../../assets/register.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false); // To control the loading state
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        dispatch(setLoading(true))
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false))
        }
    }






    return (
        <div>
            <Navbar />
            <div className="relative w-full" style={{ marginTop: "63px" }}>
                <img src={Breadcrumb} alt="logo" className="w-full rounded-md" />
                <div className="absolute inset-0 flex items-center  text-black text-4xl pl-4 font-bold">
                    Registration Form
                </div>
            </div>
            <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
                <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left column: Form with border */}
                    <form onSubmit={submitHandler} className="w-full md:w-1/2 p-4 border border-gray-200 rounded-md sign-up-bg">
                        <h1 className="font-bold text-xl mb-5">Sign Up</h1>

                        <div className="my-2">
                            <Label>Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="Shubhanshu"
                            />
                        </div>

                        <div className="my-2">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="Shubhanshu@gmail.com"
                            />
                        </div>

                        <div className="my-2">
                            <Label>Phone Number</Label>
                            <Input
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="8080808080"
                            />
                        </div>

                        <div className="my-2 relative">
                            <Label>Password</Label>
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform "
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <RadioGroup className="flex items-center gap-4 my-5">
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label>Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="cursor-pointer"
                                    />
                                    <Label>Recruiter</Label>
                                </div>
                            </RadioGroup>

                            <div className="flex items-center gap-2">
                                <Label>Profile</Label>
                                <Input
                                    accept="image/*"
                                    type="file"
                                    onChange={changeFileHandler}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
                        }
                        <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                    </form>

                    {/* Right column: Image */}
                    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                        <img src={Signup1} alt="logo" className="w-full rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup