import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import Signup1 from '../../assets/signup.png'
import Breadcrumb from '../../assets/login.jpg'
import { Loader2, Eye, EyeOff } from 'lucide-react' // Make sure these icons are available
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'



const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        } finally {
            dispatch(setLoading(false))
        }
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate("/");
    //     }
    // }, [])


    return (
        <div>
            <Navbar />
            <div className="relative w-full" style={{ marginTop: "63px" }}>
                <img src={Breadcrumb} alt="logo" className="w-full rounded-md" />
                <div className="absolute inset-0 flex items-center  text-black text-4xl pl-4 font-bold">
                    Login Form
                </div>
            </div>

            <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
                <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left column: Form with border */}
                    <form onSubmit={submitHandler} className="w-full md:w-1/2 p-4 border border-gray-200 rounded-md sign-up-bg">
                        <h1 className="font-bold text-xl mb-5 gradient-background">Login</h1>


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


                        </div>

                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                        }
                        <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>



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

export default Login