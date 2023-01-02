import styled from 'styled-components';

export const ContainerExplore = styled.div`
  width: 65vw;
  height: 100vh;
  margin: 0 auto;
`;

export const WrapCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 200px;
`;

export const FeaturedCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  margin: 20px;
  position: relative;

  p {
    position: absolute;
    font-size: 1.3rem;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
