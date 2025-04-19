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
import HeaderTwo from '../../Common/Headers/HeaderTwo';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Patient(props) {
  return (
    <React.Fragment>
      <HeaderTwo name="Patient" {...props} />
      <View style={style.Phead}>
        <View style={style.Heading}>
          <View>
            <Text style={style.Text1}>Welcome, Andrea!</Text>
          </View>
          <TouchableOpacity style={style.crossbtn}>
            <Text style={{fontSize: 25}}>x</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[style.Text1, {fontSize: 15, paddingLeft: 20}]}>
            $3,570
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 20,
          }}>
          <TouchableOpacity style={style.TreatmentBtn}>
            <Text style={style.TreatmentBtnText}>TREATMENT</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 20}}>
          <Entypo name="location-pin" size={20} />
          <Text style={{fontSize: 15, paddingLeft: 0}}>J. Hopkin Clinic.</Text>
        </View>
        <View style={style.BottomBody}>
          <View style={style.Appoinment}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Appointments</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={style.btn}
                // onPress={() => props.navigation.navigate('')}
              >
                <Text
                  style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                  ADD
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.btn, {width: 100, marginLeft: 10}]}
                // onPress={() => props.navigation.navigate('')}
              >
                <Text
                  style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                  VIEW ALL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: hp('52%'),
              width: wp('100%'),
              backgroundColor: 'white',
            }}>
            <ScrollView showsVerticalScrollIndicator="false">
              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <TouchableOpacity style={style.Card}>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                    MRI, ECG, Echo
                  </Text>
                  <Text style={{fontSize: 15}}>Type: Test</Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Entypo name="calendar" size={15} />
                    <Text style={{paddingLeft: 10}}>4 Jan 2020</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.Card}>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                    MRI, ECG, Echo
                  </Text>
                  <Text style={{fontSize: 15}}>Type: Test</Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Entypo name="calendar" size={15} />
                    <Text style={{paddingLeft: 10}}>4 Jan 2020</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-evenly',
                  padding: 20,
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Finance')}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#8430CC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                    Finance
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#8430CC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Initial Evaluation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#8430CC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Accident Details
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-evenly',
                  padding: 10,
                }}>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#8430CC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Medical History
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#8430CC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Settlement
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    // backgroundColor: 'white',
  },
  Heading: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  Text1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  crossbtn: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TreatmentBtn: {
    width: 120,
    padding: 8,
    backgroundColor: '#8430CC',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  TreatmentBtnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  BottomBody: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  Appoinment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 20,
    padding: 20,
  },
  btn: {
    padding: 6,
    //   height:80,
    width: 70,
    backgroundColor: '#8430CC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
