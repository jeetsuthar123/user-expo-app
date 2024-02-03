import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserList from "./src/UserList/UserList";
import SearchBar from "./src/Components/SearchBar/SearchBar";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}
