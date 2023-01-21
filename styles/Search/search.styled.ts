import styled from 'styled-components';

export const ContainerSearch = styled.div`
  width: 70vw;
  height: 100vh;
  margin: 0 auto;
  margin-left: 450px;
  margin-top: 130px;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    margin-left: 350px;
    width: 70vw;
  }
`;

export const SearchWrap = styled.div`
  width: 53%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props: any) => props.theme.color.blackdoff};
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 0px;
  margin-left: 618px;
  position: fixed;
  z-index: 1;

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 59.5%;
    margin-left: 435px;
  }
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 50px;
  border: none;
  padding: 10px;
  margin-left: 100px;
  font-size: 1rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const SearchBar = styled.div``;

export const SearchSugestion = styled.div`
  width: 75%;
  background-color: white;
  color: black;
  padding: 10px;
  margin-top: 10px;
  margin-left: 100px;
  border-radius: 5px;

  p {
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    font-weight: 500;
    color: black;
    padding-left: 10px;
    cursor: pointer;

    :hover {
      background-color: gray;
    }
  }
`;

export const ButtonSearch = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
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

  :hover {
    background: rgb(111, 59, 190);
  }
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 42px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #16181c;
  border-radius: 50px;
`;

export const ToggleGIF = styled.button`
  width: 200px;
  height: 42px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  border: transparent;
  cursor: pointer;

  background: ${(props: any) =>
    props.gif === true
      ? `linear-gradient(
    -135deg,
    rgb(0, 231, 149) 0%,
    rgb(0, 187, 221) 100%
  )`
      : '#16181c'};
`;

export const ToggleSticker = styled(ToggleGIF)`
  background: ${(props: any) =>
    props.stickers === false
      ? `linear-gradient(
        -135deg,
        rgb(74, 144, 226) 0%,
        rgb(148, 56, 255) 100%
      )`
      : '#16181c'};
`;

export const ContentSearch = styled.div`
  width: 1000px;
  margin: 0 auto;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 15px;
    object-fit: cover;
  }

  @media (-webkit-min-device-pixel-ratio: 1.25) {
    width: 900px;
  }
`;

export const UserOverlay = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 10px;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 0px;
  }

  p {
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;
