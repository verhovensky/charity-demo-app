import auth from '@react-native-firebase/auth';

export const creatUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log(`Email ${email} is already in use!`);
    } else if (error.code === 'auth/weak-password') {
      console.log('Password is too weak!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('Email is invalid!');
    }
    console.log('Undefined error', error);
  }
};
