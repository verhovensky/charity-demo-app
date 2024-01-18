import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import {SafeAreaView, ScrollView, View, Pressable, Text} from 'react-native';
import {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Routes from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn, resetToInitialState} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={style.marginBottom24}>
          <Button
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (user.status === false) {
                setSuccess('');
                setError(user.error);
              }
              if (user.status) {
                setSuccess('Login successful!');
                dispatch(logIn(user));
                navigation.navigate(Routes.Home);
              }
              if (user === undefined || user === null) {
                setError('Something went wrong!');
              }
            }}
          />
        </View>
        <Pressable
          style={style.getRegistered}
          onPress={() => {
            navigation.navigate(Routes.Registration);
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
