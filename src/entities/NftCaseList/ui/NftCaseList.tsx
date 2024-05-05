import { INftCase } from "@/shared/models";
import React from "react";
import s from "./NftCaseList.module.scss"
import { Reveal } from "@/shared/ui/Reveal";

interface INftCaseProps {
    case_data: INftCase;
  }
  

interface CaseListProps {
    CaseComponent: React.ComponentType<INftCaseProps>;
    cases: INftCase[] | undefined;
}
  
export const NftCaseList: React.FC<CaseListProps> = ({
    CaseComponent,
    cases,
  }) => {
    return (
        <div className={s.case_list}>
            {
                cases && cases.map((nft_case, index) => (
                    <Reveal delay={0.07 * index} key={index}>
                        <CaseComponent case_data={nft_case} />
                    </Reveal>
                ))
            }
        </div>
    );
  };
  