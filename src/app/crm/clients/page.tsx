"use client";

import { Profile } from "@/@types";
import { Button } from "@/components/ui/Button";
import { useFetch } from "@/hooks/useFetch";
import { AlertTriangle } from "lucide-react";
import React from "react";
import FinancialTable from "./components/FinancialTable";
import Card from "./components/Card";

const Page = () => {
  const {
    data: profileData,
    isError,
    isLoading,
    refetch,
  } = useFetch<Profile>(["profile"], "profile");

  if (isError) {
    return (
      <div className="flex items-center justify-center px-8 pt-8 lg:px-28">
        <div className="flex h-[475px] w-full flex-col items-center justify-center rounded-xl bg-[#FFE4E8]">
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
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <p className="px-8 pt-8 md:px-28">Loading...</p>;
  }

  return (
    <main className="p-8 lg:px-28">
      <div className="flex flex-col gap-y-8">
        <div>
          <h1 className="text-3xl font-semibold">
            {profileData?.clientInformation.name}
          </h1>
          <div className="mt-5 h-px bg-[#EAECF0]" />
        </div>
        <div className="rounded-xl bg-[#F9FAFB] px-6 py-5 text-[#475467]">
          <div className="grid grid-cols-2 gap-y-3 md:flex md:gap-x-14">
            <div className="flex flex-col gap-y-2 text-sm font-medium">
              <p className="text-base font-semibold">Gender</p>
              <p>{profileData?.clientInformation.gender}</p>
            </div>
            <div className="flex flex-col gap-y-2 text-sm font-medium">
              <p className="text-base font-semibold">DOB</p>
              <p>
                {
                  new Date(profileData?.clientInformation.dob!)
                    .toLocaleString("id-ID")
                    .split(",")[0]
                }
              </p>
            </div>
            <div className="flex flex-col gap-y-2 text-sm font-medium">
              <p className="text-base font-semibold">Marital Status</p>
              <p>{profileData?.clientInformation.maritalStatus}</p>
            </div>
            <div className="flex flex-col gap-y-2 text-sm font-medium">
              <p className="text-base font-semibold">Employment</p>
              <p>{profileData?.clientInformation.employmentStatus}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Financials</h3>
          <div className="my-5 h-px bg-[#EAECF0]" />
          <FinancialTable profileData={profileData!} />
          <h3 className="text-lg font-semibold">Goals</h3>
          <div className="my-5 h-px bg-[#EAECF0]" />
          <div className="grid w-full grid-cols-1 justify-between gap-x-3 gap-y-4 md:grid-cols-2 lg:gap-x-8">
            <Card
              title="Emergency Fund"
              price={profileData?.goals.emergencyFund!}
              ctaText="Edit"
            />
            <Card
              title="Travel"
              price={profileData?.goals.travel!}
              ctaText="Edit"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Insurances</h3>
          <div className="my-5 h-px bg-[#EAECF0]" />
          <div className="grid w-full grid-cols-1 justify-between gap-x-3 gap-y-4 md:grid-cols-2 lg:gap-x-8">
            <Card
              title="Life Insurance"
              price={profileData?.insurances.lifeInsurance!}
              subtitle="Plan A"
              ctaText="View Insurance"
            />
            <Card
              title="Personal Accident"
              price={profileData?.insurances.personalAccident!}
              subtitle="Plan A"
              ctaText="View Insurance"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
