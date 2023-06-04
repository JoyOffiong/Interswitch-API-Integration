/* eslint-disable no-octal */
import React, { useState, useEffect } from "react";
import logo from "./images/school.png";
import {Link} from 'react-router-dom'



interface Props {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    email: string;
    amount: number;
  } 
function Home({ setName, setEmail, setAmount, name, email, amount }: Props) {
  return(
    <>
            <div className=" w-full flex flex-col items-center">
      <div className="flex justify-start items-center px-0 py-10 ">
        <img src={logo} width="100px" height="100px" alt="" />
      </div>

      <div className=" w-full text-center   flex flex-col justify-center px-20 md:px-40">
        <h3 className="pb-5 font-semibold text-2xl text-center">
          Enter Your Personal Information
        </h3>

        <form className=" w-full flex flex-col justify-center">
          <div className=" mb-4 flex flex-col md:flex-row  w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Students Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full border border-gray-400 px-3 py-2 rounded-md "
            />
          </div>
          <div className=" mb-4 flex flex-col md:flex-row  w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full border border-gray-400 px-3 py-2 rounded-md "
            />
          </div>
          <div className=" mb-4 flex flex-col md:flex-row  w-full">
            <input
              type="number"
              id="name"
              name="name"
              placeholder="Amount"
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              className="w-full border border-gray-400 px-3 py-2 rounded-md "
            />
          </div>
        </form>
      </div>
    </div>
        </> 
  ) 
 
            }

export default Home;
