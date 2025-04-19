import React from 'react';
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
export default function Home(props) {
  return (
    <React.Fragment>
      <View style={style.Body}>
        <ScrollView showsVerticalScrollIndicator="false">
          <TouchableOpacity style={style.Card}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Rodger</Text>
            <Text style={{fontSize: 15}}>Status: Investigation</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Entypo name="calendar" size={15} />
              <Text style={{paddingLeft: 10}}>4 Jan 2020</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.Card}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Rodger</Text>
            <Text style={{fontSize: 15}}>Status: Investigation</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Entypo name="calendar" size={15} />
              <Text style={{paddingLeft: 10}}>4 Jan 2020</Text>
            </View>
          </TouchableOpacity>
        
      
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
