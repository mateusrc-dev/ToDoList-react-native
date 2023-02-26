import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface InputProps {
  onChangeInput: (data: string) => void;
  valueInput: string;
}

export function Input({ onChangeInput, valueInput }: InputProps) {
  const [focus, setFocus] = useState(false)
  return (
    <TextInput
      style={focus ? styles.focus : styles.input}
      placeholder="Adicione uma nova tarefa!"
      placeholderTextColor={"#808080"}
      autoCorrect
      keyboardType="default"
      value={valueInput}
      onChangeText={onChangeInput}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    />
  );
}
