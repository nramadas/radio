import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Person(props: SvgProps) {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <Path d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4Z" />
      <Path d="M12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499Z" />
    </Svg>
  );
}
