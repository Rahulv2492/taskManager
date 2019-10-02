import React,{useEffect,useState} from 'react';
import {
    Modal,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types'; // ES6
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styles } from "./style";
import { Input, Button } from './../../customComponents'

//Actions
import { toggleModal,addNewTask } from './../../../redux/actions/TaskList'

const AddTaskModal = (props) => {
    const { TaskListReducer, toggleModal,addNewTask } = props;
    let date=new Date();
    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    const [dataFileds,setDataFields]=useState({name:'',desc:'',date:`${day}-${month}-${year}`})
    return (
        <View>
            <TouchableWithoutFeedback style={{ width: '100%', height: '100%' }} onPress={() => toggleModal()}>
                <Image style={styles.plusIcon} source={require('./../../../assets/images/plus.png')} />
            </TouchableWithoutFeedback>
            <Modal
                animationType="slide"
                transparent={true}
                visible={TaskListReducer.isAddTaskVisible}
            >
                <View style={styles.container}>
                    <View style={styles.subContainer}>

                        <View>
                            <TouchableWithoutFeedback onPress={() => toggleModal()}>
                                <View style={styles.cancelModal}>
                                    <Image style={{ width: 20, height: 20 }} source={require('./../../../assets/images/multiply.png')} />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.fields}>
                                <Text>Task Name</Text>
                                <Input value={dataFileds.name} onChangeText={(text)=>setDataFields({...dataFileds,name:text})}/>
                            </View>
                            <View style={styles.fields}>
                                <Text>Task Description</Text>
                                <Input value={dataFileds.desc} numberOfLines={6} onChangeText={(text)=>setDataFields({...dataFileds,desc:text})}/>
                            </View>
                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.button}>
                                <Button title="CANCEL" primary={false} onPress={() => toggleModal()} />
                            </View>
                            <View style={styles.button}>
                                <Button title="ADD" onPress={()=>{
                                    toggleModal(); 
                                    addNewTask({...dataFileds,id:Math.floor(Math.random() * 20)})
                                    setDataFields({name:'',desc:'',date:`${day}-${month}-${year}`})
                                    }} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

AddTaskModal.prototype = {
    TaskListReducer: PropTypes.object,
    toggleModal: PropTypes.bool
}
const mapStateToProps = (state) => {
    return {
        TaskListReducer: state.TaskListReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleModal,
        addNewTask
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);