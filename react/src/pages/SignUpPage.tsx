import { Link } from "react-router-dom";
import bgImg from "../../public/bgImg.jpg";
import PasswordConditionsHelper from "../validation/PasswordConditionsHelper";
import { useState } from "react";
const SignUpPage = () => {
    const [valid, setValid] = useState(false)

    const [inputfield, setInputField] = useState<{
        email: string,
        password: string
    }>({
        email: "",
        password: ""
    })

    const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValid(true)
        const { name, value } = e.target
        setInputField((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    }

    const FormHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputfield)
        const formData = new FormData();
        formData.append("email", inputfield.email),
            formData.append("password", inputfield.password)

        fetch(`api/auth/signup`, {
            method: "POST",
            body: formData
        }).then((res) => {
            console.log(res)
        })

    }

    return (
        <>
            <div className="w-full min-h-[100svh] bg-gray-800 flex items-center justify-center py-[var(--top-padding)]">
                <div className="mx-auto max-w-[min(1124px,100%)] rounded-xl flex relative h-full">
                    <div className="hidden md:flex sticky top-4 h-[calc(100svh-2*var(--top-padding))] flex-1">
                        <img src={bgImg} alt="backGround" className="h-full object-cover" />
                    </div>
                    <div className="bg-white p-10 h-auto flex-1">
                        <h1 className="text-3xl mb-3">Get started</h1>
                        <p>Create a new account</p>
                        <div className="border-slate-100 border-[1px] p-3 mt-3 cursor-pointer hover:bg-gray-200 hover:border-black duration-300 rounded-xl">
                            <div className="flex items-center justify-center gap-4">
                                <h1>G</h1>
                                <p>Continue with Google</p>
                            </div>
                        </div>
                        <div className="relative m-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300"></div>
                            </div>
                            <div className="relative flex justify-center top-[-2px]">
                                <span className="px-2 bg-white">or</span>
                            </div>
                        </div>
                        <form onSubmit={FormHandler}>
                            <div className="my-2">
                                <label className="w-full" htmlFor="email">Email</label>
                                <input placeholder="you@example.com" id="email" className="w-full px-4 py-3 border-slate-600 border-[1px] rounded focus:outline-none mt-2" name="email" onChange={InputHandler} value={inputfield.email} />
                            </div>
                            <div className="my-2">
                                <div className="flex items-center justify-end">
                                    <label className="w-full" htmlFor="password">password</label>
                                    <p className="w-full text-end cursor-pointer">Forgot Password?</p>
                                </div>
                                <input placeholder="password" type="password" id="password" className="w-full px-4 py-3 border-slate-600 border-[1px] rounded focus:outline-none mt-2" name="password" onChange={InputHandler} value={inputfield.password} onFocus={() => setValid(true)} />
                            </div>
                            <button className="w-full my-3 bg-[#72e3ad] hover:bg-[#62c897] duration-300 px-4 py-3 rounded-md">Sign Up</button>
                            <div className="text-center my-4">
                                <Link to="/signin" className="text-slate-400 hover:text-slate-600 duration-300">Have an account? <span>Sign In Now</span></Link>
                            </div>
                        </form>
                        {
                            valid ? <PasswordConditionsHelper password={inputfield.password} /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUpPage