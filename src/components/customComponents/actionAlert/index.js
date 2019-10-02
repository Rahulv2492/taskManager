import {Alert} from 'react-native';
import PropTypes from 'prop-types'; 

const ActionAlert = (title,subTitle,callBack) => {
  Alert.alert(
    `${title}`,
    `${subTitle}`,
    [
      {text: 'CANCEL', style: 'cancel'},
      {text: 'OK', onPress: () => callBack()}
    ]
  );
};
ActionAlert.prototype={
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired,
  callBack:PropTypes.string.isRequired,
}
export default ActionAlert;