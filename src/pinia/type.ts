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
export interface Creator {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    accountStatus: number
    gender: number
    city: number
    birthday: number
    userId: number
    userType: number
    nickname: string
    signature: string
    description: string
    detailDescription: string
    avatarImgId: number
    backgroundImgId: number
    backgroundUrl: string
    authority: number
    mutual: boolean
    expertTags?: any
    experts?: any
    djStatus: number
    vipType: number
    remarkName?: any
    authenticationTypes: number
    avatarDetail?: any
    anchor: boolean
    avatarImgIdStr: string
    backgroundImgIdStr: string
    avatarImgId_str: string
}

export interface Ar {
    id: number
    name: string
    tns: any[]
    alias: any[]
}

export interface Al {
    id: number
    name: string
    picUrl: string
    tns: any[]
    pic_str: string
    pic: number
}

export interface H {
    br: number
    fid: number
    size: number
    vd: number
}

export interface M {
    br: number
    fid: number
    size: number
    vd: number
}

export interface L {
    br: number
    fid: number
    size: number
    vd: number
}

export interface Track {
    name: string
    id: number
    pst: number
    t: number
    ar: Ar[]
    alia?: any[]
    pop: number
    st: number
    rt: string
    fee: number
    v: number
    crbt?: any
    cf: string
    al: Al
    dt: number
    h: H
    m: M
    l: L
    a?: any
    cd: string
    no: number
    rtUrl?: any
    ftype: number
    rtUrls: any[]
    djId: number
    copyright: number
    s_id: number
    mark: number
    originCoverType: number
    originSongSimpleData?: any
    single: number
    noCopyrightRcmd?: any
    rtype: number
    rurl?: any
    mst: number
    cp: number
    mv: number
    publishTime: number
}

export interface TrackId {
    id: number
    v: number
    t: number
    at: number
    alg?: any
    uid: number
    rcmdReason: string
    sc?: any
}

export interface Playlist {
    id: number
    name: string
    coverImgId: number
    coverImgUrl: string
    coverImgId_str: string
    adType: number
    userId: number
    createTime: number
    status: number
    opRecommend: boolean
    highQuality: boolean
    newImported: boolean
    updateTime: number
    trackCount: number
    specialType: number
    privacy: number
    trackUpdateTime: number
    commentThreadId: string
    playCount: number
    trackNumberUpdateTime: number
    subscribedCount: number
    cloudTrackCount: number
    ordered: boolean
    description: string
    tags: string[]
    updateFrequency?: any
    backgroundCoverId: number
    backgroundCoverUrl?: any
    titleImage: number
    titleImageUrl?: any
    englishTitle?: any
    officialPlaylistType?: any
    subscribers: any[]
    subscribed?: any
    creator: Creator
    tracks: Track[]
    videoIds?: any
    videos?: any
    trackIds: TrackId[]
    shareCount: number
    commentCount: number
    remixVideo?: any
    sharedUsers?: any
    historySharedUsers?: any
}

export interface FreeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
}

export interface ChargeInfoList {
    rate: number
    chargeUrl?: any
    chargeMessage?: any
    chargeType: number
}

export interface Privilege {
    id: number
    fee: number
    payed: number
    realPayed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    pc?: any
    toast: boolean
    flag: number
    paidBigBang: boolean
    preSell: boolean
    playMaxbr: number
    downloadMaxbr: number
    rscl: number
    freeTrialPrivilege: FreeTrialPrivilege
    chargeInfoList: ChargeInfoList[]
}

export interface RootObject {
    code: number
    relatedVideos?: any
    playlist: Playlist
    urls?: any
    privileges: Privilege[]
    sharedPrivilege?: any
    resEntrance?: any
}

export interface Ar {
    id: number
    name: string
    tns: any[]
    alias: any[]
}

export interface Al {
    id: number
    name: string
    picUrl: string
    tns: any[]
    pic_str: string
    pic: number
}

export interface H {
    br: number
    fid: number
    size: number
    vd: number
}

export interface M {
    br: number
    fid: number
    size: number
    vd: number
}

export interface L {
    br: number
    fid: number
    size: number
    vd: number
}

export interface Song {
    name: string
    id: number
    pst: number
    t: number
    ar: Ar[]
    alia?: any[]
    pop: number
    st: number
    rt?: any
    fee: number
    v: number
    crbt?: any
    cf: string
    al: Al
    dt: number
    h: H
    m: M
    l: L
    a?: any
    cd: string
    no: number
    rtUrl?: any
    ftype: number
    rtUrls: any[]
    djId: number
    copyright: number
    s_id: number
    mark: number
    originCoverType: number
    originSongSimpleData?: any
    tagPicList?: any
    resourceState: boolean
    version: number
    songJumpInfo?: any
    entertainmentTags?: any
    single: number
    noCopyrightRcmd?: any
    mv: number
    rtype: number
    rurl?: any
    mst: number
    cp: number
    publishTime: number
    tns: string[]
}

export interface FreeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
}

export interface ChargeInfoList {
    rate: number
    chargeUrl?: any
    chargeMessage?: any
    chargeType: number
}

export interface Privilege {
    id: number
    fee: number
    payed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    toast: boolean
    flag: number
    preSell: boolean
    playMaxbr: number
    downloadMaxbr: number
    rscl: number
    freeTrialPrivilege: FreeTrialPrivilege
    chargeInfoList: ChargeInfoList[]
}

export interface RootObject {
    songs: Song[]
    privileges: Privilege[]
    code: number
}

export interface playerList {
    name: string
    songer: string
    url: string
    imgUrl: string
}
