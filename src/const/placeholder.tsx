import { ActiveUsers, InactiveUsers, Users } from "./icons";

export const data = [
  {
    id: 1,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Robert Miller",
    email: "robert.miller@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    status: "Active",
  },
  {
    id: 5,
    name: "James Taylor",
    email: "james.taylor@example.com",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "William Lee",
    email: "william.lee@example.com",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Charlotte Clark",
    email: "charlotte.clark@example.com",
    status: "Active",
  },
  {
    id: 9,
    name: "Benjamin Harris",
    email: "benjamin.harris@example.com",
    status: "Inactive",
  },
];

export const columns = ["id", "name", "email", "status"];

export const statsData = [
  { title: "Total Users", value: data.length, icon: <Users /> },
  { title: "Total Active Users", value: data.filter(user => user.status === "Active").length, icon: <ActiveUsers /> },
  { title: "Total Inactive Users", value: data.filter(user => user.status === "Inactive").length, icon: <InactiveUsers /> },
];
