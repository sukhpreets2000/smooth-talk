import { Album, Award, Calendar, CircleAlert, CircleUser, EllipsisVertical, MessageCircle, MessageSquare, Palette, Paperclip, Send, Settings } from "lucide-react";
const ChatArea = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex">
                <div className="w-20 bg-gray-800 h-screen border-r-2 border-slate-600 flex flex-col justify-between items-center">
                    <div>
                        <div className="flex items-center justify-center pt-6">
                            <MessageSquare color="white" size={35} />
                        </div>
                        <div className="mt-16 flex flex-col gap-8 items-center justify-center">
                            <Palette className="cursor-pointer  text-gray-600 hover:text-gray-300 duration-300" />
                            <Album className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                            <Calendar className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                            <MessageCircle className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                            <Award className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                            <Settings className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                        </div>
                    </div>
                    <div className="pb-6">
                        <CircleUser color="green" />
                    </div>
                </div>
                <div className="w-80 bg-gray-800 h-screen p-10">
                    <div>
                        <h1 className="text-white text-xl">Chat Room</h1>
                    </div>
                    <div className="mt-9">
                        <h1 className="text-slate-400 uppercase">Favourites</h1>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                    </div>


                    <div className="mt-9">
                        <h1 className="text-slate-400 uppercase">Direct Messages</h1>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                    </div>


                    <div className="mt-9">
                        <h1 className="text-slate-400 uppercase">Channels</h1>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-5">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div>
                                <h3 className="text-gray-500">Raman</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-1/2 bg-gray-800 border-l-2 border-slate-600 relative">
                    <div className="w-full">
                        <div className="flex justify-between items-center border-b-2 border-slate-600 p-7">
                            <div>
                                <h1 className="text-white text-xl">Coffee Nerds</h1>
                            </div>
                            <div className="flex gap-7">
                                <CircleAlert className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                                <Settings className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                                <EllipsisVertical className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                            </div>
                        </div>
                    </div>
                    <div className="p-7 overflow-hidden">
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded ml-auto">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                        <div className="border-2 border-lime-800 w-fit px-5 py-2 rounded mr-auto mt-2">
                            <h1 className="text-slate-400">hello</h1>
                        </div>
                    </div>
                    <div className="w-full absolute bottom-0 z-10">
                        <div className="p-7 flex gap-3 items-center border-t-2 border-slate-600">
                            <div>
                                <CircleUser color="green" />
                            </div>
                            <div className="bg-slate-600 relative pt-2 pb-2 rounded flex-1">
                                <input type="text" className="px-2 py-1 w-full bg-transparent focus:outline-none text-white" placeholder="write a reply" />
                                <div className="absolute right-5 top-[0.9rem] flex gap-3 items-center">
                                    <Paperclip size={20} className="cursor-pointer text-slate-300 hover:text-gray-300 duration-300" />
                                    <CircleUser size={20} className="cursor-pointer text-slate-300 hover:text-gray-300 duration-300" />
                                </div>
                            </div>
                            <div className="flex gap-1 items-center bg-blue-600 py-[12px] px-10 cursor-pointer rounded">
                                <Send size={20} className="text-white" />
                                <button className="text-white text-base font-semibold">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatArea