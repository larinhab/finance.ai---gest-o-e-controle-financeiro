"use client";
import { useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { Button } from "../ui/button";
import UpsertTransactionDialog from "../upsert/upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUp className="ml-1" />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
      ;
    </>
  );
};

export default AddTransactionButton;
