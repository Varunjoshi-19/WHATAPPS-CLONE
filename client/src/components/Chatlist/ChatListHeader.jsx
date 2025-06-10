import React from "react";
import Avatar from "../common/Avatar";
import { useStateContext } from "@/context/StateContext";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs"

function ChatListHeader() {

  const [{ userInfo }, dispatch] = useStateContext();

  return (
    <div className="h-16 px-4 py-3 flex justify-between item-center">
      <div className="cursor pointer">
        <Avatar type="sm" image={userInfo?.profileImage} />
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill
          className="text-panel-header-icon cursor-pointer text-xl" />
        <>
          <BsThreeDotsVertical
            className="text-panel-header-icon cursor-pointer text-xl" />

        </>
      </div>
    </div>
  )

}

export default ChatListHeader;
