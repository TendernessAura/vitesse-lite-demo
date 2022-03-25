export interface Result {
    id: number
    type: number
    name: string
    copywriter?: any
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
}

export interface RootObject {
    hasTaste: boolean
    code: number
    category: number
    result: Result[]
}
