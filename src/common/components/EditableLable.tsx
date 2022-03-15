import React, { memo } from "react"

interface LableProps {
  title: string
  style: string
  onChangeHandler?: any
  onSave?: any
}

const EditableLable: React.FC<LableProps> = ({
  title,
  style,
  onChangeHandler,
  onSave
}) => {
  const [lableClick, setLableClick] = React.useState(false)

  const onSaveHandle = () => {
    setLableClick(false)
    onSave()
  }

  return (
    <>
      {lableClick ? (
        <div className={`${style} flex`}>
          <input
            type="text"
            className="w-full outline-none border-b border-solid border-black"
            value={title}
            onChange={onChangeHandler}
          />
          <div className="flex ml-2">
            <button
              className="h-6 w-6 mr-2 rounded-sm shadow-sm flex justify-center items-center bg-gray-200"
              type="button"
              onClick={onSaveHandle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button
              className="h-6 w-6 flex rounded-sm shadow-sm justify-center items-center bg-gray-200"
              type="button"
              onClick={() => setLableClick(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          title="Click here to edit"
          className={`${style}`}
          onClick={() => setLableClick(true)}
        >
          {title}
        </div>
      )}
    </>
  )
}

export default memo(EditableLable)
