import React, {useState} from 'react'
import Home from './Home'
import SideBar from './SideBar'

import SwitchPay from "./InterswitchPay";

function FirstPage() {
    const [name, setName] = useState("");
    const [email, setEmail] =  useState("");
    const [amount, setAmount] = useState(0);
    const [reason, setReason] = useState('');
    const props = {
        merchantCode: "MX26070",
        payItemID: "Default_Payable_MX26070",
      customerEmail: email,
      redirectURL: "http://localhost:3003/landingPage",
      text: "Pay Now",
      mode: "TEST",
      transactionReference: Date.now().toString(),
      amount: amount * 100,
      style: {
        width: "200px",
        height: "40px",
        border: "none",
        color: "#fff",
        backgroundColor: "#047857",
      },
      callback: () => {
        'http://localhost:3003/landingPage'
      },
    };
  
  return (
    <div className="flex justify-between h-[100vh]">
      <div>
        <Home
          amount={amount}
          setAmount={setAmount}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          reason={reason}
          setReason={setReason}
        />
       <SwitchPay {...props} />
        
      </div>

  <SideBar/>
    </div>

  )
}

export default FirstPage