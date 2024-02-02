import { Text, TextInput, View } from "react-native";
import searchBarStyle from "./SearchBar.style";
import Icon  from "react-native-vector-icons/FontAwesome";

type SearchBarProps = {
    searchTerm : string,
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>,
    placeHolder : string,
}

const SearchBar = ({searchTerm,setSearchTerm,placeHolder} : SearchBarProps) => {
    return (
        <View style = {searchBarStyle.container} > 
            <Icon style = {searchBarStyle.icon} name="search" size={15}></Icon>
            <TextInput 
            style={searchBarStyle.input}
            placeholder={placeHolder}
            onChangeText={setSearchTerm}
            value={searchTerm}
            />
        </View>
    )

}

export default SearchBar;