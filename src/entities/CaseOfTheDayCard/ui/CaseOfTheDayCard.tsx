import { INftCase } from "@/shared/models"
import s from "./CaseOfTheDayCard.module.scss"
import { Button } from "@/shared/ui/Button";
import { shortTonAddr } from "@/shared/utils/short_ton_address";
import { PriceTON } from "@/shared/ui/PriceTON";

interface NftCaseCardProps {
    case_data: INftCase;
}

export const CaseOfTheDayCard = ({case_data}:NftCaseCardProps) => {
  
  return(
    <div className={s.case_card}>
        <img className={s.case_wrapper_image} src={case_data.cover_url}/>
        <div className={s.card_content}>
            <div className={s.case_of_the_day}>🔥 Case of the day</div>
            <img className={s.case_image} src={case_data.cover_url}/>
            <div className={s.case_info}>
                <div className={s.case_price_wrapper}>
                    <PriceTON>{case_data.min_price}</PriceTON>
                    <div className={s.case_price_line}></div>
                    <PriceTON>{case_data.max_price}</PriceTON>
                </div>
                <div className={s.cretor_name}>
                    <p className={s.case_creator}>by {shortTonAddr(case_data.creator)}</p>
                    <p className={s.case_name}>{case_data.name}</p>
                </div>
                <Button fullWidth>
                    Open Case · <PriceTON theme="dark">{case_data.price}</PriceTON>
                </Button>
            </div>
        </div>
    </div>
 )
}
