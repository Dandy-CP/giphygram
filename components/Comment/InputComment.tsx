import React, { useEffect } from 'react';

import { useDispatch, useSelector } from '../../config/redux/store';
import { getDataUserProfile } from '../../config/redux/reducer/setUserProfile';
import { setInputComment } from '../../config/redux/reducer/setContentAction';
import { getDataContentAction } from '../../config/redux/reducer/setContentAction';
import {
  setGetCommentDataAction,
  setAddNewCommentAction,
  setUpdateExistingCommentAction,
} from '../../config/redux/action/contentAction';

import {
  InputComment,
  UserComment,
} from '../../styles/Homepage/Timeline/timeline.styled';

interface IData {
  contentID: string | string[] | undefined;
  dataContent: any;
}

const UserInputComment = ({ contentID, dataContent }: IData) => {
  const dispatch = useDispatch();
  const { profile } = useSelector(getDataUserProfile);
  const { commentedBy, inputComment } = useSelector(getDataContentAction);

  useEffect(() => {
    dispatch(setGetCommentDataAction(contentID));
  }, [dispatch, contentID]);

  const HandleAddComment = (
    contentID: string | string[] | undefined,
    nameChannel: string,
    avatarChannel: string,
    contentTitle: string,
    content: string,
  ) => {
    commentedBy.length === 0
      ? setAddNewCommentAction(
          contentID,
          profile?.avatar,
          profile?.name,
          profile?.username,
          profile?.email,
          inputComment,
          nameChannel,
          avatarChannel,
          contentTitle,
          content,
        )
      : setUpdateExistingCommentAction(
          contentID,
          profile?.avatar,
          profile?.name,
          profile?.username,
          profile?.email,
          inputComment,
          nameChannel,
          avatarChannel,
          contentTitle,
          content,
        );
  };

  return (
    <UserComment>
      <InputComment>
        <textarea
          placeholder="Add a comment..."
          value={inputComment}
          onChange={(e) => {
            dispatch(setInputComment(e.target.value));
          }}
        />

        {dataContent.user === undefined ? (
          <button
            onClick={() => {
              HandleAddComment(
                contentID,
                'Unknown User',
                '',
                dataContent?.title,
                dataContent?.images.downsized.url,
              );
              dispatch(setInputComment(''));
            }}
          >
            Post
          </button>
        ) : (
          <button
            onClick={() => {
              HandleAddComment(
                contentID,
                dataContent?.user.username,
                dataContent?.user.avatar_url,
                dataContent?.title,
                dataContent?.images.downsized.url,
              );
              dispatch(setInputComment(''));
            }}
          >
            Post
          </button>
        )}
      </InputComment>
    </UserComment>
  );
};

export default UserInputComment;
