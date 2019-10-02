import React,{Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Alert
} from 'react-native';

import { styles } from "./style";
import {Input,FormError,Button} from './../../customComponents';
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      formFields:{
        fName:'',
        userName:'',
        password:'',
      },
      formError:{
        fNameErr:false,
        userNameErr:false,
        passwordErr:false,
      }
    }
  }
  handleChange=(text,field)=>{
    let {formFields}=this.state;
    if(field==='f_name'){
      console.log("text",text)
      formFields.fName=text
    }
    if(field==='u_name'){
      formFields.userName=text
    }
    if(field==='pwd'){
      formFields.password=text
    }
    console.log("formFields",formFields.userName)
    this.setState({
      formFields
    })
  }
  validator=()=>{
    const {formFields,formError}=this.state;
    if(!formFields.fName){
      formError.fNameErr=true
    }else{
      formError.fNameErr=false
    }
    if(!formFields.userName){
      formError.userNameErr=true
    }else{
      formError.userNameErr=false
    }
    if(!formFields.password){
      formError.passwordErr=true
    }else{
      formError.passwordErr=false
    }
    if(formError.fNameErr || formError.userNameErr || formError.passwordErr){
      this.setState({
        formError
      })
      return false
    }
    this.setState({
      formError
    })
    return true
  }

  registerUser=async ()=>{
    const {formFields}=this.state;
    const {fName,userName,password}=formFields

    if(this.validator()){
      try {
        let existingUsers= await AsyncStorage.getItem('users');
        console.log("dataObj",existingUsers)

        let parsedExistingUsers=existingUsers && existingUsers.length>0 ? JSON.parse(existingUsers):[];
        console.log("checkIfUserExist",parsedExistingUsers)

        let checkIfUserExist=parsedExistingUsers.filter(user=>user.userName===userName)
        if(checkIfUserExist.length>0){
          Alert.alert('User already exist!');
          return
        }
        let dataObj=[...parsedExistingUsers,{...formFields}];

        await AsyncStorage.setItem('users',JSON.stringify(dataObj));

      Alert.alert('Sussefully Registered!!');
      
      this.setState({
        formFields:{
          fName:'',
          userName:'',
          password:'',
        }
      })
      } catch (error) {
        // Error saving data
      }

    }

  }
  render(){
    const {formFields,formError}=this.state;
    const {fName,userName,password}=formFields
    return (
      <View style={styles.LoginContainer}>
        <View style={[styles.fields]}>
          <Input title="Full Name" value={fName} onChangeText={(text)=>this.handleChange(text,"f_name")}/>
          {formError.fNameErr && <FormError errorMsg={"Full Name can not be blank"}/>}
        </View>
        <View style={styles.fields}>
          <Input title="User Name" value={userName} onChangeText={(text)=>this.handleChange(text,"u_name")}/>
          {formError.userNameErr && <FormError errorMsg={"User Name can not be blank"}/>}
        </View>
        <View style={styles.fields}>
          <Input secureTextEntry={true} title="Password" value={password} onChangeText={(text)=>this.handleChange(text,"pwd")}/>
          {formError.passwordErr && <FormError errorMsg={"Password can not be blank"}/>}
        </View>
        <View style={styles.loginbutton}>  
          <Button title="SIGN UP" onPress={this.registerUser}/>
        </View>
        <View style={[styles.fields,styles.notHaveAccount]}>
          <Text >Already have and account? </Text>
          <Text style={styles.signUpLink} onPress={() => this.props.navigation.navigate('Login')}>Log in</Text>
        </View>
  
      </View>
    );
  }

};
export default SignUp;
