import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export const FlatlistFooter = ({
  price,
  discount,
  totalPrice,
}: {
  price: number;
  discount: number;
  totalPrice: number;
}) => {
  const priceTextStyle = discount === 1 ? styles.text : styles.reducedText;
  return (
    <View style={styles.flatlistFooter}>
      <View style={styles.row}>
        <Text style={styles.text}>Fiyat</Text>
        <Text style={priceTextStyle}>{price} TL</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>İndirim</Text>
        {discount === 1 ? (
          <Text style={styles.text}>Yok</Text>
        ) : (
          <Text style={styles.text}>{Math.round(totalPrice * 0.3)} TL</Text>
        )}
      </View>
      <View style={styles.seperator} />
      <View style={styles.row}>
        <Text style={styles.text}>Toplam</Text>
        <Text style={styles.text}>{totalPrice} TL</Text>
      </View>
    </View>
  );
};
