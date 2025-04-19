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
import HeaderTwo from '../Common/Headers/HeaderTwo';
export default function CareCanter(props) {
  return (
    <React.Fragment>
      <HeaderTwo name="Care Centers" {...props} />
      <View>
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
          <View style={style.CardB}>
            <ScrollView showsVerticalScrollIndicator="false">
              <TouchableOpacity
                onPress={() => props.navigation.navigate('CareCenterDetails')}
                style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Card}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>CMH</Text>
                {/* <Text style={{fontSize: 15}}>Status: Investigation</Text> */}
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Entypo name="location-pin" size={35} color="#686868" />
                  <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 15}}>
                    CANTT, Lahore
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
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
