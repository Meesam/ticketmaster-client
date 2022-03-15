import React from "react"
import { useDrop } from "react-dnd"
import Item from "./Item"

interface ItemListProps {
  title: string
  toggable: boolean
}

const styles = {
  itemClass: "flex flex-col mr-1 bg-white",
  contentToggle: "flex border-b-2 border-solid border-gray-300 items-center"
}

const LeftIcon = () => (
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
)

const RightIcon = () => (
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
      d="M9 5l7 7-7 7"
    />
  </svg>
)

const ItemsList: React.FC<ItemListProps> = ({ title, toggable }) => {
  const [isToggle, setIsToggle] = React.useState(false)
  const [collectedProps, drop] = useDrop(() => ({
    accept: "item"
  }))

  return (
    <div className={`${styles.itemClass} ${isToggle ? "w-12" : "w-full"}`}>
      <div className={`${styles.contentToggle} ${isToggle ? "pb-3" : "pb-2"}`}>
        {!isToggle && <span className="text-sm text-gray-600">{title}</span>}
        {toggable && (
          <span
            className="text-sm text-gray-600 ml-auto mr-2 cursor-pointer"
            onClick={() => setIsToggle(!isToggle)}
          >
            {!isToggle ? <LeftIcon /> : <RightIcon />}
          </span>
        )}
      </div>
      {!isToggle ? (
        <div className="bg-gray-100" ref={drop}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      ) : (
        <div className="bg-gray-100 h-screen/8 pt-10">
          <p
            className="transform rotate-180 text-center"
            style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}
          >
            {title}
          </p>
        </div>
      )}
    </div>
  )
}

export default ItemsList
