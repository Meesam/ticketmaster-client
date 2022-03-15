import { useMutation } from "@apollo/client"
import React from "react"
import ImageUploading, { ImageListType } from "react-images-uploading"
import EditableLable from "../../../common/components/EditableLable"
import { UPDATE_USER } from "../../../grapql"

const styles = {
  itemStyle: "pl-4 flex flex-col",
  toggleClass: "bg-white h-20 w-72 rounded-xs shadow-lg mr-7 relative",
  boxStyle:
    " absolute right-7 bottom-0 h-7 w-7 bg-blue-600 cursor-pointer z-50 tran"
}

const defaulUserImage =
  "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"

const UpArrow = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
        />
      </svg>
    </>
  )
}

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 11l7-7 7 7M5 19l7-7 7 7"
      />
    </svg>
  )
}

interface ICardLayoutProps {
  item?: any
}

const Card: React.FC<ICardLayoutProps> = ({ item }) => {
  const [isToggle, setIstoggle] = React.useState(false)
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const [role, setRole] = React.useState("Sr. Software Engineer")
  const [email, setEmail] = React.useState<string>(item.email[0])
  const [phone, setPhone] = React.useState(item.mobile[0])

  const [updateUser] = useMutation(UPDATE_USER)

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    updateUser({
      variables: {
        _id: item._id,
        email: [email],
        firstName: item.firstName,
        lastName: item.lastName,
        mobile: item.mobile[0],
        avatar: imageList[0].dataURL
      }
    })
    setImages(imageList as never[])
  }

  const handleRoleChange = React.useCallback((e: any) => {
    const role = e.target.value
    setRole(role)
  }, [])

  const handleEmailChange = React.useCallback((e: any) => {
    const email = e.target.value
    setEmail(email)
  }, [])

  const onSave = React.useCallback(() => {
    updateUser({
      variables: {
        _id: item._id,
        email: [email],
        firstName: item.firstName,
        lastName: item.lastName,
        mobile: [phone],
        avatar: item.avatar
      }
    })
  }, [
    email,
    item._id,
    item.avatar,
    item.firstName,
    item.lastName,
    phone,
    updateUser
  ])

  const handlePhoneChange = React.useCallback((e: any) => {
    const phone = e.target.value
    setPhone(phone)
  }, [])

  const getUserAvatarStyle = (user: any, imageList: any) => {
    if (user.avatar) {
    }
    return {
      backgroundImage: `url(${
        imageList && imageList.length > 0
          ? imageList[0].dataURL
          : user.avatar
          ? user.avatar
          : defaulUserImage
      })`
    }
  }

  const handleToggle = React.useCallback(() => {
    setIstoggle(!isToggle)
  }, [isToggle])

  return (
    <div className=" flex flex-col mb-4 relative">
      <div
        className={`${styles.toggleClass} ${
          isToggle
            ? "transition-height duration-200 ease-linear h-72"
            : "transition-height duration-200 ease-linear h-20"
        }`}
      >
        <>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({ imageList, onImageUpload }) => (
              <div
                style={getUserAvatarStyle(item, imageList)}
                className="cursor-pointer group bg-cover absolute h-12 w-12 top-4 rounded-full border-2 border-blue-500 left-4 bg-red-900 text-white text-2xl"
              >
                <div
                  className="justify-center items-center group-hover:block hidden z-50 absolute h-6 w-6 -bottom-2 -right-2 rounded-full border-2 border-white  bg-blue-500"
                  onClick={onImageUpload}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </ImageUploading>

          <div className="cursor-pointer text-black font-medium tracking-normal text-lg pl-20 pt-4">{`${item.firstName} ${item.lastName}`}</div>
          <EditableLable
            title={role}
            style="text-gray-500 text-sm pl-20 cursor-pointer"
            onChangeHandler={handleRoleChange}
          />

          <div className=" w-auto ml-5 border-collapse mr-5  mt-5 border-b border-solid border-gray-200"></div>
          <div
            className={`${styles.itemStyle} ${isToggle ? "block" : "hidden"}`}
          >
            <div className="text-gray-500 text-sm mt-5 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <EditableLable
                title={email}
                onChangeHandler={handleEmailChange}
                onSave={onSave}
                style="ml-2"
              />
            </div>
            <div className="text-gray-500 text-sm mt-5 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <EditableLable
                title={phone}
                onChangeHandler={handlePhoneChange}
                style="ml-2"
                onSave={onSave}
              />
            </div>
            <div className="text-gray-500 text-sm mt-5 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <div className="ml-2">"02-May-1986"</div>
            </div>
            <div className="text-gray-500 text-sm mt-5 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>

              <div className="ml-2">Active</div>
            </div>
          </div>
        </>
        <div
          className="absolute right-0 bottom-0 h-7 w-7 bg-blue-600 cursor-pointer tran"
          onClick={handleToggle}
        >
          <div className="text-white flex justify-center items-center h-full">
            {isToggle ? <DownArrow /> : <UpArrow />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
