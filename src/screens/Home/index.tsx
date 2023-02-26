import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { Task } from "../../../components/Task";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";

interface tasksProps {
  checked: boolean;
  content: string;
}

export function Home() {
  const [text, setText] = useState("");
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
    {
      checked: false,
      content: "rezar ave maria",
    },
    {
      checked: true,
      content: "ir na missa",
    },
    {
      checked: false,
      content: "rezar o terço",
    },
    {
      checked: true,
      content: "terminar de programar app todo list",
    },
    {
      checked: false,
      content: "rezar o terço de novo",
    },
    {
      checked: true,
      content: "ler castelo interior",
    },
    {
      checked: false,
      content: "rezar o terço novamente",
    },
    {
      checked: true,
      content: "terminar de programar app todo list totalmente",
    },
  ]);
  const [countChecked, setCountChecked] = useState(0);
  const [state, setState] = useState(0);

  function handleAddTask() {
    if (text === "") {
      return Alert.alert(
        "Escreva algo para criar sua tarefa!",
        "Tente escrever algo que você pretenda fazer para criar uma nova tarefa, pense direitinho!"
      );
    }
    setTasks((state) => [...state, { checked: false, content: text }]);
    setText("");
  }

  function handleRemoveTask(content: string) {
    Alert.alert("Remover", "Tem certeza que deseja remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((state) => state.filter((task) => task.content !== content)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleCheckedUpdate(index: number) {
    let Tasks = tasks;
    if (Tasks[index].checked == true) {
      Tasks[index].checked = false;
    } else if (Tasks[index].checked == false) {
      Tasks[index].checked = true;
    }
    setTasks([...Tasks]);
  }

  useEffect(() => {
    let checksTrue;
    checksTrue = 0;
    for (let i = 0; tasks.length > i; i++) {
      if (tasks[i].checked == true) {
        checksTrue += 1;
      }
    }
    setCountChecked(checksTrue);
  }, [tasks]);

  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <Header />
      <View style={styles.containerAll}>
        <View style={styles.containerFour}>
          <Input onChangeInput={setText} valueInput={text} />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <View style={styles.buttonImage}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.containerTwo}>
            <Text style={styles.textOne}>Criadas</Text>
            <Text style={styles.numberContainer}>{tasks.length}</Text>
          </View>
          <View style={styles.containerTwo}>
            <Text style={styles.textTwo}>Concluídas</Text>
            <Text style={styles.numberContainer}>{countChecked}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item: tasksProps) => item.content}
          renderItem={({ item, index }) => (
            <Task
              checked={item.checked}
              content={item.content}
              onRemove={handleRemoveTask}
              onCheckedUpdate={handleCheckedUpdate}
              index={index}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
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
          )}
        />
      </View>
    </View>
  );
}
