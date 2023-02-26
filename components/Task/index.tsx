import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Checkbox } from "../Checkbox"
import { styles } from "./styles";

interface TaskProps {
  checked: boolean;
  content: string;
  onRemove: (content: string) => void
}

export function Task({ checked, content, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox checked={checked} />
      <Text style={styles.text}>{content}</Text>
      <TouchableOpacity style={styles.trash} onPress={() => onRemove(content)}>
        <EvilIcons name="trash" size={32} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
