import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import styles from './styles';

import {GenericNavigationProps, navigationRef} from '@routes/type';
import {useNavigation} from '@react-navigation/native';
import {GoBackArrow, FlatlistFooter} from '@components';
import {useSelector} from 'react-redux';
import {
  selectBasket,
  changeCount,
  clearBasket,
  delMenuItem,
  IMenu,
} from '@redux';
import LottieView from 'lottie-react-native';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {Add, Minus} from 'iconsax-react-native';
import {Colors} from '@theme';

export const Cart = () => {
  const {setOptions} = useNavigation<GenericNavigationProps>();
  const dispatch = useAppDispatch();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(1);
  const data = useSelector(selectBasket);

  useLayoutEffect(() => {
    setOptions({
      title: 'Sepet',
      headerTitleStyle: styles.headerTitleStyle,
      gestureEnabled: false,
      headerLeft: GoBackArrow,
    });
  }, [setOptions]);

  const increase = useCallback(
    (id: number) => {
      dispatch(changeCount({id, count: +1}));
    },
    [dispatch],
  );

  const decrease = useCallback(
    (id: number) => {
      dispatch(changeCount({id, count: -1}));
    },
    [dispatch],
  );

  const delMenu = (menu: IMenu) => {
    dispatch(delMenuItem(menu));
  };

  useEffect(() => {
    let totalPrice = 0;
    data.basket.forEach((menu: {price: number; count: number}) => {
      totalPrice += menu.price * menu.count;
    });
    setPrice(totalPrice);
    let menuCount = 0;
    data.basket.forEach((menu: {count: number}) => {
      menuCount += menu.count;
    });
    menuCount > 1 ? setDiscount(0.7) : setDiscount(1);
  }, [data.basket]);

  const createOrder = () => {
    setTimeout(() => {
      dispatch(clearBasket());
    }, 1000);
    Alert.alert(
      'Siparişiniz Alındı',
      'Siparişiniz en kısa sürede hazırlanıp yola çıkacaktır.',
      [{text: 'Tamam', onPress: () => navigationRef.current?.goBack()}],
    );
  };

  const renderItem = (menu: IMenu) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.tinyLogo} source={menu.image} />
        <View style={styles.menu}>
          <Text style={styles.itemName}>{menu.name}</Text>
          <View style={styles.ingredients}>
            <Text style={styles.ingredientsText}>İçindekiler: </Text>
            {menu.ingredients.map(food => (
              <View key={food}>
                <Text style={styles.ingredientsText}>{food} </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.countView}>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => {
              menu.count === 1 ? delMenu(menu) : decrease(menu.id);
            }}>
            <Minus size="24" color={Colors.BLACK} />
          </TouchableOpacity>
          <Text style={styles.countText}>{menu.count}</Text>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => {
              increase(menu.id);
            }}>
            <Add size="24" color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      {data.basket.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={data.basket}
            style={styles.flatList}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => item.name}
            bounces={false}
          />
          <View style={styles.orderFooter}>
            <FlatlistFooter
              price={price}
              discount={discount}
              totalPrice={Math.round(price * discount)}
            />
            <TouchableOpacity style={styles.orderButton} onPress={createOrder}>
              <Text style={styles.orderText}>
                {Math.round(price * discount)} TL Satın Al
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={navigationRef.goBack}
          style={styles.emptyView}>
          <LottieView
            source={require('../../assets/lottie/hamburger.json')}
            style={styles.emptyLottie}
            autoPlay
            loop
          />

          <Text style={styles.emptyText}>
            Sepetiniz Boş, Hemen Yemek Siparişi Verin
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
