import React from "react"
import s from './Heading.module.scss'

interface Props {
    children: any;
    type: 'h1' | 'h2' | 'h3' | 'h4';
}


export const Heading:React.FC<Props> = ({children, type = "h1"}) => {
    return (
        <p className={s[type]}>
            {children}
        </p>
    )
};
