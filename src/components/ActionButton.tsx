import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import rightArrowImage from '../assets/images/right_arrow.png';
interface Props {
  title: string;
  disabled?: boolean;
}
const ActionButton: React.FC<Props> = ({title = '', disabled = false}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: disabled
              ? colors.DISABLED_GREY
              : colors.PRIMARY_BLUE,
          },
        ]}>
        <Text style={styles.text}>{title}</Text>
        <Image
          source={rightArrowImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontSize: 17,
    fontWeight: '500',
  },
  image: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
});

ActionButton.defaultProps = {
  disabled: false,
};
export default ActionButton;
