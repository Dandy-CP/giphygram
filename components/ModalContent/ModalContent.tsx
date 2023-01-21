import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from '../../config/redux/store';
import setGetContentByIdAction from '../../config/redux/action/getContentByID';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  CloseButton,
  ContainerModal,
  MainContent,
  Overlay,
} from '../../styles/Homepage/Timeline/modalContent.styled';

interface IModal {
  children?: ReactNode;
  query: string | string[] | undefined;
}

export function ModalContent({ children, query }: IModal) {
  const dispatch = useDispatch();
  let router = useRouter();
  let content = router.query.content;
  let profile = router.query.profile;
  let search = router.query.search;

  const handleOnClose = () => {
    dispatch(setGetContentByIdAction(content, true));
  };

  return (
    <ContainerModal>
      <Overlay>
        {content && (
          <CloseButton
            onClick={() => {
              router.replace('/', undefined, { scroll: false });
              handleOnClose();
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </CloseButton>
        )}

        {profile && (
          <CloseButton
            onClick={() => {
              router.replace(`${query}`, undefined, { scroll: false });
              handleOnClose();
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </CloseButton>
        )}

        {search && (
          <CloseButton
            onClick={() => {
              router.replace(`${query}`, undefined, { scroll: false });
              handleOnClose();
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          </CloseButton>
        )}

        <MainContent>{children}</MainContent>
      </Overlay>
    </ContainerModal>
  );
}
