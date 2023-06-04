import { InterswitchPay } from "react-interswitch";

interface Props {
  merchantCode: string;
  payItemID: string;
  customerEmail: string;
  redirectURL: string;
  mode: string;
  text: string;
  transactionReference: string;
  amount: any;
  callback: (response: any) => void;
}

function SwitchPay(props: Props) {
  return <InterswitchPay {...props} />;
}

export default SwitchPay;
