import { CardContent, CardHeader } from "@/app/_components/ui/card";
import { WalletIcon } from "lucide-react";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import DashCard from "./dash-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCards {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCards) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const invesmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const balance = depositsTotal - invesmentsTotal - expensesTotal;

  return (
    <div className="">
      <CardHeader>
        <DashCard
          icon={<WalletIcon size={20} />}
          title="Saldo"
          amount={balance}
          size="large"
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6">
          <DashCard
            icon={<PiggyBankIcon size={20} className="text-sky-300" />}
            title="Investido"
            amount={invesmentsTotal}
          />

          <DashCard
            icon={<TrendingUpIcon size={20} className="text-primary" />}
            title="Receita"
            amount={depositsTotal}
          />

          <DashCard
            icon={<TrendingDownIcon size={20} className="text-red-500" />}
            title="Despesa"
            amount={expensesTotal}
          />
        </div>
      </CardContent>
    </div>
  );
};

export default SummaryCards;
