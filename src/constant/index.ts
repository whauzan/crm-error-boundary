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
