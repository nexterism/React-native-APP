import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Home(props) {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 60,
          width: '100%',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{paddingLeft: 20, flexDirection: 'row'}}>
          <Icon name="ios-arrow-back" size={30} color="#8430CC" />
          <View style={style.backIcon}>
            <Text style={{fontSize: 16, color: '#8430CC'}}>Back</Text>
          </View>
        </TouchableOpacity>
          <Text style={style.Text}>{props.name}</Text>
       
          {/* <TouchableOpacity
            onPress={() => props.navigation.navigate('Notification')}
            style={{
              marginRight: 20,
              height: 40,
              width: 40,
              borderRadius: 100,
              backgroundColor: '#8430CC',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="ios-notifications-outline" color="white" size={30} />
          </TouchableOpacity> */}
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    backgroundColor: 'white',
  },
  Text: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingRight:180
  },
  backIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    marginTop: -4,
  },
});
