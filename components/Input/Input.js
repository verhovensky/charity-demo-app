import style from './style';
import {TextInput, Text, View} from 'react-native';
import {useState} from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        placeholder={props.placeholder ? props.placeholder : null}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        style={style.input}
        value={value}
        onChangeText={value => {
          setValue(value);
          console.log(
            `INPUT VALUE OF ${
              props.placeholder ? props.placeholder : 'unknown input'
            }`,
            value,
          );
        }}
      />
    </View>
  );
};

Input.PropTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
