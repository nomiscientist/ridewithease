import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ASSETS, getImageSource } from '../constants/assets';

const LoginScreen = ({ navigation }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // TODO: Implement actual login logic
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Dashboard');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.logoContainer}>
          <Image source={getImageSource(ASSETS.car)} style={styles.logoIcon} />
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Sign in with your student credentials</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Student ID"
            value={studentId}
            onChangeText={setStudentId}
            autoCapitalize="none"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity 
            style={styles.forgotPassword}
            onPress={() => {}}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.schoolLoginButton}
            onPress={() => {}}
          >
            <Text style={styles.schoolLoginText}>Sign in with School Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 20
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40
  },
  logoIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
    tintColor: '#4A90E2'
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },
  formContainer: {
    marginBottom: 30
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  forgotPasswordText: {
    color: '#4A90E2',
    fontSize: 14
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  loginButtonDisabled: {
    backgroundColor: '#B0D1F5'
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  schoolLoginButton: {
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center'
  },
  schoolLoginText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  footerText: {
    color: '#666',
    fontSize: 14
  },
  signUpText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500'
  }
});

export default LoginScreen;