import {
  BlockquoteButton,
  BoldButton,
  CodeBlockButton,
  CodeButton,
  ItalicButton,
  OrderedListButton,
  UnderlineButton,
  UnorderedListButton
} from "@draft-js-plugins/buttons"
import createToolbarPlugin from "@draft-js-plugins/static-toolbar"
import React from "react"
const staticToolbarPlugin = createToolbarPlugin()
const { Toolbar } = staticToolbarPlugin

interface ToolBarPluginProps {
  setEditorState: () => {}
}

const ToolBarPlugin: React.FC<ToolBarPluginProps> = ({ setEditorState }) => {
  const renderToolbarItems = (externalProps: any) => {
    console.log("externalProps ", externalProps)
    return (
      <div className="flex bg-gray-400 justify-evenly">
        <BoldButton {...externalProps} />
        <ItalicButton {...externalProps} />
        <UnderlineButton {...externalProps} />
        <CodeButton {...externalProps} />
        <UnorderedListButton {...externalProps} />
        <OrderedListButton {...externalProps} />
        <BlockquoteButton {...externalProps} />
        <CodeBlockButton {...externalProps} />
      </div>
    )
  }

  return <Toolbar>{renderToolbarItems}</Toolbar>
}

export default ToolBarPlugin
