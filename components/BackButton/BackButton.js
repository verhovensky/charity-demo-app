import {View, Text, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import style from './style';

const BackButton = props => {
  return (
    <View>
      <Pressable
        style={style.container}
        onPress={() => {
          props.onPress();
        }}>
        <FontAwesomeIcon icon={faArrowLeft} size={25} color="black" />
      </Pressable>
    </View>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
