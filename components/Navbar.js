import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Navbar.module.scss';
import { signOut } from 'next-auth/react';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Playlist', path: '/playlist' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {

  const { pathname } = useRouter();

  return (
    <nav className={ styles.nav }>
      <div className={ styles.logo }>
        <Image src="/next.svg" width={ 60 } height={ 60 } alt="next"/>
      </div>
      <div className={ styles.links }>
        { navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={ id } href={ path }>
            <a className={ pathname === path ? styles.active : null }>{ title }</a>
          </Link>
        )) }
      </div>
      <div>
        <button onClick={ () => {signOut({ callbackUrl: '/login' })} }> Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;