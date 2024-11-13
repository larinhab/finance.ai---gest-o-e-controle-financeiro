import { CardContent, CardHeader } from "@/app/_components/ui/card";
import { WalletIcon } from "lucide-react";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import DashCard from "./dash-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
  return (
    <div className="">
      <CardHeader>
        <DashCard
          icon={<WalletIcon size={32} />}
          title="Saldo"
          amount={balance}
          size="large"
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 items-center gap-6">
          <DashCard
            icon={<PiggyBankIcon size={32} className="text-sky-300" />}
            title="Investido"
            amount={investmentsTotal}
          />

          <DashCard
            icon={<TrendingUpIcon size={32} className="text-primary" />}
            title="Receita"
            amount={depositsTotal}
          />

          <DashCard
            icon={<TrendingDownIcon size={32} className="text-red-500" />}
            title="Despesa"
            amount={expensesTotal}
          />
        </div>
      </CardContent>
    </div>
  );
};

export default SummaryCards;
