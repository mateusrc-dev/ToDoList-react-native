import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Task } from "../../../components/Task";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

interface tasksProps {
  checked: boolean;
  content: string;
}

export function Home() {
  const [tasks, setTasks] = useState<tasksProps[]>([
    {
      checked: true,
      content: "ler livros dos santos católicos",
    },
    {
      checked: false,
      content: "programar ToDoList em React Native",
    },
    {
      checked: true,
      content: "assistir todos os episódios de One Piece",
    },
    {
      checked: false,
      content: "qualquer coisa",
    },
    {
      checked: true,
      content: "qualquer coisa suahsauhsuahsa",
    },
 ]);

  return (
    <View style={styles.containerAll}>
      <View style={styles.containerFour}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
        />
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonImage}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.containerTwo}>
          <Text style={styles.textOne}>Criadas</Text>
          <Text style={styles.numberContainer}>0</Text>
        </View>
        <View style={styles.containerTwo}>
          <Text style={styles.textTwo}>Concluídas</Text>
          <Text style={styles.numberContainer}>0</Text>
        </View>
      </View>
      {tasks.length === 0 ? (
        <View style={styles.containerThree}>
          <View>
            <Text style={styles.textThree}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textFour}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
          <FontAwesome5 name="clipboard" size={56} color="#808080" />
        </View>
      ) : (
        <View style={styles.containerTasks}>
          {tasks.map((task) => (
            <Task
              key={String(task.content)}
              checked={task.checked}
              content={task.content}
            />
          ))}
        </View>
      )}
    </View>
  );
}
