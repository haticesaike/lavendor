import { useState } from "react";
import styles from "./ChatScreen.module.css";
import vector from "../../assets/vector.svg";
import OpenAI from "openai";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBubble from "../MessageBubble/MessageBubble.tsx";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const ChatScreen = () => {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const initialMessages: Array<ChatCompletionMessageParam> = [
    {
      role: "assistant",
      content: "Hi there! How can I assist you today?",
    },
  ];

  const [localMessages, setLocalMessages] =
    useState<Array<ChatCompletionMessageParam>>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async () => {
    if (!inputValue) return;
    if (isTyping) return;
    if (!inputValue.trim()) return;
    const newMessage: ChatCompletionMessageParam = {
      role: "user",
      content: inputValue,
    };

    setIsTyping(true);
    setLocalMessages([...localMessages, newMessage]);
    try {
      const completion = await openai.chat.completions
        .create({
          messages: [
            ...localMessages,
            newMessage,
          ] as Array<ChatCompletionMessageParam>,
          model: "ft:gpt-3.5-turbo-1106:personal::9GY4FkJU",
        })
        .then((response) => {
          return response.choices[0].message.content;
        });
      if (completion) {
        const chatGPTResponse: ChatCompletionMessageParam = {
          content: completion,
          role: "assistant",
        };
        setLocalMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
      setInputValue("");
    }
  };

  const handleNewMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageList}>
        {localMessages.map((message) => (
          <div
            key={uuidv4()}
            className={
              message.role === "user"
                ? styles.messageRowRight
                : styles.messageRowLeft
            }
          >
            <MessageBubble
              text={message.content as string}
              sender={message.role}
            />
          </div>
        ))}
      </div>

      <div className={styles.messageForm}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendRequest().then();
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleNewMessageChange}
            className={styles.messageInput}
            placeholder="How can I help you today?"
            disabled={isTyping}
            autoFocus
            autoComplete="off"
          />
        </form>
        <button onClick={handleSendRequest} className={styles.sendButton}>
          <img src={vector} alt="Send" className={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
