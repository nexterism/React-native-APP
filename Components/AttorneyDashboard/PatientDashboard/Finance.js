import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Picker,
  Textarea,
} from 'native-base';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderTwo from '../../Common/Headers/HeaderTwo';
export default function Finance(props) {
  return (
    <React.Fragment>
      <HeaderTwo name="Finance" {...props} />
      <View style={style.Phead}>
        <View style={style.Item}>
          <View style={{flexDirection: 'row'}}>
            <EvilIcon name="search" size={25} />
            <TextInput style={{width: 330}} placeholder="Search" />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Feather name="mic" size={17} />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 30,
              paddingRight: 30,
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>TOTAL</Text>
            <Text>:</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>$1200</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 30,
              paddingRight: 30,
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Available</Text>
            <Text style={{marginLeft: -25}}>:</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>$608</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 30,
              paddingRight: 30,
              padding: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Used</Text>
            <Text>:</Text>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>$592</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 20,
              padding: 10,
            }}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => props.navigation.navigate('AddExpenses')}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                ADD
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  Phead: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  Item: {
    // marginTop: 30,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    // padding: 5,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#686868',
  },
  CardB: {
    padding: 10,
    height: hp('80%'),
    width: wp('100%'),
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
    padding: 8,
    //   height:80,
    width: 70,
    backgroundColor: '#8430CC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
