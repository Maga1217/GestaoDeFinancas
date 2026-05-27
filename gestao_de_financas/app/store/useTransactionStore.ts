import { create } from "zustand";
import { Transaction } from "../types/transaction";

type TransactionStore = {
    transactions: Transaction[],
    addTransaction: (transaction: Transaction) => void,
    removeTransaction: (id: string) => void,
    updateTransaction: (transaction: Transaction) => void
}

export const useTransactionStore = create<TransactionStore>((set) => ({
    transactions: [],
    addTransaction: (transaction: Transaction) => set((state) => ({ transactions: [...state.transactions, transaction] })),
    removeTransaction: (id: string) => set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== id) })),
    updateTransaction: (transaction: Transaction) => set((state) => ({ transactions: state.transactions.map((t) => t.id === transaction.id ? transaction : t) }))
}));