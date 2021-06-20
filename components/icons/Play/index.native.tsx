import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Play(props: SvgProps) {
  return (
    <Svg {...props} viewBox="0 0 48 48">
      <Path d="M16.7501 8.4121L41.1672 21.1169C42.7595 21.9454 43.3786 23.9078 42.5501 25.5001C42.2421 26.0921 41.7592 26.575 41.1672 26.883L16.7501 39.5879C15.1579 40.4164 13.1954 39.7972 12.3669 38.2049C12.1259 37.7416 12 37.227 12 36.7048V11.2952C12 9.50024 13.4551 8.04517 15.25 8.04517C15.6977 8.04517 16.1397 8.13764 16.5486 8.31587L16.7501 8.4121Z" />
    </Svg>
  );
}