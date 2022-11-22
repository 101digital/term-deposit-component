import React, { ReactNode } from 'react';
import { useTermDepositContextValue, TermDepositContext } from './context';

export type TermDepositProviderProps = {
  children: ReactNode;
};

const TermDepositProvider = (props: TermDepositProviderProps) => {
  const { children } = props;
  const onboardingContextData = useTermDepositContextValue();

  return (
    <TermDepositContext.Provider value={onboardingContextData}>
      {children}
    </TermDepositContext.Provider>
  );
};

export default TermDepositProvider;
