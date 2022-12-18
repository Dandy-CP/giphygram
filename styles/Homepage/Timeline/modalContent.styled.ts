import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 3;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  padding: 100px;
  cursor: pointer;
`;

export const CardModalContent = styled.div`
  width: 70%;
  height: auto;
  background-color: ${(props: any) => props.theme.color.blackdoff};
`;

export const MainContentCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const GIFsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentDescription = styled.div`
  position: relative;
  overflow: scroll;
  width: 100%;
  height: auto;
  padding-top: 15px;

  hr {
    border-bottom: 0px;
  }
`;

export const UserChannel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  img {
    border-radius: 50px;
    margin-right: 15px;
  }
`;

export const ContentInfo = styled.div`
  overflow: scroll;
  margin-left: 20px;
`;

export const CopyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }

  button {
    width: 300px;
    height: 50px;
    margin: 0 auto;
    color: white;
    border: transparent;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    background: rgb(111, 59, 190);
    background: -moz-linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6f3bbe",endColorstr="#4b35b0",GradientType=1);
  }
`;

export const EmbedContent = styled.div`
  width: 100%;
  margin-bottom: auto;

  input {
    width: 60%;
    height: 45px;
    margin-top: 10px;
  }

  button {
    width: 130px;
    height: 45px;
    color: white;
    border: transparent;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    background: rgb(111, 59, 190);
    background: -moz-linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(111, 59, 190, 1) 35%,
      rgba(75, 53, 176, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6f3bbe",endColorstr="#4b35b0",GradientType=1);
  }
`;

export const CommentSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 20px;

  h4 {
    margin-right: 20px;
  }
`;

export const CommentInput = styled.div`
  position: absolute;
  bottom: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  padding: 20px;

  textarea {
    width: 100%;
    height: 100px;
    border: none;
    background-color: ${(props: any) => props.theme.color.blackdoff};
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 7px;
    height: 30px;
    font-size: 0.9rem;
    resize: none;

    :focus {
      outline: none;
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
  }
`;
