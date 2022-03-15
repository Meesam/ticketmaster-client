import { CREATE_CUSTOMER } from "./customer/customer.mutation"
import { GET_CUSTOMERS, GET_CUSTOMER_BY_ID } from "./customer/customer.query"
import { CREATE_PROJECT } from "./project/project.mutation"
import { GET_PROJECTS_BY_OWNER, GET_PROJECT_BY_ID } from "./project/project.query"
import { CREATE_USER, UPDATE_USER } from "./user/user.mutation"
import { GET_USER, USER_LOGIN } from "./user/user.queries"

export { USER_LOGIN, CREATE_USER, GET_USER, GET_CUSTOMERS, CREATE_CUSTOMER, UPDATE_USER, GET_CUSTOMER_BY_ID, GET_PROJECTS_BY_OWNER, CREATE_PROJECT, GET_PROJECT_BY_ID }

