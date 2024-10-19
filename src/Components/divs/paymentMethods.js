import visa from "@/Public/Visa.png";
import mastercard from "@/Public/masterCard.png";
import paypal from "@/Public/Paypal.png";
import Image from "next/image";

function PaymentMethods({ icon: Icon, title }) {
  return (
    <>
      <div className="grid grid-cols-4 p-4 ">
        <div className="col-span-1 flex justify-start items-center  ">
          <Icon className="mr-4 text-2xl " />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="col-span-3 flex justify-start items-center gap-2">
          <Image src={visa} alt="visa" width={45} height={45} />
          <Image src={mastercard} alt="mastercard" width={45} height={45} />
          <Image src={paypal} alt="paypal" width={45} height={45} />
          <span className="text-xs bg-[#008234] text-white rounded-md px-2 py-1">
            Cash
          </span>
        </div>
      </div>
    </>
  );
}

export default PaymentMethods;
