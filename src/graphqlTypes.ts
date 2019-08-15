export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
     * representation of dates and times using the Gregorian calendar.
     */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
    __typename?: 'Directory';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    sourceInstanceName?: Maybe<Scalars['String']>;
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Int']>;
    prettySize?: Maybe<Scalars['String']>;
    modifiedTime?: Maybe<Scalars['Date']>;
    accessTime?: Maybe<Scalars['Date']>;
    changeTime?: Maybe<Scalars['Date']>;
    birthTime?: Maybe<Scalars['Date']>;
    root?: Maybe<Scalars['String']>;
    dir?: Maybe<Scalars['String']>;
    base?: Maybe<Scalars['String']>;
    ext?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    relativeDirectory?: Maybe<Scalars['String']>;
    dev?: Maybe<Scalars['Float']>;
    mode?: Maybe<Scalars['Int']>;
    nlink?: Maybe<Scalars['Int']>;
    uid?: Maybe<Scalars['Int']>;
    gid?: Maybe<Scalars['Int']>;
    rdev?: Maybe<Scalars['Int']>;
    ino?: Maybe<Scalars['Float']>;
    atimeMs?: Maybe<Scalars['Float']>;
    mtimeMs?: Maybe<Scalars['Float']>;
    ctimeMs?: Maybe<Scalars['Float']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    atime?: Maybe<Scalars['Date']>;
    mtime?: Maybe<Scalars['Date']>;
    ctime?: Maybe<Scalars['Date']>;
    birthtime?: Maybe<Scalars['Date']>;
};

export type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
    __typename?: 'DirectoryConnection';
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    __typename?: 'DirectoryEdge';
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

export type DirectoryFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<FloatQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
    __typename?: 'DirectoryGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
    __typename?: 'File';
    birthtime?: Maybe<Scalars['Date']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    sourceInstanceName?: Maybe<Scalars['String']>;
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Int']>;
    prettySize?: Maybe<Scalars['String']>;
    modifiedTime?: Maybe<Scalars['Date']>;
    accessTime?: Maybe<Scalars['Date']>;
    changeTime?: Maybe<Scalars['Date']>;
    birthTime?: Maybe<Scalars['Date']>;
    root?: Maybe<Scalars['String']>;
    dir?: Maybe<Scalars['String']>;
    base?: Maybe<Scalars['String']>;
    ext?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    relativeDirectory?: Maybe<Scalars['String']>;
    dev?: Maybe<Scalars['Float']>;
    mode?: Maybe<Scalars['Int']>;
    nlink?: Maybe<Scalars['Int']>;
    uid?: Maybe<Scalars['Int']>;
    gid?: Maybe<Scalars['Int']>;
    rdev?: Maybe<Scalars['Int']>;
    ino?: Maybe<Scalars['Float']>;
    atimeMs?: Maybe<Scalars['Float']>;
    mtimeMs?: Maybe<Scalars['Float']>;
    ctimeMs?: Maybe<Scalars['Float']>;
    atime?: Maybe<Scalars['Date']>;
    mtime?: Maybe<Scalars['Date']>;
    ctime?: Maybe<Scalars['Date']>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childImageSharp?: Maybe<ImageSharp>;
    childMdx?: Maybe<Mdx>;
};

export type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
    __typename?: 'FileConnection';
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
};

export type FileEdge = {
    __typename?: 'FileEdge';
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};

