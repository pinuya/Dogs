import React from "react";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

export default function User() {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="post" element={<UserPhotoPost />} />
                <Route path="stats" element={<UserStats />} />
            </Routes>
        </section>
    )
}