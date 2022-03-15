import { useQuery } from "@apollo/client"
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
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor"
import createMentionPlugin, {
  defaultSuggestionsFilter
} from "@draft-js-plugins/mention"
import "@draft-js-plugins/mention/lib/plugin.css"
import createToolbarPlugin from "@draft-js-plugins/static-toolbar"
import React, { useCallback, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { GET_USER } from "../../grapql"
import { IUser, IUserResponse } from "../../Types/user"
import mentionsTask from "./MentionTask"
import "./RichEditor.css"

const mentionPlugin = createMentionPlugin({ mentionTrigger: ["@", "#"] })
const staticToolbarPlugin = createToolbarPlugin()
const { Toolbar } = staticToolbarPlugin
const { MentionSuggestions } = mentionPlugin
const plugins = [mentionPlugin, staticToolbarPlugin]

interface MentionData {
  link?: string
  avatar?: string
  name: string
  id?: null | string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

interface TextEditorProps {
  handleChanges?: (des: any) => void
}

const TextEditor: React.FC<TextEditorProps> = ({ handleChanges }) => {
  const ref = React.useRef<Editor>(null)
  const [editorState, setEditorState] = React.useState(
    createEditorStateWithText("")
  )
  const context = React.useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<MentionData[]>([])
  const [showToolbox, setShowToolbox] = useState(false)

  const { data: userData } = useQuery<IUserResponse>(GET_USER, {
    variables: { customerId: context.user?.customerId }
  })

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open)
  }, [])

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState)
    handleChanges?.(editorState)
  }

  const onSearchChange = useCallback(
    ({ trigger, value }: { trigger: string; value: string }) => {
      if (trigger === "@") {
        if (userData) {
          let mentions: MentionData[] = []
          userData.getUsersByCustomerId.map((item: IUser) => {
            mentions.push({
              name: `${item.firstName} ${item.lastName}`
            })
          })
          setSuggestions(
            defaultSuggestionsFilter(value, mentions, trigger) as MentionData[]
          )
        }
      } else if (trigger === "#") {
        setSuggestions(
          defaultSuggestionsFilter(
            value,
            mentionsTask,
            trigger
          ) as MentionData[]
        )
      }
    },
    []
  )

  return (
    <div
      className="relative"
      onClick={() => {
        ref.current!.focus()
        setShowToolbox(true)
      }}
      onBlur={() => {
        setShowToolbox(false)
      }}
    >
      <Editor
        editorState={editorState}
        onChange={onEditorStateChange}
        plugins={plugins}
        ref={ref}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
      />
      {showToolbox && (
        <Toolbar>
          {(externalProps) => (
            <div className="bg-gray-200 flex justify-around">
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <CodeButton {...externalProps} />
              <UnorderedListButton {...externalProps} />
              <OrderedListButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
            </div>
          )}
        </Toolbar>
      )}
    </div>
  )
}

export default TextEditor
