import { StyleSheet } from "react-native";
import Colors from "../Utils/Color";

const userItemStyle = StyleSheet.create({
    mainContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20
    },
    userImage : {
        height : 90,
        width : 90,
        borderRadius : 90/2,
        paddingVertical : 10 ,
        zIndex : 1,
        marginLeft: 10,
        marginTop : 10,
        marginRight : -50,
    },
    userInfoView : {
        flex : 1,
        borderRadius : 25,
        marginRight : 10,
        paddingHorizontal : 25,
        marginTop: 10,
        paddingVertical : 20 ,
        paddingLeft : 50,
        backgroundColor : Colors.white,
    },
    userName : {
        fontSize : 12,
        fontWeight : '500',
        color : Colors.Jet_Black,
        paddingBottom : 10

    },
    userEmail : {
        fontSize : 12,
        fontWeight : '500',
        color : Colors.Jet_Black,
       
    },
})

export default userItemStyle;