import React from "react"
import EditableLable from "../../../common/components/EditableLable"

const styles = {
  itemStyle: "pl-4 flex flex-col",
  toggleClass: "bg-white h-20 w-72 rounded-xs shadow-lg mr-7 relative",
  boxStyle:
    " absolute right-7 bottom-0 h-7 w-7 bg-blue-600 cursor-pointer z-50 tran"
}

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

const CustomerCard: React.FC<ICardLayoutProps> = ({ item }) => {
  const [isToggle, setIstoggle] = React.useState(false)

  const [role, setRole] = React.useState("Sr. Software Engineer")
  const [email, setEmail] = React.useState("meesam.engineer@gmail.com")
  const [phone, setPhone] = React.useState("+91 8826120526")

  const handleNameChange = (e: any) => {
    const name = e.target.value
    // setUserName(name)
  }
  const handleRoleChange = (e: any) => {
    const role = e.target.value
    setRole(role)
  }
  const handleEmailChange = (e: any) => {
    const email = e.target.value
    setEmail(email)
  }
  const handlePhoneChange = (e: any) => {
    const phone = e.target.value
    setPhone(phone)
  }

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
          <div
            style={{
              backgroundImage:
                "url(https://marvel-b1-cdn.bc0a.com/f00000000067087/www.bdcnetwork.com/sites/bdc/files/styles/content_features/public/Cushman%20Wakefield%206%20Feet%20Office%20coronavirus.jpg?itok=vw-7wIri)"
            }}
            className="cursor-pointer bg-cover absolute h-12 w-12 top-4 rounded-full left-4 bg-red-900 text-white text-2xl"
          ></div>

          <EditableLable
            title={item.name}
            style="cursor-pointer text-black font-medium tracking-normal text-lg pl-20 pt-4"
            onChangeHandler={handleNameChange}
          />
          <EditableLable
            title={item.website}
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <EditableLable
                title={item.contactPerson}
                onChangeHandler={handleEmailChange}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <EditableLable
                title={item.email[0]}
                onChangeHandler={handleEmailChange}
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
                title={item.mobile[0]}
                onChangeHandler={handlePhoneChange}
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <EditableLable title={item.address} style="ml-2" />
            </div>
          </div>
        </>
        <div
          className="absolute right-0 bottom-0 h-7 w-7 bg-blue-600 cursor-pointer tran"
          onClick={() => setIstoggle(!isToggle)}
        >
          <div className="text-white flex justify-center items-center h-full">
            {isToggle ? <DownArrow /> : <UpArrow />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
