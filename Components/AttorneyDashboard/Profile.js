import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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
import Entypo from 'react-native-vector-icons/Entypo';
import Font from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feature from 'react-native-vector-icons/Feather';
import HeaderThree from '../Common/Headers/Headerthree';
export default function Profile(props) {
  return (
    <React.Fragment>
      <HeaderThree name="Menu" {...props} />
      <View>
        <View style={style.Phead}>
          <ScrollView>
            <TouchableOpacity style={style.PImg}>
              <Image
                resizeMethod="resize"
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('../../assests/Images/service_default_avatar_182956.png')}
              />
              <View style={style.Cameraimg}>
                <Entypo name="camera" size={20} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={style.Text}>Attorney</Text>
              <Text style={style.Emailtext}>kennet.g@mail.ru</Text>
            </View>
            <View style={style.Details}>
              <Text style={{color: '#686868', padding: 10}}>HEADING</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CareCenter')}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderTopWidth: 1,
                  borderTopColor: '#F2F2F2',
                  borderBottomColor: '#F2F2F2',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Font name="heart" size={25} color="#686868" />
                    <Text
                      style={{fontSize: 20, paddingLeft: 10, paddingTop: 2}}>
                      Care Centers
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Entypo
                    name="chevron-small-right"
                    size={30}
                    color="#686868"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Cases')}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderTopWidth: 1,
                  borderTopColor: '#F2F2F2',
                  borderBottomColor: '#F2F2F2',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Foundation
                      name="clipboard-pencil"
                      size={25}
                      color="#686868"
                    />
                    <Text
                      style={{fontSize: 20, paddingLeft: 10, paddingTop: 2}}>
                      Cases
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Entypo
                    name="chevron-small-right"
                    size={30}
                    color="#686868"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>props.navigation.navigate("CallSupport")}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderTopWidth: 1,
                  borderTopColor: '#F2F2F2',
                  borderBottomColor: '#F2F2F2',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <Feature name="users" size={25} color="#686868" />
                    <Text
                      style={{fontSize: 20, paddingLeft: 10, paddingTop: 2}}>
                      Call Support
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Entypo
                    name="chevron-small-right"
                    size={30}
                    color="#686868"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
