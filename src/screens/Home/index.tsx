import {
  TextInput,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {Colors} from '@theme';
import {SearchNormal} from 'iconsax-react-native';
import {MENU_LIST} from '@utils';
import {GenericNavigationProps} from '@routes/type';
import {useNavigation} from '@react-navigation/native';
import {HeaderRight, HeaderLeftExit} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {addMenu, delMenuItem, selectBasket, AppDispatch, IMenu} from '@redux';
import styles from './styles';

export const Home = () => {
  const {setOptions} = useNavigation<GenericNavigationProps>();
  const dispatch = useDispatch<AppDispatch>();
  const [filteredMenu, setFilteredMenu] = useState<IMenu[]>(MENU_LIST);
  const [searchText, setSearchText] = useState<string | undefined>();
  const data = useSelector(selectBasket);

  useLayoutEffect(() => {
    setOptions({
      title: 'Ürün Listesi',
      headerTitleStyle: styles.headerTitleStyle,
      gestureEnabled: false,
      headerRight: () =>
        data.basket.length > 0 ? HeaderRight(data.basket.length) : null,
      headerLeft: HeaderLeftExit,
    });
  }, [setOptions, data.basket.length]);

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filteredData = MENU_LIST.filter(menu => {
      const menuNameMatch = menu.name
        .toLowerCase()
        .includes(text.toLowerCase());
      const contentMatch = menu.ingredients.some((content: string) =>
        content.toLowerCase().includes(text.toLowerCase()),
      );
      return menuNameMatch || contentMatch;
    });

    setFilteredMenu(filteredData);
  };

  const addMenuItem = (menu: IMenu) => dispatch(addMenu(menu));

  const delMenu = useCallback(
    ({id}: {id: number}) => {
      dispatch(delMenuItem({id}));
    },
    [dispatch],
  );

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
        {data &&
        data.basket.find((item: {id: number}) => item.id === menu.id) ? (
          <TouchableOpacity
            style={styles.itemPriceContainer}
            onPress={() => delMenu({id: menu.id})}>
            <Text style={styles.delMenuText}>Sepetten Çıkar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.itemPriceContainer}
            onPress={() => addMenuItem(menu)}>
            <Text style={styles.priceText}>{menu.price}TL Sepete Ekle</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
        <TextInput
          maxLength={18}
          placeholder="Arama Yap"
          style={styles.searchInput}
          placeholderTextColor={Colors.BLACK}
          value={searchText}
          onChangeText={text => handleSearch(text)}
        />
        <SearchNormal
          style={styles.searchIcon}
          size="24"
          color={Colors.PRIMARY}
        />
      </View>
      <FlatList
        data={filteredMenu}
        style={styles.flatList}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.name}
        bounces={false}
      />
    </View>
  );
};
