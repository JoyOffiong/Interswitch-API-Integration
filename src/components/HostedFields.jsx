import axios from 'axios';
import { BiMenuAltLeft } from 'react-icons/bi';

function HostedFields() {

const submit = async () => {
    try {
      let response = await axios.get( 'https://api-gateway.interswitchng.com/generic-wallet/api/v1/admin/account/banks', {
      
      grant_type:"client_credentials"
        
      }
     ,
     {headers:{
       "Authorization": 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsiaXN3LWNvbGxlY3Rpb25zIiwiaXN3LXBheW1lbnRnYXRld2F5IiwicGFzc3BvcnQiLCJwcm9qZWN0LXgtbWVyY2hhbnQiLCJ2YXVsdCJdLCJtZXJjaGFudF9jb2RlIjoiTVg5NTg5OCIsInJlcXVlc3Rvcl9pZCI6IjEyMzQ1NzU4NTE1Iiwic2NvcGUiOlsicHJvZmlsZSJdLCJleHAiOjE2ODU5NDQ0MTksImNsaWVudF9uYW1lIjoiRGlvclNkZjl1UlQwbUpSNlRadXd2cG5pL3dxM05ZME5TQUl5aTFjOHhmQT0iLCJqdGkiOiI5NDE1NGQwMC0yZjU4LTQ0NGEtODJhNi0yMGVlMzAwNWE1NTYiLCJwYXlhYmxlX2lkIjoiMTg1NTE1MyIsImNsaWVudF9pZCI6IklLSUE2ODM4NkE4QkM3Q0U3MDZFRjQ0RjAzMjU3QjFBN0Y0MjUzNzU2MkNEIn0.Hm-qs9n_SbO3YwXo7d7yG3gQsQX2ZHjpQP2Oh_28jPEtrtrxgf4UcRH8QVxwBi_Y_KpVMyLLn66Un6H8F5TrkllxjqcrEHyArXtXC5OyAaTOVMXOAEA8CiSi8dFBLjoZPSMCvi6IvG_NuoXd4Ze_bU6S8Riq2AzuUZQ7G_8V0ltKgXrVKej0eYfe7oCIYZtY6d-s1-xCmGIadyvbwnptBQvJhxIc9JlqmtRccZN-lfiL5qoS0fd2Kifh2X6yLEQpc52iowyrxPsnE38nTOFnFs7FpDAFxd2ueZaAHeDd-jMaLGh7TCqlOKtayoduFeyylpeWT9ydlebQ25qDwibKHg',
        "Content-Type": "application/x-www-form-urlencoded"
        
     }} );
     console.log(response)
    }catch(error){
        console.log(error)
    }

  };

  return (
<div className='bg-gray-300 h-[100%] relative'>
    <div className='flex justify-start flex-col  '>
    <div className=" flex items-center  justify-between tablet:py-5 phone:pl-8 tablet:px-20 phone:py-3 w-screen z-30 bg-white shadow-md">
          <div className="flex items-center justify-between w-2/5 py-10 px-20">
            <h3 className="text-3xl font-bold">UFinance!</h3>
            <p className=" hidden md:block text-gray-500 font-bold">Features</p>
            <p className=" hidden md:block text-gray-500 font-bold">Pricing</p>
            <p className=" hidden md:block text-gray-500 font-bold">
              Resources
            </p>
          </div>

          <div className="flex items-center justify-between w-1/5">
            <div className="laptop:hidden tablet:block">
              <BiMenuAltLeft className="text-4xl" />
            </div>
          </div>
        </div>
    <h3 className="text-[24px] md:text-[48px] w-[70%] mx-auto text-green-700 z-30 font-bold">
            Fetch all Banks Codes here with ease
            </h3>
           <div className="bg-green-700 p-2 font-bold rounded-md md:w-[10%] w-[40%]  mx-auto mt-10"> 
            <button onClick={()=>submit()}>Fetch Codes</button>
            </div>

       
    </div>
       
</div>
    
  )
}

export default HostedFields