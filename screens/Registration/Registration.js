import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {creatUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View style={style.backButton}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Header title={'Get registered'} type={1} color={'black'} />
        <View style={style.marginBottom24} />
        <View style={style.marginBottom24}>
          <Input
            label={'Full Name'}
            placeholder={'Your first & last name'}
            onChangeText={value => setFullName(value)}
          />
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={style.marginBottom24}>
          <Button
            title={'Register'}
            isDisabled={
              email.length < 5 || password.length < 8 || fullName.length < 5
            }
            onPress={async () => {
              let user = await creatUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setSuccess("You're registered!");
                setTimeout(() => navigation.goBack(), 2000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registration;
