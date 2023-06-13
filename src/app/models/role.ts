export interface role {
    roleImage: roleChampionImage,
    roleText: roleChampionText
}

export interface roleChampionImage {
    background: string,
    image: string
}

export interface roleChampionText {
    title: string,
    descriptions: string[]
}