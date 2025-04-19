import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderOne from '../Common/Headers/HeaderOne';
export default function Home(props) {
  const [state, setState] = useState([{},{},{},{},{},{}]);
  return (
    <React.Fragment>
      <HeaderOne {...props} />
      <View style={{padding: 20}}>
        <Text style={style.Text}>Welcome, Attorney!</Text>
      </View>
      <View style={style.Body}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}>
          <Text
            style={[
              style.Text,
              {fontSize: 20, fontWeight: 'normal', padding: 10},
            ]}>
            Active Cases
          </Text>
          <TouchableOpacity
            style={style.btn}
            onPress={() => props.navigation.navigate('Addcase')}>
            <Text style={{fontSize: 15, color: 'white'}}>ADD</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator="false">
          {state.map(() => (
            <TouchableOpacity
            onPress={()=>props.navigation.navigate("Patient")}
            style={style.Card}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Rodger</Text>
              <Text style={{fontSize: 15}}>Status: Investigation</Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Entypo name="calendar" size={15} />
                <Text style={{paddingLeft: 10}}>4 Jan 2020</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  Body: {
    height: hp('80%'),
    width: wp('100%'),
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 45,
  },
  Card: {
    padding: 15,
    height: 100,
    width: '100%',
    backgroundColor: '#F2F2F2',
    marginTop: 20,
    borderRadius: 10,
  },
  btn: {
    //   padding:3,
    //   height:80,
    width: 70,
    backgroundColor: '#8430CC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
