import React from "react";
import UserPost from './endpoints/UserPost';
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";

export default function Api(){
  return (
    <div>
     <h2>USER POST</h2>
     <UserPost/>

     <h2>TOKEN</h2>
     <TokenPost/>   

     <h2>PHOTOPOST</h2>
     <PhotoPost/>   

     <h2>PHOTOGET</h2>
     <PhotoGet/>  
    </div>
  );
}
