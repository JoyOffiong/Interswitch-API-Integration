/* eslint-disable no-octal */

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setReason: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  email: string;
  reason: string;
  amount: number;
}
function Home({
  setName,
  setEmail,
  setAmount,
  setReason,
  name,
  email,
  amount,
  reason,
}: Props) {
  return (
    <>
      <div className="  flex flex-col items-center text-center justify-center">
        <div className="flex justify-start items-center px-0 py-10 ">
          <h3 className="text-3xl font-bold">YO!</h3>
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
            <div className=" mb-4 flex flex-col md:flex-row  w-full">
              <select
                id="name"
                name="name"
                placeholder="Reason"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                className="w-full border border-gray-400 px-3 py-2 rounded-md "
              >
                <option value="Artime subscription">
                  Airtime Subscription
                </option>
                <option value="Data subscription ">Data Subscription</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
