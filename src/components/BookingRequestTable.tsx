"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const BookingRequestTable = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full flex justify-start mt-3 items-start gap-2 flex-col">
      <div className="w-full">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Bookings"
          className="w-full  h-10 bg-white p-2 outline-none border border-solid border-black rounded"
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
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
          <CustomTableRow
            busRoute="THI - Rathuas"
            time="09:00"
            date="10.11.2024"
            name="Sikander"
          />
        </TableBody>
      </Table>
    </div>
  );
};

type RowProps = {
  busRoute: string;
  time: string;
  date: string;
  name: string;
};

const CustomTableRow = ({ busRoute, time, date, name }: RowProps) => {
  return (
    <TableRow>
      <TableCell className="text-[#212529] text-center font-medium">
        XXX
      </TableCell>
      <TableCell className="text-[#212529] text-center">{busRoute}</TableCell>
      <TableCell className="text-[#212529] text-center">{time}</TableCell>
      <TableCell className="text-[#212529] text-center">{date}</TableCell>
      <TableCell className="text-[#212529] text-center">{name}</TableCell>
      <TableCell className="text-center flex justify-center items-center gap-3">
        <button className="bg-green-500 text-white p-2 rounded w-full">
          Approve
        </button>
        <button className="bg-red-500 text-white p-2 rounded w-full">
          Reject
        </button>
      </TableCell>
    </TableRow>
  );
};

export default BookingRequestTable;
