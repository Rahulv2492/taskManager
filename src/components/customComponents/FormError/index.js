import React from 'react';
import {
  Text
} from 'react-native';

import { styles } from "./style";

const Input = ({errorMsg}) => {
  return (
      <>
        <Text style={styles.error}>{errorMsg}</Text>
      </>
  );
};
export default Input;
