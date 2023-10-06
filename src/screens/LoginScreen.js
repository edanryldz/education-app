import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginData from '../../login';

const LoginScreen = ({navigation}) => {
  const loginData = LoginData();
  const [email, setEmail] = useState('eda');
  const [password, setPassword] = useState('eda');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (loginData.password === password) navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutLine]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09182b',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#7E97B6',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  buttonOutLine: {
    backgroundColor: '#E2E8EE',
    marginTop: 5,
    borderColor: '#7E97B6',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutLineText: {
    color: '#7E97B6',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LoginScreen;
