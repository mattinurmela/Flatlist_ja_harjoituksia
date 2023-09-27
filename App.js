import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DATA from "./DATA";
import Constants from "expo-constants";
import Row from "./components/Row";
import Search from "./components/Search";
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, SetSelectedId] = useState(null)

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search) || item.firstname.startsWith(search));
    setItems(searchArray);
  };

  const select = (id) => {
    SetSelectedId(id)
  }


  useEffect(() => {
    setItems(DATA);
  }, []);

  // function renderRow({item}) {
  //   return <Text>{item.lastname}</Text>
  // }

  // const renderRow = ({item}) => (
  //   <Text>{item.lastname}</Text>
  // )

  return (
    <View style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => <Row item={item} selectedId={selectedId} select={select} />}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
