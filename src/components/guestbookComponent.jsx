import { useEffect, useState } from "react";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@commons/firebase";
import styled from "@emotion/styled";

const FormStyle = styled.form`
  & > div:first-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    input {
      all: unset;
      box-sizing: border-box;
      width: 120px;
      height: 20px;
      font-size: 14px;
      border: 1px solid black;
      padding: 0 4px;
      background-color: white;
    }
  }

  & > textarea {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background-color: white;
    resize: vertical;
    border: 1px solid black;
    padding: 4px;
    font-size: 14px;
    margin-bottom: 4px;

    &:hover,
    &:focus {
      outline: none;
    }
  }

  & > button {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 14px;
    border: 1px solid black;
  }
`;

const MessageStyle = styled.div`
  margin-top: 14px;
  p {
    font-size: 14px;

    &:nth-of-type(n + 2) {
      margin-top: 10px;
    }
  }
`;

const GuestbookComponent = () => {
  const [isWriter, setWriter] = useState("");
  const [isDetail, setDetail] = useState("");
  const [isData, setData] = useState([]);

  useEffect(() => {
    getGuestbook();
  }, []);

  const getGuestbook = async () => {
    setData([]);

    const q = query(collection(db, "guestbook"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newArr = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(querySnapshot);
      setData(newArr);
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();
    if ((isWriter != "") & (isDetail != "")) {
      try {
        const postGuestbook = async () => {
          await addDoc(collection(db, "guestbook"), {
            writer: isWriter,
            detail: isDetail,
            timestamp: new Date(),
          });
        };
        postGuestbook();
        setDetail("");
        getGuestbook();
      } catch (e) {}
    }
  };

  return (
    <>
      <FormStyle>
        <div>
          <input
            placeholder="작성자"
            value={isWriter}
            onInput={(e) => {
              setWriter(e.target.value);
            }}
          />
        </div>
        <textarea
          value={isDetail}
          onInput={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button onClick={submitEvent}>메시지 남기기</button>
      </FormStyle>
      <MessageStyle>
        {isData.map((item) => {
          return (
            <p key={item.id}>
              <strong>{item.writer}</strong> : {item.detail}
            </p>
          );
        })}
      </MessageStyle>
    </>
  );
};

export default GuestbookComponent;
