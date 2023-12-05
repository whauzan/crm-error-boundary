interface NavigationLinksProps {
  label: string;
  route: string;
}

export const NavigationLinks: NavigationLinksProps[] = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "CRM",
    route: "/crm",
  },
  {
    label: "Submission",
    route: "/submission",
  },
  {
    label: "Commission",
    route: "/commission",
  },
  {
    label: "LMS",
    route: "/lms",
  },
];
