import { useState } from "react";
import { Pressable } from "react-native";
import { Octicons } from '@expo/vector-icons'; 
import { styles } from "./styles";

interface CheckboxProps {
  checked: boolean
  content: string
  onCheckedUpdate: (index: number) => void
  index: number
}

export function Checkbox({ checked, onCheckedUpdate, index }: CheckboxProps) {
  const [Checked, setChecked] = useState(checked);

  function handleChecked() {
    setChecked(!Checked)
    onCheckedUpdate(index)
  }

  return (
    <Pressable
      style={[styles.checkboxBase, Checked && styles.checkboxChecked]}
      onPress={() => handleChecked()}
    >
      {Checked && <Octicons name="check" size={14} color="#F2F2F2" />}
    </Pressable>
  );
}
