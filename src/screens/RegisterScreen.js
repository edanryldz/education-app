import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Surname" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput placeholder="Birthday" style={styles.input} />
        <TextInput placeholder="Gender" style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: 'white',
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

export default RegisterScreen;