export enum FileFieldsEnum {
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    PublicUrl = 'publicURL',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    ChildMdxRawBody = 'childMdx___rawBody',
    ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
    ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
    ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
    ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
    ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
    ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
    ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
    ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
    ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
    ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
    ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
    ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
    ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
    ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
    ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
    ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
    ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
    ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
    ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
    ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
    ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
    ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
    ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
    ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
    ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
    ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
    ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
    ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
    ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
    ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
    ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
    ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
    ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
    ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
    ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
    ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
    ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
    ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
    ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
    ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
    ChildMdxFrontmatterImageFacebookBirthtime = 'childMdx___frontmatter___imageFacebook___birthtime',
    ChildMdxFrontmatterImageFacebookBirthtimeMs = 'childMdx___frontmatter___imageFacebook___birthtimeMs',
    ChildMdxFrontmatterImageFacebookSourceInstanceName = 'childMdx___frontmatter___imageFacebook___sourceInstanceName',
    ChildMdxFrontmatterImageFacebookAbsolutePath = 'childMdx___frontmatter___imageFacebook___absolutePath',
    ChildMdxFrontmatterImageFacebookRelativePath = 'childMdx___frontmatter___imageFacebook___relativePath',
    ChildMdxFrontmatterImageFacebookExtension = 'childMdx___frontmatter___imageFacebook___extension',
    ChildMdxFrontmatterImageFacebookSize = 'childMdx___frontmatter___imageFacebook___size',
    ChildMdxFrontmatterImageFacebookPrettySize = 'childMdx___frontmatter___imageFacebook___prettySize',
    ChildMdxFrontmatterImageFacebookModifiedTime = 'childMdx___frontmatter___imageFacebook___modifiedTime',
    ChildMdxFrontmatterImageFacebookAccessTime = 'childMdx___frontmatter___imageFacebook___accessTime',
    ChildMdxFrontmatterImageFacebookChangeTime = 'childMdx___frontmatter___imageFacebook___changeTime',
    ChildMdxFrontmatterImageFacebookBirthTime = 'childMdx___frontmatter___imageFacebook___birthTime',
    ChildMdxFrontmatterImageFacebookRoot = 'childMdx___frontmatter___imageFacebook___root',
    ChildMdxFrontmatterImageFacebookDir = 'childMdx___frontmatter___imageFacebook___dir',
    ChildMdxFrontmatterImageFacebookBase = 'childMdx___frontmatter___imageFacebook___base',
    ChildMdxFrontmatterImageFacebookExt = 'childMdx___frontmatter___imageFacebook___ext',
    ChildMdxFrontmatterImageFacebookName = 'childMdx___frontmatter___imageFacebook___name',
    ChildMdxFrontmatterImageFacebookRelativeDirectory = 'childMdx___frontmatter___imageFacebook___relativeDirectory',
    ChildMdxFrontmatterImageFacebookDev = 'childMdx___frontmatter___imageFacebook___dev',
    ChildMdxFrontmatterImageFacebookMode = 'childMdx___frontmatter___imageFacebook___mode',
    ChildMdxFrontmatterImageFacebookNlink = 'childMdx___frontmatter___imageFacebook___nlink',
    ChildMdxFrontmatterImageFacebookUid = 'childMdx___frontmatter___imageFacebook___uid',
    ChildMdxFrontmatterImageFacebookGid = 'childMdx___frontmatter___imageFacebook___gid',
    ChildMdxFrontmatterImageFacebookRdev = 'childMdx___frontmatter___imageFacebook___rdev',
    ChildMdxFrontmatterImageFacebookIno = 'childMdx___frontmatter___imageFacebook___ino',
    ChildMdxFrontmatterImageFacebookAtimeMs = 'childMdx___frontmatter___imageFacebook___atimeMs',
    ChildMdxFrontmatterImageFacebookMtimeMs = 'childMdx___frontmatter___imageFacebook___mtimeMs',
    ChildMdxFrontmatterImageFacebookCtimeMs = 'childMdx___frontmatter___imageFacebook___ctimeMs',
    ChildMdxFrontmatterImageFacebookAtime = 'childMdx___frontmatter___imageFacebook___atime',
    ChildMdxFrontmatterImageFacebookMtime = 'childMdx___frontmatter___imageFacebook___mtime',
    ChildMdxFrontmatterImageFacebookCtime = 'childMdx___frontmatter___imageFacebook___ctime',
    ChildMdxFrontmatterImageFacebookPublicUrl = 'childMdx___frontmatter___imageFacebook___publicURL',
    ChildMdxFrontmatterImageFacebookId = 'childMdx___frontmatter___imageFacebook___id',
    ChildMdxFrontmatterImageFacebookChildren = 'childMdx___frontmatter___imageFacebook___children',
    ChildMdxFrontmatterImageTwitterBirthtime = 'childMdx___frontmatter___imageTwitter___birthtime',
    ChildMdxFrontmatterImageTwitterBirthtimeMs = 'childMdx___frontmatter___imageTwitter___birthtimeMs',
    ChildMdxFrontmatterImageTwitterSourceInstanceName = 'childMdx___frontmatter___imageTwitter___sourceInstanceName',
    ChildMdxFrontmatterImageTwitterAbsolutePath = 'childMdx___frontmatter___imageTwitter___absolutePath',
    ChildMdxFrontmatterImageTwitterRelativePath = 'childMdx___frontmatter___imageTwitter___relativePath',
    ChildMdxFrontmatterImageTwitterExtension = 'childMdx___frontmatter___imageTwitter___extension',
    ChildMdxFrontmatterImageTwitterSize = 'childMdx___frontmatter___imageTwitter___size',
    ChildMdxFrontmatterImageTwitterPrettySize = 'childMdx___frontmatter___imageTwitter___prettySize',
    ChildMdxFrontmatterImageTwitterModifiedTime = 'childMdx___frontmatter___imageTwitter___modifiedTime',
    ChildMdxFrontmatterImageTwitterAccessTime = 'childMdx___frontmatter___imageTwitter___accessTime',
    ChildMdxFrontmatterImageTwitterChangeTime = 'childMdx___frontmatter___imageTwitter___changeTime',
    ChildMdxFrontmatterImageTwitterBirthTime = 'childMdx___frontmatter___imageTwitter___birthTime',
    ChildMdxFrontmatterImageTwitterRoot = 'childMdx___frontmatter___imageTwitter___root',
    ChildMdxFrontmatterImageTwitterDir = 'childMdx___frontmatter___imageTwitter___dir',
    ChildMdxFrontmatterImageTwitterBase = 'childMdx___frontmatter___imageTwitter___base',
    ChildMdxFrontmatterImageTwitterExt = 'childMdx___frontmatter___imageTwitter___ext',
    ChildMdxFrontmatterImageTwitterName = 'childMdx___frontmatter___imageTwitter___name',
    ChildMdxFrontmatterImageTwitterRelativeDirectory = 'childMdx___frontmatter___imageTwitter___relativeDirectory',
    ChildMdxFrontmatterImageTwitterDev = 'childMdx___frontmatter___imageTwitter___dev',
    ChildMdxFrontmatterImageTwitterMode = 'childMdx___frontmatter___imageTwitter___mode',
    ChildMdxFrontmatterImageTwitterNlink = 'childMdx___frontmatter___imageTwitter___nlink',
    ChildMdxFrontmatterImageTwitterUid = 'childMdx___frontmatter___imageTwitter___uid',
    ChildMdxFrontmatterImageTwitterGid = 'childMdx___frontmatter___imageTwitter___gid',
    ChildMdxFrontmatterImageTwitterRdev = 'childMdx___frontmatter___imageTwitter___rdev',
    ChildMdxFrontmatterImageTwitterIno = 'childMdx___frontmatter___imageTwitter___ino',
    ChildMdxFrontmatterImageTwitterAtimeMs = 'childMdx___frontmatter___imageTwitter___atimeMs',
    ChildMdxFrontmatterImageTwitterMtimeMs = 'childMdx___frontmatter___imageTwitter___mtimeMs',
    ChildMdxFrontmatterImageTwitterCtimeMs = 'childMdx___frontmatter___imageTwitter___ctimeMs',
    ChildMdxFrontmatterImageTwitterAtime = 'childMdx___frontmatter___imageTwitter___atime',
    ChildMdxFrontmatterImageTwitterMtime = 'childMdx___frontmatter___imageTwitter___mtime',
    ChildMdxFrontmatterImageTwitterCtime = 'childMdx___frontmatter___imageTwitter___ctime',
    ChildMdxFrontmatterImageTwitterPublicUrl = 'childMdx___frontmatter___imageTwitter___publicURL',
    ChildMdxFrontmatterImageTwitterId = 'childMdx___frontmatter___imageTwitter___id',
    ChildMdxFrontmatterImageTwitterChildren = 'childMdx___frontmatter___imageTwitter___children',
    ChildMdxFrontmatterCategories = 'childMdx___frontmatter___categories',
    ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
    ChildMdxBody = 'childMdx___body',
    ChildMdxExcerpt = 'childMdx___excerpt',
    ChildMdxHeadings = 'childMdx___headings',
    ChildMdxHeadingsValue = 'childMdx___headings___value',
    ChildMdxHeadingsDepth = 'childMdx___headings___depth',
    ChildMdxHtml = 'childMdx___html',
    ChildMdxMdxAst = 'childMdx___mdxAST',
    ChildMdxTableOfContents = 'childMdx___tableOfContents',
    ChildMdxTimeToRead = 'childMdx___timeToRead',
    ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
    ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
    ChildMdxWordCountWords = 'childMdx___wordCount___words',
    ChildMdxId = 'childMdx___id',
    ChildMdxParentId = 'childMdx___parent___id',
    ChildMdxParentParentId = 'childMdx___parent___parent___id',
    ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
    ChildMdxParentChildren = 'childMdx___parent___children',
    ChildMdxParentChildrenId = 'childMdx___parent___children___id',
    ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
    ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
    ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
    ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
    ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
    ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
    ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
    ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
    ChildMdxParentInternalType = 'childMdx___parent___internal___type',
    ChildMdxChildren = 'childMdx___children',
    ChildMdxChildrenId = 'childMdx___children___id',
    ChildMdxChildrenParentId = 'childMdx___children___parent___id',
    ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
    ChildMdxChildrenChildren = 'childMdx___children___children',
    ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
    ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
    ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
    ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
    ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
    ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
    ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
    ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
    ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
    ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
    ChildMdxInternalContent = 'childMdx___internal___content',
    ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
    ChildMdxInternalDescription = 'childMdx___internal___description',
    ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
    ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
    ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
    ChildMdxInternalOwner = 'childMdx___internal___owner',
    ChildMdxInternalType = 'childMdx___internal___type',
}

