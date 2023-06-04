import React, {useState} from 'react'
import Home from './Home'
import SideBar from './SideBar'

import SwitchPay from "./InterswitchPay";

function FirstPage() {
    const [name, setName] = useState("");
    const [email, setEmail] =  useState("");
    const [amount, setAmount] = useState(0);
    const props = {
        merchantCode: "MX26070",
        payItemID: "Default_Payable_MX26070",
      customerEmail: email,
      redirectURL: "https://www.google.com",
      text: "Pay Now",
      mode: "TEST",
      transactionReference: Date.now().toString(),
      amount: amount * 100,
      style: {
        width: "200px",
        height: "40px",
        border: "none",
        color: "#fff",
        backgroundColor: "#ff0000",
      },
      callback: (response) => {
        console.log("response: ", response);
      },
    };
  
  return (
    <div className="flex">
      <div>
        <Home
          amount={amount}
          setAmount={setAmount}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
       <SwitchPay {...props} />
        
      </div>

  <SideBar/>
    </div>

  )
}

export default FirstPage