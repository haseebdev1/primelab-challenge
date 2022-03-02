import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {useFormikContext} from 'formik';
interface Props {
  name: string;
  placeholder: string;
}
const Input: React.FC<Props> = ({name, placeholder}) => {
  const {values, setFieldValue} = useFormikContext<{[key: string]: string}>();

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={values[name]}
      onChangeText={value => {
        setFieldValue(name, value);
      }}
    />
  );
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
