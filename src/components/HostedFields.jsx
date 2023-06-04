import axios from 'axios';

function HostedFields() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] =  useState("");
//     const [phone, setPhone] = useState('');
//     const [type, setType] = useState('');

// const   data={
    // type: "CORPORATE",
    // email: "excellentpartners@nomail.com",
    // registeredName: "Excellent Partners Nigeria Limited",
//     verificationRequests: [
//             {
//                 type: "ADDRESS",
//                 buildingNumber: "15B",
//                 street: "Oko Awo Street",
//                 landmark: "Eko Hotel",
//                 city: "Victoria Island",
//                 state: "NG-LA",
//                 country: "NGA",
//                 base64EncodedImage: "/9j/4AAQSkZJRgABAQEASABIAAD//gBcYm9yZGVyIGJzOjAgYmM6IzAwMDAwMCBwczowIHBjOiNlZWVlZWUgZXM6MCBlYzojMDAwMDAwIGNrOjUwMGQwMmE0ZjFmMWQ3NDk3MzQwY2M1ODY4OTZiZjEx/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAGQAZAwEiAAIRAQMRAf/EABgAAQADAQAAAAAAAAAAAAAAAAcEBQYI/8QAMRAAAgECBAQEAgsAAAAAAAAAAQIDBBEABQYSByExQRMUIlEVczI2YWJxcpGTsbLC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgME/8QAHREAAQUAAwEAAAAAAAAAAAAAAQACAwQREyEiMf/aAAwDAQACEQMRAD8AvuJPGqo0trd9MZZp1qidCiNV1cjRoWcCxVQvNBceq/Pn+OMtFrYfHJqTV1I1JVs1jVbyyqe28AEhelmUkWt6SOYbOONXDRcP2jrL+VqauGKRhzKAN4gKjudyKLfbgyjoNMapmarcJVNTRKiwvuVlFjtuORHL39sRfYMLlpjottRnT2q3I9Z1eU8QsgytJoJaWsZaasjp5N8bNKwWN1IuLg7TuHVW/R48I4EuHOkcqqtWxZzFEhnaqM9LAG2JTww7VLBB1Jaxv95e/PDnY4Yl5fQUpKxrYwnVA4uZM2p9CZhk9FLTLmMjQy04mJsHSRXHQEi4Ui9u+OZpct1lUZjPl9ZFDSeUJpGnEgbaqsVIS3Nu9rjucdXZZ9E/NP8AbB1qf635l8wfwcRsnG6tVEFzi3elUcJcuqMq1E0NPRGeGSjMTylvVCqnde563Jtblzt7YT/Ow+037bYi8Nutf+VP9Y0uFVGxglG9nMQBnxf/2Q=="
//             },
//             {
//                 type: "AML",
//                 country: "NGA"
//             },
//             {
//                     type: "CORPORATE_REGISTRATION",
//                 country: "NGA",
//                 identityNumber: "1111111111"
                
//             }
//         ],
//     callbackUrl: "http://localhost:8080"
//   }


// const submit = async () => {
//     try {
//       let response = await axios.post( 'https://qa.interswitchng.com/collections/api/v1/ussd/issuers/NG', 
     
//      {headers:{
//         accept: 'application/json',
//         Authorization: 'Bearer + 9BImT9tkHo5iq1tYgj0QeEbWqdwYezTgQRbYZpZeqew=',
//         "Content-Type": "application/json"
        
//      }} );
//      console.log(response)
//     }catch(error){
//         console.log(error)
//     }

//   };
const submit = async () => {
    try {
      let response = await axios.post( 'https://qa.interswitchng.com/paymentgateway/api/v1/merchant/invoice/create', {
        data: {
            amount: '250000',
            customerName: 'Toyosi Oyelayo',
            customerEmail: 'toyosi@nomail.com',
            merchantCode: 'MX6072',
            payableCode: '9405967',
            dueDate: '2604188800000',
            discountPercent: '5.5',
            shippingFee: '70000',
            address: 'Address'
          }
      },
     
     {headers:{
        accept: 'application/json',
        Authorization: 'Bearer  SUtJQTY4Mzg2QThCQzdDRTcwNkVGNDRGMDMyNTdCMUE3RjQyNTM3NTYyQ0Q6OUJJbVQ5dGtIbzVpcTF0WWdqMFFlRWJXcWR3WWV6VGdRUmJZWnBaZXFldz0=',
        "Content-Type": "application/json"
        
     }} );
     console.log(response)
    }catch(error){
        console.log(error)
    }

  };

  return (
  
<div>
    <h2>Hosted Fields</h2>

    {/* <form className=" w-full flex flex-col justify-center" onSubmit={submit}>
          <div className=" mb-4 flex flex-col md:flex-row  w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Students Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-full border border-gray-400 px-3 py-2 rounded-md "
            />
          </div>
          <div className=" mb-4 flex flex-col md:flex-row  w-full md:w-1/3">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Students Name"
              onChange={(e) => {
                setLastName(e.target.value);
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
                setPhone(e.target.value);
              }}
              className="w-full border border-gray-400 px-3 py-2 rounded-md "
            />
          </div>
          <input type="submit" placeholder='Verify'/>
        </form> */}

        <button onClick={()=>submit()}>Verify</button>
</div>
    
  )
}

export default HostedFields