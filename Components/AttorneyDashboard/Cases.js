import React, {useState} from 'react';
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
import HeaderTwo from '../Common/Headers/HeaderTwo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import All from './casesTabs/All';
import Active from './casesTabs/Active';
import Cancel from './casesTabs/cancelled';
import Close from './casesTabs/closed';
export default function Cases(props) {
  const [Tabs, setTabs] = useState(['All', 'Active', 'Cancelled', 'Closed']);
  const [ActiveTab, setActiveTab] = useState('All');
  return (
    <React.Fragment>
      <HeaderTwo name="Cases" {...props} />
      <View style={style.Body}>
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
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {Tabs.map((v, k) => {
              return (
                <React.Fragment>
                  <TouchableOpacity
                    onPress={() => setActiveTab(v)}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: ActiveTab == v ? '#8430CC' : 'white',
                      height: 30,
                      width: 90,
                      borderWidth: 1,
                      borderColor: '#8430CC',
                    }}>
                    <Text
                      style={{
                        color: ActiveTab == v ? 'white' : '#8430CC',
                        fontWeight: ActiveTab == v ? 'bold' : '',
                      }}>
                      {v}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </View>
          <View>
            {ActiveTab == 'All' ? <All /> : <React.Fragment></React.Fragment>}
          </View>
          <View>
            {ActiveTab == 'Active' ? (
              <Active />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </View>
          <View>
            {ActiveTab == 'Cancelled' ? (
              <Cancel />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </View>
          <View>
            {ActiveTab == 'Closed' ? (
              <Close />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  Body: {
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
});
