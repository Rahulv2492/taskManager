import {Alert} from 'react-native';

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
export default ActionAlert;