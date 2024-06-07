import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Settings } from "lucide-react";
import { NAV_ITEMS } from "@/SidebarConfig";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          {NAV_ITEMS.map((item) => {
            const { icon } = item;
            return (
              <Tooltip key={item?.label}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                    prefetch={false}
                  >
                    {icon("w-5 h-5")}
                    <span className="sr-only">{item?.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item?.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                prefetch={false}
              >
                <Settings className="w-5 h-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Sidebar;
