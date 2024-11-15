"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import request from "@/utils/api";
import { endPoints } from "@/utils/endPoints";
import { toast } from "sonner";
import CustomTableRow from "./CustomTableRow";

interface Booking {
  booking_id: string;
  bus_route: string;
  departure_time: string;
  departure_date: string;
  user_name: string;
}

interface Props {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>; // To update the bookings state
}

const BookingRequestTable = ({ bookings, setBookings }: Props) => {
  const [searchText, setSearchText] = useState("");

  const handleAcceptOnClick = async (booking_id: string) => {
    try {
      const response = await request.post(`${endPoints.review_booking}`, {
        booking_id,
        booking_status: "Approve",
      });

      // Update the UI by removing the approved booking
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.booking_id !== booking_id));

      // Show success notification
      toast.success("Approved")
    } catch (error: any) {
      console.error("Error approving booking:", error.message);
      toast.error("Error Approving The Booking")
    }
  };

  const handleRejectOnClick = async (booking_id: string) => {
    try {
      const response = await request.post(`${endPoints.review_booking}`, {
        booking_id,
        booking_status: "Reject",
      });

      // Update the UI by removing the rejected booking
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.booking_id !== booking_id));

      // Show success notification
      toast.success("Rejected")
    } catch (error: any) {
      console.error("Error rejecting booking:", error.message);
      toast.error("Error Rejecting The Booking")
    }
  };

  return (
    <div className="w-full flex justify-start mt-3 items-start gap-2 flex-col">
      <div className="w-full">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Bookings"
          className="w-full h-10 bg-white p-2 outline-none border border-solid border-black rounded"
          type="text"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Bus Number</TableHead>
            <TableHead className="text-center">Bus Route</TableHead>
            <TableHead className="text-center">Time</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Who Booked</TableHead>
            <TableHead className="text-center">Approve/Reject</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <CustomTableRow
                key={index}
                booking_id={booking.booking_id}
                bus_route={booking.bus_route}
                departure_time={booking.departure_time}
                departure_date={booking.departure_date}
                user_name={booking.user_name}
                onAccept={handleAcceptOnClick}
                onReject={handleRejectOnClick}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No Bookings Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingRequestTable;
