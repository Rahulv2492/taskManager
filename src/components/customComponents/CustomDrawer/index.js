import React from 'react'
import { SafeAreaView, ScrollView, View,AsyncStorage } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import PropTypes from 'prop-types'; 

//Custom Components
import {Button,Separator} from './../../customComponents'

//styels
import { styles } from "./style";

const handleSignOut=(navigation)=>{
    AsyncStorage.setItem('loggedIn','false');
    navigation.navigate('Login')
}
const CustomDrawer = props => {
    return (
        <ScrollView contentContainerStyle={styles.container}
        >
            <SafeAreaView
                style={styles.subContainer}
            >
                <>
                    {/* <DrawerNavigatorItems {...props} /> */}
                </>
                <Separator/>
                <View style={styles.signOutButtonContainer}>
                    <Button title="SIGN OUT" onPress={()=>handleSignOut(props.navigation)}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};

CustomDrawer.prototype={
    navigation:PropTypes.any
}

export default CustomDrawer;