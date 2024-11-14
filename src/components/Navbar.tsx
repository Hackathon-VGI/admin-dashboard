"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [buttonState, setButtonState] = useState("MANAGE");
  useEffect(() => {
    if (pathname === "/") {
      setButtonState("MANAGE");
    } else {
      setButtonState("ROUTES");
    }
  }, [pathname]);

  return (
    <div className="flex w-full justify-between">
      <div className="flex justify-center items-center gap-8">
        <Link
          href="/"
          className={`${
            buttonState === "MANAGE"
              ? "bg-[#0083C6] text-white"
              : "text-[#0083c6] bg-white "
          }  px-5 min-w-[200px] font-medium shadow-md hover:opacity-60 transition-all text-lg  h-14 flex justify-center items-center rounded-[10px]`}
        >
          Manage Bookings
        </Link>
        <Link
          href="/manageRoutes"
          className={`${
            buttonState === "ROUTES"
              ? "bg-[#0083C6] text-white"
              : "text-[#0083c6] bg-white "
          }  px-5 min-w-[200px] shadow-md font-medium hover:opacity-60 transition-all text-lg h-14 flex justify-center items-center rounded-[10px]`}
        >
          Manage Routes
        </Link>
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
