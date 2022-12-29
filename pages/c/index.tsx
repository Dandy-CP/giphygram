import {
  ContainerContent,
  NoContent,
} from '../../styles/Content/content.styled';

const index = () => {
  return (
    <ContainerContent>
      <NoContent>
        <h1>Sorry, this page isn&apos;t available.</h1>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
        </p>
      </NoContent>
    </ContainerContent>
  );
};

export default index;
