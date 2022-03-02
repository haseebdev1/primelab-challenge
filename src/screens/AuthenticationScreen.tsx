import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {GET_USERS} from '../redux/reducers/users/actions';

const AuthenticationScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_USERS});
  }, [dispatch]);
  return (
    <View>
      <Text>AuthScreen</Text>
    </View>
  );
};

export default AuthenticationScreen;