export type FileFilterInput = {
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<FloatQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    childMdx?: Maybe<MdxFilterInput>;
};

export type FileGroupConnection = {
    __typename?: 'FileGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
}

export enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
}

export enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
}

export type ImageSharp = Node & {
    __typename?: 'ImageSharp';
    id: Scalars['ID'];
    fixed?: Maybe<ImageSharpFixed>;
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
    __typename?: 'ImageSharpConnection';
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    __typename?: 'ImageSharpEdge';
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
    Id = 'id',
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
    __typename?: 'ImageSharpFixed';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
    srcSet?: Maybe<Scalars['String']>;
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
    __typename?: 'ImageSharpFluid';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
    srcSet?: Maybe<Scalars['String']>;
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes?: Maybe<Scalars['String']>;
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    __typename?: 'ImageSharpGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
    __typename?: 'ImageSharpOriginal';
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
    __typename?: 'ImageSharpResize';
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
    __typename?: 'ImageSharpResolutions';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
    srcSet?: Maybe<Scalars['String']>;
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
    __typename?: 'ImageSharpSizes';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
    srcSet?: Maybe<Scalars['String']>;
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes?: Maybe<Scalars['String']>;
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
    __typename?: 'Internal';
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
};

export type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
    Plain = 'PLAIN',
    Html = 'HTML',
    Markdown = 'MARKDOWN',
}

