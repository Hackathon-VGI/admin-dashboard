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

const ManageRoutes = () => {
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
            <TableHead className="text-center">Bus Stops</TableHead>
            <TableHead className="text-center">Block</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
          <CustomTableRow stopName="Klinikum" />
        </TableBody>
      </Table>
    </div>
  );
};

type RowProps = {
  stopName: string;
};

const CustomTableRow = ({ stopName }: RowProps) => {
  return (
    <TableRow>
      <TableCell className="text-[#212529] text-center">{stopName}</TableCell>
      <TableCell className="text-center flex justify-center items-center gap-3">
        <button className="bg-red-500 text-white p-2 rounded w-full">
          Block
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ManageRoutes;
