import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore/lite";
import Message from "../../Components/Message";
import { Container, Wrap, Send, NotUser } from "./style";
import Icon from "../../Components/Icon";
import { ReactComponent as sent } from "../../Assets/icon/send.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Messages = () => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const [update, setUpdate] = useState(true);

  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.user.darkMode);
  const open = useSelector((store) => store.sidebar.sidebarOpen);

  useEffect(() => {
    const col = collection(db, "messages");
    const q = query(col, orderBy("createdAt"));
    getDocs(q).then((snapshot) => {
      let message = [];
      snapshot.docs.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
  }, [update]);

  //submit

  const onSubmit = () => {
    setUpdate(serverTimestamp());
    const docData = {
      message: msg,
      name: auth.currentUser.displayName
        ? auth.currentUser.displayName
        : "Avatar",
      userId: auth.currentUser.uid,
      userImg: auth.currentUser.photoURL,
      createdAt: serverTimestamp(),
    };

    const colRef = collection(db, "messages");

    addDoc(colRef, docData).then(() => {
      setMsg("");
    });
  };

  return user ? (
    <Container>
      <Wrap>
        {messages.map((item) => (
          <Message key={item.id} data={item} />
        ))}
      </Wrap>
      <Send open={open}>
        <textarea
          type="text"
          placeholder="Message ..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button onClick={onSubmit}>
          <Icon Img={sent} />
          Sent
        </button>
      </Send>
    </Container>
  ) : (
    <NotUser darkMode={darkMode}>
      <h1>
        Sorry, You are not registered, Please{" "}
        <span onClick={() => navigate("/sign-in")}>Sign In</span> to see all
        messages.
      </h1>
    </NotUser>
  );
};

export default Messages;
