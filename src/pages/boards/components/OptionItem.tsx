import React from "react"

const styles = {
  itemStyle: "flex items-center p-2 hover:bg-gray-200 w-full cursor-pointer"
}

interface IoptionItemProps {
  title: string
  hasBorder: boolean
}

const OptionItem: React.FC<IoptionItemProps> = ({ title, hasBorder }) => {
  return (
    <div
      className={`${styles.itemStyle} ${
        hasBorder ? "border-b border-gray-300" : ""
      }`}
    >
      <div className="flex justify-center items-center">
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      <span className="text-xs text-gray-500 ml-2">{title}</span>
    </div>
  )
}

export default OptionItem
