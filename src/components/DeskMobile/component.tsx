import React, { FC, useContext, useEffect, useState } from "react";
import { Props } from "./props";
import { DateContext, ModalContext } from "../../context";

export const DeskMobile: FC<Props> = ({ name, filteredBookings, id }) => {
  const [deskBookingInfo, setDeskBookingInfo] = useState<any>([]);
  const { triggerModal } = useContext(ModalContext);
  const { date } = useContext(DateContext);

  useEffect(() => {
    // Filter all through all bookings and return only ones that match desk
    const booking = filteredBookings.filter(
      (booking: any) => booking.deskRef === id
    );
    setDeskBookingInfo(booking);
  }, [filteredBookings, id]);

  return (
    <div className="relative group z-30 ">
      <div className=" bg-background shadow-md  rounded-sm  py-2 px-3 mb-2">
        <div className="flex justify-between items-center pb-4">
          <p>{name}</p>
          <div className="flex items-center">
            <p className="text-[14px] ">
              {deskBookingInfo.length ? "Unavailble" : "Availble"}
            </p>
            {deskBookingInfo.length ? (
              <div className="w-[8px] h-[8px] bg-red-600 ml-3 rounded-full mt-[2px]"></div>
            ) : (
              <div className="w-[8px] h-[8px] bg-green-600 ml-3 rounded-full mt-[2px]"></div>
            )}
          </div>
        </div>
        <div className="cursor-default flex justify-between items-center">
          <button
            disabled={deskBookingInfo.length > 0}
            onClick={() =>
              triggerModal(
                `Are you sure that you want to book ${name} on ${new Date(
                  date
                ).toDateString()}?`,
                id
              )
            }
            className="bg-primary text-[12px] text-white px-10 py-1 rounded-sm hover:bg-primaryHover active:scale-95 transition-all duration-300 disabled:bg-gray-300"
          >
            BOOK
          </button>
          <p className="pr-6 text-[16px]">
            {deskBookingInfo.length ? deskBookingInfo[0].booked_by : "Empty"}
          </p>
        </div>
      </div>
    </div>
  );
};
