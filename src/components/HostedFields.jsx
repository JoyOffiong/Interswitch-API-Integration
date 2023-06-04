import React from 'react'

function HostedFields() {

    let configuration = {
        fields: {
            cardNumber: {
                selector: '#cardNumber-container',
                placeholder: '****  ****  ****  ****',
                styles: {}
            },
            expirationDate: {
                selector: '#expirationDate-container',
                placeholder: 'MM / YY',
                styles: {}
            },
            cvv: {
                selector: '#cvv-container',
                placeholder: '***',
                styles: {}
            },
            pin: {
                selector: '#pin-container',
                placeholder: '* * * *',
                styles: {}
            },
            otp: {
                selector: '#otp-container',
                placeholder: '* * * * * *',
                styles: {}
            }
        },
        cardinal: {
            containerSelector: '.cardinal-container',
            activeClass: 'show'
        },
        paymentParameters: {
            amount: 150000,
            currencyCode: "566",
            dateOfPayment: '2021-11-08T00:00:00',
            payableCode: "Default_Payable_MX26070",
            merchantCustomerName: "John Doe",
            merchantCode: 'XXXXXXXX',
            transactionReference: "isw_hosted_field_test:" + Date.now(),
        }
    }


  return (
   
       <div className="payment-form-container" data-field-type="pan">
  <div className="form-header">
    <img src="https://mufasa-qa.interswitchng.com/p/webpay/logos/default.png" />
    <div className="info">
      <div className="title">ISW Hosted Fields Sample 1</div>


      <div>₦ <span id="amount" /></div>
    </div>
  </div>
  <div className="alertSuccess" id="response">
    <p id="response-code" style={{padding: '0px 10px'}} />
    <p id="response-message" style={{padding: '0px 10px'}} />
  </div>
  <div className="form-page card-details show">
    <div className="form-control">
      <label>Card Number</label>
      <div id="cardNumber-container" className="payment-field" />
    </div>
    <div className="form-group">
      <div className="form-control">
        <label>EXP</label>
        <div id="expirationDate-container" className="payment-field" />
      </div>
      <div className="form-control">
        <label>CVV</label>
        <div id="cvv-container" className="payment-field" />
      </div>
    </div>
    <div className="button-container">
      <button id="pay-button" className="blue">Pay</button>
    </div>
  </div>









  <div className="form-page pin">
    <div className="back-control" id="pin-back-button">
      <img src="./back-icon.png"  alt='back'/>
      <label>Back</label>
    </div>
    <div className="form-text">Please provide your PIN</div>
    <div className="form-control">
      <label />
      <div id="pin-container" className="payment-field" />
    </div>
    <div className="button-container">
      <button id="continue-button" className="green">Continue</button>
    </div>
  </div>





  
  <div className="form-page otp">
    <div className="back-control" id="otp-back-button">
      <img src="./back-icon.png" alt='back' />
      <label>Back</label>
    </div>
    <div className="form-text">
      Please input the OTP sent to your mobile number
    </div>
    <div className="form-control">
      <label />
      <div id="otp-container" className="payment-field" />
    </div>
    <div className="button-container">
      <button id="validate-button" className="orange">Validate</button>
    </div>
  </div>
  <div className="form-page cardinal">
    <div className="cardinal-container" />
  </div>
</div>

    
  )
}

export default HostedFields