export type MarkdownHeading = {
    __typename?: 'MarkdownHeading';
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export type MarkdownRemark = Node & {
    __typename?: 'MarkdownRemark';
    id: Scalars['ID'];
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
    excerpt?: Maybe<Scalars['String']>;
    excerptAst?: Maybe<Scalars['JSON']>;
    headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
    timeToRead?: Maybe<Scalars['Int']>;
    tableOfContents?: Maybe<Scalars['String']>;
    wordCount?: Maybe<MarkdownWordCount>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
    format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
    depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
    pathToSlugField?: Maybe<Scalars['String']>;
    maxDepth?: Maybe<Scalars['Int']>;
    heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
    __typename?: 'MarkdownRemarkConnection';
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
    __typename?: 'MarkdownRemarkEdge';
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
    Id = 'id',
    Html = 'html',
    HtmlAst = 'htmlAst',
    Excerpt = 'excerpt',
    ExcerptAst = 'excerptAst',
    Headings = 'headings',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    TimeToRead = 'timeToRead',
    TableOfContents = 'tableOfContents',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type MarkdownRemarkFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
    __typename?: 'MarkdownRemarkGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
    fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
    __typename?: 'MarkdownWordCount';
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
};

export type Mdx = Node & {
    __typename?: 'Mdx';
    rawBody: Scalars['String'];
    fileAbsolutePath: Scalars['String'];
    frontmatter?: Maybe<MdxFrontmatter>;
    body: Scalars['String'];
    excerpt: Scalars['String'];
    headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
    html?: Maybe<Scalars['String']>;
    mdxAST?: Maybe<Scalars['JSON']>;
    tableOfContents?: Maybe<Scalars['JSON']>;
    timeToRead?: Maybe<Scalars['Int']>;
    wordCount?: Maybe<MdxWordCount>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type MdxExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
};

export type MdxHeadingsArgs = {
    depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
    maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
    __typename?: 'MdxConnection';
    totalCount: Scalars['Int'];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
    field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MdxFieldsEnum;
};

export type MdxEdge = {
    __typename?: 'MdxEdge';
    next?: Maybe<Mdx>;
    node: Mdx;
    previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
    RawBody = 'rawBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterAuthor = 'frontmatter___author',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterExcerpt = 'frontmatter___excerpt',
    FrontmatterSlug = 'frontmatter___slug',
    FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
    FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
    FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
    FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
    FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
    FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
    FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
    FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
    FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
    FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
    FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
    FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
    FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
    FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
    FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
    FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
    FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
    FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
    FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
    FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
    FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
    FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
    FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
    FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
    FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
    FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
    FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
    FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
    FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
    FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
    FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
    FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
    FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
    FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
    FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
    FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
    FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
    FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
    FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
    FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
    FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
    FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
    FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
    FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
    FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
    FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
    FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
    FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
    FrontmatterFeaturedImageChildMdxRawBody = 'frontmatter___featuredImage___childMdx___rawBody',
    FrontmatterFeaturedImageChildMdxFileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
    FrontmatterFeaturedImageChildMdxBody = 'frontmatter___featuredImage___childMdx___body',
    FrontmatterFeaturedImageChildMdxExcerpt = 'frontmatter___featuredImage___childMdx___excerpt',
    FrontmatterFeaturedImageChildMdxHeadings = 'frontmatter___featuredImage___childMdx___headings',
    FrontmatterFeaturedImageChildMdxHtml = 'frontmatter___featuredImage___childMdx___html',
    FrontmatterFeaturedImageChildMdxMdxAst = 'frontmatter___featuredImage___childMdx___mdxAST',
    FrontmatterFeaturedImageChildMdxTableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
    FrontmatterFeaturedImageChildMdxTimeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
    FrontmatterFeaturedImageChildMdxId = 'frontmatter___featuredImage___childMdx___id',
    FrontmatterFeaturedImageChildMdxChildren = 'frontmatter___featuredImage___childMdx___children',
    FrontmatterImageFacebookBirthtime = 'frontmatter___imageFacebook___birthtime',
    FrontmatterImageFacebookBirthtimeMs = 'frontmatter___imageFacebook___birthtimeMs',
    FrontmatterImageFacebookSourceInstanceName = 'frontmatter___imageFacebook___sourceInstanceName',
    FrontmatterImageFacebookAbsolutePath = 'frontmatter___imageFacebook___absolutePath',
    FrontmatterImageFacebookRelativePath = 'frontmatter___imageFacebook___relativePath',
    FrontmatterImageFacebookExtension = 'frontmatter___imageFacebook___extension',
    FrontmatterImageFacebookSize = 'frontmatter___imageFacebook___size',
    FrontmatterImageFacebookPrettySize = 'frontmatter___imageFacebook___prettySize',
    FrontmatterImageFacebookModifiedTime = 'frontmatter___imageFacebook___modifiedTime',
    FrontmatterImageFacebookAccessTime = 'frontmatter___imageFacebook___accessTime',
    FrontmatterImageFacebookChangeTime = 'frontmatter___imageFacebook___changeTime',
    FrontmatterImageFacebookBirthTime = 'frontmatter___imageFacebook___birthTime',
    FrontmatterImageFacebookRoot = 'frontmatter___imageFacebook___root',
    FrontmatterImageFacebookDir = 'frontmatter___imageFacebook___dir',
    FrontmatterImageFacebookBase = 'frontmatter___imageFacebook___base',
    FrontmatterImageFacebookExt = 'frontmatter___imageFacebook___ext',
    FrontmatterImageFacebookName = 'frontmatter___imageFacebook___name',
    FrontmatterImageFacebookRelativeDirectory = 'frontmatter___imageFacebook___relativeDirectory',
    FrontmatterImageFacebookDev = 'frontmatter___imageFacebook___dev',
    FrontmatterImageFacebookMode = 'frontmatter___imageFacebook___mode',
    FrontmatterImageFacebookNlink = 'frontmatter___imageFacebook___nlink',
    FrontmatterImageFacebookUid = 'frontmatter___imageFacebook___uid',
    FrontmatterImageFacebookGid = 'frontmatter___imageFacebook___gid',
    FrontmatterImageFacebookRdev = 'frontmatter___imageFacebook___rdev',
    FrontmatterImageFacebookIno = 'frontmatter___imageFacebook___ino',
    FrontmatterImageFacebookAtimeMs = 'frontmatter___imageFacebook___atimeMs',
    FrontmatterImageFacebookMtimeMs = 'frontmatter___imageFacebook___mtimeMs',
    FrontmatterImageFacebookCtimeMs = 'frontmatter___imageFacebook___ctimeMs',
    FrontmatterImageFacebookAtime = 'frontmatter___imageFacebook___atime',
    FrontmatterImageFacebookMtime = 'frontmatter___imageFacebook___mtime',
    FrontmatterImageFacebookCtime = 'frontmatter___imageFacebook___ctime',
    FrontmatterImageFacebookPublicUrl = 'frontmatter___imageFacebook___publicURL',
    FrontmatterImageFacebookId = 'frontmatter___imageFacebook___id',
    FrontmatterImageFacebookParentId = 'frontmatter___imageFacebook___parent___id',
    FrontmatterImageFacebookParentChildren = 'frontmatter___imageFacebook___parent___children',
    FrontmatterImageFacebookChildren = 'frontmatter___imageFacebook___children',
    FrontmatterImageFacebookChildrenId = 'frontmatter___imageFacebook___children___id',
    FrontmatterImageFacebookChildrenChildren = 'frontmatter___imageFacebook___children___children',
    FrontmatterImageFacebookInternalContent = 'frontmatter___imageFacebook___internal___content',
    FrontmatterImageFacebookInternalContentDigest = 'frontmatter___imageFacebook___internal___contentDigest',
    FrontmatterImageFacebookInternalDescription = 'frontmatter___imageFacebook___internal___description',
    FrontmatterImageFacebookInternalFieldOwners = 'frontmatter___imageFacebook___internal___fieldOwners',
    FrontmatterImageFacebookInternalIgnoreType = 'frontmatter___imageFacebook___internal___ignoreType',
    FrontmatterImageFacebookInternalMediaType = 'frontmatter___imageFacebook___internal___mediaType',
    FrontmatterImageFacebookInternalOwner = 'frontmatter___imageFacebook___internal___owner',
    FrontmatterImageFacebookInternalType = 'frontmatter___imageFacebook___internal___type',
    FrontmatterImageFacebookChildImageSharpId = 'frontmatter___imageFacebook___childImageSharp___id',
    FrontmatterImageFacebookChildImageSharpChildren = 'frontmatter___imageFacebook___childImageSharp___children',
    FrontmatterImageFacebookChildMdxRawBody = 'frontmatter___imageFacebook___childMdx___rawBody',
    FrontmatterImageFacebookChildMdxFileAbsolutePath = 'frontmatter___imageFacebook___childMdx___fileAbsolutePath',
    FrontmatterImageFacebookChildMdxBody = 'frontmatter___imageFacebook___childMdx___body',
    FrontmatterImageFacebookChildMdxExcerpt = 'frontmatter___imageFacebook___childMdx___excerpt',
    FrontmatterImageFacebookChildMdxHeadings = 'frontmatter___imageFacebook___childMdx___headings',
    FrontmatterImageFacebookChildMdxHtml = 'frontmatter___imageFacebook___childMdx___html',
    FrontmatterImageFacebookChildMdxMdxAst = 'frontmatter___imageFacebook___childMdx___mdxAST',
    FrontmatterImageFacebookChildMdxTableOfContents = 'frontmatter___imageFacebook___childMdx___tableOfContents',
    FrontmatterImageFacebookChildMdxTimeToRead = 'frontmatter___imageFacebook___childMdx___timeToRead',
    FrontmatterImageFacebookChildMdxId = 'frontmatter___imageFacebook___childMdx___id',
    FrontmatterImageFacebookChildMdxChildren = 'frontmatter___imageFacebook___childMdx___children',
    FrontmatterImageTwitterBirthtime = 'frontmatter___imageTwitter___birthtime',
    FrontmatterImageTwitterBirthtimeMs = 'frontmatter___imageTwitter___birthtimeMs',
    FrontmatterImageTwitterSourceInstanceName = 'frontmatter___imageTwitter___sourceInstanceName',
    FrontmatterImageTwitterAbsolutePath = 'frontmatter___imageTwitter___absolutePath',
    FrontmatterImageTwitterRelativePath = 'frontmatter___imageTwitter___relativePath',
    FrontmatterImageTwitterExtension = 'frontmatter___imageTwitter___extension',
    FrontmatterImageTwitterSize = 'frontmatter___imageTwitter___size',
    FrontmatterImageTwitterPrettySize = 'frontmatter___imageTwitter___prettySize',
    FrontmatterImageTwitterModifiedTime = 'frontmatter___imageTwitter___modifiedTime',
    FrontmatterImageTwitterAccessTime = 'frontmatter___imageTwitter___accessTime',
    FrontmatterImageTwitterChangeTime = 'frontmatter___imageTwitter___changeTime',
    FrontmatterImageTwitterBirthTime = 'frontmatter___imageTwitter___birthTime',
    FrontmatterImageTwitterRoot = 'frontmatter___imageTwitter___root',
    FrontmatterImageTwitterDir = 'frontmatter___imageTwitter___dir',
    FrontmatterImageTwitterBase = 'frontmatter___imageTwitter___base',
    FrontmatterImageTwitterExt = 'frontmatter___imageTwitter___ext',
    FrontmatterImageTwitterName = 'frontmatter___imageTwitter___name',
    FrontmatterImageTwitterRelativeDirectory = 'frontmatter___imageTwitter___relativeDirectory',
    FrontmatterImageTwitterDev = 'frontmatter___imageTwitter___dev',
    FrontmatterImageTwitterMode = 'frontmatter___imageTwitter___mode',
    FrontmatterImageTwitterNlink = 'frontmatter___imageTwitter___nlink',
    FrontmatterImageTwitterUid = 'frontmatter___imageTwitter___uid',
    FrontmatterImageTwitterGid = 'frontmatter___imageTwitter___gid',
    FrontmatterImageTwitterRdev = 'frontmatter___imageTwitter___rdev',
    FrontmatterImageTwitterIno = 'frontmatter___imageTwitter___ino',
    FrontmatterImageTwitterAtimeMs = 'frontmatter___imageTwitter___atimeMs',
    FrontmatterImageTwitterMtimeMs = 'frontmatter___imageTwitter___mtimeMs',
    FrontmatterImageTwitterCtimeMs = 'frontmatter___imageTwitter___ctimeMs',
    FrontmatterImageTwitterAtime = 'frontmatter___imageTwitter___atime',
    FrontmatterImageTwitterMtime = 'frontmatter___imageTwitter___mtime',
    FrontmatterImageTwitterCtime = 'frontmatter___imageTwitter___ctime',
    FrontmatterImageTwitterPublicUrl = 'frontmatter___imageTwitter___publicURL',
    FrontmatterImageTwitterId = 'frontmatter___imageTwitter___id',
    FrontmatterImageTwitterParentId = 'frontmatter___imageTwitter___parent___id',
    FrontmatterImageTwitterParentChildren = 'frontmatter___imageTwitter___parent___children',
    FrontmatterImageTwitterChildren = 'frontmatter___imageTwitter___children',
    FrontmatterImageTwitterChildrenId = 'frontmatter___imageTwitter___children___id',
    FrontmatterImageTwitterChildrenChildren = 'frontmatter___imageTwitter___children___children',
    FrontmatterImageTwitterInternalContent = 'frontmatter___imageTwitter___internal___content',
    FrontmatterImageTwitterInternalContentDigest = 'frontmatter___imageTwitter___internal___contentDigest',
    FrontmatterImageTwitterInternalDescription = 'frontmatter___imageTwitter___internal___description',
    FrontmatterImageTwitterInternalFieldOwners = 'frontmatter___imageTwitter___internal___fieldOwners',
    FrontmatterImageTwitterInternalIgnoreType = 'frontmatter___imageTwitter___internal___ignoreType',
    FrontmatterImageTwitterInternalMediaType = 'frontmatter___imageTwitter___internal___mediaType',
    FrontmatterImageTwitterInternalOwner = 'frontmatter___imageTwitter___internal___owner',
    FrontmatterImageTwitterInternalType = 'frontmatter___imageTwitter___internal___type',
    FrontmatterImageTwitterChildImageSharpId = 'frontmatter___imageTwitter___childImageSharp___id',
    FrontmatterImageTwitterChildImageSharpChildren = 'frontmatter___imageTwitter___childImageSharp___children',
    FrontmatterImageTwitterChildMdxRawBody = 'frontmatter___imageTwitter___childMdx___rawBody',
    FrontmatterImageTwitterChildMdxFileAbsolutePath = 'frontmatter___imageTwitter___childMdx___fileAbsolutePath',
    FrontmatterImageTwitterChildMdxBody = 'frontmatter___imageTwitter___childMdx___body',
    FrontmatterImageTwitterChildMdxExcerpt = 'frontmatter___imageTwitter___childMdx___excerpt',
    FrontmatterImageTwitterChildMdxHeadings = 'frontmatter___imageTwitter___childMdx___headings',
    FrontmatterImageTwitterChildMdxHtml = 'frontmatter___imageTwitter___childMdx___html',
    FrontmatterImageTwitterChildMdxMdxAst = 'frontmatter___imageTwitter___childMdx___mdxAST',
    FrontmatterImageTwitterChildMdxTableOfContents = 'frontmatter___imageTwitter___childMdx___tableOfContents',
    FrontmatterImageTwitterChildMdxTimeToRead = 'frontmatter___imageTwitter___childMdx___timeToRead',
    FrontmatterImageTwitterChildMdxId = 'frontmatter___imageTwitter___childMdx___id',
    FrontmatterImageTwitterChildMdxChildren = 'frontmatter___imageTwitter___childMdx___children',
    FrontmatterCategories = 'frontmatter___categories',
    FrontmatterTags = 'frontmatter___tags',
    Body = 'body',
    Excerpt = 'excerpt',
    Headings = 'headings',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    Html = 'html',
    MdxAst = 'mdxAST',
    TableOfContents = 'tableOfContents',
    TimeToRead = 'timeToRead',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type MdxFilterInput = {
    rawBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MdxFrontmatterFilterInput>;
    body?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    headings?: Maybe<MdxHeadingMdxFilterListInput>;
    html?: Maybe<StringQueryOperatorInput>;
    mdxAST?: Maybe<JsonQueryOperatorInput>;
    tableOfContents?: Maybe<JsonQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    wordCount?: Maybe<MdxWordCountFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
    __typename?: 'MdxFrontmatter';
    title: Scalars['String'];
    author?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Date']>;
    excerpt?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    featuredImage?: Maybe<File>;
    imageFacebook?: Maybe<File>;
    imageTwitter?: Maybe<File>;
    categories?: Maybe<Array<Maybe<Scalars['String']>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MdxFrontmatterDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    imageFacebook?: Maybe<FileFilterInput>;
    imageTwitter?: Maybe<FileFilterInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
    __typename?: 'MdxGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
    __typename?: 'MdxHeadingMdx';
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
    elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
    fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
    __typename?: 'MdxWordCount';
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
    __typename?: 'PageInfo';
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
    __typename?: 'Query';
    file?: Maybe<File>;
    allFile: FileConnection;
    mdx?: Maybe<Mdx>;
    allMdx: MdxConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark: MarkdownRemarkConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
};

export type QueryFileArgs = {
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<FloatQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    childMdx?: Maybe<MdxFilterInput>;
};

export type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryMdxArgs = {
    rawBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MdxFrontmatterFilterInput>;
    body?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    headings?: Maybe<MdxHeadingMdxFilterListInput>;
    html?: Maybe<StringQueryOperatorInput>;
    mdxAST?: Maybe<JsonQueryOperatorInput>;
    tableOfContents?: Maybe<JsonQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    wordCount?: Maybe<MdxWordCountFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
    filter?: Maybe<MdxFilterInput>;
    sort?: Maybe<MdxSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    path?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<FloatQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
    __typename?: 'Site';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
    __typename?: 'SiteConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    __typename?: 'SiteEdge';
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataAuthor = 'siteMetadata___author',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
    SiteMetadataSiteDescription = 'siteMetadata___siteDescription',
    SiteMetadataAuthorName = 'siteMetadata___authorName',
    SiteMetadataTwitterUsername = 'siteMetadata___twitterUsername',
    SiteMetadataAuthorAvatar = 'siteMetadata___authorAvatar',
    SiteMetadataAuthorDescription = 'siteMetadata___authorDescription',
    SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
    SiteMetadataSiteCover = 'siteMetadata___siteCover',
    SiteMetadataGoogleAnalyticsId = 'siteMetadata___googleAnalyticsId',
    SiteMetadataBackgroundColor = 'siteMetadata___backgroundColor',
    SiteMetadataThemeColor = 'siteMetadata___themeColor',
    SiteMetadataDisplay = 'siteMetadata___display',
    SiteMetadataIcon = 'siteMetadata___icon',
    SiteMetadataPostsPerPage = 'siteMetadata___postsPerPage',
    SiteMetadataHeaderTitle = 'siteMetadata___headerTitle',
    SiteMetadataHeaderLinksIcon = 'siteMetadata___headerLinksIcon',
    SiteMetadataHeaderLinks = 'siteMetadata___headerLinks',
    SiteMetadataHeaderLinksLabel = 'siteMetadata___headerLinks___label',
    SiteMetadataHeaderLinksUrl = 'siteMetadata___headerLinks___url',
    SiteMetadataFooterLinks = 'siteMetadata___footerLinks',
    SiteMetadataFooterLinksSectionName = 'siteMetadata___footerLinks___sectionName',
    SiteMetadataFooterLinksLinks = 'siteMetadata___footerLinks___links',
    SiteMetadataFooterLinksLinksLabel = 'siteMetadata___footerLinks___links___label',
    SiteMetadataFooterLinksLinksUrl = 'siteMetadata___footerLinks___links___url',
    Port = 'port',
    Host = 'host',
    Polyfill = 'polyfill',
    PathPrefix = 'pathPrefix',
    BuildTime = 'buildTime',
}

export type SiteFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
    __typename?: 'SiteGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
    __typename?: 'SitePage';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    path?: Maybe<Scalars['String']>;
    internalComponentName?: Maybe<Scalars['String']>;
    component?: Maybe<Scalars['String']>;
    componentChunkName?: Maybe<Scalars['String']>;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
    __typename?: 'SitePageConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
};

export type SitePageContext = {
    __typename?: 'SitePageContext';
    limit?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    currentPage?: Maybe<Scalars['Int']>;
    nbPages?: Maybe<Scalars['Int']>;
    slug?: Maybe<Scalars['String']>;
    previous?: Maybe<SitePageContextPrevious>;
    next?: Maybe<SitePageContextNext>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    tag?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
    limit?: Maybe<IntQueryOperatorInput>;
    skip?: Maybe<IntQueryOperatorInput>;
    currentPage?: Maybe<IntQueryOperatorInput>;
    nbPages?: Maybe<IntQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    previous?: Maybe<SitePageContextPreviousFilterInput>;
    next?: Maybe<SitePageContextNextFilterInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    tag?: Maybe<StringQueryOperatorInput>;
    category?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNext = {
    __typename?: 'SitePageContextNext';
    fileAbsolutePath?: Maybe<Scalars['String']>;
    frontmatter?: Maybe<SitePageContextNextFrontmatter>;
};

export type SitePageContextNextFilterInput = {
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>;
};

export type SitePageContextNextFrontmatter = {
    __typename?: 'SitePageContextNextFrontmatter';
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    categories?: Maybe<Array<Maybe<Scalars['String']>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextNextFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevious = {
    __typename?: 'SitePageContextPrevious';
    fileAbsolutePath?: Maybe<Scalars['String']>;
    frontmatter?: Maybe<SitePageContextPreviousFrontmatter>;
};

export type SitePageContextPreviousFilterInput = {
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>;
};

export type SitePageContextPreviousFrontmatter = {
    __typename?: 'SitePageContextPreviousFrontmatter';
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    categories?: Maybe<Array<Maybe<Scalars['String']>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    categories?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
    __typename?: 'SitePageEdge';
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Path = 'path',
    InternalComponentName = 'internalComponentName',
    Component = 'component',
    ComponentChunkName = 'componentChunkName',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    ContextLimit = 'context___limit',
    ContextSkip = 'context___skip',
    ContextCurrentPage = 'context___currentPage',
    ContextNbPages = 'context___nbPages',
    ContextSlug = 'context___slug',
    ContextPreviousFileAbsolutePath = 'context___previous___fileAbsolutePath',
    ContextPreviousFrontmatterTitle = 'context___previous___frontmatter___title',
    ContextPreviousFrontmatterSlug = 'context___previous___frontmatter___slug',
    ContextPreviousFrontmatterCategories = 'context___previous___frontmatter___categories',
    ContextPreviousFrontmatterTags = 'context___previous___frontmatter___tags',
    ContextNextFileAbsolutePath = 'context___next___fileAbsolutePath',
    ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
    ContextNextFrontmatterSlug = 'context___next___frontmatter___slug',
    ContextNextFrontmatterCategories = 'context___next___frontmatter___categories',
    ContextNextFrontmatterTags = 'context___next___frontmatter___tags',
    ContextWidth = 'context___width',
    ContextHeight = 'context___height',
    ContextType = 'context___type',
    ContextTag = 'context___tag',
    ContextCategory = 'context___category',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
    PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
    PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
    PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
    PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
    PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
    PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
    PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
    PluginCreatorPluginOptionsDefaultLayoutsDefault = 'pluginCreator___pluginOptions___defaultLayouts___default',
    PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
    PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
    PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    path?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    __typename?: 'SitePageGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    __typename?: 'SitePlugin';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
    __typename?: 'SitePluginConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    __typename?: 'SitePluginEdge';
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsPlugins = 'pluginOptions___plugins',
    PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
    PluginOptionsPluginsId = 'pluginOptions___plugins___id',
    PluginOptionsPluginsName = 'pluginOptions___plugins___name',
    PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsExtensions = 'pluginOptions___extensions',
    PluginOptionsDefaultLayoutsDefault = 'pluginOptions___defaultLayouts___default',
    PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
    PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
    PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
    PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
    PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
    PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
    PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
    PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
    PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
    PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
    PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
    PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
    PluginOptionsGatsbyRemarkPluginsOptionsShowLineNumbers = 'pluginOptions___gatsbyRemarkPlugins___options___showLineNumbers',
    PluginOptionsTrackingId = 'pluginOptions___trackingId',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsIcon = 'pluginOptions___icon',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
    __typename?: 'SitePluginGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
    __typename?: 'SitePluginPackageJson';
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
    __typename?: 'SitePluginPackageJsonDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    __typename?: 'SitePluginPackageJsonDevDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    __typename?: 'SitePluginPackageJsonPeerDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    __typename?: 'SitePluginPluginOptions';
    plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
    defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
    gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
    trackingId?: Maybe<Scalars['String']>;
    short_name?: Maybe<Scalars['String']>;
    start_url?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    theme_color?: Maybe<Scalars['String']>;
    display?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
    __typename?: 'SitePluginPluginOptionsDefaultLayouts';
    default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
    default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    name?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    extensions?: Maybe<StringQueryOperatorInput>;
    defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
    gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
    trackingId?: Maybe<StringQueryOperatorInput>;
    short_name?: Maybe<StringQueryOperatorInput>;
    start_url?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    display?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
    __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins';
    resolve?: Maybe<Scalars['String']>;
    options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
    __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions';
    maxWidth?: Maybe<Scalars['Int']>;
    linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
    withWebp?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    wrapperStyle?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    showCaptions?: Maybe<Scalars['Boolean']>;
    markdownCaptions?: Maybe<Scalars['Boolean']>;
    tracedSVG?: Maybe<Scalars['Boolean']>;
    loading?: Maybe<Scalars['String']>;
    showLineNumbers?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    wrapperStyle?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    showCaptions?: Maybe<BooleanQueryOperatorInput>;
    markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
    tracedSVG?: Maybe<BooleanQueryOperatorInput>;
    loading?: Maybe<StringQueryOperatorInput>;
    showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
    __typename?: 'SitePluginPluginOptionsPlugins';
    resolve?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
    __typename?: 'SiteSiteMetadata';
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    siteTitle?: Maybe<Scalars['String']>;
    siteDescription?: Maybe<Scalars['String']>;
    authorName?: Maybe<Scalars['String']>;
    twitterUsername?: Maybe<Scalars['String']>;
    authorAvatar?: Maybe<Scalars['String']>;
    authorDescription?: Maybe<Scalars['String']>;
    siteUrl?: Maybe<Scalars['String']>;
    siteCover?: Maybe<Scalars['String']>;
    googleAnalyticsId?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    themeColor?: Maybe<Scalars['String']>;
    display?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    postsPerPage?: Maybe<Scalars['Int']>;
    headerTitle?: Maybe<Scalars['String']>;
    headerLinksIcon?: Maybe<Scalars['String']>;
    headerLinks?: Maybe<Array<Maybe<SiteSiteMetadataHeaderLinks>>>;
    footerLinks?: Maybe<Array<Maybe<SiteSiteMetadataFooterLinks>>>;
};

export type SiteSiteMetadataFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    siteTitle?: Maybe<StringQueryOperatorInput>;
    siteDescription?: Maybe<StringQueryOperatorInput>;
    authorName?: Maybe<StringQueryOperatorInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
    authorAvatar?: Maybe<StringQueryOperatorInput>;
    authorDescription?: Maybe<StringQueryOperatorInput>;
    siteUrl?: Maybe<StringQueryOperatorInput>;
    siteCover?: Maybe<StringQueryOperatorInput>;
    googleAnalyticsId?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    themeColor?: Maybe<StringQueryOperatorInput>;
    display?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    postsPerPage?: Maybe<IntQueryOperatorInput>;
    headerTitle?: Maybe<StringQueryOperatorInput>;
    headerLinksIcon?: Maybe<StringQueryOperatorInput>;
    headerLinks?: Maybe<SiteSiteMetadataHeaderLinksFilterListInput>;
    footerLinks?: Maybe<SiteSiteMetadataFooterLinksFilterListInput>;
};

export type SiteSiteMetadataFooterLinks = {
    __typename?: 'SiteSiteMetadataFooterLinks';
    sectionName?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<SiteSiteMetadataFooterLinksLinks>>>;
};

export type SiteSiteMetadataFooterLinksFilterInput = {
    sectionName?: Maybe<StringQueryOperatorInput>;
    links?: Maybe<SiteSiteMetadataFooterLinksLinksFilterListInput>;
};

export type SiteSiteMetadataFooterLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataFooterLinksFilterInput>;
};

export type SiteSiteMetadataFooterLinksLinks = {
    __typename?: 'SiteSiteMetadataFooterLinksLinks';
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooterLinksLinksFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterLinksLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataFooterLinksLinksFilterInput>;
};

export type SiteSiteMetadataHeaderLinks = {
    __typename?: 'SiteSiteMetadataHeaderLinks';
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataHeaderLinksFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataHeaderLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataHeaderLinksFilterInput>;
};

export type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
};
export type PostsByCategoryQueryVariables = {
    category: Scalars['String'];
};

