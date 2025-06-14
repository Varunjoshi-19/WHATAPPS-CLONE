import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateContext } from "@/context/StateContext";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function onboarding() {

  const [{ userInfo, newUser }, dispatch] = useStateContext();
  const router = useRouter();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");


  useEffect(() => {

    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");

  }, [newUser, userInfo, router])


  const onBoardUserHandler = async () => {

    if (validateDetails()) {

      try {

        const email = userInfo.email;
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          name, email, about, image
        });

        if (data.status) {
          alert("here");
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO, userInfo: {
              id: data.user.id, name, email, profileImage: image, status: about
            }
          })
          router.push("/");

        }

      }
      catch (err) {
        console.log(err);
      }
    }

  }

  const validateDetails = () => {
    if (name.length < 3) {
      return false
    }
    return true
  }

  return (

    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center" >

      <div className="flex items-center justify-center gap-2" >
        <Image

          src="/whatsapp.gif"
          alt="whatapp"
          height={300}
          width={300}
        />
        <span className="text-7xl" >Whatapp</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-5">
        <div className="flex flex-col item-center justify-center mt-5 gap-6">
          <Input name="Display name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />

          <div className="flex items-center justify-center">

            <button
              className="flex justify-center gap-7 bg-search-input-container-background items-center p-5"
              onClick={onBoardUserHandler}
            >Create Profile</button>
          </div>

        </div>

        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>




      </div>
    </div>

  );

}

export default onboarding;
