import {Fonts} from '@theme';
import {Colors} from '@theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  flatList: {
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
  menu: {
    marginLeft: 10,
    flex: 3,
  },
  priceText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 12,
    color: Colors.BLACK,
  },
  countView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    justifyContent: 'space-between',
  },
  countButton: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
  },
  countText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
    color: Colors.WHITE,
    marginHorizontal: 5,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  emptyText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 16,
    marginTop: 10,
    color: Colors.PRIMARY,
  },
  orderFooter: {},
  orderButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginHorizontal: 30,
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
    letterSpacing: 0.2,
  },
  emptyLottie: {
    width: 300,
    height: 300,
  },
  headerTitleStyle: {
    fontFamily: Fonts.EXTRA_BOLD,
    fontSize: 18,
    color: Colors.PRIMARY,
  },
});

export default styles;
