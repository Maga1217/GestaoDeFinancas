import React from "react";
import { Transaction } from "../types/transaction";
import { useTransactionStore } from "../store/useTransactionStore";

export type TransactionFormData = Omit<Transaction, "id">

export interface TransactionFormProps {
    transaction: TransactionFormData;
    onSubmit: (transaction: TransactionFormData) => void;
}


