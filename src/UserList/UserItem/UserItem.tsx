import { Image, Text, View } from "react-native";
import userItemStyle from "./UserItem.style";

// type userItemProps = {
//     id: number;
//     email : string,
//     first_name : string,
//     last_name : string,
//     avatar : string
//   };

type userItemProps = {
  item: any;
};

const UserItem = ({ item }: userItemProps) => {
  return (
    <View style={userItemStyle.mainContainer}>
      <Image style={userItemStyle.userImage} source={{ uri: item?.avatar }} />

      <View style={userItemStyle.userInfoView}>
        <Text style={userItemStyle.userName}>
          {" "}
          {item?.first_name} {item?.last_name}
        </Text>
        <Text style={userItemStyle.userEmail}> {item?.email}</Text>
      </View>
    </View>
  );
};

export default UserItem;
