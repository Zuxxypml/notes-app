import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredNote, setEnteredNote] = useState("");
  const [notes, setNotes] = useState([]);
  const enteringNote = (noteEntered) => {
    setEnteredNote(noteEntered);
  };
  const newNoteAdder = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { key: enteredNote, value: enteredNote },
    ]);
    setEnteredNote("");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appTitle}>Notes </Text>
      </View>
      <View style={styles.newNoteContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new Note"
          onChangeText={enteringNote}
          value={enteredNote}
        />
        <Button title="ADD" onPress={newNoteAdder} />
      </View>
      <FlatList
        data={notes}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 35,
    paddingTop: 70,
    display: "flex",
  },
  appTitle: {
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 50,
  },
  newNoteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    fontSize: 18,
  },
  listItem: {
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    marginTop: 25,
  },
  listItemText: {
    fontSize: 16,
  },
});
