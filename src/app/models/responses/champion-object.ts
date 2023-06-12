import { champion } from "./champion"

export interface championObject {
    data: data
}

export interface data {
    [key: string]: champion
}