import { useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSnackbar } from "notistack"
import React, { MouseEventHandler, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { DatePicker } from "../../../common/components/Datepicker"
import Loading from "../../../common/components/Loading"
import { CREATE_USER, GET_USER } from "../../../grapql"

const styles = {
  inputTextStyle: " border-b pb-1 outline-none text-sm text-gray-600"
}

interface IUserFormProps {
  onCancel: MouseEventHandler<HTMLButtonElement>
}

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  role: string
  status: string
  mobile: string
  avatar: string
}

const userValidationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  mobile: yup.string().required()
})

const UserForm: React.FC<IUserFormProps> = ({ onCancel }) => {
  const [date, setDate] = useState(new Date())
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: ""
    },
    resolver: yupResolver(userValidationSchema)
  })

  const [addUser, { loading, data, error }] = useMutation(CREATE_USER)
  const { enqueueSnackbar } = useSnackbar()

  const handleCancel = (e: any) => {
    reset()
    onCancel(e)
  }

  const onSubmit = (data: IFormInputs) => {
    const { firstName, lastName, email, mobile, avatar } = data
    addUser({
      variables: {
        firstName,
        lastName,
        email: [email],
        role: "SupuerAdmin",
        status: "Active",
        mobile,
        avatar
      },
      update: (store: any, { data }: any) => {
        try {
          const userData = store.readQuery({
            query: GET_USER
          })
          store.writeQuery({
            query: GET_USER,
            data: {
              getUsers: [...userData?.getUsers, data?.createUser]
            }
          })
          reset()
          enqueueSnackbar("User added succefully", { variant: "success" })
        } catch (err) {
          console.log("message", err)
        } finally {
          return false
        }
      }
    })
  }

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
        <label
          className="text-sm text-gray-800 font-medium"
          htmlFor="firstName"
        >
          First name
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.firstName ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-xs text-red-600 mb-4">
            First name can not be empty!
          </p>
        )}
        <label className="text-sm text-gray-800 font-medium" htmlFor="lastName">
          Last name
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.lastName ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-xs text-red-600 mb-4">
            Last name can not be empty!
          </p>
        )}
        <label className="text-sm text-gray-800 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.email ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mb-4">Email can not be empty!</p>
        )}
        <label className="text-sm text-gray-800 font-medium" htmlFor="mobile">
          Mobile No.
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.mobile ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("mobile")}
        />
        {errors.mobile && (
          <p className="text-xs text-red-600 mb-4">
            Mobile no. can not be empty!
          </p>
        )}

        <DatePicker
          style="border-b border-gray-400 mb-4 pb-1 outline-none text-sm text-gray-600 w-full"
          name="dob"
          label="Dob"
          date={date}
          onChange={setDate}
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

export default UserForm
