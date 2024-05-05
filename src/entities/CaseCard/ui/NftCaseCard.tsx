import { INftCase } from "@/shared/models"
import s from "./NftCaseCard.module.scss"
import { Button } from "@/shared/ui/Button";

interface NftCaseCardProps {
    case_data: INftCase;
}

export const NftCaseCard = ({case_data}:NftCaseCardProps) => {
  
  return(
    <div className={s.case_card}>
        <div className={s.case_image}>
         image
        </div>
        <div className={s.case_info}>
            <div className={s.case_price_wrapper}>
                {case_data.min_price}
                <div className={s.case_price_line}></div>
                {case_data.max_price}
            </div>
            <p className={s.case_creator}>{case_data.creator}</p>
            <p className={s.case_name}>{case_data.name}</p>
            <Button>
                Open {case_data.price}
            </Button>
        </div>
    </div>
 )
}
