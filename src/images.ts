
export interface Dimensions {
    height: number;
    width: number;
}

export interface Resolution {
    height: number;
    width: number;
}

export interface SharedWith {
    id: string;
    name: string;
    avatar: string;
}

export interface RootObject {
    id: string;
    url: string;
    filename: string;
    description: string;
    uploadedBy: string;
    createdAt: Date;
    updatedAt: Date;
    dimensions: Dimensions;
    resolution: Resolution;
    sizeInBytes: number;
    sharedWith: SharedWith[];
    favorited: boolean;
}


/*      {Object.keys(JSON).map(key => (
          <div>
           {JSON[key].type}
            <img src={JSON[key].portfolioImage} key={key} />
          </div>
        ))}*/