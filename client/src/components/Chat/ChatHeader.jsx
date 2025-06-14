import React from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"

function ChatHeader() {
  return <div className="h-16 px-4 py-3 flex justify-between item-center bg-panel-header-background">

    <div className="flex item-center justify-center gap-6">
      <Avatar type="sm" image="/profile" />

      <div className="flex flex-col">
        <span className="text-primary-strong">
          DEMO
        </span>
        <span className="text-secondary text-sm">online/offline</span>
      </div>

    </div>
    <div className="flex gap-6 justify-center items-center">
      <MdCall className="text-panel-header-icon cursor-pointer text-xl" />
      <IoVideocam className="text-panel-header-icon cursor-pointer text-xl" />
      <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-xl" />
      <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl" />



    </div>
  </div>;
}

export default ChatHeader;
