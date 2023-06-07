import { db } from "../firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";

export const getAllNotices = async () => {
  try {
    const res = await fetch(
      "https://api.cnu.ac.kr/svc/offcam/pub/cmsBoard?AUTH_KEY=FE271E66B72843E2A6B0CFEBE06BC09DFE5534B2",
      { method: "POST" }
    );
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const getDetailNotice = async (id) => {
  try {
    const res = await fetch(
      `https://api.cnu.ac.kr/svc/offcam/pub/homepageboardContents?P_board_no=${id}&AUTH_KEY=FE271E66B72843E2A6B0CFEBE06BC09DFE5534B2`,
      { method: "POST" }
    );
    return res.json();
  } catch (e) {
    console.error("데이터 패치 오류", e);
  }
};
export const saveMyNotices = async (noticeList) => {
  try {
    await setDoc(doc(db, "notice", "myNotice"), { noticeList });
  } catch (e) {
    console.error(e);
  }
};

export const getMyNotices = async (setState) => {
  try {
    const noticeCol = collection(db, "notice");
    const noticeSnapshot = await getDocs(noticeCol);
    setState(noticeSnapshot.docs[0].data().noticeList);
  } catch (e) {
    console.error(e);
  }
};

export const getBookMarks = async (board_no) => {
  try {
    const bookmarkCol = collection(db, "bookmarks");
    const snapshot = await getDocs(bookmarkCol);
    return snapshot.docs[0].data()[board_no];
  } catch (e) {
    console.error(e);
  }
};

export const saveBookMarks = async (board_no, article_no) => {
  try {
    const bookmarkRef = doc(db, "bookmarks", "myBookmarks");
    await updateDoc(bookmarkRef, { [board_no]: arrayUnion(article_no) });
  } catch (e) {
    console.error(e);
  }
};

export const deleteBookMarks = async (board_no, article_no) => {
  try {
    const bookmarkRef = doc(db, "bookmarks", "myBookmarks");
    const existArr = await getBookMarks(board_no);
    const updateArr = existArr.filter((data) => data !== article_no);
    await updateDoc(bookmarkRef, {
      [board_no]: updateArr,
    });
  } catch (e) {
    console.error(e);
  }
};

export const setReadNotice = async (board_no, article_no) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

export const getReadNotice = async (board_no) => {
  try {
  } catch (e) {
    console.error(e);
  }
};
