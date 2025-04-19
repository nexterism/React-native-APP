import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
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
export default function Notification(props) {
  const [ActiveTab, setActiveTab] = useState(false);
  return (
    <React.Fragment>
      <HeaderTwo name="Notification" {...props} />
      <ScrollView style={style.NotifyB}>
        <View style={style.Notify}>
          {/* MAP */}
          <TouchableOpacity
            onPress={() => setActiveTab(ActiveTab == false ? true : false)}
            style={[
              style.Card,
              {backgroundColor: ActiveTab == true ? '#F2F2F2' : 'white'},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={style.Img}>
                <FontAwsome name="photo" size={30} />
              </TouchableOpacity>
              <View style={style.TextB}>
                <Text style={style.Text}>New Patient Request</Text>
                <Text style={style.Text}>Name: Andrea</Text>
                <Text style={style.Text}>Care Center: CMH</Text>
              </View>
            </View>
            {ActiveTab == true ? (
              <View style={style.btnsb}>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    width: 150,
                    backgroundColor: '#8430CC',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                    ACCEPT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    width: 150,
                    backgroundColor: '#8430CC',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                    DECLINE
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </TouchableOpacity>

          {/* End */}
        </View>
      </ScrollView>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  NotifyB: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  Notify: {
    padding: 10,
  },
  Card: {
    // flexDirection: 'row',
    marginTop: 20,
    // height: 170,
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 10,
  },
  Img: {
    borderRadius: 10,
    height: 80,
    width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextB: {
    padding: 7,
    marginLeft: 10,
  },
  Text: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  btnsb: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
