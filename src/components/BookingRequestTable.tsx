import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const BookingRequestTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Bus Number</TableHead>
                        <TableHead>Bus Route</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                        <TableHead className="text-right">Who Booked</TableHead>
                        <TableHead className="text-right">Approve/Reject</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};


export default BookingRequestTable