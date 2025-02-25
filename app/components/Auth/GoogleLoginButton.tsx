import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";

import GoogleLoginButtonCss from "./GoogleLoginButtonCss";


const GoogleLoginButton: React.FC = () => {
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      // ポップアップウィンドウを使ってサインイン
      const result: UserCredential = await signInWithPopup(auth, provider);
      
      // 認証結果から Google アクセストークンを取得
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      
      // サインインしたユーザー情報を取得
      const user = result.user;
      
      console.log("Google Access Token:", token);
      console.log("Signed in user:", user);
      // ここで追加処理を行う（例：ユーザー情報の保存など）
      
    } catch (error: any) {
      // エラーが発生した場合の処理
      const errorCode: string = error.code;
      const errorMessage: string = error.message;
      const email: string | undefined = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      
      console.error("Error code:", errorCode);
      console.error("Error message:", errorMessage);
      console.error("Email:", email);
      console.error("Credential:", credential);
    }
  };

  return (
    <GoogleLoginButtonCss test={handleGoogleLogin} /> 
  );
};

export default GoogleLoginButton;
