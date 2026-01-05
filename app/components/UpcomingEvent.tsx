"use client";
import { FaCalendarDays } from "react-icons/fa6";
import { companyName, facebookPage } from "../utils/constants";
import Link from "next/link";

const UpcomingEvent = () => {
  return (
    <div className="text-black mx-auto flex flex-col justify-center items-center py-4">
      <h2 className="text-2xl  font-semibold mb-5">Upcoming Events</h2>
      <p className="text-xs">No upcoming events.</p>
      <Link
        className="flex items-center gap-2 p-2 rounded-xl text-sm text-white bg-green-700 hover:bg-green-800"
        href={facebookPage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Find All Event of {companyName} </span> <FaCalendarDays />
      </Link>
    </div>
  );
};

export default UpcomingEvent;
