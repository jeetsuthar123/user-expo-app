import { Text, View, FlatList } from "react-native";
import userListStyle from "./UserList.style";
import { useState } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import UserItem from "./UserItem/UserItem";
import { useGetUsersQuery } from "../ApiSlices/userApiSlice";

type ItemData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const DATA: ItemData[] = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

const {
  data: response,
  isError,
  isFetching,
  isLoading,
  isSuccess,
  error,
  refetch,
} = useGetUsersQuery({});

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={userListStyle.container}>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeHolder="Search a user"
      />
      <FlatList
        style={userListStyle.userList}
        data={response?.data}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => <UserItem item={item} />}
        onRefresh={refetch}
        refreshing={isFetching}
        testID="user-list"
      />
    </View>
  );
};

export default UserList;
