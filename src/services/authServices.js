import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "~/config/api/firebase";

// Kullanıcı kimlik doğrulama işlemleri
export async function authenticateFirebaseUser(email, password, action) {
  debugger;
  try {
    const response =
      action === "signUp"
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    return err; // Hatanın fırlatılması
  }
}

// Kullanıcı firebase kayıt olma işlemi
export async function signUp(email, password) {
  debugger;
  const user = await authenticateFirebaseUser(email, password, "signUp");
  return user; // Dönüş değerini döndürün
}

// Kullanıcı firebase giriş işlemi
export async function signIn(email, password) {
  await authenticateFirebaseUser(email, password, "signIn");
}
