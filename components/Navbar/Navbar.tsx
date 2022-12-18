import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import {
  ListMenu,
  ListMoreMenu,
  Logo,
  MenuItem,
  NavContainer,
} from '../../styles/Navbar/Navbar.styled';

import MainLogo from '../../public/icons/logo.webp';

const Navbar = () => {
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

        <ListMenu>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Search</p>
        </ListMenu>

        <ListMenu>
          <FontAwesomeIcon icon={faCompass} />
          <p>Explore</p>
        </ListMenu>

        <ListMenu>
          <FontAwesomeIcon icon={faUser} />
          <p>Profile</p>
        </ListMenu>

        <ListMoreMenu>
          <FontAwesomeIcon icon={faBars} />
          <p>More</p>
        </ListMoreMenu>
      </MenuItem>
    </NavContainer>
  );
};

export default Navbar;
