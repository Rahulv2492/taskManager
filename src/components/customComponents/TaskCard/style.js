import { StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor:'white',
        marginVertical: 10,
        marginHorizontal: 10,
        width:Dimensions.get('window').width-40
    },
    taskName:{
        fontSize:18,
        fontWeight:'bold'
    },
    taskDesc:{
        color:'#A0A0A0',
        marginTop:10
    },
    taskDate:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    date:{
        color:'#A0A0A0',
    }

})
