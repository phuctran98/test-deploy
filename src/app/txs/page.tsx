// src/app/txs/page.tsx
"use client";

import { Suspense } from "react";
import TransactionsPageContent from "./TransactionsPageContent";

export default function TransactionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransactionsPageContent />
    </Suspense>
  );
}