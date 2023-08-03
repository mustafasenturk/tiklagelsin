import {ArrowLeft2, Export} from 'iconsax-react-native';
import React, {FC} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Colors} from '@theme/colors';
import styles from './styles';
import {navigationRef} from '@routes/type';
import {storage} from '@utils/storage';

export const HeaderLeftExit: FC = () => {
  const handleExit = () => {
    Alert.alert('Çıkış', 'Çıkış yapmak istediğinize emin misiniz?', [
      {
        text: 'Hayır',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Evet',
        onPress: () => {
          storage.set('isLogin', false);
          navigationRef.current?.navigate('Login' as never);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleExit();
      }}>
      <Export style={styles.quitIcon} size="28" color={Colors.PRIMARY} />
    </TouchableOpacity>
  );
};

export const GoBackArrow: FC = () => {
  return (
    <TouchableOpacity onPress={() => navigationRef.goBack()}>
      <ArrowLeft2 color={Colors.PRIMARY} size={26} />
    </TouchableOpacity>
  );
};
