import * as React from "react";
import { View, Text } from "react-native";

import Bookmark from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { deleteBookMarks, saveBookMarks } from "../../api";

export default function NoticeTr({
  board_no,
  article_no,
  read,
  title,
  date,
  bookmark,
  isNew,
}) {
  const [isRead, setIsRead] = React.useState(read);
  const [isBookmarked, setIsBookmarked] = React.useState(bookmark);
  const handleBookmark = async () => {
    if (isBookmarked) {
      await deleteBookMarks(board_no, article_no);
    } else {
      await saveBookMarks(board_no, article_no);
    }
    setIsBookmarked((state) => !state);
  };

  React.useEffect(() => {
    setIsBookmarked(bookmark);
  }, [bookmark]);

  React.useEffect(() => {
    setIsRead(read);
  }, [read]);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: isRead ? "#DFE4EC" : "none",
      }}
    >
      <TouchableOpacity onPress={handleBookmark}>
        <Bookmark name={isBookmarked ? "bookmark" : "bookmark-o"} size={20} />
      </TouchableOpacity>
      <Text
        style={{
          backgroundColor: "orange",
          padding: 4,
          borderRadius: 10,
          color: "white",
          fontWeight: "600",
          fontSize: 8,
          visibility: isNew ? "visible" : "hidden",
        }}
      >
        new
      </Text>
      <Text
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: isRead && "#909090",
        }}
      >
        {title}
      </Text>
      <Text>{date}</Text>
    </View>
  );
}
