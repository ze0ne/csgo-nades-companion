export interface Nade {
    id:                  string;
    commentCount:        number;
    createdAt:           Date;
    endPosition:         string;
    favoriteCount:       number;
    gfycat:              Gfycat;
    imageLineupThumbUrl: string;
    imageLineupThumb:    Image;
    imageLineup:         Image;
    imageMain:           Image;
    isNew:               boolean;
    mapEndCoord:         MapEndCoord;
    movement:            string;
    score:               number;
    slug:                string;
    startPosition:       string;
    status:              string;
    technique:           string;
    type:                string;
    updatedAt:           Date;
    user:                User;
    viewCount:           number;
    teamSide:            string;
}

export interface Gfycat {
    duration:       string;
    avgColor:       string;
    smallVideoUrl:  string;
    largeVideoWebm: string;
    largeVideoUrl:  string;
    gfyId:          string;
}

export interface Image {
    url:        string;
    collection: string;
    id:         string;
}

export interface MapEndCoord {
    x: number;
    y: number;
}

export interface User {
    nickname: string;
    avatar:   string;
    steamId:  string;
}
