import { StyleSheet } from "react-native";
import Colors from "../Utils/Color";

const userListStyle = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.black_color,
        paddingVertical : 22
    },
    userList : {
        paddingVertical : 10 
    }
})

export default userListStyle;