export type PostsByCategoryQuery = { __typename?: 'Query' } & {
    posts: { __typename?: 'MdxConnection' } & {
        edges: Array<
            { __typename?: 'MdxEdge' } & {
                node: { __typename?: 'Mdx' } & Pick<Mdx, 'excerpt'> & {
                        frontmatter: Maybe<
                            { __typename?: 'MdxFrontmatter' } & Pick<
                                MdxFrontmatter,
                                'date' | 'title' | 'categories' | 'tags' | 'slug'
                            >
                        >;
                    };
            }
        >;
    };
};

export type PageBySlugQueryVariables = {
    slug: Scalars['String'];
};

export type PageBySlugQuery = { __typename?: 'Query' } & {
    page: Maybe<
        { __typename?: 'Mdx' } & Pick<Mdx, 'body' | 'excerpt'> & {
                frontmatter: Maybe<
                    { __typename?: 'MdxFrontmatter' } & Pick<MdxFrontmatter, 'title' | 'date' | 'slug'> & {
                            featuredImage: Maybe<
                                { __typename?: 'File' } & Pick<File, 'publicURL'> & {
                                        sharp: Maybe<
                                            { __typename?: 'ImageSharp' } & {
                                                fluid: Maybe<
                                                    {
                                                        __typename?: 'ImageSharpFluid';
                                                    } & GatsbyImageSharpFluid_WithWebpFragment
                                                >;
                                            }
                                        >;
                                    }
                            >;
                        }
                >;
            }
    >;
};

export type PostsByTagQueryVariables = {
    tag: Scalars['String'];
};

export type PostsByTagQuery = { __typename?: 'Query' } & {
    posts: { __typename?: 'MdxConnection' } & {
        edges: Array<
            { __typename?: 'MdxEdge' } & {
                node: { __typename?: 'Mdx' } & Pick<Mdx, 'excerpt'> & {
                        frontmatter: Maybe<
                            { __typename?: 'MdxFrontmatter' } & Pick<MdxFrontmatter, 'date' | 'title' | 'tags' | 'slug'>
                        >;
                    };
            }
        >;
    };
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;
