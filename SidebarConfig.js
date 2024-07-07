import { CalendarIcon, SquareLibrary, WorkflowIcon } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Library",
    href: "/library",
    icon: (className) => <SquareLibrary className={className} />,
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
