"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import request from "@/utils/api";
import { endPoints } from "@/utils/endPoints";
import { toast } from "sonner";

interface RowProps {
  stop_name: string;
  onToggleBlock: (stop_name: string, currentStatus: boolean) => void;
  toggleBlock: boolean;
}

const ManageRoutes = () => {
  const [searchText, setSearchText] = useState("");
  const [stops, setStops] = useState<string[]>([]);
  const [blockStatus, setBlockStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchStopNames = async () => {
      try {
        const response = await request.get(`${endPoints.get_all_stops}`);
        const data = response.data?.stop_names;

        if (Array.isArray(data)) {
          setStops(data);

          const initialBlockStatus: Record<string, boolean> = {};
          data.forEach((stop) => {
            initialBlockStatus[stop] = false;
          });
          setBlockStatus(initialBlockStatus);
        } else {
          console.log("No stops found!");
        }
      } catch (error: any) {
        console.error("Error fetching stops:", error.message);
      }
    };

    fetchStopNames();
  }, []);

  const handleToggleBlock = async (
    stop_name: string,
    currentStatus: boolean
  ) => {
    try {
      const newStatus = !currentStatus;

      const response = await request.post(`${endPoints.toggle_stop_status}`, {
        stop_name: stop_name,
        stop_blocked: newStatus,
      });

      setBlockStatus((prevStatus) => ({
        ...prevStatus,
        [stop_name]: newStatus,
      }));

      toast.success("Stop Status Updated");
    } catch (error: any) {
      console.error("Error updating stop status:", error.message);
      toast.error("Cannot Update Stop Status");
    }
  };

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
            <TableHead className="text-left">Bus Stops</TableHead>
            <TableHead className="text-center">Block</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stops
            .filter((elem) =>
              elem.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((stop, index) => (
              <CustomTableRow
                key={index}
                stop_name={stop}
                onToggleBlock={handleToggleBlock}
                toggleBlock={blockStatus[stop]}
              />
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

const CustomTableRow = ({
  stop_name,
  onToggleBlock,
  toggleBlock,
}: RowProps) => {
  return (
    <TableRow>
      <TableCell className="text-[#212529] text-left">{stop_name}</TableCell>
      <TableCell className="text-center flex justify-center items-center gap-3">
        <button
          className={`${
            !toggleBlock ? "bg-red-500" : "bg-[#0083C6]"
          } text-white p-2 rounded w-full`}
          onClick={() => onToggleBlock(stop_name, toggleBlock)}
        >
          {toggleBlock ? "Unblock" : "Block"}
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ManageRoutes;
