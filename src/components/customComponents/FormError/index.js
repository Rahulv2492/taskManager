import React from 'react';
import {
  Text
} from 'react-native';
import PropTypes from 'prop-types'; 

import { styles } from "./style";

const FormError = ({errorMsg}) => {
  return (
      <>
        <Text style={styles.error}>{errorMsg}</Text>
      </>
  );
};

FormError.prototype={
  errorMsg:PropTypes.string.isRequired
}
export default FormError;
