import {Bag} from 'iconsax-react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '@theme/colors';
import styles from './styles';
import {navigationRef} from '@routes/type';

export const HeaderRight = (count: number) => {
  return (
    <TouchableOpacity
      style={styles.cart}
      onPress={() => navigationRef.navigate('Cart' as never)}>
      <Bag size="28" color={Colors.PRIMARY} variant="Bold" />
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
};
