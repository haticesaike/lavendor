import { useState } from "react";
import styles from "./ChatScreen.module.css";
import vector from "../../assets/vector.svg";
import OpenAI from "openai";
import * as React from "react";
import {v4 as uuidv4} from "uuid";
import MessageBubble from "../MessageBubble/MessageBubble.tsx";
import avatarImg from "../../assets/logo.svg";



const initialMessages = [
  {
    sender: "assistant",
    message: "Lavendor, I need to know the total sales for last week...",
  },
];

const ChatScreen = () => {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async () => {
    if (!inputValue) return;
    if (isTyping) return;
    if (!inputValue.trim()) return;
    const newMessage = {
      message:inputValue,
      direction: "outgoing",
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const content = await processMessageToChatGPT([...messages, newMessage]);
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
      setInputValue("");
    }
  };

  async function processMessageToChatGPT(chatMessages:any) { //** TODO: Fix any type
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "ft:gpt-3.5-turbo-1106:personal::9DhjEMjf",
      messages: [...apiMessages],
    };
    const completion = await openai.chat.completions.create(
      apiRequestBody
    );
    return completion.choices[0].message.content;
  }
  const handleNewMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageList}>
        {messages.map((message) => (
          <div
            key={uuidv4()}
            className={
              message.sender === "user"
                ? styles.messageRowRight
                : styles.messagRowLeft
            }
          >
            <div className={styles.message}>{message.message}</div>
          </div>
        ))}
      </div>

      <div className={styles.messageForm}>
        <form className={styles.form} onSubmit={(e)=>{
          e.preventDefault();
          handleSendRequest().then();
        }}>
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
          <img src={vector} alt="Send" className={styles.sendIcon}/>
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
