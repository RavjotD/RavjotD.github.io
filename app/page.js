"use client";
import React,{useEffect, useState} from "react";
import { animate, motion, useTransform, useMotionValue, AnimatePresence  } from "framer-motion";
import CubeBg from "./components/CubeBg";
import Banner from "./components/Banner";


export default function Home() {
 

  // Use useEffect to detect when banner animation is completed
 
  return (
  


    <motion.div
     
      className=" max-h-max flex flex-col lg:flex-row  "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>   

    
        <div className="w-full lg:w-1/2">

        <Banner/>

        </div>
       
    <div className="w-full lg:w-1/2 pt-0 lg:pt-32 ">

    <CubeBg/>

    </div>
    
    
    </motion.div>
  );
}