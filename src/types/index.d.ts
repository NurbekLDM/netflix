import { Dispatch, ReactNode } from "react";

export interface ContextType {
  account: Account | null
  setAccount: Dispatch<SetStateAction<AccountProps | null>>
}

export interface AccountProps{
    _id: number
    uid: string
    name: string
    pin: string
}

export interface ChildProps{
    children: ReactNode
}