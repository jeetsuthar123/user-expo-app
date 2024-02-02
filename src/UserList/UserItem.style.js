import { StyleSheet } from "react-native";
import Colors from "../Utils/Color";

const userItemStyle = StyleSheet.create({
    mainContainer : {
        flex : 1,
        backgroundColor : Colors.white,
        paddingVertical : 22
    },
    userImage : {
        paddingVertical : 10 
    },
    userInfoView : {
        paddingVertical : 10 
    },
    userName : {
        paddingVertical : 10 
    },
    userEmail : {
        paddingVertical : 10 
    },
})

export default userItemStyle;