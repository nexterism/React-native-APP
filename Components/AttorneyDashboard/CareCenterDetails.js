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
export default function CareCenterDetails() {
  return (
    <View>
      <View
        style={{
          height: 300,
          width: '100%',
          backgroundColor: 'grey',
        }}></View>
      <View>
        <View style={{padding: 20,paddingTop:50}}>
          <Text style={style.Heading}>Details</Text>
        </View>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row',marginTop:15}}>
            <Text style={style.Text2}>Care Center:</Text>
            <Text style={style.Text1}>CMH</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:15}}>
            <Text style={style.Text2}>Timings:</Text>
            <Text style={[style.Text1,{paddingLeft:55}]}>05:00-11:00 PM</Text>
          </View>
          <View style={{flexDirection: 'row',marginTop:15}}>
            <Text style={style.Text2}>Address:</Text>
            <Text style={[style.Text1,{paddingLeft:53,width:300}]}>CANTT, Lahore, Punjab, Pakistan (54000)</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Heading: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  Text1: {
    color: '#686868',
    paddingTop: 2,
    fontSize: 15,
    paddingLeft: 20,
  },
  Text2: {color: '#8430CC', fontSize: 20, fontWeight: 'bold'},
});
