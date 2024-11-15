"use client";

import { useEffect, useState } from "react";
import request from "@/utils/api";
import { endPoints } from "@/utils/endPoints";
import BookingRequestTable from "@/components/BookingRequestTable";
import { Booking } from "@/utils/type";

export default function Home() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await request.get(`${endPoints.manage_bookings}`);
        const data = response.data?.pending_bookings;

        if (Array.isArray(data)) {
          setBookings(data.filter((booking) => booking.booking_id !== null));
        } else {
          console.log("No bookings found or data format is incorrect");
        }
      } catch (error: any) {
        console.error("Error fetching bookings:", error.message);
      }
    };

    fetchBookings();
  }, []);

  return (
    <main className="w-full">
      <BookingRequestTable bookings={bookings} setBookings={setBookings} />
    </main>
  );
}
