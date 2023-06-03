import { db } from '../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';

export const getAllNotices = async () => {
  try {
    const res = await fetch(
      'https://api.cnu.ac.kr/svc/offcam/pub/cmsBoard?AUTH_KEY=FE271E66B72843E2A6B0CFEBE06BC09DFE5534B2',
      { method: 'POST' },
    );
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export const saveMyNotices = async noticeList => {
  try {
    await setDoc(doc(db, 'notice', 'myNotice'), { noticeList });
  } catch (e) {
    console.error(e);
  }
};

export const getMyNotices = async setState => {
  try {
    const noticeCol = collection(db, 'notice');
    const noticeSnapshot = await getDocs(noticeCol);
    console.log(noticeSnapshot.docs[0].data().noticeList);
    setState(noticeSnapshot.docs[0].data().noticeList);
  } catch (e) {
    console.error(e);
  }
};
