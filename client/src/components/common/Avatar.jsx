import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa"
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";

function Avatar({ type, image, setImage }) {


  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [grabPhoto, setGrabPhoto] = useState(false);
  const [photoLibrary, setPhotoLibrary] = useState(false);
  const [showCapturePhoto , setShowCapturePhoto] = useState(false);

  const [contextMenuCoordinate, setContextMenuCoordinate] = useState({
    x: 0,
    y: 0
  })

  const contextMenuOptions = [
    { name: "Take Photo", callback: () => { setShowCapturePhoto(true) }},
    { name: "Choose From Library", callback: () => { setPhotoLibrary(true) } },
    { name: "Upload Photo", callback: () => { setGrabPhoto(true); } },
    { name: "Remove Photo", callback: () => { setImage("/default_avatar.png"); } },

  ]



  useEffect(() => {
    if (grabPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();


      document.body.focus = (e) => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000)
      }


    }

  }, [grabPhoto]);


  const showContextMenu = (e) => {

    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCoordinate({
      x: e.pageX,
      y: e.pageY
    })

    setIsContextMenuVisible(true)

  }


  const photoPickerChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");

    reader.onload = function (event) {
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
    }
    reader.readAsDataURL(file);

    setTimeout(() => {
      setImage(data.src)
    }, 100);


  }



  return (
    <>

      <div className="flex items-center justify-center">


        {
          type === "sm" && (
            <div className="relative h-10 w-10">
              <Image src={image} alt="avatar" height={300} width={300}
                className="rounded-full"
              />
            </div>
          )

        }


        {
          type === "lg" && (
            <div className="relative h-14 w-14">

              <Image src={image} alt="avatar" height={300} width={300}
                className="rounded-full"
              />
            </div>
          )

        }

        {
          type === "xl" && (
            <div
              id="context-opener" className="relative cursor-pointer z-0"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={(e) => showContextMenu(e)}
            >

              <div id="context-opener"
                className={`z-10 bg-photopicker-overlay-background 
                 h-60 w-60 absolute top-0 left-0 flex items-center rounded-fulll justify-center flex-col text-center gap-2
                 ${hover ? "visible" : "hidden"}
                 `}>
                <FaCamera className="text-2xl" id="context-opener" />
                <span id="context-opener" >Change profile photo</span>
              </div>

              <div className="h-60 w-60">

                <Image src={image} alt="avatar" height={300} width={300}
                  className="rounded-full"
                />
              </div>
            </div>

          )}

      </div>
      {
        isContextMenuVisible && <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuCoordinate}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      }

      { grabPhoto && <PhotoPicker onChange={photoPickerChange} />}
      { showCapturePhoto && <CapturePhoto setImage={setImage} hide={setShowCapturePhoto} />}
      { photoLibrary && <PhotoLibrary  setImage = {setImage} hidePhotoLibrary={setPhotoLibrary} /> }

    </>
  )

}




export default Avatar;
