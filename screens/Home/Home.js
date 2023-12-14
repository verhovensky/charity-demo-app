import style from './style';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Home'} type={1} />
      <Button
        title={'Button'}
        onPress={() => {
          console.log('Pressed BUTTON');
        }}
      />
      <Button title={'Disabled'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
