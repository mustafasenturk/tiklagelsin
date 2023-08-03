import {Colors} from '@theme/colors';
import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH} from '@utils';
import {Fonts} from '@theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  searchInput: {
    fontFamily: 'Gilroy-ExtraBold',
    backgroundColor: Colors.WHITE,
    borderRadius: 48,
    paddingHorizontal: 20,
    height: 36,
    width: DEVICE_WIDTH - 60,
    paddingLeft: 40,
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  searchContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 6,
  },
  flatList: {
    flex: 1,
    marginTop: 15,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 110,
    backgroundColor: Colors.PRIMARY,
    borderTopColor: Colors.WHITE,
    borderTopWidth: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  ingredients: {
    flexDirection: 'row',
    marginTop: 3,
  },
  ingredientsText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 12,
    color: Colors.WHITE,
  },
  itemName: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
    color: Colors.WHITE,
  },
  itemPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 36,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    flex: 2,
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
  },
  menu: {
    marginLeft: 10,
    flex: 3,
  },
  priceText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 12,
    color: Colors.BLACK,
  },
  itemSelectedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 36,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    flex: 2,
  },
  delMenuText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 12,
    color: Colors.PRIMARY,
  },
  headerTitleStyle: {
    fontFamily: Fonts.EXTRA_BOLD,
    fontSize: 18,
    color: Colors.PRIMARY,
  },
});

export default styles;
