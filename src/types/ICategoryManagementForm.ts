import { FormikValues } from "formik"
import { ICategory } from "./ICategory"

export interface ICategoryManagementForm {
  category?: ICategory
  onClose: () => void
}

export interface IInitialValuesCategory extends FormikValues {
  name: string
  description: string
  image: File | null
}
