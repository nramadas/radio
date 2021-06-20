import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

export function Lightbulb(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M15.538 18.999L15.2473 20.2575C15.0241 21.2208 14.2013 21.9184 13.2285 21.993L13.0554 21.9996H10.9437C9.95426 21.9996 9.0885 21.3547 8.79678 20.4232L8.75135 20.2559L8.461 18.999H15.538ZM12 2.00098C16.0041 2.00098 19.25 5.24691 19.25 9.25098C19.25 11.3875 18.3144 13.3443 16.4846 15.0917C16.4493 15.1254 16.4247 15.1687 16.4137 15.2162L15.886 17.499H8.114L7.58801 15.2164C7.57702 15.1688 7.55234 15.1255 7.51701 15.0917C5.68616 13.3443 4.75 11.3875 4.75 9.25098C4.75 5.24691 7.99593 2.00098 12 2.00098Z" />
    </Svg>
  );
}
