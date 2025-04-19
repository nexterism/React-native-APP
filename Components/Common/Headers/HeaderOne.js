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
      <View style={style.Header}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")} style={{paddingLeft: 20}}>
          <Entypo name="dots-three-horizontal" size={25} color="#8430CC" />
        </TouchableOpacity>
        <Text style={style.Text}>Home</Text>
        <TouchableOpacity
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
        </TouchableOpacity>
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
  },
});
