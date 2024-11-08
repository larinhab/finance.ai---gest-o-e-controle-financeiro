import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Lazer",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  SALARY: "Salário",
  UTILITY: "Utilidade",
  OTHER: "Outros",
};

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
];

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  PIX: "Pix",
  SALARY: "Salário",
  OTHER: "Outros",
};

export const TRANSACTIONS_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.SALARY,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.SALARY],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
];

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Saída",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Entrada",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];
