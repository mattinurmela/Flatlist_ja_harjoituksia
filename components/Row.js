import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Row({ item }) {
  return <Text style={styles.row}>{item.lastname} {item.firstname}</Text>;
}

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    marginBottom: 30
  },
});
