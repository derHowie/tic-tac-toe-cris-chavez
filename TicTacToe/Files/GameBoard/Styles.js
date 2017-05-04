import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    position: 'absolute',
    borderWidth: 4,
    height: 300,
    width: 300,
  },
  row: {
    marginTop: -1,
    marginLeft: -1,
    flexDirection: 'row',
  },
  square: {
    height: 100 - 1,
    width: 100 - 1,
    borderWidth: 2,
  }
});

export default styles;
