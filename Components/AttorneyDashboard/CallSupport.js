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
import Ionic from 'react-native-vector-icons/Ionicons';
import HeaderTwo from '../Common/Headers/HeaderTwo';
export default function CallSupport(props) {
  return (
    <React.Fragment>
      <HeaderTwo name="Call Support" {...props} />
      <View style={style.Body}>
        <View style={{padding: 10,height:hp("88%")}}>
          <ScrollView showsVerticalScrollIndicator="false" >
            <TouchableOpacity
              style={{
                  marginTop:15,
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: 10,
              }}>
              <View>
                <View>
                  <View
                    style={{
                      width: 130,
                      backgroundColor: '#F2F2F2',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 3,
                      borderRadius: 10,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>CALL SUPPORT</Text>
                  </View>
                  <Text style={{fontSize: 15, paddingLeft: 10, paddingTop: 10}}>
                    +92-315-1234567
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionic name="ios-call" size={40} color="#686868" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                  marginTop:15,
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: 10,
              }}>
              <View>
                <View>
                  <View
                    style={{
                      width: 130,
                      backgroundColor: '#F2F2F2',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 3,
                      borderRadius: 10,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>CALL SUPPORT</Text>
                  </View>
                  <Text style={{fontSize: 15, paddingLeft: 10, paddingTop: 10}}>
                    +92-315-1234567
                  </Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Ionic name="ios-call" size={40} color="#686868" />
              </View>
            </TouchableOpacity>
  
         
          </ScrollView>
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
  PImg: {
    position: 'relative',
    borderRadius: 100,
    height: 150,
    width: 150,
    backgroundColor: '#F2F2F2',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Cameraimg: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderRadius: 100,
    bottom: 0,
    backgroundColor: 'white',
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Emailtext: {
    marginTop: 3,
    fontSize: 15,
    color: '#8430CC',
  },
  Details: {
    marginTop: 80,
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
  },
});
