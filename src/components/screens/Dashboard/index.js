import React,{Component} from 'react';
import {
  View,
  Text,
  BackHandler,
  FlatList,
  AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types'; // ES6
import { connect } from 'react-redux';

//Custom Components
import {ActionAlert,TaskCard} from './../../customComponents'

import { styles } from "./style";
class Dashboard extends Component{

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    ActionAlert('Confirm exit','Do you want to quit the app?',()=>BackHandler.exitApp())
    return true;
  }

  render(){
    let data= AsyncStorage.getItem('taskList');
    const {taskList}=this.props.TaskListReducer;
    console.log("taskList",this.props.TaskListReducer)
    let parsedData=data && data.length>0 ? JSON.parse(data):[];
    return (
      <View style={styles.DashboardContainer}>
        {taskList.length>0?
        <FlatList
          data={taskList.reverse()}
          renderItem={({ item }) => <TaskCard {...item}/>}
          keyExtractor={item => item.id}
        />
        :
        <Text>No Data Found</Text>
        }
      </View>
    );
  }

};
const mapStateToProps = (state) => {
  return {
      TaskListReducer: state.TaskListReducer
  };
};
export default connect(mapStateToProps,null)(Dashboard);

