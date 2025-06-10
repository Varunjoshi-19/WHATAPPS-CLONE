import { reducerCases } from "@/context/constants";
import { useStateContext } from "@/context/StateContext";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firbaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc"
function login() {

  const router = useRouter();
  const [{ userInfo , newUser}, dispatch] = useStateContext();


useEffect(() => {
   if(userInfo?.id && !newUser) router.push("/");
} , [userInfo , newUser ])


  const handleLogin = async () => {

    const proivder = new GoogleAuthProvider();
    try {
      const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(firbaseAuth, proivder)

      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });

        if (!data.status) {

          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });

          dispatch({
            type: reducerCases.SET_USER_INFO, userInfo: {

              name, email, profileImage, status: ""
            }
          })

          router.push("/onboarding")
        }
        else {
          const { id, name, email, profilePicture: profileImage, status } = data.data;
          dispatch({
            type: reducerCases.SET_USER_INFO, userInfo: {
              id, name, email, profileImage, status
            }
          })
          router.push("/");

        }
      }

    }
    catch (err) {
      console.log(err);
    }



  }


  return (

    <div className="flex justify-center bg-panel-header-background h-screen flex-col gap-6 items-center" >

      <div className="flex items-center justify-center gap-2 text-white" >

        <Image
          src="/whatsapp.gif"
          alt="whatapp"
          height={300}
          width={300}
        />
        <span className="text-7xl" >Whatsapp</span>

      </div>
      <button
        onClick={handleLogin}
        className="flex justify-center gap-7 bg-search-input-container-background items-center p-5">
        <FcGoogle />
        <span className="text-white text-2xl" >Login with Google</span>
      </button>



    </div>

  )
}

export default login;
