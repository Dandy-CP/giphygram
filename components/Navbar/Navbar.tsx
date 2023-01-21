import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { UserAuth } from '../../config/context/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faUser,
  faBars,
  faGear,
  faBookmark,
  faRightFromBracket,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  ListMenu,
  ListMoreMenu,
  Logo,
  MenuItem,
  MoreMenu,
  NavContainer,
} from '../../styles/Navbar/Navbar.styled';

import MainLogo from '../../public/icons/logo.webp';

const Navbar = () => {
  const [moreMenu, setMoreMenu] = useState(false);

  let router = useRouter();

  const { logout } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavContainer>
      <Logo>
        <Link href={'/'}>
          <Image
            src={MainLogo}
            width={150}
            alt="logo"
            draggable="false"
            priority
          />
        </Link>
      </Logo>

      <MenuItem>
        <Link href={'/'}>
          <ListMenu>
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </ListMenu>
        </Link>

        <Link href={'/search'}>
          <ListMenu>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Search</p>
          </ListMenu>
        </Link>

        <Link href={'/explore'}>
          <ListMenu>
            <FontAwesomeIcon icon={faCompass} />
            <p>Explore</p>
          </ListMenu>
        </Link>

        <Link href={''}>
          <ListMenu>
            <FontAwesomeIcon icon={faPlusCircle} />
            <p>Add GIFs</p>
          </ListMenu>
        </Link>

        <Link href={'/MyProfile'}>
          <ListMenu>
            <FontAwesomeIcon icon={faUser} />
            <p>Profile</p>
          </ListMenu>
        </Link>

        <MoreMenu>
          {moreMenu === true ? (
            <ListMoreMenu>
              <Link href={'/'}>
                <FontAwesomeIcon icon={faGear} />
                <p>Setting</p>
              </Link>

              <Link href={'/'}>
                <FontAwesomeIcon icon={faBookmark} />
                <p>Saved</p>
              </Link>

              <Link
                href={''}
                onClick={() => {
                  handleLogOut();
                }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p>Logout</p>
              </Link>
            </ListMoreMenu>
          ) : null}

          <ListMenu
            onClick={() => {
              {
                moreMenu ? setMoreMenu(false) : setMoreMenu(true);
              }
            }}
          >
            <FontAwesomeIcon icon={faBars} />
            <p>More</p>
          </ListMenu>
        </MoreMenu>
      </MenuItem>
    </NavContainer>
  );
};

export default Navbar;
