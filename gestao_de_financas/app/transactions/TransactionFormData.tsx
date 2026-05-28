import { Transaction } from "../types/transaction";

export type TransactionFormData = Omit<Transaction, "id">

export interface TransactionFormProps {
    transaction: TransactionFormData;
    onSubmit: (transaction: TransactionFormData) => void;
}
