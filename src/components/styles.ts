import {Colors} from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  quitIcon: {
    transform: [{rotate: '90deg'}],
  },
  cart: {
    position: 'relative',
  },
  count: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 12,
    color: Colors.PRIMARY,
  },
  countContainer: {
    position: 'absolute',
    top: -8,
    right: -6,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  flatlistFooter: {
    width: 180,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Gilroy-Light',
    fontSize: 24,
    color: Colors.BLACK,
    letterSpacing: 0.3,
  },
  reducedText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 22,
    color: Colors.PRIMARY,
    letterSpacing: 0.3,
    textDecorationLine: 'line-through',
  },
  seperator: {
    height: 1,
    backgroundColor: Colors.DARK_GRAY,
    marginTop: 10,
  },
});
