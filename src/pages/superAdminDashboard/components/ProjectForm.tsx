import { useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import Moment from "moment"
import { useSnackbar } from "notistack"
import React, { MouseEventHandler } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { DatePicker } from "../../../common/components/Datepicker"
import Loading from "../../../common/components/Loading"
import { AuthContext } from "../../../context/AuthContext"
import { CREATE_PROJECT, GET_PROJECTS_BY_OWNER } from "../../../grapql"

const styles = {
  inputTextStyle: " border-b pb-1 outline-none text-sm text-gray-600"
}

interface IProjectFormProps {
  onCancel: MouseEventHandler<HTMLButtonElement>
}

interface IFormInputs {
  title: string
  startDate?: string
  endDate?: string
  tag?: string
  priority?: string
  status?: string
  projectType?: string
  description?: string
}

const projectValidationSchema = yup.object().shape({
  title: yup.string().required()
})

const ProjectForm: React.FC<IProjectFormProps> = ({ onCancel }) => {
  const context = React.useContext(AuthContext)
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [tags, setTags] = React.useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInputs>({
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      tag: undefined,
      priority: "",
      projectType: "",
      description: "",
      status: ""
    },
    resolver: yupResolver(projectValidationSchema)
  })

  const [addProject, { loading, data, error }] = useMutation(CREATE_PROJECT)
  const { enqueueSnackbar } = useSnackbar()

  const handleCancel = (e: any) => {
    reset()
    onCancel(e)
  }

  const handleStartDate = (e: any) => {
    setStartDate(e)
  }

  const handleEndDate = (e: any) => {
    setEndDate(e)
  }

  const onSubmit = (data: IFormInputs) => {
    const { title, priority, projectType, description, status } = data
    addProject({
      variables: {
        title,
        startDate: Moment(startDate).format("MM/DD/YYYY"),
        endDate: Moment(endDate).format("MM/DD/YYYY"),
        tag: tags,
        priority,
        projectType,
        description,
        status: "Active",
        projectOwener: context.user?.id
      },
      update: (store: any, { data }: any) => {
        try {
          const projectData = store.readQuery({
            query: GET_PROJECTS_BY_OWNER,
            variables: { projectOwener: context.user?.id }
          })
          store.writeQuery({
            query: GET_PROJECTS_BY_OWNER,
            variables: { projectOwener: context.user?.id },
            data: {
              getProjectsByOwner: [
                ...projectData?.getProjectsByOwner,
                data?.createProject
              ]
            }
          })
          reset()
          enqueueSnackbar("Project added succefully", { variant: "success" })
        } catch (err) {
          console.log("message", err)
        } finally {
          return false
        }
      }
    })
  }

  const onSubmitTags = React.useCallback(
    (event: any) => {
      if (event.charCode === 13) {
        setTags([...tags, event.target.value.toString()])
        reset({ tag: "" })
      }
    },
    [tags, reset]
  )

  const removeTags = React.useCallback(
    (item: string) => {
      let tag = tags.filter((i) => {
        return i !== item
      })
      setTags(tag)
    },
    [tags]
  )

  const renderTags = React.useMemo(() => {
    return (
      <div className="flex flex-wrap mb-2">
        {tags &&
          tags.map((item: any, idx: number) => {
            return (
              <div
                key={idx}
                className=" bg-gray-200 rounded-full text-gray-400 text-xs flex justify-center items-center px-2 py-1 mr-1 mb-1"
              >
                {item}
                <div onClick={() => removeTags(item)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600 ml-1 cursor-pointer"
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
                </div>
              </div>
            )
          })}
      </div>
    )
  }, [tags])

  if (loading) return <Loading />

  if (data) {
    console.log("Save ", data)
  }
  if (error) {
    console.log("Error", error)
  }

  return (
    <div className="flex flex-col ml-5 mt-5">
      <div className="flex flex-col mr-5">
        <label className="text-sm text-gray-800 font-medium" htmlFor="title">
          Title
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.title ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs text-red-600 mb-4">Title can not be empty!</p>
        )}
        <DatePicker
          style="border-b border-gray-400 mb-4 pb-1 outline-none text-sm text-gray-600 w-full"
          name="startDate"
          label="Start date"
          date={startDate}
          onChange={handleStartDate}
        />

        <DatePicker
          style="border-b border-gray-400 mb-4 pb-1 outline-none text-sm text-gray-600 w-full"
          name="endDate"
          label="End date"
          date={endDate}
          onChange={handleEndDate}
        />

        <label className="text-sm text-gray-800 font-medium mb-2" htmlFor="tag">
          Tags
        </label>
        {renderTags}
        <input
          className={`${styles.inputTextStyle} mb-4`}
          {...register("tag")}
          onKeyPress={onSubmitTags}
        />

        <label className="text-sm text-gray-800 font-medium" htmlFor="priority">
          Priority
        </label>
        <input
          className={`${styles.inputTextStyle} mb-4`}
          {...register("priority")}
        />
        <label
          className="text-sm text-gray-800 font-medium"
          htmlFor="projectType"
        >
          Project type
        </label>
        <input
          className={`${styles.inputTextStyle} mb-4`}
          {...register("projectType")}
        />

        <label
          className="text-sm text-gray-800 font-medium"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className={`${styles.inputTextStyle} mb-4`}
          {...register("description")}
        />

        <div className="flex">
          <button
            className="px-4 py-2 bg-blue-600 mr-6 text-white rounded-md shadow-sm tracking-wide"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-blue-600 mr-6 text-white rounded-md shadow-sm tracking-wide"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectForm
