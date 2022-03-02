import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
const Divider = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
  },
  divider: {
    height: 1,
    backgroundColor: colors.GREY,
    width: '85%',
  },
});

export default Divider;
