import { ArrowDownUp } from "lucide-react";
import { Button } from "../button";

const AddTransactionButton = () => {
  return (
    <div>
      <Button className="rounded-full">
        Adicionar transação
        <ArrowDownUp className="ml-1" />
      </Button>
    </div>
  );
};

export default AddTransactionButton;
