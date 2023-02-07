import {
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  query,
  collection,
  where,
} from 'firebase/firestore';
import { db } from '../../../config/firebase';

import {
  setCommentedContent,
  setLikedContent,
  setSavedContent,
} from '../reducer/setContentAction';

export const setGetCommentDataAction = (
  contentID: string | string[] | undefined,
) => {
  return (dispatch: any) => {
    const q = query(
      collection(db, 'content'),
      where('IDcontent', '==', contentID),
    );

    onSnapshot(q, (doc) => {
      doc.forEach((data) => {
        dispatch(setCommentedContent(data.data()?.commentedBy));
      });
    });
  };
};

export const setGetLikedDataAction = (
  contentID: string | string[] | undefined,
) => {
  return (dispatch: any) => {
    const q = query(
      collection(db, 'content'),
      where('IDcontent', '==', contentID),
    );

    onSnapshot(q, (doc) => {
      doc.forEach((data) => {
        dispatch(setLikedContent(data.data()?.likedBy));
      });
    });
  };
};

export const setGetSavedDataAction = (
  contentID: string | string[] | undefined,
) => {
  return (dispatch: any) => {
    const q = query(
      collection(db, 'content'),
      where('IDcontent', '==', contentID),
    );

    onSnapshot(q, (doc) => {
      doc.forEach((data) => {
        dispatch(setSavedContent(data.data()?.savedBy));
      });
    });
  };
};

export const setAddNewCommentAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
  comment: string,
  nameChannel: string,
  avatarChannel: string,
  contentTitle: string,
  content: string,
) => {
  await setDoc(doc(db, 'content', `${contentID}`), {
    commentedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
      comment: comment,
    }),
    IDcontent: contentID,
  });

  await updateDoc(doc(db, 'users', `${email}`), {
    commented: arrayUnion({
      content: {
        nameChannel: nameChannel,
        avatarChannel: avatarChannel,
        contentTitle: contentTitle,
        gif: content,
      },
      IDcontent: contentID,
      avatar: avatar,
      name: name,
      username: username,
      comment: comment,
    }),
  });
};

export const setUpdateExistingCommentAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
  comment: string,
  nameChannel: string,
  avatarChannel: string,
  contentTitle: string,
  content: string,
) => {
  await updateDoc(doc(db, 'content', `${contentID}`), {
    commentedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
      comment: comment,
    }),
    IDcontent: contentID,
  });

  await updateDoc(doc(db, 'users', `${email}`), {
    commented: arrayUnion({
      content: {
        nameChannel: nameChannel,
        avatarChannel: avatarChannel,
        contentTitle: contentTitle,
        gif: content,
      },
      IDcontent: contentID,
      avatar: avatar,
      name: name,
      username: username,
      comment: comment,
    }),
  });
};

export const setAddNewLikedAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
  nameChannel: string,
  avatarChannel: string,
  contentTitle: string,
  content: string,
) => {
  await setDoc(doc(db, 'content', `${contentID}`), {
    likedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
    }),
    IDcontent: contentID,
  });

  await updateDoc(doc(db, 'users', `${email}`), {
    liked: arrayUnion({
      content: {
        nameChannel: nameChannel,
        avatarChannel: avatarChannel,
        contentTitle: contentTitle,
        gif: content,
      },
      IDcontent: contentID,
      avatar: avatar,
      name: name,
      username: username,
    }),
  });
};

export const setUpdateExistingLikedAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
  nameChannel: string,
  avatarChannel: string,
  contentTitle: string,
  content: string,
) => {
  await updateDoc(doc(db, 'content', `${contentID}`), {
    likedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
    }),
    IDcontent: contentID,
  });

  await updateDoc(doc(db, 'users', `${email}`), {
    liked: arrayUnion({
      content: {
        nameChannel: nameChannel,
        avatarChannel: avatarChannel,
        contentTitle: contentTitle,
        gif: content,
      },
      IDcontent: contentID,
      avatar: avatar,
      name: name,
      username: username,
    }),
  });
};

export const setAddNewSavedAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
) => {
  await setDoc(doc(db, 'content', `${contentID}`), {
    likedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
    }),
    IDcontent: contentID,
  });
};

export const setUpdateExistingSavedAction = async (
  contentID: string | string[] | undefined,
  avatar: string,
  name: string | string[] | undefined,
  username: string | string[] | undefined,
  email: string | string[] | undefined,
) => {
  await updateDoc(doc(db, 'content', `${contentID}`), {
    likedBy: arrayUnion({
      avatar: avatar,
      name: name,
      username: username,
    }),
    IDcontent: contentID,
  });
};
