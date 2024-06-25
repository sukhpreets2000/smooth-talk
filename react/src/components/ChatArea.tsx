import { Album, Award, Calendar, CircleUser, MessageCircle, MessageSquare, Palette, Settings } from "lucide-react";
const ChatArea = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex">
                <div className="w-20 bg-gray-800 h-screen border-r-2 border-slate-600">
                    <div className="flex items-center justify-center pt-6">
                        <MessageSquare color="white" size={35} />
                    </div>
                    <div className="mt-16 flex flex-col gap-14 items-center justify-center">
                        <Palette className="cursor-pointer  text-gray-600 hover:text-gray-300 duration-300" />
                        <Album className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                        <Calendar className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                        <MessageCircle className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                        <Award className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                        <Settings className="cursor-pointer text-gray-600 hover:text-gray-300 duration-300" />
                    </div>
                </div>
                <div className="w-1/4 bg-gray-800 h-screen p-10">
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
            </div>
        </>
    )
}
export default ChatArea