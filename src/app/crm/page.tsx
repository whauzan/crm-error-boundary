"use client";

import { Client, Profile } from "@/@types";
import { useFetch } from "@/hooks/useFetch";

export default function Page() {
  const { data: clientsData } = useFetch<Client[]>(["clients"], "clients");
  const { data: profileData } = useFetch<Profile>(["profile"], "profile");
  console.log(clientsData);
  console.log(profileData);
  return <main>CRM</main>;
}
