import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import {SafeAreaView, ScrollView, View, Pressable} from 'react-native';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Header title={'Welcome to the club!'} type={1} color={'black'} />
        <View style={style.marginBottom24}>
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
            keyboardType={'email-address'}
            onChangeText={value => setEmail(value)}
          />
          <Input
            label={'Password'}
            placeholder={'*****'}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={style.marginBottom24}>
          <Button title={'Login'} onPress={() => {}} />
        </View>
        <Pressable
          style={style.getRegistered}
          onPress={() => {
            console.log('Mail', email, 'Password', password);
          }}>
          <Header
            type={2}
            title={"Don't you have an account?"}
            color={'#2979F2'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
