/* eslint-disable no-octal */
import React, { useState, useEffect } from "react";
import logo from "./images/school.png";
import {Link} from 'react-router-dom'
import { InterswitchPay } from "react-interswitch";


function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount]= useState<number>(0)


interface Parameters {
  merchantCode: string;
  payItemID: string;
  customerEmail: string;
  redirectURL: string;
  mode: string;
  text: string;
  transactionReference: string;
  amount:any;
  callback: (response: any) => void;
}

const paymentParameters: Parameters = {
  merchantCode: 'MX26870',
  payItemID: 'Default_payable_MX26870',
  customerEmail: email,
  redirectURL: window.location.origin,
  mode: 'LIVE',
  text: 'Make Payment',
  transactionReference: Date.now().toString(),
  amount: amount *100,
  callback: (response: any) => {
    console.log('response: ', response);
  },
}


  return(
    <>
           <div className="md:w-[50%] w-full flex flex-col items-center">
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
    
                <div>
                    <InterswitchPay {...paymentParameters} className="bg-blue-600 rounded-md p-4"/>                 
                 </div>

                 <h3>
                    <Link to='/hostedFields'><button type="submit" className="mt-10 rounded-md p-2 bg-blue-700">Hosted Fields</button></Link>
                 </h3>
               </form>
             </div>
           </div>
        </> 
  ) 
 
}

export default Home;
