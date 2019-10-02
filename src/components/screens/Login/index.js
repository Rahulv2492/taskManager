import React,{Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styles } from "./style";
import {Input,FormError,Button} from './../../customComponents'
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      formFields:{
        userName:'',
        password:'',
      },
      formError:{
        userNameErr:false,
        passwordErr:false,
      }
    }
  }
  handleChange=(text,field)=>{
    let {formFields}=this.state;
    if(field==='u_name'){
      formFields.userName=text
    }
    if(field==='pwd'){
      formFields.password=text
    }
    this.setState({
      formFields
    })
  }
  validator=()=>{
    const {formFields,formError}=this.state;
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
    if(formError.userNameErr || formError.passwordErr){
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

   Login=async ()=>{
    const {formFields}=this.state;
    if(this.validator()){
      try {
        let data=await AsyncStorage.getItem('users');
        let ParsedUserData=data ? JSON.parse(data).filter(user=>user.userName===formFields.userName && user.password===formFields.password):null;
        if(ParsedUserData){
          AsyncStorage.setItem('loggedIn','true');
          this.props.navigation.navigate('Dashboard')
        }else{
          Alert.alert('User Not available.')
        }
      } catch (error) {
        // Error saving data
      }
     
    }

  }
  render(){
    console.log("this.props",this.props)
    const {navigation}=this.props;
    const {formError,formFields}=this.state;
    return(
      <View style={styles.LoginContainer}>
        <View style={styles.fields}>
          <Input title="User Name" value={formFields.userName} onChangeText={(text)=>this.handleChange(text,"u_name")}/>
          {formError.userNameErr && <FormError errorMsg={"User Name can not be blank"}/>}
        </View>
        <View style={styles.fields}>
          <Input secureTextEntry={true} title="Password" value={formFields.password} onChangeText={(text)=>this.handleChange(text,"pwd")}/>
          {formError.passwordErr && <FormError errorMsg={"Password can not be blank"}/>}
        </View>
        <View style={styles.loginbutton}>
          <Button title="LOG IN" onPress={this.Login}/>
        </View>
        <View style={[styles.fields, styles.notHaveAccount]}>
          <Text >Don't have an account? </Text>
          <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </View>
      </View>
    ) 

  }
};

const mapStateToProps = (state) => {
  return {
    login :state.LoginReducer
  };
};


export default connect(mapStateToProps, null)(Login);