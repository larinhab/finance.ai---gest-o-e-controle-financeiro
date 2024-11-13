"use client";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

interface TransactionsPieChartProps {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  typesPercentage: TransactionPercentagePerType;
}

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#548499",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

const TransactionsPieChart = ({
  expensesTotal,
  depositsTotal,
  investmentsTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#4da8c9",
    },
  ];

  return (
    <Card className="flex flex-col pb-10">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] p-6"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2 px-20">
          <PercentageItem
            title="Receita"
            icon={<TrendingUpIcon size={20} className="text-primary" />}
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            title="Despesa"
            icon={<TrendingDownIcon size={20} className="text-red-600" />}
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            title="Investido"
            icon={<PiggyBankIcon size={20} className="text-sky-300" />}
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsPieChart;
