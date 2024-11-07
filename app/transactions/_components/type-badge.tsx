import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";
import { Transaction, TransactionType } from "@prisma/client";

interface TransactionBadgeComponentProps {
  transaction: Transaction;
}

const TransactionBadgeComponent = ({
  transaction,
}: TransactionBadgeComponentProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-lime-700 bg-muted bg-opacity-30 font-bold text-primary hover:bg-transparent">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted bg-red-950 bg-opacity-30 font-bold text-red-600 hover:bg-transparent">
        <CircleIcon className="mr-2 fill-red-800" size={10} />
        Despesa
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-muted bg-sky-900 bg-opacity-30 font-bold text-sky-300 hover:bg-transparent">
        <CircleIcon className="mr-2 fill-sky-300" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionBadgeComponent;
