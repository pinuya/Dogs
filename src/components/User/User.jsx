import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

export default function User() {
    const { data } = React.useContext(UserContext);
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="post" element={<UserPhotoPost />} />
                <Route path="stats" element={<UserStats />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </section>
    )
}