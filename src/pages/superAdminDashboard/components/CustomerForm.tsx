import { useMutation } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSnackbar } from "notistack"
import React, { MouseEventHandler } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Loading from "../../../common/components/Loading"
import { CREATE_CUSTOMER, GET_CUSTOMERS } from "../../../grapql"

const styles = {
  inputTextStyle: " border-b pb-1 outline-none text-sm text-gray-600"
}

interface ICustomerFormProps {
  onCancel: MouseEventHandler<HTMLButtonElement>
}

interface IFormInputs {
  name: string
  website: string
  contactPerson: string
  email: string
  address: string
  status: string
  mobile: string
}

const customerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  contactPerson: yup.string().required(),
  email: yup.string().required(),
  mobile: yup.string().required(),
  address: yup.string().required()
})

const CustomerForm: React.FC<ICustomerFormProps> = ({ onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInputs>({
    defaultValues: {
      name: "",
      contactPerson: "",
      email: "",
      mobile: "",
      website: "",
      address: ""
    },
    resolver: yupResolver(customerValidationSchema)
  })

  const [addCustomer, { loading, data, error }] = useMutation(CREATE_CUSTOMER)
  const { enqueueSnackbar } = useSnackbar()

  const handleCancel = (e: any) => {
    reset()
    onCancel(e)
  }

  const onSubmit = (data: IFormInputs) => {
    const { name, website, address, email, mobile, contactPerson } = data
    addCustomer({
      variables: {
        name,
        website,
        contactPerson,
        email: [email],
        address,
        status: "Active",
        mobile: [mobile],
        avatar: "no avatar"
      },
      update: (store: any, { data }: any) => {
        try {
          const customerData = store.readQuery({
            query: GET_CUSTOMERS
          })
          store.writeQuery({
            query: GET_CUSTOMERS,
            data: {
              getCustomers: [
                ...customerData?.getCustomers,
                data?.createCustomer
              ]
            }
          })
          reset()
          enqueueSnackbar("Customer added succefully", { variant: "success" })
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
        <label className="text-sm text-gray-800 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.name ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-600 mb-4">Name can not be empty!</p>
        )}
        <label className="text-sm text-gray-800 font-medium" htmlFor="website">
          Website
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.website ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("website")}
        />
        {errors.website && (
          <p className="text-xs text-red-600 mb-4">
            Website url not in correct format!
          </p>
        )}
        <label className="text-sm text-gray-800 font-medium" htmlFor="website">
          Contact Person
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.contactPerson ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("contactPerson")}
        />
        {errors.contactPerson && (
          <p className="text-xs text-red-600 mb-4">
            Contact Person can not be empty!
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

        <label className="text-sm text-gray-800 font-medium" htmlFor="mobile">
          Address
        </label>
        <input
          className={`${styles.inputTextStyle} ${
            errors.address ? "border-red-400" : "border-gray-400 mb-4"
          }`}
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-600 mb-4">Address can not be empty!</p>
        )}

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

export default CustomerForm
