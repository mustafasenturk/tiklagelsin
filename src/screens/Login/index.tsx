import {
  Alert,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createElement, useEffect} from 'react';

import styles from './styles';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {useState} from 'react';
import {Colors} from '@theme';
import {navigationRef} from '@routes/type';
import {setKey} from '@utils';

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [password, setPassword] = useState<string | undefined>();
  const [passwordInfo, setPasswordInfo] = useState<string | undefined>();
  const [emailInfo, setEmailInfo] = useState<string | undefined>();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if ((password && password.length < 7) || !isValidEmail(email)) {
      Alert.alert('Hata', 'Lütfen giriş bilgilerinizi kontrol ediniz.');
      return;
    }
    setKey('isLogin', true);
    setKey('email', email);
    setKey('password', password!);
    clearInputs();
    navigationRef.current?.navigate('Home' as never);
  };

  const isValidEmail = (mail: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (password && password.length < 7 && password.length > 0) {
        setPasswordInfo('Şifreniz en az 7 karakter olmalıdır.');
      } else {
        setPasswordInfo('');
      }

      if (isValidEmail(email) || email.length === 0) {
        setEmailInfo('');
      } else {
        setEmailInfo('Lütfen geçerli bir e-posta giriniz.');
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [password, email]);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Tıkla Gelsin</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.loginContainer}>
          <View>
            <TextInput
              maxLength={48}
              placeholder="E-posta"
              style={styles.textInput}
              keyboardType="email-address"
              onChange={val => setEmail(val.nativeEvent.text)}
              value={email}
            />
            <Text style={styles.infoText}>{emailInfo}</Text>
            <View style={styles.passwordInput}>
              <TextInput
                maxLength={18}
                secureTextEntry={isPasswordVisible}
                placeholder="Şifre"
                style={styles.textInput}
                onChange={e => setPassword(e.nativeEvent.text)}
                value={password}
              />
              {password && password?.length > 0 && (
                <TouchableOpacity
                  onPressOut={() => setIsPasswordVisible(true)}
                  onPressIn={() => setIsPasswordVisible(false)}>
                  {createElement(isPasswordVisible ? Eye : EyeSlash, {
                    style: styles.eyeIcon,
                    size: 24,
                    color: Colors.PRIMARY,
                    variant: 'Bold',
                  })}
                </TouchableOpacity>
              )}
            </View>
            {passwordInfo && (
              <Text style={styles.infoText}>{passwordInfo}</Text>
            )}
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
