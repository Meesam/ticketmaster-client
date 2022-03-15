import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import ItemsList from "./ItemsList"

const BoardItems = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="pt-2 pl-2 flex pr-2 overflow-auto h-screen/8">
        <ItemsList title="Backlog" toggable={true} />
        <ItemsList title="Analyze" toggable={false} />
        <ItemsList title="In Sprint" toggable={false} />
        <ItemsList title="Testing" toggable={false} />
        <ItemsList title="In Progress" toggable={false} />
        <ItemsList title="Done" toggable={true} />
      </div>
    </DndProvider>
  )
}

export default BoardItems
