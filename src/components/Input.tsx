import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../constants/colors';

interface Props {
  placeholder: string;
}
const Input: React.FC<Props> = ({placeholder}) => {
  return <TextInput placeholder={placeholder} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BORDER_GREY,
    borderRadius: 8,
    height: 58,
    paddingHorizontal: 20,
  },
});

export default Input;
