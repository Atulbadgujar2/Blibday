import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Container } from "../../components";
import { getCurrentTime, useThemeHelper } from "../../helper";
import { Styles } from "../../styles";
import { connect } from 'react-redux';

const ChatScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      id: 1,
      text: "Hello! How can I help you?",
      sender: "other",
      time: "10:20 AM",
    },
    {
      id: 2,
      text: "Hi, I need help with my order.",
      sender: "me",
      time: "10:21 AM",
    },
  ]);

  const flatListRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 200);
  }, [chat]);

  // Send Message
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: message,
      sender: "me",
      time: getCurrentTime(),
    };

    setChat([...chat, newMsg]);
    setMessage("");
  };

  // Render Message
  const renderMessage = ({ item }) => {
    const isMe = item.sender === "me";

    return (
      <View
        style={[Style.chatView, {
          justifyContent: isMe ? "flex-end" : "flex-start",
        }]}
      >
        <View
          style={[Style.chatInnerView, {
            backgroundColor: isMe ? colors.primary_color : colors.bright_gray01,
            borderBottomRightRadius: isMe ? 0 : 12,
            borderBottomLeftRadius: isMe ? 12 : 0,
          }]}
        >
          <Text style={[Style.chatText, { color: isMe ? colors.white_to_black_color : colors.black_to_white_color }]}>
            {item.text}
          </Text>

          {/* Time */}
          <Text
            style={[Style.chatTimeText, {
              color: isMe ? colors.bright_gray : colors.light_black,
            }]}
          >
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={[Style.paddingHorizontalCommon, Style.flex]}>

        {/* Messages List */}
        <FlatList
          ref={flatListRef}
          data={chat}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        {/* Input Section */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View
            style={Style.chatInputView}
          >
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message..."
              style={Style.chatInput}
            />

            <TouchableOpacity
              onPress={sendMessage}
              style={Style.chatButton}
            >
              <Text style={Style.chatButtontxt}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(ChatScreen);


