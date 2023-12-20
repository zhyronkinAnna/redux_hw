import { createBrowserRouter } from "react-router-dom";
import PostList from "../pages/PostList";
import Post from "../pages/Post";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import App from "../App";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/posts',
                element: <PostList />
            },
            {
                path: '/post',
                element: <PrivateRoute> <Post /> </PrivateRoute>
            },
            {
                path: '/registration',
                element: <Registration />
            }
            ,
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);

export default router;