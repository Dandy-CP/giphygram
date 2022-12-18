import styled from 'styled-components';

export const UserSkeleton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;

  span {
    margin-right: 10px;
  }
`;

export const ContentSkeleton = styled.div`
  margin-bottom: 20px;
`;

export const TitleSkeleton = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CommentSkeleton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;

  span {
    margin-bottom: 5px;
  }
`;

export const WrapSkeleton = styled.div`
  width: 80%;
  height: auto;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
