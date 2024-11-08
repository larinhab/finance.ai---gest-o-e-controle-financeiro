"use-client";

import { z } from "zod";
import { ArrowDownUp } from "lucide-react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog,
  DialogFooter,
} from "../ui/dialog";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { MoneyInput } from "../input/money-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  TRANSACTION_TYPE_OPTIONS,
  TRANSACTIONS_PAYMENT_METHOD_OPTIONS,
  TRANSACTION_CATEGORY_OPTIONS,
} from "@/app/_constants/transactions";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "O nome é obrigatório",
  }),
  amount: z.number().min(1, {
    message: "O valor é obrigatório",
  }),
  type: z.nativeEnum(TransactionType, {
    required_error: "O tipo é obrigatório",
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: "A categoria é obrigatória",
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: "O método de pagamento é obrigatório",
  }),
  date: z.date({
    required_error: "A data é obrigatória.",
  }),
});

const onSubmit = () => {};

const AddTransactionButton = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      category: TransactionCategory.OTHER,
      type: TransactionType.EXPENSE,
      paymentMethod: TransactionPaymentMethod.OTHER,
      date: new Date(),
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button className="rounded-full">
            Adicionar transação
            <ArrowDownUp className="ml-1" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Transação</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput placeholder="R$ 00,00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex.: Consulta médica " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Saída" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_TYPE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Saúde" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_CATEGORY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de Pagamento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Salário" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTIONS_PAYMENT_METHOD_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button>Cancelar</Button>
              <Button>Adicionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionButton;
