import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="flex w-full justify-between">
      <div>
      <Button variant="outline">Manage Bookings</Button>
      <Button variant="default">Manage Routes</Button> 
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
