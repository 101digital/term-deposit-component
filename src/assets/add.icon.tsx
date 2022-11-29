import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const AddIcon: React.FC<Props> = ({ size }) => {
  return (
    <SvgCss
      xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.7791 22C17.2003 22 21.595 17.5228 21.595 12C21.595 6.47715 17.2003 2 11.7791 2C6.35789 2 1.96313 6.47715 1.96313 12C1.96313 17.5228 6.35789 22 11.7791 22Z" stroke="#3E2D68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.7791 8V16" stroke="#3E2D68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.85278 12H15.7055" stroke="#3E2D68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `}
      width={size}
      height={size}
    />
  );
};
export { AddIcon };
