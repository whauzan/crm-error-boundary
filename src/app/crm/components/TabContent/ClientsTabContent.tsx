"use client";

import { Client } from "@/@types";
import { TabsContent } from "@/components/ui/Tabs";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import DataTable from "../DataTable/DataTable";
import { columns } from "../DataTable/Columns";

const ClientsTabContent = () => {
  const { data: clientsData, isError } = useFetch<Client[]>(
    ["clients"],
    "clients",
  );
  console.log(clientsData);

  if (isError || clientsData === undefined) {
    return <p>Error</p>;
  }

  return (
    <TabsContent value="clients">
      <DataTable data={clientsData} columns={columns} />
    </TabsContent>
  );
};

export default ClientsTabContent;
