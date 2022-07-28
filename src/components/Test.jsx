import React from "react";
import { useEffect } from "react";

export default function Test(){
    async function bb() {
        console.log("bbb---------")
       await aa();
    }
    async function aa(c=3){
        console.log("aa-----"+c)
    }
    useEffect(()=>{
        bb();

    },[]);

    return <div>Test</div>
}