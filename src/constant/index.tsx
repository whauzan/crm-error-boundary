import {
  BookOpenText,
  HeartHandshake,
  KanbanSquare,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";
import React from "react";

interface NavigationLinksProps {
  label: string;
  route: string;
  icon: React.ReactNode;
}

export const NavigationLinks: NavigationLinksProps[] = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "CRM",
    route: "/crm",
    icon: <KanbanSquare />,
  },
  {
    label: "Submission",
    route: "/submission",
    icon: <Newspaper />,
  },
  {
    label: "Commission",
    route: "/commission",
    icon: <HeartHandshake />,
  },
  {
    label: "LMS",
    route: "/lms",
    icon: <BookOpenText />,
  },
];

export const genders = [
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Male",
    label: "Male",
  },
];

export const maritalStatus = [
  {
    value: "Single",
    label: "Single",
  },
  {
    value: "Married",
    label: "Married",
  },
  {
    value: "Divorced",
    label: "Divorced",
  },
];

export const employmentStatus = [
  {
    value: "Employed",
    label: "Employed",
  },
  {
    value: "Unemployed",
    label: "Unemployed",
  },
];
