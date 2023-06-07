import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { ChatTile } from "../../components";

import { getMyNotices } from "../../api";
import { useFocusEffect } from "@react-navigation/native";

export default function Chat({ navigation }) {
  const [myNotice, setMyNotice] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getMyNotices(setMyNotice);
    }, [])
  );
  return (
    <View>
      {myNotice.map(({ board_no, board_nm, site_nm }) => (
        <TouchableOpacity
          key={board_no}
          onPress={() =>
            navigation.navigate("ChatRoom", {
              title: `${site_nm} (${board_nm})`,
              board_no,
            })
          }
        >
          <ChatTile title={`${site_nm} (${board_nm})`} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
