import { History } from "history"
import _ from "lodash"
import React, { memo } from "react"
import {
  Award,
  Box,
  CheckSquare,
  Codesandbox,
  FilePlus,
  FileText,
  Framer,
  MinusCircle,
  PlusCircle,
  XOctagon
} from "react-feather"
import { useLocation } from "react-router-dom"

const submenuesdata = [
  {
    id: 1,
    title: "Bug",
    icon: "bug",
    color: "#DC2626"
  },
  { id: 2, title: "Enhancement", icon: "enhancement", color: "#93C5FD" },
  { id: 3, title: "Epic", icon: "epic", color: "#F59E0B" },
  { id: 4, title: "Feature", icon: "feature", color: "#6D28D9" },
  { id: 5, title: "Task", icon: "task", color: "#FCD34D" },
  { id: 6, title: "Product Backlog Item", icon: "backlog", color: "#3B82F6" },
  { id: 7, title: "Impediment", icon: "impediment", color: "#DB2777" },
  { id: 8, title: "Test Case", icon: "test", color: "#D1D5DB" },
  { id: 9, title: "User Story", icon: "story", color: "#93C5FD" }
]
interface ISubmenues {
  id: number
  title: string
  icon: string
  color: string
}

/*interface ISideBarItemActionsProps {
  submenu: boolean
  submenues: ISubmenues[]
  subItems: ISubmenues[]
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>
  addToSubItems(item: ISubmenues): (e: React.MouseEvent) => void
  addToSubMenus(item: ISubmenues): (e: React.MouseEvent) => void
}*/

interface ISideBarItemActionsProps {
  history: History
}

const useQueryString = () => new URLSearchParams(useLocation().search)

const SideBarItemActions: React.FC<ISideBarItemActionsProps> = ({
  history
}) => {
  const [submenu, setSubMenu] = React.useState(false)
  const [submenues, setSubmenues] = React.useState(submenuesdata)
  const [subItems, setSubItems] = React.useState<ISubmenues[]>([])
  let query = useQueryString()

  const handleMouseEnter = () => {
    setSubMenu(true)
  }
  const handleMouseLeave = () => {
    setSubMenu(false)
  }

  const handlClick = () => {
    history.push(`/project/${query.get("id")}/ticket`)
  }

  const addToSubItems = React.useCallback(
    (e: any, item: ISubmenues) => {
      e.stopPropagation()
      let filterdata = submenues.filter((itm: ISubmenues) => {
        return itm.id !== item.id
      })
      setSubmenues([...filterdata])
      setSubItems([...subItems, item])
    },
    [submenues, subItems]
  )

  const addToSubMenus = React.useCallback(
    (e:any, item: ISubmenues) => {
      e.stopPropagation()
      let filterdata = subItems.filter((itm: ISubmenues) => {
        return itm.id !== item.id
      })
      setSubItems([...filterdata])
      setSubmenues([...submenues, item])
    },
    [submenues, subItems]
  )

  const orderdSubmenues = React.useMemo(() => {
    return _.sortBy(submenues, (o: ISubmenues) => o.title)
  }, [submenues])

  const orderdSubItems = React.useMemo(() => {
    return _.sortBy(subItems, (o: ISubmenues) => o.title)
  }, [subItems])

  const renderIcon = (item: ISubmenues) => {
    switch (item.icon) {
      case "bug":
        return <XOctagon color={item.color} size={14} />

      case "enhancement":
        return <Award color={item.color} size={14} />

      case "epic":
        return <Codesandbox color={item.color} size={14} />

      case "feature":
        return <Framer color={item.color} size={14} />

      case "task":
        return <CheckSquare color={item.color} size={14} />

      case "backlog":
        return <FileText color={item.color} size={14} />

      case "impediment":
        return <Box color={item.color} size={14} />

      case "test":
        return <FilePlus color={item.color} size={14} />

      case "story":
        return <CheckSquare color={item.color} size={14} />

      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            style={{ color: item.color }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
        )
    }
  }

  return (
    <div className=" w-72 h-28 bg-white absolute left-7 -top-3 rounded-md shadow-md flex flex-col">
      <div className="flex py-2 px-3 border-b hover:bg-gray-200 cursor-pointer mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
          />
        </svg>
        <p className="text-sm ml-3">New query</p>
      </div>

      {orderdSubmenues.length > 0 && (
        <div
          className="flex py-2 px-3 hover:bg-gray-200 cursor-pointer relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-sm ml-8">New work item</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-auto"
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
          {submenu && (
            <div className="absolute w-72 top-0 left-72 bg-white rounded-md shadow-md pb-4 flex flex-col">
              {orderdSubmenues.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="flex py-2 px-3 hover:bg-gray-200 items-center"
                  >
                    {renderIcon(item)}
                    <p className="text-sm ml-3" onClick={handlClick}>
                      {item.title}
                    </p>
                    <div
                      className=" ml-auto cursor-pointer"
                      onClick={(e) => addToSubItems(e, item)}
                    >
                      <PlusCircle id="plusIcon" color="grey" size={14} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
      {orderdSubItems.length > 0 && (
        <div className="w-72 bg-white rounded-md shadow-md pb-4 flex flex-col">
          {orderdSubItems.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex py-2 px-3 hover:bg-gray-200 items-center"
              >
                {renderIcon(item)}
                <p className="text-sm ml-3">{item.title}</p>
                <div
                  className=" ml-auto cursor-pointer"
                  onClick={(e) => addToSubMenus(e,item)}
                >
                  <MinusCircle color="grey" size={14} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default memo(SideBarItemActions)
