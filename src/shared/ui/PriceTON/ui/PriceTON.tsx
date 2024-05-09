import React from "react"
import s from './PriceTON.module.scss'
import TonIcon from './assets/ton.svg'
import { classNames } from "@/shared/lib/classNames/classNames";


interface Props {
    children: any;
    theme?: 'light' | 'dark';
    size?: 'default' | 'small';
}

export const PriceTON:React.FC<Props> = ({children, theme="light", size="default"}) => {
    return (
        <p 
            className={classNames(s.price_ton, {}, [s[theme], s[size]])}
        >
            <img className={s.icon} src={TonIcon}/>
            {children}
        </p>
    )
};
