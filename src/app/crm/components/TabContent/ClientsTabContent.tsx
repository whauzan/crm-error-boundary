"use client";

import { Client } from "@/@types";
import { TabsContent } from "@/components/ui/Tabs";
import { useFetch } from "@/hooks/useFetch";
import React from "react";
import DataTable from "../DataTable/DataTable";
import { columns } from "../DataTable/Columns";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ClientsTabContent = () => {
  const {
    data: clientsData,
    isError,
    isLoading,
    refetch,
  } = useFetch<Client[]>(["clients"], "clients");

  if (isError) {
    return (
      <TabsContent
        value="clients"
        className="mt-5 flex h-[475px] flex-col items-center justify-center rounded-xl bg-[#FFE4E8]"
      >
        <AlertTriangle className="h-6 w-6 text-[#C01148FF]" />
        <div className="mb-6 mt-4 text-center text-[#89123E]">
          <h2 className="font-semibold">Opps! Unable to load clients</h2>
          <p className="text-sm font-normal">
            Something went wrong that we didn&apos;t anticipate
          </p>
        </div>
        <Button
          className="rounded-lg border border-[#D0D5DD] bg-white font-semibold text-[#344054]"
          onClick={() => refetch()}
        >
          Retry
        </Button>
      </TabsContent>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <TabsContent value="clients">
      <DataTable data={clientsData!} columns={columns} />
    </TabsContent>
  );
};

export default ClientsTabContent;
