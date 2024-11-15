import { TableCell, TableRow } from "@/components/ui/table";
import { Booking } from "@/utils/type";

const CustomTableRow = ({
  booking_id,
  bus_route,
  departure_time,
  departure_date,
  user_name,
  bus_number,
  onAccept,
  onReject,
}: Booking & {
  onAccept: (booking_id: string) => void;
  onReject: (booking_id: string) => void;
}) => {
  return (
    <TableRow>
      <TableCell className="text-[#212529] text-center font-medium">
        XXX
      </TableCell>
      <TableCell className="text-[#212529] text-center">{bus_route}</TableCell>
      <TableCell className="text-[#212529] text-center">
        {departure_time}
      </TableCell>
      <TableCell className="text-[#212529] text-center">
        {departure_date}
      </TableCell>
      <TableCell className="text-[#212529] text-center">{user_name}</TableCell>
      <TableCell className="text-center flex justify-center items-center gap-3">
        <button
          className="bg-green-500 text-white p-2 rounded w-full"
          onClick={() => onAccept(booking_id)}
        >
          Approve
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded w-full"
          onClick={() => onReject(booking_id)}
        >
          Reject
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
