import React from "react"
import BoardItems from "./components/BoardItems"
import Filter from "./components/Filter"
import Header from "./components/Header"

const Boards = () => {
  const [toggleFilter, setToggleFilter] = React.useState(false)

  return (
    <div className="w-full bg-white">
      <Header toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />
      {toggleFilter && <Filter setToggleFilter={setToggleFilter} />}
      <BoardItems />
    </div>
  )
}

export default Boards
