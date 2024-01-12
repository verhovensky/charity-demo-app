import auth from '@react-native-firebase/auth';

export const creatUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
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
    console.log(response);
    return {
      status: true,
      displayName: response.user.displayName,
      email: response.user.email,
      token: token,
    };
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return {
        error: `User ${email} not found!`,
      };
    } else if (error.code === 'auth/wrong-password') {
      return {
        error: 'Wrong password!',
      };
    } else if (error.code === 'auth/invalid-email') {
      return {
        error: 'Email is invalid!',
      };
    }
  }
};
