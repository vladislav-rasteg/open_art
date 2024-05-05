import { useWallet } from "@/app/store"
import LogoMobile from '@/shared/assets/other/logo_mobile.svg'
import s from "./Header.module.scss"
import { useEffect, useState } from "react"
import { Button } from "@/shared/ui/Button"
import { TonConnectButton } from "@tonconnect/ui-react"

export const Header = () => {
    const wallet = useWallet((state) => state.wallet)

    return(
        <div className={s.header}>
            <img className={s.logo} src={LogoMobile} alt="Open Art Logo"/>
            {
            wallet.connected ?
                <p>connected</p>
                :
                // <Button>Connect wallet</Button>
                <TonConnectButton className={s.connect}/>
            }
        </div>
    )
}