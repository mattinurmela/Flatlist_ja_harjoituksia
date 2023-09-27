import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function Row({ item, selectedId, select }) {
  const backgroundColor = item.id === selectedId ? "#c0c0c0" : "#f5f5f5";

  return (
    <Pressable onPress={() => select(item.id)}>
      <Text style={[styles.row,{backgroundColor}]}>
        {item.lastname} {item.firstname}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    marginBottom: 30,
  },
});
