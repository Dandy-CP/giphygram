import styled from 'styled-components';

export const MainContainerTimeline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin: 0 auto;
  margin-top: 50px;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 100%;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 25%;
  }
`;

export const CardContent = styled.article`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 0px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: ${(props: any) => props.theme.color.blackdoff};

  hr {
    border-bottom: 0px;
  }
`;

export const UserChannel = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 12px;
    cursor: pointer;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;

export const GifContent = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentAction = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const Like = styled.div`
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

export const Comment = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

export const Share = styled(Comment)``;

export const Bookmark = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
  cursor: pointer;
`;

export const TitleContent = styled.div`
  p {
    font-size: 0.9rem;
    margin-left: 10px;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;

export const UserComment = styled.div`
  hr {
    border-bottom: 0px;
  }
`;

export const LatestComment = styled.div`
  display: flex;
  margin-left: 10px;
  cursor: pointer;

  p {
    font-size: 0.9rem;
    font-weight: 500;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;

export const Commented = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    cursor: pointer;

    :last-child {
      font-weight: 400;
    }
  }

  img {
    border-radius: 20px;
  }
`;

export const InputComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;

  textarea {
    width: 100%;
    border: none;
    background-color: ${(props: any) => props.theme.color.blackdoff};
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 7px;
    height: 30px;
    font-size: 0.9rem;
    resize: none;
    overflow: hidden;

    :focus {
      outline: none;
    }

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }

  button {
    border: none;
    background-color: #16181c;
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    margin-left: 10px;
    cursor: pointer;

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      font-size: 0.8rem;
    }
  }
`;
