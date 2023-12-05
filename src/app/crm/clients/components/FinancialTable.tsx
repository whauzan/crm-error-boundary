import { Profile } from "@/@types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/Table";
import React from "react";

interface FinancialTableProps {
  profileData: Profile;
}

const FinancialTable = ({ profileData }: FinancialTableProps) => {
  return (
    <div className="mb-6 rounded-lg border">
      <Table>
        <TableBody>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">Income</TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.income}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">
              Expenses
            </TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.expenses}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">
              Savings
            </TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.savings}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">
              Investment
            </TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.investment}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">Debt</TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.debt}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">
              Cashflow
            </TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.cashflow}
            </TableCell>
          </TableRow>
          <TableRow className="flex justify-between py-2 hover:bg-gray-100/70">
            <TableCell className="font-medium text-[#101828]">
              Networth
            </TableCell>
            <TableCell className="font-normal text-[#475467]">
              ${profileData?.financials.networth}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default FinancialTable;
