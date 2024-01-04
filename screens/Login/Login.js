import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, style.container)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          label={'Email'}
          placeholder={'Enter your email'}
          keyboardType={'email-address'}
        />
        <Input
          label={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
