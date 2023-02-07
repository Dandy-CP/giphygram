import React, { useEffect } from 'react';
import Image from 'next/image';

import { useDispatch, useSelector } from '../../config/redux/store';
import { getDataContentAction } from '../../config/redux/reducer/setContentAction';
import { setGetCommentDataAction } from '../../config/redux/action/contentAction';

import {
  CommentFromUser,
  ContainerCommentSection,
} from '../../styles/Homepage/Timeline/modalContent.styled';

interface IData {
  contentID: string | string[] | undefined;
}

const CommentSection = ({ contentID }: IData) => {
  const dispatch = useDispatch();
  const { commentedBy } = useSelector(getDataContentAction);

  console.log(commentedBy);

  useEffect(() => {
    dispatch(setGetCommentDataAction(contentID));
  }, [dispatch, contentID]);

  return (
    <ContainerCommentSection>
      {commentedBy.map((list: any) => (
        <CommentFromUser key={list.comment}>
          <Image src={list.avatar} alt="avatar" width={20} height={20} />
          <p>{list.name}</p>
          <p>{list.comment}</p>
        </CommentFromUser>
      ))}
    </ContainerCommentSection>
  );
};

export default CommentSection;
