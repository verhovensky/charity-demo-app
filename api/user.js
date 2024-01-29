import auth from '@react-native-firebase/auth';

export const creatUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {
        error: 'Email is already in use!',
      };
    } else if (error.code === 'auth/weak-password') {
      return {
        error: 'Password is too weak!',
      };
    } else if (error.code === 'auth/invalid-email') {
      return {
        error: 'Email is invalid!',
      };
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    if (response.user) {
      return {
        status: true,
        displayName: response.user.displayName,
        email: response.user.email,
        token: token,
      };
    } else {
      return {status: false, error: 'User not found!'};
    }
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return {status: false, error: 'Email is invalid!'};
    }
    if (error.code === 'auth/user-not-found') {
      return {status: false, error: 'User not found!'};
    }
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Wrong password!'};
    }
    if (error.code === 'auth/too-many-requests') {
      return {status: false, error: 'Too many requests!'};
    }
    if (error.code === 'auth/invalid-credential') {
      return {status: false, error: 'Invalid credentials!'};
    }
    return {status: false, error: error.message};
  }
};

export const logOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};
