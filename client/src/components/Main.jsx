import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { firbaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";
import Chat from "./Chat/Chat";

function Main() {
  const [redirectLogin, setRedirectLogin] = useState(false);
  const router = useRouter();
  const [{ userInfo }, dispatch] = useStateContext();


  useEffect(() => {

    if (redirectLogin) router.push("/login");

  }, [redirectLogin])


  onAuthStateChanged(firbaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectLogin(true);

    if (!userInfo && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_ROUTE, { email: currentUser.email });

      if (!data.status) {
        router.push("/login");
      }
      if(data?.data) {
         
        const { id, name, email, profilePicture: profileImage, status } = data.data;
        dispatch({
          type: reducerCases.SET_USER_INFO, userInfo: {
            id, name, email, profileImage, status
          }
        })
      }
    }


  })


  return (

    <>
      <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
        <ChatList />
        <Chat />
      </div>
    </>

  );

}

export default Main;
