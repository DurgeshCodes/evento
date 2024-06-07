import { CalendarIcon, LayoutDashboardIcon, WorkflowIcon } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (className) => <LayoutDashboardIcon className={className} />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: (className) => <CalendarIcon className={className} />,
  },
  {
    label: "Workflow",
    href: "/workflow",
    icon: (className) => <WorkflowIcon className={className} />,
  },
];
export { NAV_ITEMS };
