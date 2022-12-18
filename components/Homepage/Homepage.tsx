import { useRouter } from 'next/router';

import ContentForModal from '../ModalContent/ContentForModal';
import { ModalContent } from '../ModalContent/ModalContent';
import ChannelSuggestion from './ChannelSuggestion/ChannelSuggestion';
import Timeline from './Timeline/Timeline';
import Username from './User/Username';

import {
  ChannelSugestAndUsername,
  ContainerHomepage,
} from '../../styles/Homepage/homepage.styled';

const Homepage = () => {
  let router = useRouter();

  return (
    <ContainerHomepage>
      <Timeline />

      {router.query.content && (
        <ModalContent query={router.query.profile}>
          <ContentForModal />
        </ModalContent>
      )}

      <ChannelSugestAndUsername>
        <Username />
        <ChannelSuggestion />
      </ChannelSugestAndUsername>
    </ContainerHomepage>
  );
};

export default Homepage;
