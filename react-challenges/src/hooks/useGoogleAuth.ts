import { auth, googleProvider } from "../firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

export const useGoogleAuth = () => {
  const navigate = useNavigate();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      const idToken = await user.getIdToken();
      const userData = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        token: idToken
      };
      localStorage.setItem("user", JSON.stringify(userData));
      if (userData.token) {
        navigate("/")
      } else {
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { googleLogin }
};