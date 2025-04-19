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
import HeaderTwo from '../../Common/Headers/HeaderTwo';
export default function AddExpenses(props) {
  const [AccidetDropDown, setAccidetDropDown] = useState('Accident');
  const onValueChange = value => {
    setAccidetDropDown(value);
  };
  console.log(props);

  return (
    <React.Fragment>
      <HeaderTwo name="Add Expense" {...props} />
      <ScrollView style={style.AddB}>
        <View style={style.InputBody}>
          <Form style={style.Form}>
            <Item style={style.Item} floatingLabel last>
              <Label style={style.label}>TITLE</Label>
              <Input />
            </Item>
           
            <Item style={style.Item} floatingLabel last>
              <Label style={style.label}>Location</Label>
              <Input />
            </Item>
            <View style={style.TextArea}>
              <Textarea
                style={{padding: 10}}
                rowSpan={10}
                placeholder="Textarea"
              />
            </View>
          </Form>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('InitalEVALUATION')}
            style={style.Btn}>
            <Text style={style.btnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}
const style = StyleSheet.create({
  AddB: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'white',
  },
  InputBody: {
    padding: 10,
  },
  Item: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#F2F2F2',
  },
  label: {
    color: '#686868',
  },
  Picker: {
    backgroundColor: '#F2F2F2',
    marginTop: 10,
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
  },
  TextArea: {
    marginTop: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  Btn: {
    marginTop: 30,
    alignItems: 'center',
    padding: 10,
    width: '100%',
    backgroundColor: '#8430CC',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
