import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        margin:20
        },
    fields:{
        margin:20,
        width:'100%'
    },
    loginbutton:{
        width:'30%'
    },
    notHaveAccount:{
        textAlign:'center',
        color:'#B5B5B5',
       display:'flex',
       flexDirection:'row',
       justifyContent:'center'
    },
    signUpLink:{
        color:'blue',
        borderBottomWidth:1,
        borderColor:'blue'
    }
})
