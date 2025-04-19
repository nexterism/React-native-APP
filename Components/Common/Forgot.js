import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Login(props) {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <View style={{flex: 1}}>
        <View
          style={{
            height: hp('100%'),
            width: wp('100%'),
          }}>
          <View style={{paddingLeft: 20, paddingTop: 20}}>
            <Text style={style.Text}>Forgot</Text>
          </View>
          <Form style={style.Form}>
            <Item floatingLabel last>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={{alignItems: 'center', paddingTop: 130}}>
            <TouchableOpacity
            onPress={()=>props.navigation.navigate("Login")}
            style={style.btn}>
              <Text style={style.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  Form: {
    width: 500,
    marginTop: 100,
  },
  Text: {
    // fontFamily: 'Muli-Bold',
    fontSize: 40,
    fontWeight: 'bold',
  },
  Forgot: {
    // fontFamily: 'Muli-Light',
  },
  btn: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    width: 350,
    backgroundColor: '#8430CC',
  },
  btnText: {
    // fontFamily: 'Muli-Bold',
    fontSize: 15,
    color:"white"
  },
});
