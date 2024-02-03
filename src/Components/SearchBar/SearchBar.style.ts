import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const searchBarStyle = StyleSheet.create({
    container : {
       height : 50,
       backgroundColor : Colors.white,
       flexDirection : 'row',
       borderRadius : 25,
       marginHorizontal : 30,
       marginTop : 80,
       padding : 5
    },
    icon : {
       padding : 10
    },
    input : {
        flex : 1,
        backgroundColor : Colors.white,
        color : Colors.input_color,
        height : 40,
        marginRight : 20
    }
})

export default searchBarStyle;