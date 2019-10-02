import React from 'react';
import {
  TextInput,
  Text
} from 'react-native';

import { styles } from "./style";

const Input = ({title,...rest}) => {
  return (
      <>
        <Text>{title}</Text>
        <TextInput
          style={styles.Textfields}
          {...rest}
        />
      </>
  );
};
export default Input;
