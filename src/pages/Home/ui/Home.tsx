import { NftCaseCard } from "@/entities/CaseCard";
import { NftCaseList } from "@/entities/NftCaseList";
import { INftCase } from "@/shared/models";
import { Heading } from "@/shared/ui/Heading";
import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";


export const Home = () => {

    const [tonConnectUI] = useTonConnectUI();
    tonConnectUI.setConnectRequestParameters({ state: 'loading' });

    const [nftCases, setNftCases] = useState<INftCase[]>([
        {
            id: 1,
            name: "case 1",
            min_price: 2,
            max_price: 4,
            creator: "dweodkewofk",
            price: 2
        }
    ])

    useEffect(() => {
      
    }, []);

    useEffect(() => {
        document.title = 'Open Art | Cases';
        tonConnectUI.onStatusChange(wallet => {
            if (wallet.connectItems?.tonProof && 'proof' in wallet.connectItems.tonProof) {
                console.log(wallet)
            }
        })}, []);

    return(
        <div className="page">
            <Heading type="h1">
                The new way<br/>to open NFT
            </Heading>
            <p>
                {
                    tonConnectUI.connected ? "connected" : "not connected"
                }
            </p>
            <NftCaseList CaseComponent={NftCaseCard} cases={nftCases} />
        </div>
    )
}