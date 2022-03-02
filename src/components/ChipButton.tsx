import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

interface Props {
  title: string;
  onPress: () => void;
  isActive?: boolean;
}

const ChipButton: React.FC<Props> = ({
  title = '',
  onPress,
  isActive = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: isActive ? colors.GREY : colors.WHITE},
        ]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

ChipButton.defaultProps = {
  isActive: false,
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 30,
    margin: 8,
  },
  text: {
    fontSize: 14,
  },
});
export default ChipButton;
