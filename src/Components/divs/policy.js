"use client";
import SubHeading from "../Headings/SubHeading";
import TableRow from "./tableRow";
import {
  HiArrowLeftEndOnRectangle,
  HiArrowRightEndOnRectangle,
} from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPawOutline } from "react-icons/io5";
import { LiaSmokingSolid } from "react-icons/lia";
import { BiParty } from "react-icons/bi";
import PaymentMethods from "./paymentMethods";
import { CiCreditCard2 } from "react-icons/ci";

function Policy({ hotel }) {
  return (
    <>
      <SubHeading
        title="Policies"
        description={`${hotel?.name?.en} takes special requests – add in the next step!`}
      />
      <section className="mx-auto max-w-6xl mt-6 ">
        <div className=" border border-[#E0E0E0] rounded-md p-4  w-full">
          <TableRow
            icon={HiArrowRightEndOnRectangle}
            title="Check-in "
            description={`Check-in usually be at ${hotel?.HouseRules?.CheckInTime} o'clock`}
          />
          <TableRow
            icon={HiArrowLeftEndOnRectangle}
            title="Check-out "
            description={`Check-out usually be at ${hotel?.HouseRules?.CheckOutTime} o'clock`}
          />
          <TableRow
            icon={IoIosInformationCircleOutline}
            title="Cancellation/ prepayment"
            description="Cancelation and prepayment policies vary according to accommodation type. Check what conditions apply to each option when making your selection."
          />
          <TableRow
            icon={IoPawOutline}
            title="Pets"
            description={
              hotel?.HouseRules?.NoPets
                ? "Pets are not allowed."
                : "Pets are allowed"
            }
          />
          <TableRow
            icon={LiaSmokingSolid}
            title="Smoking"
            description={
              hotel?.HouseRules?.NoSmoking
                ? "Smoking is not allowed."
                : "Smoking is allowed"
            }
          />
          <TableRow
            icon={BiParty}
            title="Parties"
            description={
              hotel?.HouseRules?.NoParties
                ? "Parties/events are not allowed."
                : "Parties/events are allowed"
            }
          />
          <PaymentMethods
            icon={CiCreditCard2}
            title="Accepted payment methods"
          />
        </div>
      </section>
    </>
  );
}

export default Policy;
