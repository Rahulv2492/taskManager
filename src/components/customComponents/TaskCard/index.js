import React from 'react';
import {
    View,Text
} from 'react-native';
import PropTypes from 'prop-types'; // ES6

import { styles } from "./style";


const TaskCard = ({ name, desc, date }) => {
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.taskName}>{name}</Text>
                <Text style={styles.taskDesc}>{desc}</Text>
            </View>
            <View style={styles.taskDate}>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    );
}
TaskCard.prototype={
    name:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
}
export default TaskCard;
