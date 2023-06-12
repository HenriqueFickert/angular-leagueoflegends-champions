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

export interface championInfo {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number
}

export interface championStats {
    hp: number,
    hpperlevel: number,
    mp: number,
    mpperlevel: number,
    movespeed: number,
    armor: number,
    armorperlevel: number,
    spellblock: number,
    spellblockperlevel: number,
    attackrange: number,
    hpregen: number,
    hpregenperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    crit: number,
    critperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackspeedperlevel: number,
    attackspeed: number
}

export interface championImage {
    full: string,
    sprite: string,
    group: string,
    x: number,
    y: number,
    w: number,
    h: number
}