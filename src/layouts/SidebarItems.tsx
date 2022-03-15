import React from "react"
import Submenu from "./Submenu"

const OverViewIcon = () => {
  return (
    <div className="flex items-center">
      <img
        className=" bg-transparent h-6 w-6 mr-3"
        src="https://cdn.vsassets.io/ext/ms.vss-tfs-web/platform-content/Nav-Dashboard.S24hPDN9_BLImMxi.png"
      />
      <p className="text-sm ">OverView</p>
    </div>
  )
}

const BoardIcon = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center p-2">
        <img
          className=" bg-transparent h-6 w-6 mr-3"
          src="https://cdn.vsassets.io/ext/ms.vss-work-web/common-content/Content/Nav-Plan.XB8qU6v7kvBk_Tcy.png"
        />
        <p className="text-sm ">Boards</p>
      </div>
      <div>
        <Submenu />
      </div>
    </div>
  )
}

const RepoICon = () => {
  return (
    <div className="flex items-center">
      <img
        className=" bg-transparent h-6 w-6 mr-3"
        src="https://cdn.vsassets.io/ext/ms.vss-code-web/common-content/Nav-Code.0tJczmQtl3hyKtlh.png"
      />
      <p className="text-sm">Repos</p>
    </div>
  )
}

const PiplineICon = () => {
  return (
    <div className="flex items-center">
      <img
        className=" bg-transparent h-6 w-6 mr-3"
        src="https://cdn.vsassets.io/ext/ms.vss-build-web/common-library/Nav-Launch.3tiJhd8JGiL0mrog.png"
      />
      <p className="text-sm ">Pipelines</p>
    </div>
  )
}
const TestPlanICon = () => {
  return (
    <div className="flex items-center">
      <img
        className=" bg-transparent h-6 w-6 mr-3"
        src="https://cdn.vsassets.io/ext/ms.vss-test-web/common-content/Nav-Test.CLbC8LbdE5__mhtfT.png"
      />
      <p className="text-sm ">Test Plans</p>
    </div>
  )
}

const SidebarItems = () => {
  return (
    <div className="flex flex-col mt-4 bg-transparent">
      <div className="p-2 cursor-pointer hover:bg-gray-300">
        <OverViewIcon />
      </div>
      <div className="bg-gray-200 border-l-4 border-gray-400">
        <div>
          <BoardIcon />
        </div>
      </div>
      <div className="p-2 cursor-pointer hover:bg-gray-300">
        <RepoICon />
      </div>
      <div className="p-2 cursor-pointer hover:bg-gray-300">
        <PiplineICon />
      </div>
      <div className="p-2 cursor-pointer hover:bg-gray-300">
        <TestPlanICon />
      </div>
    </div>
  )
}

export default SidebarItems
