import { StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    subContainer:{
        width: '100%',
        height:'80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        padding:20,
        display:'flex',
        justifyContent:'space-between'
    },
    actionContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        height:'15%',
        borderTopWidth:1,
        borderColor:'#DFDFDF'
    },
    button:{
        marginLeft:12
    },
    plusIcon:{
        height:20,
        width:20,
        marginRight:15,

    },
    cancelModal:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    fields:{
        marginTop:20
    }
})
