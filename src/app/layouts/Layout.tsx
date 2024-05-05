import { FC } from "react"
import s from "./Layout.module.scss"
import { Header } from "@/widgets/Header";

interface ILayout {
    children?: React.ReactNode;
  }

export const Layout: FC<ILayout> = (props) => {
    const { children } = props
    return(
        <div className={s.layout}>
            <Header />
            {children}
        </div>
    )
}