import {$host} from "./config";

export const getBranches = async (tenantId: number) =>{
    const {data} = await $host.get('api/widget/getBranches', {params: {tenantId}})
    return(data)
}