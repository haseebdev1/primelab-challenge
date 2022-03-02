import React, {useEffect} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import bgVectorImage from '../assets/images/vector.png';
import ChipButton from '../components/ChipButton';
import Input from '../components/Input';
import ActionButton from '../components/ActionButton';
import Divider from '../components/Divider';
import {Formik} from 'formik';

const AuthenticationScreen: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding">
      <View style={styles.screenContainer}>
        <Image style={styles.bgVectorImage} source={bgVectorImage} />

        <View style={styles.contentContainer}>
          <View style={styles.topRow}>
            <ChipButton title="Email" onPress={() => {}} isActive />
            <ChipButton title="Phone" onPress={() => {}} isActive />
          </View>
          <Formik initialValues={{email: ''}} onSubmit={() => {}}>
            <>
              <View style={styles.inputWrapper}>
                <Input name="email" placeholder="Email Address" />
              </View>
              <View style={styles.buttonWrapper}>
                <ActionButton title="Get Started" disabled />
              </View>
            </>
          </Formik>

          <Divider />

          <Text style={styles.smallText}>Already have Near Account?</Text>

          <Formik initialValues={{name: ''}} onSubmit={() => {}}>
            <>
              <View style={styles.inputWrapper}>
                <Input name="name" placeholder="Wallet Name" />
              </View>
              <View style={styles.buttonWrapper}>
                <ActionButton title="Login" />
              </View>
            </>
          </Formik>
          <SafeAreaView>
            <Text style={styles.tosText}>
              by clicking continue you must agree to near labs Terms &
              Conditions ans Privacu Policy
            </Text>
          </SafeAreaView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.YELLOW,
    position: 'relative',
  },
  bgVectorImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    padding: wp('3.5%'),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputWrapper: {
    marginBottom: 10,
    width: '100%',
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
  },
  tosText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default AuthenticationScreen;
