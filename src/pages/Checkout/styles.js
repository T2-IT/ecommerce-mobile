import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
  },
  containerButtonRadios: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 140,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
