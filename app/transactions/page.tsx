import { db } from "../_lib/prisma";

import AddTransactionButton from "../_components/buttons/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { Transactioncolumns } from "./_columns";
import NavBar from "../_components/navbar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-10">
        {/* TITLE AND BUTTON */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={Transactioncolumns} data={transactions}></DataTable>
      </div>
    </>
  );
};
export default TransactionsPage;
