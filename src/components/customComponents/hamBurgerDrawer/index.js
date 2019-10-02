import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { styles } from "./style";

class HamBurgerDrawer extends PureComponent {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={styles.drawerContainer}>
                <TouchableOpacity onPress={this.toggleDrawer}>
                    <Image
                        source={require('./../../../assets/images/menu.png')}
                        style={styles.drawerIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default HamBurgerDrawer;