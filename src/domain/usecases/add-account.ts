import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: any
  email: string
  password: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => AccountModel
}
