import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Octicons } from '@expo/vector-icons'; 
import { styles } from "./styles";

interface CheckboxProps {
  checked: boolean
}

export function Checkbox({ checked }: CheckboxProps) {
  const [Checked, setChecked] = useState(checked);
  return (
    <Pressable
      style={[styles.checkboxBase, Checked && styles.checkboxChecked]}
      onPress={() => setChecked(!Checked)}
    >
      {Checked && <Octicons name="check" size={14} color="#F2F2F2" />}
    </Pressable>
  );
}
