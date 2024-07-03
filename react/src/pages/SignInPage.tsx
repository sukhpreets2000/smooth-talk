import bgImg from "../../public/bgImg.jpg";
const SignInPage = () => {
    return (
        <>
            <div className="w-full min-h-[100svh] bg-gray-800 flex items-center justify-center">
                <div className="mx-auto max-w-[min(1024px,100%)] my-4 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6">
                        <div className="hidden md:flex">
                            <img src={bgImg} alt="backGround" className="h-full object-cover"/>
                        </div>
                        <div className="bg-white p-10">
                            <h1 className="text-3xl mb-3">Welcome back</h1>
                            <p>Sign in to your account</p>
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
                            <form>
                                <div className="my-2">
                                    <label className="w-full" htmlFor="email">Email</label>
                                    <input placeholder="you@example.com" id="email" className="w-full px-4 py-2 border-[1px] rounded focus:outline-none mt-2" />
                                </div>
                                <div className="my-2">
                                    <div className="flex items-center justify-end">
                                        <label className="w-full" htmlFor="password">password</label>
                                        <p className="w-full text-end cursor-pointer">Forgot Password?</p>
                                    </div>
                                    <input placeholder="password" type="password" id="password" className="w-full px-4 py-2 border-[1px] rounded focus:outline-none mt-2" />
                                </div>
                                <button className="w-full my-3 bg-[#72e3ad] hover:bg-[#62c897] duration-300 px-4 py-3 rounded-md">Sign In</button>
                                <div className="text-center my-4">
                                    <p>Don't have an account? <span>Sign Up Now</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignInPage