import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";

interface TaskProps {
  checked: boolean;
  content: string;
}

export function Task({ checked, content }: TaskProps) {
  const [checkedState, setCheckedState] = useState(checked);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={checkedState}
        onValueChange={setCheckedState}
      />
      <Text>{content}</Text>
      <TouchableOpacity>
        <EvilIcons name="trash" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
