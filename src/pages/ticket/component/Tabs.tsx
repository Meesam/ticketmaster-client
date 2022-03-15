import { Tab } from "@headlessui/react"
import React from "react"
import { Clock, Link, Paperclip } from "react-feather"
import { IItem, TabContext } from "../../../context/TabContext"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

const Tabs = () => {
  const tabContext = React.useContext(TabContext)

  const onChangeHandler = React.useCallback(
    (e: number) => {
      let newITem = tabContext.menuItem.map((item: IItem, idx: number) => {
        return e === idx
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      })
      tabContext.selectItem(newITem)
    },
    [tabContext]
  )

  const getTabTextOrIcon = (category: IItem) => {
    if (category.icon) {
      switch (category.icon) {
        case "clock":
          return <Clock color="#666666" size={20} />
        case "link":
          return <Link color="#666666" size={20} />
        case "paperclip":
          return <Paperclip color="#666666" size={20} />
      }
    }
    return category.title
  }

  return (
    <div className="w-full max-w-md pt-12 sm:px-0">
      <Tab.Group onChange={onChangeHandler}>
        <Tab.List className="flex p-1">
          {tabContext.menuItem.map((category: IItem, idx: number) => (
            <Tab
              key={idx}
              title={category.title}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 px-2 text-sm leading-5 font-medium text-gray-400 mr-2",
                  "focus:outline-none",
                  selected
                    ? "bg-white shadow"
                    : "text-gray-400 hover:bg-white/[0.12] hover:text-blue-300  py-2.5 px-2"
                )
              }
            >
              {getTabTextOrIcon(category)}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default Tabs
