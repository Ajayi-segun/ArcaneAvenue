import {Routes, Route} from "react-router";
import Home from "./Pages/Home/Home";
import Wishlist from "./Pages/Home/WishList/Wishlist";

export default function Page() {
    return (
        <Routes>
            {/*  this is where pages go*/}

            <Route index element={<Home/>} />
            <Route path="wishList" element={<Wishlist/>} />
        </Routes>
    )
}