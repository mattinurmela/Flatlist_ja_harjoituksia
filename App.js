import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DATA from './DATA';
import Constants from 'expo-constants';
import Row from './components/Row';

export default function App() {

  // function renderRow({item}) {
  //   return <Text>{item.lastname}</Text>
  // }

  // const renderRow = ({item}) => (
  //   <Text>{item.lastname}</Text>
  // )


  return (
    <View style={styles.container}>
      <FlatList 
        data={DATA}
        renderItem={({item}) => (
          <Row item={item} />
        )}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
