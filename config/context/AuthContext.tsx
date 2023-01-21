import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

interface Props {
  children?: ReactNode;
}

const UserContext = createContext<object | any>({});

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<object | any>({});

  const createUser = async (
    email: string,
    password: string,
    name: string,
    username: string,
  ) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser!, { displayName: name }).catch((err) =>
      console.log(err),
    );

    const users: any = result.user;
    setDoc(doc(db, 'users', email), {
      profile: {
        name: users.displayName,
        username: username,
        email: email,
        emailStatus: users.emailVerified,
        avatar: users.photoURL,
      },
      posted: [],
      following: [],
      saved: [],
    });
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = async (userSignUpWithGoogle: boolean) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);

    const users: any = result.user;
    if (userSignUpWithGoogle === true) {
      try {
        setDoc(doc(db, 'users', users.email), {
          profile: {
            name: users.displayName,
            username: 'user-' + users.uid.slice(0, 10),
            email: users.email,
            emailStatus: users.emailVerified,
            avatar: users.photoURL,
          },
          posted: [],
          following: [],
          saved: [],
        });
      } catch (err: any) {
        console.log(err.message);
      }
    }
  };

  const guestUser = () => {
    return signInAnonymously(auth);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, googleSignIn, guestUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
