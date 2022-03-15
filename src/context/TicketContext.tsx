import React from "react"
import { IUser } from "../Types/user"

export interface ITicket {
  SelectedUser: IUser | null
  Title: string
  State: string
  Reason: string
  Area: string
  Itration: string
  ReproSteps: any
  SystemInfo: any
  Discussion: [any] | null
  ResolvedReason: string
  StoryPoints: number
  Priority: number
  Severity: string
  Activity: string
  OriginalEstimate: number
  Remaining: number
  Completed: number
  TestHours: number
  FoundinBuild: string
  IntegratedinBuild: string
}

interface IInitialVale {
  SelectedUser: IUser | null
  Title: string
  State: string
  Reason: string
  Area: string
  Itration: string
  ReproSteps: any
  SystemInfo: any
  Discussion: [any] | null
  ResolvedReason: string
  StoryPoints: number
  Priority: number
  Severity: string
  Activity: string
  OriginalEstimate: number
  Remaining: number
  Completed: number
  TestHours: number
  FoundinBuild: string
  IntegratedinBuild: string
  setSelectedUser: Function
  setTitle: Function
  setState: Function
  setReason: Function
  setArea: Function
  setItration: Function
  setReproSteps: Function
  setSystemInfo: Function
  setDiscussion: Function
  setResolvedReason: Function
  setStoryPoints: Function
  setPriority: Function
  setSeverity: Function
  setActivity: Function
  setOriginalEstimate: Function
  setRemaining: Function
  setCompleted: Function
  setTestHours: Function
  setFoundinBuild: Function
  setIntegratedinBuild: Function
}

const initialValue = {
  SelectedUser: null,
  Title: "",
  State: "",
  Reason: "",
  Area: "",
  Itration: "",
  ReproSteps: null,
  SystemInfo: null,
  Discussion: null,
  ResolvedReason: "",
  StoryPoints: 0,
  Priority: 0,
  Severity: "",
  Activity: "",
  OriginalEstimate: 0,
  Remaining: 0,
  Completed: 0,
  TestHours: 0,
  FoundinBuild: "",
  IntegratedinBuild: "",
  setSelectedUser: () => {},
  setTitle: () => {},
  setState: () => {},
  setReason: () => {},
  setArea: () => {},
  setItration: () => {},
  setReproSteps: () => {},
  setSystemInfo: () => {},
  setDiscussion: () => {},
  setResolvedReason: () => {},
  setStoryPoints: () => {},
  setPriority: () => {},
  setSeverity: () => {},
  setActivity: () => {},
  setOriginalEstimate: () => {},
  setRemaining: () => {},
  setCompleted: () => {},
  setTestHours: () => {},
  setFoundinBuild: () => {},
  setIntegratedinBuild: () => {}
} as IInitialVale

const TicketReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SELECTED_USER":
      return { ...state, SelectedUser: action.payload }

    case "SET_TITLE":
      return { ...state, Title: action.payload }

    case "SET_STATE":
      return { ...state, State: action.payload }

    case "SET_REASON":
      return { ...state, Reason: action.payload }

    case "SET_AREA":
      return { ...state, Area: action.payload }

    case "SET_ITRATION":
      return { ...state, Itration: action.payload }

    case "SET_REPROSTEPS":
      return { ...state, ReproSteps: action.payload }

    case "SET_SYSTEMINFO":
      return { ...state, SystemInfo: action.payload }

    case "SET_DISCUSSION":
      return { ...state, Discussion: action.payload }

    case "SET_RESOLVED_REASON":
      return { ...state, ResolvedReason: action.payload }

    case "SET_STORYPOINTS":
      return { ...state, StoryPoints: action.payload }

    case "SET_PRIORITY":
      return { ...state, Priority: action.payload }

    case "SET_SEVERITY":
      return { ...state, Severity: action.payload }

    case "SET_ACTIVITY":
      return { ...state, Activity: action.payload }

    case "SET_ORIGINAL_ESTIMATE":
      return { ...state, OriginalEstimate: action.payload }

    case "SET_REMAINING":
      return { ...state, Remaining: action.payload }

    case "SET_COMPLETED":
      return { ...state, Completed: action.payload }

    case "SET_TESTHOURS":
      return { ...state, TestHours: action.payload }

    case "SET_FOUNDINBUILD":
      return { ...state, FoundinBuild: action.payload }

    case "SET_INTEGRATEDINBUILD":
      return { ...state, IntegratedinBuild: action.payload }

    default:
      return state
  }
}

const TicketContext = React.createContext(initialValue)

const TicketProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(TicketReducer, {
    SelectedUser: initialValue.SelectedUser,
    Title: initialValue.Title,
    State: initialValue.State,
    Reason: initialValue.Reason,
    Area: initialValue.Area,
    Itration: initialValue.Itration,
    ReproSteps: initialValue.ReproSteps,
    SystemInfo: initialValue.SystemInfo,
    Discussion: initialValue.Discussion,
    ResolvedReason: initialValue.ResolvedReason,
    StoryPoints: initialValue.StoryPoints,
    Priority: initialValue.Priority,
    Severity: initialValue.Severity,
    Activity: initialValue.Activity,
    OriginalEstimate: initialValue.OriginalEstimate,
    Remaining: initialValue.Remaining,
    Completed: initialValue.Completed,
    TestHours: initialValue.TestHours,
    FoundinBuild: initialValue.FoundinBuild,
    IntegratedinBuild: initialValue.IntegratedinBuild
  })
  const setSelectedUser = (user: IUser) => {
    dispatch({
      type: "SELECTED_USER",
      payload: user
    })
  }

  const setTitle = (title: string) => {
    dispatch({
      type: "SET_TITLE",
      payload: title
    })
  }

  const setState = (state: string) => {
    dispatch({
      type: "SET_STATE",
      payload: state
    })
  }

  const setReason = (reason: string) => {
    dispatch({
      type: "SET_REASON",
      payload: reason
    })
  }

  const setArea = (area: string) => {
    dispatch({
      type: "SET_AREA",
      payload: area
    })
  }

  const setItration = (itration: string) => {
    dispatch({
      type: "SET_ITRATION",
      payload: itration
    })
  }

  const setReproSteps = (repro: any) => {
    dispatch({
      type: "SET_REPROSTEPS",
      payload: repro
    })
  }

  const setSystemInfo = (systemInfo: any) => {
    dispatch({
      type: "SET_SYSTEMINFO",
      payload: systemInfo
    })
  }

  const setDiscussion = (discussion: any) => {
    dispatch({
      type: "SET_DISCUSSION",
      payload: discussion
    })
  }

  const setResolvedReason = (reason: string) => {
    dispatch({
      type: "SET_RESOLVED_REASON",
      payload: reason
    })
  }

  const setStoryPoints = (points: number) => {
    dispatch({
      type: "SET_STORYPOINTS",
      payload: points
    })
  }

  const setPriority = (priority: number) => {
    dispatch({
      type: "SET_PRIORITY",
      payload: priority
    })
  }

  const setSeverity = (severity: string) => {
    dispatch({
      type: "SET_SEVERITY",
      payload: severity
    })
  }

  const setActivity = (activity: string) => {
    dispatch({
      type: "SET_ACTIVITY",
      payload: activity
    })
  }

  const setOriginalEstimate = (hours: number) => {
    dispatch({
      type: "SET_ORIGINAL_ESTIMATE",
      payload: hours
    })
  }

  const setRemaining = (hours: number) => {
    dispatch({
      type: "SET_REMAINING",
      payload: hours
    })
  }

  const setCompleted = (hours: number) => {
    dispatch({
      type: "SET_COMPLETED",
      payload: hours
    })
  }

  const setTestHours = (hours: number) => {
    dispatch({
      type: "SET_TESTHOURS",
      payload: hours
    })
  }

  const setFoundinBuild = (build: string) => {
    dispatch({
      type: "SET_FOUNDINBUILD",
      payload: build
    })
  }

  const setIntegratedinBuild = (build: string) => {
    dispatch({
      type: "SET_INTEGRATEDINBUILD",
      payload: build
    })
  }

  return (
    <TicketContext.Provider
      value={{
        SelectedUser: state.SelectedUser,
        Title: state.Title,
        State: state.State,
        Reason: state.Reason,
        Area: state.Area,
        Itration: state.Itration,
        ReproSteps: state.ReproSteps,
        SystemInfo: state.SystemInfo,
        Discussion: state.Discussion,
        ResolvedReason: state.ResolvedReason,
        StoryPoints: state.StoryPoints,
        Priority: state.Priority,
        Severity: state.Severity,
        Activity: state.Activity,
        OriginalEstimate: state.OriginalEstimate,
        Remaining: state.Remaining,
        Completed: state.Completed,
        TestHours: state.TestHours,
        FoundinBuild: state.FoundinBuild,
        IntegratedinBuild: state.IntegratedinBuild,
        setSelectedUser,
        setTitle,
        setState,
        setReason,
        setArea,
        setItration,
        setReproSteps,
        setSystemInfo,
        setDiscussion,
        setResolvedReason,
        setStoryPoints,
        setPriority,
        setSeverity,
        setActivity,
        setOriginalEstimate,
        setRemaining,
        setCompleted,
        setTestHours,
        setFoundinBuild,
        setIntegratedinBuild
      }}
    >
      {props.children}
    </TicketContext.Provider>
  )
}

export { TicketContext, TicketProvider }
