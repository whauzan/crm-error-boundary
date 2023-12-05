import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import ClientsTabContent from "./components/TabContent/ClientsTabContent";
import PolicyTabContent from "./components/TabContent/PolicyTabContent";
import SupportTabContent from "./components/TabContent/SupportTabContent";

export default function Page() {
  return (
    <main className="px-28 pt-8">
      <h2 className="text-3xl font-semibold">CRM</h2>
      <div className="my-5 h-px bg-[#EAECF0]" />
      <Tabs defaultValue="clients" className="h-full">
        <TabsList>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="policy">Policy</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        <ClientsTabContent />
        <PolicyTabContent />
        <SupportTabContent />
      </Tabs>
    </main>
  );
}
