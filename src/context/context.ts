import React from 'react';

export interface TermDepositContextData {}

export const TermDepositDefaultValue: TermDepositContextData = {};

export const TermDepositContext =
  React.createContext<TermDepositContextData>(TermDepositDefaultValue);

export function useTermDepositContextValue(): TermDepositContextData {
  return {};
}
