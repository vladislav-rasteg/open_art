import { INftCase } from "@/shared/models"
import s from "./NftCaseCard.module.scss"
import { Button } from "@/shared/ui/Button";
import { shortTonAddr } from "@/shared/utils/short_ton_address";
import { PriceTON } from "@/shared/ui/PriceTON";

interface NftCaseCardProps {
    case_data: INftCase;
}

export const NftCaseCard = ({case_data}:NftCaseCardProps) => {
  
  return(
    <div className={s.case_card}>
        <img className={s.case_image} src={case_data.cover_url} />
        <div className={s.case_price_wrapper}>
            <PriceTON>{case_data.min_price}</PriceTON>
            <div className={s.case_price_line}></div>
            <PriceTON>{case_data.max_price}</PriceTON>
        </div>
        <div className={s.creator_name}>
            <p className={s.case_creator}>{shortTonAddr(case_data.creator)}</p>
            <p className={s.case_name}>{case_data.name}</p>
        </div>
        <Button theme="secondary">
            Open <PriceTON size="small">{case_data.price}</PriceTON>
        </Button>
    </div>
 )
}
