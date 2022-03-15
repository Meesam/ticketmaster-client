import React from "react"
import OptionItem from "./OptionItem"

const styles = {
  hiddenClass: "absolute font-bold bg-blue-200 top-3 right-3 h-5 w-5"
}

interface IActionOptions {
  isHover: boolean
}
const ActionOptions: React.FC<IActionOptions> = ({ isHover }) => {
  const [actionToggle, setActionToggle] = React.useState(false)
  const myRef = React.useRef<any>()

  const handleClickOutside = (event: any) => {
    if (myRef && !myRef?.current.contains(event.target)) {
      setActionToggle(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  })

  return (
    <>
      <div
        className={`${styles.hiddenClass} ${isHover ? "block" : "hidden"}`}
        onClick={() => setActionToggle(!actionToggle)}
        ref={myRef}
      >
        <p className="absolute bottom-0.5 right-1 cursor-pointer">...</p>
      </div>
      {actionToggle && (
        <div className="absolute top-8 z-50 -right-32 flex flex-col h-auto w-40 bg-white border-gray-300 border">
          <OptionItem hasBorder={true} title="Open" />
          <OptionItem hasBorder={false} title="Edit title" />
          <OptionItem hasBorder={false} title="Move to iteration" />
          <OptionItem hasBorder={false} title="Add Task" />
          <OptionItem hasBorder={false} title="Add Test" />
          <OptionItem hasBorder={true} title="Delete" />
          <OptionItem hasBorder={true} title="New branch..." />
          <OptionItem hasBorder={false} title="Open in Excel" />
        </div>
      )}
    </>
  )
}

export default ActionOptions
