import {AsyncStorage} from 'react-native'

const checkAccess=(data)=>{
    return new Promise((resolve, reject) => {
        let users= AsyncStorage.getItem('users');
            console.log('users',users)
            if(users){
                resolve(users);
            }else{
                reject('User does not exist')
            }
    })
}

export {checkAccess}