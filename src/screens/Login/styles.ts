import {StyleSheet} from 'react-native';
import {Fonts} from '@theme/fonts';
import {Colors} from '@theme/colors';
import {DEVICE_WIDTH} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  headerText: {
    fontSize: 30,
    fontFamily: Fonts.EXTRA_BOLD,
    color: Colors.WHITE,
    marginBottom: 30,
    letterSpacing: 0.2,
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: Colors.WHITE,
  },
  loginContainer: {
    width: DEVICE_WIDTH - 100,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    fontFamily: 'Gilroy-ExtraBold',
    backgroundColor: Colors.WHITE,
    borderRadius: 48,
    paddingHorizontal: 20,
    height: 50,
    borderColor: Colors.PRIMARY,
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
  loginButton: {
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
  loginButtonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'Gilroy-ExtraBold',
    letterSpacing: 0.2,
  },
  passwordInput: {
    position: 'relative',
    marginTop: 10,
  },
  eyeIcon: {position: 'absolute', right: 15, top: -36},
  infoText: {
    color: Colors.PRIMARY,
    fontSize: 12,
    fontFamily: 'Gilroy-Bold',
    letterSpacing: 0.2,
    marginLeft: 10,
    marginTop: 5,
  },
});

export default styles;
