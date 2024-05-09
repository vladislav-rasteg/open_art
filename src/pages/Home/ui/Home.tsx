import { NftCaseCard } from "@/entities/CaseCard";
import { NftCaseList } from "@/entities/NftCaseList";
import { INftCase } from "@/shared/models";
import { Heading } from "@/shared/ui/Heading";
import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import s from "./Home.module.scss"
import { CaseOfTheDayCard } from "@/entities/CaseOfTheDayCard";

export const Home = () => {
    const [tonConnectUI] = useTonConnectUI()
    const [connected, setConnected] = useState<boolean>(false);
    const [connectionLoading, setConnectionLoading] = useState<boolean>(true);
    const [nftCases, setNftCases] = useState<INftCase[]>([
        {
            id: 1,
            name: "HOT Official",
            min_price: 2,
            max_price: 4,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        },
        {
            id: 1,
            name: "HOT Official",
            min_price: 2,
            max_price: 4,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        },
        {
            id: 1,
            name: "HOT Official",
            min_price: 2,
            max_price: 4,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        },
        {
            id: 1,
            name: "HOT Official",
            min_price: 2,
            max_price: 4,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        },
        {
            id: 1,
            name: "HOT Official",
            min_price: 2,
            max_price: 4,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        }
    ])

    const [caseOfTheDay, setCaseOfTheDay] = useState<INftCase>(
        {
            id: 1,
            name: "Based Bits",
            min_price: 2.0,
            max_price: 234.0,
            creator: "UQDEMoicb5j9oS9JOrqZ_KPAxd0g8aUcPRhN2ELMBVDVr5iz",
            price: 2.0,
            cover_url: "https://ipfs.raribleuserdata.com/ipfs/QmRqqnZsbMLJGWt8SWjP2ebtzeHtWv5kkz3brbLzY1ShHt/7484.png"
        }
    )

    useEffect(() => {
        document.title = 'Open Art | Cases';

        tonConnectUI.connectionRestored.then(() => {
          setConnected(tonConnectUI.connected);
          setConnectionLoading(false);
        });
      }, [tonConnectUI, tonConnectUI.connected, tonConnectUI.connectionRestored]);

    return(
        <div className="page">
            <Heading type="h1">
                The new way<br/>to open NFT
            </Heading>
            <div className={s.case_list}>
                <CaseOfTheDayCard case_data={caseOfTheDay} />
                <NftCaseList CaseComponent={NftCaseCard} cases={nftCases} />
            </div>
        </div>
    )
}