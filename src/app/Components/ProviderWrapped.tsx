"use client"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { ReactNode } from "react"

type propsType={
    children:ReactNode
}

const ProviderWrapped = ({children}:propsType) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderWrapped