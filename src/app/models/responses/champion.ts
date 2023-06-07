import { championInfo } from "./champion-info";
import { championImage } from "./champion-image";
import { championStats } from "./champion-stats";

export interface champion {
    version: string,
    id: string,
    key: string,
    name: string,
    title: string,
    blurb: string,
    property: string,
    info: championInfo,
    image: championImage,
    tags: string[],
    stats: championStats
}