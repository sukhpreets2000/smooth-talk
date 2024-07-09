import { createBrowserRouter } from "react-router-dom";
import ChatArea from "../components/ChatArea";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ChatArea />,
    },
    {
        path: "/signin",
        element: <SignInPage />
    },
    {
        path:"/signup",
        element:<SignUpPage />
    }
]);