import React from "react"
import { IItem, TabContext } from "../../../context/TabContext"
import Details from "./Details"

const TicketBody = () => {
  const tabContext = React.useContext(TabContext)

  const activetab = React.useMemo(() => {
    return tabContext.menuItem.filter((item: IItem) => item.isSelected)[0].title
  }, [tabContext])

  return (
    <div className="ml-4">
      {activetab === "Details" ? (
        <Details />
      ) : activetab === "History" ? (
        "History"
      ) : activetab === "Links" ? (
        "Links"
      ) : (
        activetab === "Attachments" && "Attachments"
      )}
    </div>
  )
}

export default TicketBody
