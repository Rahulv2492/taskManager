import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types'; // ES6

import { styles } from "./style";

const Button = ({title,primary,...rest}) => {
  return (
    <TouchableOpacity style={[styles.ButtonContainer,primary? styles.primary:styles.secondary]} {...rest}>
        <Text style={primary? styles.primaryTitleStyle:styles.secondaryTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
Button.defaultProps={
  primary:true
}
Button.prototype={
  title:PropTypes.string.isRequired,
  primary:PropTypes.bool
}
export default Button;
