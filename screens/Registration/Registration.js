import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

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
        </View>
        <View style={style.marginBottom24}>
          <Button
            title={'Register'}
            onPress={() => {
              console.log(`Registered with ${email} ${fullName}`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registration;
