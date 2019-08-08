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
    childMdx?: Maybe<Mdx>;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
    childImageSharp?: Maybe<ImageSharp>;
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
    ChildMdxRawBody = 'childMdx___rawBody',
    ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
    ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
    ChildMdxFrontmatterSlug = 'childMdx___frontmatter___slug',
    ChildMdxFrontmatterCoverBirthtime = 'childMdx___frontmatter___cover___birthtime',
    ChildMdxFrontmatterCoverBirthtimeMs = 'childMdx___frontmatter___cover___birthtimeMs',
    ChildMdxFrontmatterCoverSourceInstanceName = 'childMdx___frontmatter___cover___sourceInstanceName',
    ChildMdxFrontmatterCoverAbsolutePath = 'childMdx___frontmatter___cover___absolutePath',
    ChildMdxFrontmatterCoverRelativePath = 'childMdx___frontmatter___cover___relativePath',
    ChildMdxFrontmatterCoverExtension = 'childMdx___frontmatter___cover___extension',
    ChildMdxFrontmatterCoverSize = 'childMdx___frontmatter___cover___size',
    ChildMdxFrontmatterCoverPrettySize = 'childMdx___frontmatter___cover___prettySize',
    ChildMdxFrontmatterCoverModifiedTime = 'childMdx___frontmatter___cover___modifiedTime',
    ChildMdxFrontmatterCoverAccessTime = 'childMdx___frontmatter___cover___accessTime',
    ChildMdxFrontmatterCoverChangeTime = 'childMdx___frontmatter___cover___changeTime',
    ChildMdxFrontmatterCoverBirthTime = 'childMdx___frontmatter___cover___birthTime',
    ChildMdxFrontmatterCoverRoot = 'childMdx___frontmatter___cover___root',
    ChildMdxFrontmatterCoverDir = 'childMdx___frontmatter___cover___dir',
    ChildMdxFrontmatterCoverBase = 'childMdx___frontmatter___cover___base',
    ChildMdxFrontmatterCoverExt = 'childMdx___frontmatter___cover___ext',
    ChildMdxFrontmatterCoverName = 'childMdx___frontmatter___cover___name',
    ChildMdxFrontmatterCoverRelativeDirectory = 'childMdx___frontmatter___cover___relativeDirectory',
    ChildMdxFrontmatterCoverDev = 'childMdx___frontmatter___cover___dev',
    ChildMdxFrontmatterCoverMode = 'childMdx___frontmatter___cover___mode',
    ChildMdxFrontmatterCoverNlink = 'childMdx___frontmatter___cover___nlink',
    ChildMdxFrontmatterCoverUid = 'childMdx___frontmatter___cover___uid',
    ChildMdxFrontmatterCoverGid = 'childMdx___frontmatter___cover___gid',
    ChildMdxFrontmatterCoverRdev = 'childMdx___frontmatter___cover___rdev',
    ChildMdxFrontmatterCoverIno = 'childMdx___frontmatter___cover___ino',
    ChildMdxFrontmatterCoverAtimeMs = 'childMdx___frontmatter___cover___atimeMs',
    ChildMdxFrontmatterCoverMtimeMs = 'childMdx___frontmatter___cover___mtimeMs',
    ChildMdxFrontmatterCoverCtimeMs = 'childMdx___frontmatter___cover___ctimeMs',
    ChildMdxFrontmatterCoverAtime = 'childMdx___frontmatter___cover___atime',
    ChildMdxFrontmatterCoverMtime = 'childMdx___frontmatter___cover___mtime',
    ChildMdxFrontmatterCoverCtime = 'childMdx___frontmatter___cover___ctime',
    ChildMdxFrontmatterCoverPublicUrl = 'childMdx___frontmatter___cover___publicURL',
    ChildMdxFrontmatterCoverId = 'childMdx___frontmatter___cover___id',
    ChildMdxFrontmatterCoverChildren = 'childMdx___frontmatter___cover___children',
    ChildMdxFrontmatterGenerateCard = 'childMdx___frontmatter___generate_card',
    ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
    ChildMdxFrontmatterLanguage = 'childMdx___frontmatter___language',
    ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
    ChildMdxFrontmatterImageTwBirthtime = 'childMdx___frontmatter___imageTw___birthtime',
    ChildMdxFrontmatterImageTwBirthtimeMs = 'childMdx___frontmatter___imageTw___birthtimeMs',
    ChildMdxFrontmatterImageTwSourceInstanceName = 'childMdx___frontmatter___imageTw___sourceInstanceName',
    ChildMdxFrontmatterImageTwAbsolutePath = 'childMdx___frontmatter___imageTw___absolutePath',
    ChildMdxFrontmatterImageTwRelativePath = 'childMdx___frontmatter___imageTw___relativePath',
    ChildMdxFrontmatterImageTwExtension = 'childMdx___frontmatter___imageTw___extension',
    ChildMdxFrontmatterImageTwSize = 'childMdx___frontmatter___imageTw___size',
    ChildMdxFrontmatterImageTwPrettySize = 'childMdx___frontmatter___imageTw___prettySize',
    ChildMdxFrontmatterImageTwModifiedTime = 'childMdx___frontmatter___imageTw___modifiedTime',
    ChildMdxFrontmatterImageTwAccessTime = 'childMdx___frontmatter___imageTw___accessTime',
    ChildMdxFrontmatterImageTwChangeTime = 'childMdx___frontmatter___imageTw___changeTime',
    ChildMdxFrontmatterImageTwBirthTime = 'childMdx___frontmatter___imageTw___birthTime',
    ChildMdxFrontmatterImageTwRoot = 'childMdx___frontmatter___imageTw___root',
    ChildMdxFrontmatterImageTwDir = 'childMdx___frontmatter___imageTw___dir',
    ChildMdxFrontmatterImageTwBase = 'childMdx___frontmatter___imageTw___base',
    ChildMdxFrontmatterImageTwExt = 'childMdx___frontmatter___imageTw___ext',
    ChildMdxFrontmatterImageTwName = 'childMdx___frontmatter___imageTw___name',
    ChildMdxFrontmatterImageTwRelativeDirectory = 'childMdx___frontmatter___imageTw___relativeDirectory',
    ChildMdxFrontmatterImageTwDev = 'childMdx___frontmatter___imageTw___dev',
    ChildMdxFrontmatterImageTwMode = 'childMdx___frontmatter___imageTw___mode',
    ChildMdxFrontmatterImageTwNlink = 'childMdx___frontmatter___imageTw___nlink',
    ChildMdxFrontmatterImageTwUid = 'childMdx___frontmatter___imageTw___uid',
    ChildMdxFrontmatterImageTwGid = 'childMdx___frontmatter___imageTw___gid',
    ChildMdxFrontmatterImageTwRdev = 'childMdx___frontmatter___imageTw___rdev',
    ChildMdxFrontmatterImageTwIno = 'childMdx___frontmatter___imageTw___ino',
    ChildMdxFrontmatterImageTwAtimeMs = 'childMdx___frontmatter___imageTw___atimeMs',
    ChildMdxFrontmatterImageTwMtimeMs = 'childMdx___frontmatter___imageTw___mtimeMs',
    ChildMdxFrontmatterImageTwCtimeMs = 'childMdx___frontmatter___imageTw___ctimeMs',
    ChildMdxFrontmatterImageTwAtime = 'childMdx___frontmatter___imageTw___atime',
    ChildMdxFrontmatterImageTwMtime = 'childMdx___frontmatter___imageTw___mtime',
    ChildMdxFrontmatterImageTwCtime = 'childMdx___frontmatter___imageTw___ctime',
    ChildMdxFrontmatterImageTwPublicUrl = 'childMdx___frontmatter___imageTw___publicURL',
    ChildMdxFrontmatterImageTwId = 'childMdx___frontmatter___imageTw___id',
    ChildMdxFrontmatterImageTwChildren = 'childMdx___frontmatter___imageTw___children',
    ChildMdxFrontmatterImageFbBirthtime = 'childMdx___frontmatter___imageFb___birthtime',
    ChildMdxFrontmatterImageFbBirthtimeMs = 'childMdx___frontmatter___imageFb___birthtimeMs',
    ChildMdxFrontmatterImageFbSourceInstanceName = 'childMdx___frontmatter___imageFb___sourceInstanceName',
    ChildMdxFrontmatterImageFbAbsolutePath = 'childMdx___frontmatter___imageFb___absolutePath',
    ChildMdxFrontmatterImageFbRelativePath = 'childMdx___frontmatter___imageFb___relativePath',
    ChildMdxFrontmatterImageFbExtension = 'childMdx___frontmatter___imageFb___extension',
    ChildMdxFrontmatterImageFbSize = 'childMdx___frontmatter___imageFb___size',
    ChildMdxFrontmatterImageFbPrettySize = 'childMdx___frontmatter___imageFb___prettySize',
    ChildMdxFrontmatterImageFbModifiedTime = 'childMdx___frontmatter___imageFb___modifiedTime',
    ChildMdxFrontmatterImageFbAccessTime = 'childMdx___frontmatter___imageFb___accessTime',
    ChildMdxFrontmatterImageFbChangeTime = 'childMdx___frontmatter___imageFb___changeTime',
    ChildMdxFrontmatterImageFbBirthTime = 'childMdx___frontmatter___imageFb___birthTime',
    ChildMdxFrontmatterImageFbRoot = 'childMdx___frontmatter___imageFb___root',
    ChildMdxFrontmatterImageFbDir = 'childMdx___frontmatter___imageFb___dir',
    ChildMdxFrontmatterImageFbBase = 'childMdx___frontmatter___imageFb___base',
    ChildMdxFrontmatterImageFbExt = 'childMdx___frontmatter___imageFb___ext',
    ChildMdxFrontmatterImageFbName = 'childMdx___frontmatter___imageFb___name',
    ChildMdxFrontmatterImageFbRelativeDirectory = 'childMdx___frontmatter___imageFb___relativeDirectory',
    ChildMdxFrontmatterImageFbDev = 'childMdx___frontmatter___imageFb___dev',
    ChildMdxFrontmatterImageFbMode = 'childMdx___frontmatter___imageFb___mode',
    ChildMdxFrontmatterImageFbNlink = 'childMdx___frontmatter___imageFb___nlink',
    ChildMdxFrontmatterImageFbUid = 'childMdx___frontmatter___imageFb___uid',
    ChildMdxFrontmatterImageFbGid = 'childMdx___frontmatter___imageFb___gid',
    ChildMdxFrontmatterImageFbRdev = 'childMdx___frontmatter___imageFb___rdev',
    ChildMdxFrontmatterImageFbIno = 'childMdx___frontmatter___imageFb___ino',
    ChildMdxFrontmatterImageFbAtimeMs = 'childMdx___frontmatter___imageFb___atimeMs',
    ChildMdxFrontmatterImageFbMtimeMs = 'childMdx___frontmatter___imageFb___mtimeMs',
    ChildMdxFrontmatterImageFbCtimeMs = 'childMdx___frontmatter___imageFb___ctimeMs',
    ChildMdxFrontmatterImageFbAtime = 'childMdx___frontmatter___imageFb___atime',
    ChildMdxFrontmatterImageFbMtime = 'childMdx___frontmatter___imageFb___mtime',
    ChildMdxFrontmatterImageFbCtime = 'childMdx___frontmatter___imageFb___ctime',
    ChildMdxFrontmatterImageFbPublicUrl = 'childMdx___frontmatter___imageFb___publicURL',
    ChildMdxFrontmatterImageFbId = 'childMdx___frontmatter___imageFb___id',
    ChildMdxFrontmatterImageFbChildren = 'childMdx___frontmatter___imageFb___children',
    ChildMdxFrontmatterDisqus = 'childMdx___frontmatter___disqus',
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
    ChildMarkdownRemarkId = 'childMarkdownRemark___id',
    ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
    ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
    ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
    ChildMarkdownRemarkFrontmatterCoverBirthtime = 'childMarkdownRemark___frontmatter___cover___birthtime',
    ChildMarkdownRemarkFrontmatterCoverBirthtimeMs = 'childMarkdownRemark___frontmatter___cover___birthtimeMs',
    ChildMarkdownRemarkFrontmatterCoverSourceInstanceName = 'childMarkdownRemark___frontmatter___cover___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterCoverAbsolutePath = 'childMarkdownRemark___frontmatter___cover___absolutePath',
    ChildMarkdownRemarkFrontmatterCoverRelativePath = 'childMarkdownRemark___frontmatter___cover___relativePath',
    ChildMarkdownRemarkFrontmatterCoverExtension = 'childMarkdownRemark___frontmatter___cover___extension',
    ChildMarkdownRemarkFrontmatterCoverSize = 'childMarkdownRemark___frontmatter___cover___size',
    ChildMarkdownRemarkFrontmatterCoverPrettySize = 'childMarkdownRemark___frontmatter___cover___prettySize',
    ChildMarkdownRemarkFrontmatterCoverModifiedTime = 'childMarkdownRemark___frontmatter___cover___modifiedTime',
    ChildMarkdownRemarkFrontmatterCoverAccessTime = 'childMarkdownRemark___frontmatter___cover___accessTime',
    ChildMarkdownRemarkFrontmatterCoverChangeTime = 'childMarkdownRemark___frontmatter___cover___changeTime',
    ChildMarkdownRemarkFrontmatterCoverBirthTime = 'childMarkdownRemark___frontmatter___cover___birthTime',
    ChildMarkdownRemarkFrontmatterCoverRoot = 'childMarkdownRemark___frontmatter___cover___root',
    ChildMarkdownRemarkFrontmatterCoverDir = 'childMarkdownRemark___frontmatter___cover___dir',
    ChildMarkdownRemarkFrontmatterCoverBase = 'childMarkdownRemark___frontmatter___cover___base',
    ChildMarkdownRemarkFrontmatterCoverExt = 'childMarkdownRemark___frontmatter___cover___ext',
    ChildMarkdownRemarkFrontmatterCoverName = 'childMarkdownRemark___frontmatter___cover___name',
    ChildMarkdownRemarkFrontmatterCoverRelativeDirectory = 'childMarkdownRemark___frontmatter___cover___relativeDirectory',
    ChildMarkdownRemarkFrontmatterCoverDev = 'childMarkdownRemark___frontmatter___cover___dev',
    ChildMarkdownRemarkFrontmatterCoverMode = 'childMarkdownRemark___frontmatter___cover___mode',
    ChildMarkdownRemarkFrontmatterCoverNlink = 'childMarkdownRemark___frontmatter___cover___nlink',
    ChildMarkdownRemarkFrontmatterCoverUid = 'childMarkdownRemark___frontmatter___cover___uid',
    ChildMarkdownRemarkFrontmatterCoverGid = 'childMarkdownRemark___frontmatter___cover___gid',
    ChildMarkdownRemarkFrontmatterCoverRdev = 'childMarkdownRemark___frontmatter___cover___rdev',
    ChildMarkdownRemarkFrontmatterCoverIno = 'childMarkdownRemark___frontmatter___cover___ino',
    ChildMarkdownRemarkFrontmatterCoverAtimeMs = 'childMarkdownRemark___frontmatter___cover___atimeMs',
    ChildMarkdownRemarkFrontmatterCoverMtimeMs = 'childMarkdownRemark___frontmatter___cover___mtimeMs',
    ChildMarkdownRemarkFrontmatterCoverCtimeMs = 'childMarkdownRemark___frontmatter___cover___ctimeMs',
    ChildMarkdownRemarkFrontmatterCoverAtime = 'childMarkdownRemark___frontmatter___cover___atime',
    ChildMarkdownRemarkFrontmatterCoverMtime = 'childMarkdownRemark___frontmatter___cover___mtime',
    ChildMarkdownRemarkFrontmatterCoverCtime = 'childMarkdownRemark___frontmatter___cover___ctime',
    ChildMarkdownRemarkFrontmatterCoverPublicUrl = 'childMarkdownRemark___frontmatter___cover___publicURL',
    ChildMarkdownRemarkFrontmatterCoverId = 'childMarkdownRemark___frontmatter___cover___id',
    ChildMarkdownRemarkFrontmatterCoverChildren = 'childMarkdownRemark___frontmatter___cover___children',
    ChildMarkdownRemarkFrontmatterGenerateCard = 'childMarkdownRemark___frontmatter___generate_card',
    ChildMarkdownRemarkFrontmatterLanguage = 'childMarkdownRemark___frontmatter___language',
    ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
    ChildMarkdownRemarkFrontmatterImageTwBirthtime = 'childMarkdownRemark___frontmatter___imageTw___birthtime',
    ChildMarkdownRemarkFrontmatterImageTwBirthtimeMs = 'childMarkdownRemark___frontmatter___imageTw___birthtimeMs',
    ChildMarkdownRemarkFrontmatterImageTwSourceInstanceName = 'childMarkdownRemark___frontmatter___imageTw___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterImageTwAbsolutePath = 'childMarkdownRemark___frontmatter___imageTw___absolutePath',
    ChildMarkdownRemarkFrontmatterImageTwRelativePath = 'childMarkdownRemark___frontmatter___imageTw___relativePath',
    ChildMarkdownRemarkFrontmatterImageTwExtension = 'childMarkdownRemark___frontmatter___imageTw___extension',
    ChildMarkdownRemarkFrontmatterImageTwSize = 'childMarkdownRemark___frontmatter___imageTw___size',
    ChildMarkdownRemarkFrontmatterImageTwPrettySize = 'childMarkdownRemark___frontmatter___imageTw___prettySize',
    ChildMarkdownRemarkFrontmatterImageTwModifiedTime = 'childMarkdownRemark___frontmatter___imageTw___modifiedTime',
    ChildMarkdownRemarkFrontmatterImageTwAccessTime = 'childMarkdownRemark___frontmatter___imageTw___accessTime',
    ChildMarkdownRemarkFrontmatterImageTwChangeTime = 'childMarkdownRemark___frontmatter___imageTw___changeTime',
    ChildMarkdownRemarkFrontmatterImageTwBirthTime = 'childMarkdownRemark___frontmatter___imageTw___birthTime',
    ChildMarkdownRemarkFrontmatterImageTwRoot = 'childMarkdownRemark___frontmatter___imageTw___root',
    ChildMarkdownRemarkFrontmatterImageTwDir = 'childMarkdownRemark___frontmatter___imageTw___dir',
    ChildMarkdownRemarkFrontmatterImageTwBase = 'childMarkdownRemark___frontmatter___imageTw___base',
    ChildMarkdownRemarkFrontmatterImageTwExt = 'childMarkdownRemark___frontmatter___imageTw___ext',
    ChildMarkdownRemarkFrontmatterImageTwName = 'childMarkdownRemark___frontmatter___imageTw___name',
    ChildMarkdownRemarkFrontmatterImageTwRelativeDirectory = 'childMarkdownRemark___frontmatter___imageTw___relativeDirectory',
    ChildMarkdownRemarkFrontmatterImageTwDev = 'childMarkdownRemark___frontmatter___imageTw___dev',
    ChildMarkdownRemarkFrontmatterImageTwMode = 'childMarkdownRemark___frontmatter___imageTw___mode',
    ChildMarkdownRemarkFrontmatterImageTwNlink = 'childMarkdownRemark___frontmatter___imageTw___nlink',
    ChildMarkdownRemarkFrontmatterImageTwUid = 'childMarkdownRemark___frontmatter___imageTw___uid',
    ChildMarkdownRemarkFrontmatterImageTwGid = 'childMarkdownRemark___frontmatter___imageTw___gid',
    ChildMarkdownRemarkFrontmatterImageTwRdev = 'childMarkdownRemark___frontmatter___imageTw___rdev',
    ChildMarkdownRemarkFrontmatterImageTwIno = 'childMarkdownRemark___frontmatter___imageTw___ino',
    ChildMarkdownRemarkFrontmatterImageTwAtimeMs = 'childMarkdownRemark___frontmatter___imageTw___atimeMs',
    ChildMarkdownRemarkFrontmatterImageTwMtimeMs = 'childMarkdownRemark___frontmatter___imageTw___mtimeMs',
    ChildMarkdownRemarkFrontmatterImageTwCtimeMs = 'childMarkdownRemark___frontmatter___imageTw___ctimeMs',
    ChildMarkdownRemarkFrontmatterImageTwAtime = 'childMarkdownRemark___frontmatter___imageTw___atime',
    ChildMarkdownRemarkFrontmatterImageTwMtime = 'childMarkdownRemark___frontmatter___imageTw___mtime',
    ChildMarkdownRemarkFrontmatterImageTwCtime = 'childMarkdownRemark___frontmatter___imageTw___ctime',
    ChildMarkdownRemarkFrontmatterImageTwPublicUrl = 'childMarkdownRemark___frontmatter___imageTw___publicURL',
    ChildMarkdownRemarkFrontmatterImageTwId = 'childMarkdownRemark___frontmatter___imageTw___id',
    ChildMarkdownRemarkFrontmatterImageTwChildren = 'childMarkdownRemark___frontmatter___imageTw___children',
    ChildMarkdownRemarkFrontmatterImageFbBirthtime = 'childMarkdownRemark___frontmatter___imageFb___birthtime',
    ChildMarkdownRemarkFrontmatterImageFbBirthtimeMs = 'childMarkdownRemark___frontmatter___imageFb___birthtimeMs',
    ChildMarkdownRemarkFrontmatterImageFbSourceInstanceName = 'childMarkdownRemark___frontmatter___imageFb___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterImageFbAbsolutePath = 'childMarkdownRemark___frontmatter___imageFb___absolutePath',
    ChildMarkdownRemarkFrontmatterImageFbRelativePath = 'childMarkdownRemark___frontmatter___imageFb___relativePath',
    ChildMarkdownRemarkFrontmatterImageFbExtension = 'childMarkdownRemark___frontmatter___imageFb___extension',
    ChildMarkdownRemarkFrontmatterImageFbSize = 'childMarkdownRemark___frontmatter___imageFb___size',
    ChildMarkdownRemarkFrontmatterImageFbPrettySize = 'childMarkdownRemark___frontmatter___imageFb___prettySize',
    ChildMarkdownRemarkFrontmatterImageFbModifiedTime = 'childMarkdownRemark___frontmatter___imageFb___modifiedTime',
    ChildMarkdownRemarkFrontmatterImageFbAccessTime = 'childMarkdownRemark___frontmatter___imageFb___accessTime',
    ChildMarkdownRemarkFrontmatterImageFbChangeTime = 'childMarkdownRemark___frontmatter___imageFb___changeTime',
    ChildMarkdownRemarkFrontmatterImageFbBirthTime = 'childMarkdownRemark___frontmatter___imageFb___birthTime',
    ChildMarkdownRemarkFrontmatterImageFbRoot = 'childMarkdownRemark___frontmatter___imageFb___root',
    ChildMarkdownRemarkFrontmatterImageFbDir = 'childMarkdownRemark___frontmatter___imageFb___dir',
    ChildMarkdownRemarkFrontmatterImageFbBase = 'childMarkdownRemark___frontmatter___imageFb___base',
    ChildMarkdownRemarkFrontmatterImageFbExt = 'childMarkdownRemark___frontmatter___imageFb___ext',
    ChildMarkdownRemarkFrontmatterImageFbName = 'childMarkdownRemark___frontmatter___imageFb___name',
    ChildMarkdownRemarkFrontmatterImageFbRelativeDirectory = 'childMarkdownRemark___frontmatter___imageFb___relativeDirectory',
    ChildMarkdownRemarkFrontmatterImageFbDev = 'childMarkdownRemark___frontmatter___imageFb___dev',
    ChildMarkdownRemarkFrontmatterImageFbMode = 'childMarkdownRemark___frontmatter___imageFb___mode',
    ChildMarkdownRemarkFrontmatterImageFbNlink = 'childMarkdownRemark___frontmatter___imageFb___nlink',
    ChildMarkdownRemarkFrontmatterImageFbUid = 'childMarkdownRemark___frontmatter___imageFb___uid',
    ChildMarkdownRemarkFrontmatterImageFbGid = 'childMarkdownRemark___frontmatter___imageFb___gid',
    ChildMarkdownRemarkFrontmatterImageFbRdev = 'childMarkdownRemark___frontmatter___imageFb___rdev',
    ChildMarkdownRemarkFrontmatterImageFbIno = 'childMarkdownRemark___frontmatter___imageFb___ino',
    ChildMarkdownRemarkFrontmatterImageFbAtimeMs = 'childMarkdownRemark___frontmatter___imageFb___atimeMs',
    ChildMarkdownRemarkFrontmatterImageFbMtimeMs = 'childMarkdownRemark___frontmatter___imageFb___mtimeMs',
    ChildMarkdownRemarkFrontmatterImageFbCtimeMs = 'childMarkdownRemark___frontmatter___imageFb___ctimeMs',
    ChildMarkdownRemarkFrontmatterImageFbAtime = 'childMarkdownRemark___frontmatter___imageFb___atime',
    ChildMarkdownRemarkFrontmatterImageFbMtime = 'childMarkdownRemark___frontmatter___imageFb___mtime',
    ChildMarkdownRemarkFrontmatterImageFbCtime = 'childMarkdownRemark___frontmatter___imageFb___ctime',
    ChildMarkdownRemarkFrontmatterImageFbPublicUrl = 'childMarkdownRemark___frontmatter___imageFb___publicURL',
    ChildMarkdownRemarkFrontmatterImageFbId = 'childMarkdownRemark___frontmatter___imageFb___id',
    ChildMarkdownRemarkFrontmatterImageFbChildren = 'childMarkdownRemark___frontmatter___imageFb___children',
    ChildMarkdownRemarkFrontmatterDisqus = 'childMarkdownRemark___frontmatter___disqus',
    ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
    ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
    ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
    ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
    ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
    ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
    ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
    ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
    ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
    ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
    ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
    ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
    ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
    ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
    ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
    ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
    ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
    ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
    ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
    ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
    ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
    ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
    ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
    ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
    ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
    ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
    ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
    ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
    ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
    ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
    ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
    ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
    ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
    ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
    ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
    ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
    ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
    ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
    ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
    ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
    ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
    ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
    ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
    ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
    ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
    ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
    ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
    ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
    ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
    ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
    ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
    ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
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
    childMdx?: Maybe<MdxFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
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
    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    excerpt?: Maybe<Scalars['String']>;
    rawMarkdownBody?: Maybe<Scalars['String']>;
    fileAbsolutePath?: Maybe<Scalars['String']>;
    fields?: Maybe<MarkdownRemarkFields>;
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
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

export type MarkdownRemarkFields = {
    __typename?: 'MarkdownRemarkFields';
    slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
    Id = 'id',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterSlug = 'frontmatter___slug',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterCoverBirthtime = 'frontmatter___cover___birthtime',
    FrontmatterCoverBirthtimeMs = 'frontmatter___cover___birthtimeMs',
    FrontmatterCoverSourceInstanceName = 'frontmatter___cover___sourceInstanceName',
    FrontmatterCoverAbsolutePath = 'frontmatter___cover___absolutePath',
    FrontmatterCoverRelativePath = 'frontmatter___cover___relativePath',
    FrontmatterCoverExtension = 'frontmatter___cover___extension',
    FrontmatterCoverSize = 'frontmatter___cover___size',
    FrontmatterCoverPrettySize = 'frontmatter___cover___prettySize',
    FrontmatterCoverModifiedTime = 'frontmatter___cover___modifiedTime',
    FrontmatterCoverAccessTime = 'frontmatter___cover___accessTime',
    FrontmatterCoverChangeTime = 'frontmatter___cover___changeTime',
    FrontmatterCoverBirthTime = 'frontmatter___cover___birthTime',
    FrontmatterCoverRoot = 'frontmatter___cover___root',
    FrontmatterCoverDir = 'frontmatter___cover___dir',
    FrontmatterCoverBase = 'frontmatter___cover___base',
    FrontmatterCoverExt = 'frontmatter___cover___ext',
    FrontmatterCoverName = 'frontmatter___cover___name',
    FrontmatterCoverRelativeDirectory = 'frontmatter___cover___relativeDirectory',
    FrontmatterCoverDev = 'frontmatter___cover___dev',
    FrontmatterCoverMode = 'frontmatter___cover___mode',
    FrontmatterCoverNlink = 'frontmatter___cover___nlink',
    FrontmatterCoverUid = 'frontmatter___cover___uid',
    FrontmatterCoverGid = 'frontmatter___cover___gid',
    FrontmatterCoverRdev = 'frontmatter___cover___rdev',
    FrontmatterCoverIno = 'frontmatter___cover___ino',
    FrontmatterCoverAtimeMs = 'frontmatter___cover___atimeMs',
    FrontmatterCoverMtimeMs = 'frontmatter___cover___mtimeMs',
    FrontmatterCoverCtimeMs = 'frontmatter___cover___ctimeMs',
    FrontmatterCoverAtime = 'frontmatter___cover___atime',
    FrontmatterCoverMtime = 'frontmatter___cover___mtime',
    FrontmatterCoverCtime = 'frontmatter___cover___ctime',
    FrontmatterCoverPublicUrl = 'frontmatter___cover___publicURL',
    FrontmatterCoverId = 'frontmatter___cover___id',
    FrontmatterCoverParentId = 'frontmatter___cover___parent___id',
    FrontmatterCoverParentChildren = 'frontmatter___cover___parent___children',
    FrontmatterCoverChildren = 'frontmatter___cover___children',
    FrontmatterCoverChildrenId = 'frontmatter___cover___children___id',
    FrontmatterCoverChildrenChildren = 'frontmatter___cover___children___children',
    FrontmatterCoverInternalContent = 'frontmatter___cover___internal___content',
    FrontmatterCoverInternalContentDigest = 'frontmatter___cover___internal___contentDigest',
    FrontmatterCoverInternalDescription = 'frontmatter___cover___internal___description',
    FrontmatterCoverInternalFieldOwners = 'frontmatter___cover___internal___fieldOwners',
    FrontmatterCoverInternalIgnoreType = 'frontmatter___cover___internal___ignoreType',
    FrontmatterCoverInternalMediaType = 'frontmatter___cover___internal___mediaType',
    FrontmatterCoverInternalOwner = 'frontmatter___cover___internal___owner',
    FrontmatterCoverInternalType = 'frontmatter___cover___internal___type',
    FrontmatterCoverChildMdxRawBody = 'frontmatter___cover___childMdx___rawBody',
    FrontmatterCoverChildMdxFileAbsolutePath = 'frontmatter___cover___childMdx___fileAbsolutePath',
    FrontmatterCoverChildMdxBody = 'frontmatter___cover___childMdx___body',
    FrontmatterCoverChildMdxExcerpt = 'frontmatter___cover___childMdx___excerpt',
    FrontmatterCoverChildMdxHeadings = 'frontmatter___cover___childMdx___headings',
    FrontmatterCoverChildMdxHtml = 'frontmatter___cover___childMdx___html',
    FrontmatterCoverChildMdxMdxAst = 'frontmatter___cover___childMdx___mdxAST',
    FrontmatterCoverChildMdxTableOfContents = 'frontmatter___cover___childMdx___tableOfContents',
    FrontmatterCoverChildMdxTimeToRead = 'frontmatter___cover___childMdx___timeToRead',
    FrontmatterCoverChildMdxId = 'frontmatter___cover___childMdx___id',
    FrontmatterCoverChildMdxChildren = 'frontmatter___cover___childMdx___children',
    FrontmatterCoverChildMarkdownRemarkId = 'frontmatter___cover___childMarkdownRemark___id',
    FrontmatterCoverChildMarkdownRemarkExcerpt = 'frontmatter___cover___childMarkdownRemark___excerpt',
    FrontmatterCoverChildMarkdownRemarkRawMarkdownBody = 'frontmatter___cover___childMarkdownRemark___rawMarkdownBody',
    FrontmatterCoverChildMarkdownRemarkFileAbsolutePath = 'frontmatter___cover___childMarkdownRemark___fileAbsolutePath',
    FrontmatterCoverChildMarkdownRemarkHtml = 'frontmatter___cover___childMarkdownRemark___html',
    FrontmatterCoverChildMarkdownRemarkHtmlAst = 'frontmatter___cover___childMarkdownRemark___htmlAst',
    FrontmatterCoverChildMarkdownRemarkExcerptAst = 'frontmatter___cover___childMarkdownRemark___excerptAst',
    FrontmatterCoverChildMarkdownRemarkHeadings = 'frontmatter___cover___childMarkdownRemark___headings',
    FrontmatterCoverChildMarkdownRemarkTimeToRead = 'frontmatter___cover___childMarkdownRemark___timeToRead',
    FrontmatterCoverChildMarkdownRemarkTableOfContents = 'frontmatter___cover___childMarkdownRemark___tableOfContents',
    FrontmatterCoverChildMarkdownRemarkChildren = 'frontmatter___cover___childMarkdownRemark___children',
    FrontmatterCoverChildImageSharpId = 'frontmatter___cover___childImageSharp___id',
    FrontmatterCoverChildImageSharpChildren = 'frontmatter___cover___childImageSharp___children',
    FrontmatterGenerateCard = 'frontmatter___generate_card',
    FrontmatterLanguage = 'frontmatter___language',
    FrontmatterTags = 'frontmatter___tags',
    FrontmatterImageTwBirthtime = 'frontmatter___imageTw___birthtime',
    FrontmatterImageTwBirthtimeMs = 'frontmatter___imageTw___birthtimeMs',
    FrontmatterImageTwSourceInstanceName = 'frontmatter___imageTw___sourceInstanceName',
    FrontmatterImageTwAbsolutePath = 'frontmatter___imageTw___absolutePath',
    FrontmatterImageTwRelativePath = 'frontmatter___imageTw___relativePath',
    FrontmatterImageTwExtension = 'frontmatter___imageTw___extension',
    FrontmatterImageTwSize = 'frontmatter___imageTw___size',
    FrontmatterImageTwPrettySize = 'frontmatter___imageTw___prettySize',
    FrontmatterImageTwModifiedTime = 'frontmatter___imageTw___modifiedTime',
    FrontmatterImageTwAccessTime = 'frontmatter___imageTw___accessTime',
    FrontmatterImageTwChangeTime = 'frontmatter___imageTw___changeTime',
    FrontmatterImageTwBirthTime = 'frontmatter___imageTw___birthTime',
    FrontmatterImageTwRoot = 'frontmatter___imageTw___root',
    FrontmatterImageTwDir = 'frontmatter___imageTw___dir',
    FrontmatterImageTwBase = 'frontmatter___imageTw___base',
    FrontmatterImageTwExt = 'frontmatter___imageTw___ext',
    FrontmatterImageTwName = 'frontmatter___imageTw___name',
    FrontmatterImageTwRelativeDirectory = 'frontmatter___imageTw___relativeDirectory',
    FrontmatterImageTwDev = 'frontmatter___imageTw___dev',
    FrontmatterImageTwMode = 'frontmatter___imageTw___mode',
    FrontmatterImageTwNlink = 'frontmatter___imageTw___nlink',
    FrontmatterImageTwUid = 'frontmatter___imageTw___uid',
    FrontmatterImageTwGid = 'frontmatter___imageTw___gid',
    FrontmatterImageTwRdev = 'frontmatter___imageTw___rdev',
    FrontmatterImageTwIno = 'frontmatter___imageTw___ino',
    FrontmatterImageTwAtimeMs = 'frontmatter___imageTw___atimeMs',
    FrontmatterImageTwMtimeMs = 'frontmatter___imageTw___mtimeMs',
    FrontmatterImageTwCtimeMs = 'frontmatter___imageTw___ctimeMs',
    FrontmatterImageTwAtime = 'frontmatter___imageTw___atime',
    FrontmatterImageTwMtime = 'frontmatter___imageTw___mtime',
    FrontmatterImageTwCtime = 'frontmatter___imageTw___ctime',
    FrontmatterImageTwPublicUrl = 'frontmatter___imageTw___publicURL',
    FrontmatterImageTwId = 'frontmatter___imageTw___id',
    FrontmatterImageTwParentId = 'frontmatter___imageTw___parent___id',
    FrontmatterImageTwParentChildren = 'frontmatter___imageTw___parent___children',
    FrontmatterImageTwChildren = 'frontmatter___imageTw___children',
    FrontmatterImageTwChildrenId = 'frontmatter___imageTw___children___id',
    FrontmatterImageTwChildrenChildren = 'frontmatter___imageTw___children___children',
    FrontmatterImageTwInternalContent = 'frontmatter___imageTw___internal___content',
    FrontmatterImageTwInternalContentDigest = 'frontmatter___imageTw___internal___contentDigest',
    FrontmatterImageTwInternalDescription = 'frontmatter___imageTw___internal___description',
    FrontmatterImageTwInternalFieldOwners = 'frontmatter___imageTw___internal___fieldOwners',
    FrontmatterImageTwInternalIgnoreType = 'frontmatter___imageTw___internal___ignoreType',
    FrontmatterImageTwInternalMediaType = 'frontmatter___imageTw___internal___mediaType',
    FrontmatterImageTwInternalOwner = 'frontmatter___imageTw___internal___owner',
    FrontmatterImageTwInternalType = 'frontmatter___imageTw___internal___type',
    FrontmatterImageTwChildMdxRawBody = 'frontmatter___imageTw___childMdx___rawBody',
    FrontmatterImageTwChildMdxFileAbsolutePath = 'frontmatter___imageTw___childMdx___fileAbsolutePath',
    FrontmatterImageTwChildMdxBody = 'frontmatter___imageTw___childMdx___body',
    FrontmatterImageTwChildMdxExcerpt = 'frontmatter___imageTw___childMdx___excerpt',
    FrontmatterImageTwChildMdxHeadings = 'frontmatter___imageTw___childMdx___headings',
    FrontmatterImageTwChildMdxHtml = 'frontmatter___imageTw___childMdx___html',
    FrontmatterImageTwChildMdxMdxAst = 'frontmatter___imageTw___childMdx___mdxAST',
    FrontmatterImageTwChildMdxTableOfContents = 'frontmatter___imageTw___childMdx___tableOfContents',
    FrontmatterImageTwChildMdxTimeToRead = 'frontmatter___imageTw___childMdx___timeToRead',
    FrontmatterImageTwChildMdxId = 'frontmatter___imageTw___childMdx___id',
    FrontmatterImageTwChildMdxChildren = 'frontmatter___imageTw___childMdx___children',
    FrontmatterImageTwChildMarkdownRemarkId = 'frontmatter___imageTw___childMarkdownRemark___id',
    FrontmatterImageTwChildMarkdownRemarkExcerpt = 'frontmatter___imageTw___childMarkdownRemark___excerpt',
    FrontmatterImageTwChildMarkdownRemarkRawMarkdownBody = 'frontmatter___imageTw___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageTwChildMarkdownRemarkFileAbsolutePath = 'frontmatter___imageTw___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageTwChildMarkdownRemarkHtml = 'frontmatter___imageTw___childMarkdownRemark___html',
    FrontmatterImageTwChildMarkdownRemarkHtmlAst = 'frontmatter___imageTw___childMarkdownRemark___htmlAst',
    FrontmatterImageTwChildMarkdownRemarkExcerptAst = 'frontmatter___imageTw___childMarkdownRemark___excerptAst',
    FrontmatterImageTwChildMarkdownRemarkHeadings = 'frontmatter___imageTw___childMarkdownRemark___headings',
    FrontmatterImageTwChildMarkdownRemarkTimeToRead = 'frontmatter___imageTw___childMarkdownRemark___timeToRead',
    FrontmatterImageTwChildMarkdownRemarkTableOfContents = 'frontmatter___imageTw___childMarkdownRemark___tableOfContents',
    FrontmatterImageTwChildMarkdownRemarkChildren = 'frontmatter___imageTw___childMarkdownRemark___children',
    FrontmatterImageTwChildImageSharpId = 'frontmatter___imageTw___childImageSharp___id',
    FrontmatterImageTwChildImageSharpChildren = 'frontmatter___imageTw___childImageSharp___children',
    FrontmatterImageFbBirthtime = 'frontmatter___imageFb___birthtime',
    FrontmatterImageFbBirthtimeMs = 'frontmatter___imageFb___birthtimeMs',
    FrontmatterImageFbSourceInstanceName = 'frontmatter___imageFb___sourceInstanceName',
    FrontmatterImageFbAbsolutePath = 'frontmatter___imageFb___absolutePath',
    FrontmatterImageFbRelativePath = 'frontmatter___imageFb___relativePath',
    FrontmatterImageFbExtension = 'frontmatter___imageFb___extension',
    FrontmatterImageFbSize = 'frontmatter___imageFb___size',
    FrontmatterImageFbPrettySize = 'frontmatter___imageFb___prettySize',
    FrontmatterImageFbModifiedTime = 'frontmatter___imageFb___modifiedTime',
    FrontmatterImageFbAccessTime = 'frontmatter___imageFb___accessTime',
    FrontmatterImageFbChangeTime = 'frontmatter___imageFb___changeTime',
    FrontmatterImageFbBirthTime = 'frontmatter___imageFb___birthTime',
    FrontmatterImageFbRoot = 'frontmatter___imageFb___root',
    FrontmatterImageFbDir = 'frontmatter___imageFb___dir',
    FrontmatterImageFbBase = 'frontmatter___imageFb___base',
    FrontmatterImageFbExt = 'frontmatter___imageFb___ext',
    FrontmatterImageFbName = 'frontmatter___imageFb___name',
    FrontmatterImageFbRelativeDirectory = 'frontmatter___imageFb___relativeDirectory',
    FrontmatterImageFbDev = 'frontmatter___imageFb___dev',
    FrontmatterImageFbMode = 'frontmatter___imageFb___mode',
    FrontmatterImageFbNlink = 'frontmatter___imageFb___nlink',
    FrontmatterImageFbUid = 'frontmatter___imageFb___uid',
    FrontmatterImageFbGid = 'frontmatter___imageFb___gid',
    FrontmatterImageFbRdev = 'frontmatter___imageFb___rdev',
    FrontmatterImageFbIno = 'frontmatter___imageFb___ino',
    FrontmatterImageFbAtimeMs = 'frontmatter___imageFb___atimeMs',
    FrontmatterImageFbMtimeMs = 'frontmatter___imageFb___mtimeMs',
    FrontmatterImageFbCtimeMs = 'frontmatter___imageFb___ctimeMs',
    FrontmatterImageFbAtime = 'frontmatter___imageFb___atime',
    FrontmatterImageFbMtime = 'frontmatter___imageFb___mtime',
    FrontmatterImageFbCtime = 'frontmatter___imageFb___ctime',
    FrontmatterImageFbPublicUrl = 'frontmatter___imageFb___publicURL',
    FrontmatterImageFbId = 'frontmatter___imageFb___id',
    FrontmatterImageFbParentId = 'frontmatter___imageFb___parent___id',
    FrontmatterImageFbParentChildren = 'frontmatter___imageFb___parent___children',
    FrontmatterImageFbChildren = 'frontmatter___imageFb___children',
    FrontmatterImageFbChildrenId = 'frontmatter___imageFb___children___id',
    FrontmatterImageFbChildrenChildren = 'frontmatter___imageFb___children___children',
    FrontmatterImageFbInternalContent = 'frontmatter___imageFb___internal___content',
    FrontmatterImageFbInternalContentDigest = 'frontmatter___imageFb___internal___contentDigest',
    FrontmatterImageFbInternalDescription = 'frontmatter___imageFb___internal___description',
    FrontmatterImageFbInternalFieldOwners = 'frontmatter___imageFb___internal___fieldOwners',
    FrontmatterImageFbInternalIgnoreType = 'frontmatter___imageFb___internal___ignoreType',
    FrontmatterImageFbInternalMediaType = 'frontmatter___imageFb___internal___mediaType',
    FrontmatterImageFbInternalOwner = 'frontmatter___imageFb___internal___owner',
    FrontmatterImageFbInternalType = 'frontmatter___imageFb___internal___type',
    FrontmatterImageFbChildMdxRawBody = 'frontmatter___imageFb___childMdx___rawBody',
    FrontmatterImageFbChildMdxFileAbsolutePath = 'frontmatter___imageFb___childMdx___fileAbsolutePath',
    FrontmatterImageFbChildMdxBody = 'frontmatter___imageFb___childMdx___body',
    FrontmatterImageFbChildMdxExcerpt = 'frontmatter___imageFb___childMdx___excerpt',
    FrontmatterImageFbChildMdxHeadings = 'frontmatter___imageFb___childMdx___headings',
    FrontmatterImageFbChildMdxHtml = 'frontmatter___imageFb___childMdx___html',
    FrontmatterImageFbChildMdxMdxAst = 'frontmatter___imageFb___childMdx___mdxAST',
    FrontmatterImageFbChildMdxTableOfContents = 'frontmatter___imageFb___childMdx___tableOfContents',
    FrontmatterImageFbChildMdxTimeToRead = 'frontmatter___imageFb___childMdx___timeToRead',
    FrontmatterImageFbChildMdxId = 'frontmatter___imageFb___childMdx___id',
    FrontmatterImageFbChildMdxChildren = 'frontmatter___imageFb___childMdx___children',
    FrontmatterImageFbChildMarkdownRemarkId = 'frontmatter___imageFb___childMarkdownRemark___id',
    FrontmatterImageFbChildMarkdownRemarkExcerpt = 'frontmatter___imageFb___childMarkdownRemark___excerpt',
    FrontmatterImageFbChildMarkdownRemarkRawMarkdownBody = 'frontmatter___imageFb___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageFbChildMarkdownRemarkFileAbsolutePath = 'frontmatter___imageFb___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageFbChildMarkdownRemarkHtml = 'frontmatter___imageFb___childMarkdownRemark___html',
    FrontmatterImageFbChildMarkdownRemarkHtmlAst = 'frontmatter___imageFb___childMarkdownRemark___htmlAst',
    FrontmatterImageFbChildMarkdownRemarkExcerptAst = 'frontmatter___imageFb___childMarkdownRemark___excerptAst',
    FrontmatterImageFbChildMarkdownRemarkHeadings = 'frontmatter___imageFb___childMarkdownRemark___headings',
    FrontmatterImageFbChildMarkdownRemarkTimeToRead = 'frontmatter___imageFb___childMarkdownRemark___timeToRead',
    FrontmatterImageFbChildMarkdownRemarkTableOfContents = 'frontmatter___imageFb___childMarkdownRemark___tableOfContents',
    FrontmatterImageFbChildMarkdownRemarkChildren = 'frontmatter___imageFb___childMarkdownRemark___children',
    FrontmatterImageFbChildImageSharpId = 'frontmatter___imageFb___childImageSharp___id',
    FrontmatterImageFbChildImageSharpChildren = 'frontmatter___imageFb___childImageSharp___children',
    FrontmatterDisqus = 'frontmatter___disqus',
    Excerpt = 'excerpt',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
    Html = 'html',
    HtmlAst = 'htmlAst',
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

export type MarkdownRemarkFieldsFilterInput = {
    slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
    __typename?: 'MarkdownRemarkFrontmatter';
    title?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Date']>;
    cover?: Maybe<File>;
    generate_card?: Maybe<Scalars['Boolean']>;
    language?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    imageTw?: Maybe<File>;
    imageFb?: Maybe<File>;
    disqus?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    cover?: Maybe<FileFilterInput>;
    generate_card?: Maybe<BooleanQueryOperatorInput>;
    language?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    imageTw?: Maybe<FileFilterInput>;
    imageFb?: Maybe<FileFilterInput>;
    disqus?: Maybe<BooleanQueryOperatorInput>;
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
    FrontmatterSlug = 'frontmatter___slug',
    FrontmatterCoverBirthtime = 'frontmatter___cover___birthtime',
    FrontmatterCoverBirthtimeMs = 'frontmatter___cover___birthtimeMs',
    FrontmatterCoverSourceInstanceName = 'frontmatter___cover___sourceInstanceName',
    FrontmatterCoverAbsolutePath = 'frontmatter___cover___absolutePath',
    FrontmatterCoverRelativePath = 'frontmatter___cover___relativePath',
    FrontmatterCoverExtension = 'frontmatter___cover___extension',
    FrontmatterCoverSize = 'frontmatter___cover___size',
    FrontmatterCoverPrettySize = 'frontmatter___cover___prettySize',
    FrontmatterCoverModifiedTime = 'frontmatter___cover___modifiedTime',
    FrontmatterCoverAccessTime = 'frontmatter___cover___accessTime',
    FrontmatterCoverChangeTime = 'frontmatter___cover___changeTime',
    FrontmatterCoverBirthTime = 'frontmatter___cover___birthTime',
    FrontmatterCoverRoot = 'frontmatter___cover___root',
    FrontmatterCoverDir = 'frontmatter___cover___dir',
    FrontmatterCoverBase = 'frontmatter___cover___base',
    FrontmatterCoverExt = 'frontmatter___cover___ext',
    FrontmatterCoverName = 'frontmatter___cover___name',
    FrontmatterCoverRelativeDirectory = 'frontmatter___cover___relativeDirectory',
    FrontmatterCoverDev = 'frontmatter___cover___dev',
    FrontmatterCoverMode = 'frontmatter___cover___mode',
    FrontmatterCoverNlink = 'frontmatter___cover___nlink',
    FrontmatterCoverUid = 'frontmatter___cover___uid',
    FrontmatterCoverGid = 'frontmatter___cover___gid',
    FrontmatterCoverRdev = 'frontmatter___cover___rdev',
    FrontmatterCoverIno = 'frontmatter___cover___ino',
    FrontmatterCoverAtimeMs = 'frontmatter___cover___atimeMs',
    FrontmatterCoverMtimeMs = 'frontmatter___cover___mtimeMs',
    FrontmatterCoverCtimeMs = 'frontmatter___cover___ctimeMs',
    FrontmatterCoverAtime = 'frontmatter___cover___atime',
    FrontmatterCoverMtime = 'frontmatter___cover___mtime',
    FrontmatterCoverCtime = 'frontmatter___cover___ctime',
    FrontmatterCoverPublicUrl = 'frontmatter___cover___publicURL',
    FrontmatterCoverId = 'frontmatter___cover___id',
    FrontmatterCoverParentId = 'frontmatter___cover___parent___id',
    FrontmatterCoverParentChildren = 'frontmatter___cover___parent___children',
    FrontmatterCoverChildren = 'frontmatter___cover___children',
    FrontmatterCoverChildrenId = 'frontmatter___cover___children___id',
    FrontmatterCoverChildrenChildren = 'frontmatter___cover___children___children',
    FrontmatterCoverInternalContent = 'frontmatter___cover___internal___content',
    FrontmatterCoverInternalContentDigest = 'frontmatter___cover___internal___contentDigest',
    FrontmatterCoverInternalDescription = 'frontmatter___cover___internal___description',
    FrontmatterCoverInternalFieldOwners = 'frontmatter___cover___internal___fieldOwners',
    FrontmatterCoverInternalIgnoreType = 'frontmatter___cover___internal___ignoreType',
    FrontmatterCoverInternalMediaType = 'frontmatter___cover___internal___mediaType',
    FrontmatterCoverInternalOwner = 'frontmatter___cover___internal___owner',
    FrontmatterCoverInternalType = 'frontmatter___cover___internal___type',
    FrontmatterCoverChildMdxRawBody = 'frontmatter___cover___childMdx___rawBody',
    FrontmatterCoverChildMdxFileAbsolutePath = 'frontmatter___cover___childMdx___fileAbsolutePath',
    FrontmatterCoverChildMdxBody = 'frontmatter___cover___childMdx___body',
    FrontmatterCoverChildMdxExcerpt = 'frontmatter___cover___childMdx___excerpt',
    FrontmatterCoverChildMdxHeadings = 'frontmatter___cover___childMdx___headings',
    FrontmatterCoverChildMdxHtml = 'frontmatter___cover___childMdx___html',
    FrontmatterCoverChildMdxMdxAst = 'frontmatter___cover___childMdx___mdxAST',
    FrontmatterCoverChildMdxTableOfContents = 'frontmatter___cover___childMdx___tableOfContents',
    FrontmatterCoverChildMdxTimeToRead = 'frontmatter___cover___childMdx___timeToRead',
    FrontmatterCoverChildMdxId = 'frontmatter___cover___childMdx___id',
    FrontmatterCoverChildMdxChildren = 'frontmatter___cover___childMdx___children',
    FrontmatterCoverChildMarkdownRemarkId = 'frontmatter___cover___childMarkdownRemark___id',
    FrontmatterCoverChildMarkdownRemarkExcerpt = 'frontmatter___cover___childMarkdownRemark___excerpt',
    FrontmatterCoverChildMarkdownRemarkRawMarkdownBody = 'frontmatter___cover___childMarkdownRemark___rawMarkdownBody',
    FrontmatterCoverChildMarkdownRemarkFileAbsolutePath = 'frontmatter___cover___childMarkdownRemark___fileAbsolutePath',
    FrontmatterCoverChildMarkdownRemarkHtml = 'frontmatter___cover___childMarkdownRemark___html',
    FrontmatterCoverChildMarkdownRemarkHtmlAst = 'frontmatter___cover___childMarkdownRemark___htmlAst',
    FrontmatterCoverChildMarkdownRemarkExcerptAst = 'frontmatter___cover___childMarkdownRemark___excerptAst',
    FrontmatterCoverChildMarkdownRemarkHeadings = 'frontmatter___cover___childMarkdownRemark___headings',
    FrontmatterCoverChildMarkdownRemarkTimeToRead = 'frontmatter___cover___childMarkdownRemark___timeToRead',
    FrontmatterCoverChildMarkdownRemarkTableOfContents = 'frontmatter___cover___childMarkdownRemark___tableOfContents',
    FrontmatterCoverChildMarkdownRemarkChildren = 'frontmatter___cover___childMarkdownRemark___children',
    FrontmatterCoverChildImageSharpId = 'frontmatter___cover___childImageSharp___id',
    FrontmatterCoverChildImageSharpChildren = 'frontmatter___cover___childImageSharp___children',
    FrontmatterGenerateCard = 'frontmatter___generate_card',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterLanguage = 'frontmatter___language',
    FrontmatterTags = 'frontmatter___tags',
    FrontmatterImageTwBirthtime = 'frontmatter___imageTw___birthtime',
    FrontmatterImageTwBirthtimeMs = 'frontmatter___imageTw___birthtimeMs',
    FrontmatterImageTwSourceInstanceName = 'frontmatter___imageTw___sourceInstanceName',
    FrontmatterImageTwAbsolutePath = 'frontmatter___imageTw___absolutePath',
    FrontmatterImageTwRelativePath = 'frontmatter___imageTw___relativePath',
    FrontmatterImageTwExtension = 'frontmatter___imageTw___extension',
    FrontmatterImageTwSize = 'frontmatter___imageTw___size',
    FrontmatterImageTwPrettySize = 'frontmatter___imageTw___prettySize',
    FrontmatterImageTwModifiedTime = 'frontmatter___imageTw___modifiedTime',
    FrontmatterImageTwAccessTime = 'frontmatter___imageTw___accessTime',
    FrontmatterImageTwChangeTime = 'frontmatter___imageTw___changeTime',
    FrontmatterImageTwBirthTime = 'frontmatter___imageTw___birthTime',
    FrontmatterImageTwRoot = 'frontmatter___imageTw___root',
    FrontmatterImageTwDir = 'frontmatter___imageTw___dir',
    FrontmatterImageTwBase = 'frontmatter___imageTw___base',
    FrontmatterImageTwExt = 'frontmatter___imageTw___ext',
    FrontmatterImageTwName = 'frontmatter___imageTw___name',
    FrontmatterImageTwRelativeDirectory = 'frontmatter___imageTw___relativeDirectory',
    FrontmatterImageTwDev = 'frontmatter___imageTw___dev',
    FrontmatterImageTwMode = 'frontmatter___imageTw___mode',
    FrontmatterImageTwNlink = 'frontmatter___imageTw___nlink',
    FrontmatterImageTwUid = 'frontmatter___imageTw___uid',
    FrontmatterImageTwGid = 'frontmatter___imageTw___gid',
    FrontmatterImageTwRdev = 'frontmatter___imageTw___rdev',
    FrontmatterImageTwIno = 'frontmatter___imageTw___ino',
    FrontmatterImageTwAtimeMs = 'frontmatter___imageTw___atimeMs',
    FrontmatterImageTwMtimeMs = 'frontmatter___imageTw___mtimeMs',
    FrontmatterImageTwCtimeMs = 'frontmatter___imageTw___ctimeMs',
    FrontmatterImageTwAtime = 'frontmatter___imageTw___atime',
    FrontmatterImageTwMtime = 'frontmatter___imageTw___mtime',
    FrontmatterImageTwCtime = 'frontmatter___imageTw___ctime',
    FrontmatterImageTwPublicUrl = 'frontmatter___imageTw___publicURL',
    FrontmatterImageTwId = 'frontmatter___imageTw___id',
    FrontmatterImageTwParentId = 'frontmatter___imageTw___parent___id',
    FrontmatterImageTwParentChildren = 'frontmatter___imageTw___parent___children',
    FrontmatterImageTwChildren = 'frontmatter___imageTw___children',
    FrontmatterImageTwChildrenId = 'frontmatter___imageTw___children___id',
    FrontmatterImageTwChildrenChildren = 'frontmatter___imageTw___children___children',
    FrontmatterImageTwInternalContent = 'frontmatter___imageTw___internal___content',
    FrontmatterImageTwInternalContentDigest = 'frontmatter___imageTw___internal___contentDigest',
    FrontmatterImageTwInternalDescription = 'frontmatter___imageTw___internal___description',
    FrontmatterImageTwInternalFieldOwners = 'frontmatter___imageTw___internal___fieldOwners',
    FrontmatterImageTwInternalIgnoreType = 'frontmatter___imageTw___internal___ignoreType',
    FrontmatterImageTwInternalMediaType = 'frontmatter___imageTw___internal___mediaType',
    FrontmatterImageTwInternalOwner = 'frontmatter___imageTw___internal___owner',
    FrontmatterImageTwInternalType = 'frontmatter___imageTw___internal___type',
    FrontmatterImageTwChildMdxRawBody = 'frontmatter___imageTw___childMdx___rawBody',
    FrontmatterImageTwChildMdxFileAbsolutePath = 'frontmatter___imageTw___childMdx___fileAbsolutePath',
    FrontmatterImageTwChildMdxBody = 'frontmatter___imageTw___childMdx___body',
    FrontmatterImageTwChildMdxExcerpt = 'frontmatter___imageTw___childMdx___excerpt',
    FrontmatterImageTwChildMdxHeadings = 'frontmatter___imageTw___childMdx___headings',
    FrontmatterImageTwChildMdxHtml = 'frontmatter___imageTw___childMdx___html',
    FrontmatterImageTwChildMdxMdxAst = 'frontmatter___imageTw___childMdx___mdxAST',
    FrontmatterImageTwChildMdxTableOfContents = 'frontmatter___imageTw___childMdx___tableOfContents',
    FrontmatterImageTwChildMdxTimeToRead = 'frontmatter___imageTw___childMdx___timeToRead',
    FrontmatterImageTwChildMdxId = 'frontmatter___imageTw___childMdx___id',
    FrontmatterImageTwChildMdxChildren = 'frontmatter___imageTw___childMdx___children',
    FrontmatterImageTwChildMarkdownRemarkId = 'frontmatter___imageTw___childMarkdownRemark___id',
    FrontmatterImageTwChildMarkdownRemarkExcerpt = 'frontmatter___imageTw___childMarkdownRemark___excerpt',
    FrontmatterImageTwChildMarkdownRemarkRawMarkdownBody = 'frontmatter___imageTw___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageTwChildMarkdownRemarkFileAbsolutePath = 'frontmatter___imageTw___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageTwChildMarkdownRemarkHtml = 'frontmatter___imageTw___childMarkdownRemark___html',
    FrontmatterImageTwChildMarkdownRemarkHtmlAst = 'frontmatter___imageTw___childMarkdownRemark___htmlAst',
    FrontmatterImageTwChildMarkdownRemarkExcerptAst = 'frontmatter___imageTw___childMarkdownRemark___excerptAst',
    FrontmatterImageTwChildMarkdownRemarkHeadings = 'frontmatter___imageTw___childMarkdownRemark___headings',
    FrontmatterImageTwChildMarkdownRemarkTimeToRead = 'frontmatter___imageTw___childMarkdownRemark___timeToRead',
    FrontmatterImageTwChildMarkdownRemarkTableOfContents = 'frontmatter___imageTw___childMarkdownRemark___tableOfContents',
    FrontmatterImageTwChildMarkdownRemarkChildren = 'frontmatter___imageTw___childMarkdownRemark___children',
    FrontmatterImageTwChildImageSharpId = 'frontmatter___imageTw___childImageSharp___id',
    FrontmatterImageTwChildImageSharpChildren = 'frontmatter___imageTw___childImageSharp___children',
    FrontmatterImageFbBirthtime = 'frontmatter___imageFb___birthtime',
    FrontmatterImageFbBirthtimeMs = 'frontmatter___imageFb___birthtimeMs',
    FrontmatterImageFbSourceInstanceName = 'frontmatter___imageFb___sourceInstanceName',
    FrontmatterImageFbAbsolutePath = 'frontmatter___imageFb___absolutePath',
    FrontmatterImageFbRelativePath = 'frontmatter___imageFb___relativePath',
    FrontmatterImageFbExtension = 'frontmatter___imageFb___extension',
    FrontmatterImageFbSize = 'frontmatter___imageFb___size',
    FrontmatterImageFbPrettySize = 'frontmatter___imageFb___prettySize',
    FrontmatterImageFbModifiedTime = 'frontmatter___imageFb___modifiedTime',
    FrontmatterImageFbAccessTime = 'frontmatter___imageFb___accessTime',
    FrontmatterImageFbChangeTime = 'frontmatter___imageFb___changeTime',
    FrontmatterImageFbBirthTime = 'frontmatter___imageFb___birthTime',
    FrontmatterImageFbRoot = 'frontmatter___imageFb___root',
    FrontmatterImageFbDir = 'frontmatter___imageFb___dir',
    FrontmatterImageFbBase = 'frontmatter___imageFb___base',
    FrontmatterImageFbExt = 'frontmatter___imageFb___ext',
    FrontmatterImageFbName = 'frontmatter___imageFb___name',
    FrontmatterImageFbRelativeDirectory = 'frontmatter___imageFb___relativeDirectory',
    FrontmatterImageFbDev = 'frontmatter___imageFb___dev',
    FrontmatterImageFbMode = 'frontmatter___imageFb___mode',
    FrontmatterImageFbNlink = 'frontmatter___imageFb___nlink',
    FrontmatterImageFbUid = 'frontmatter___imageFb___uid',
    FrontmatterImageFbGid = 'frontmatter___imageFb___gid',
    FrontmatterImageFbRdev = 'frontmatter___imageFb___rdev',
    FrontmatterImageFbIno = 'frontmatter___imageFb___ino',
    FrontmatterImageFbAtimeMs = 'frontmatter___imageFb___atimeMs',
    FrontmatterImageFbMtimeMs = 'frontmatter___imageFb___mtimeMs',
    FrontmatterImageFbCtimeMs = 'frontmatter___imageFb___ctimeMs',
    FrontmatterImageFbAtime = 'frontmatter___imageFb___atime',
    FrontmatterImageFbMtime = 'frontmatter___imageFb___mtime',
    FrontmatterImageFbCtime = 'frontmatter___imageFb___ctime',
    FrontmatterImageFbPublicUrl = 'frontmatter___imageFb___publicURL',
    FrontmatterImageFbId = 'frontmatter___imageFb___id',
    FrontmatterImageFbParentId = 'frontmatter___imageFb___parent___id',
    FrontmatterImageFbParentChildren = 'frontmatter___imageFb___parent___children',
    FrontmatterImageFbChildren = 'frontmatter___imageFb___children',
    FrontmatterImageFbChildrenId = 'frontmatter___imageFb___children___id',
    FrontmatterImageFbChildrenChildren = 'frontmatter___imageFb___children___children',
    FrontmatterImageFbInternalContent = 'frontmatter___imageFb___internal___content',
    FrontmatterImageFbInternalContentDigest = 'frontmatter___imageFb___internal___contentDigest',
    FrontmatterImageFbInternalDescription = 'frontmatter___imageFb___internal___description',
    FrontmatterImageFbInternalFieldOwners = 'frontmatter___imageFb___internal___fieldOwners',
    FrontmatterImageFbInternalIgnoreType = 'frontmatter___imageFb___internal___ignoreType',
    FrontmatterImageFbInternalMediaType = 'frontmatter___imageFb___internal___mediaType',
    FrontmatterImageFbInternalOwner = 'frontmatter___imageFb___internal___owner',
    FrontmatterImageFbInternalType = 'frontmatter___imageFb___internal___type',
    FrontmatterImageFbChildMdxRawBody = 'frontmatter___imageFb___childMdx___rawBody',
    FrontmatterImageFbChildMdxFileAbsolutePath = 'frontmatter___imageFb___childMdx___fileAbsolutePath',
    FrontmatterImageFbChildMdxBody = 'frontmatter___imageFb___childMdx___body',
    FrontmatterImageFbChildMdxExcerpt = 'frontmatter___imageFb___childMdx___excerpt',
    FrontmatterImageFbChildMdxHeadings = 'frontmatter___imageFb___childMdx___headings',
    FrontmatterImageFbChildMdxHtml = 'frontmatter___imageFb___childMdx___html',
    FrontmatterImageFbChildMdxMdxAst = 'frontmatter___imageFb___childMdx___mdxAST',
    FrontmatterImageFbChildMdxTableOfContents = 'frontmatter___imageFb___childMdx___tableOfContents',
    FrontmatterImageFbChildMdxTimeToRead = 'frontmatter___imageFb___childMdx___timeToRead',
    FrontmatterImageFbChildMdxId = 'frontmatter___imageFb___childMdx___id',
    FrontmatterImageFbChildMdxChildren = 'frontmatter___imageFb___childMdx___children',
    FrontmatterImageFbChildMarkdownRemarkId = 'frontmatter___imageFb___childMarkdownRemark___id',
    FrontmatterImageFbChildMarkdownRemarkExcerpt = 'frontmatter___imageFb___childMarkdownRemark___excerpt',
    FrontmatterImageFbChildMarkdownRemarkRawMarkdownBody = 'frontmatter___imageFb___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageFbChildMarkdownRemarkFileAbsolutePath = 'frontmatter___imageFb___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageFbChildMarkdownRemarkHtml = 'frontmatter___imageFb___childMarkdownRemark___html',
    FrontmatterImageFbChildMarkdownRemarkHtmlAst = 'frontmatter___imageFb___childMarkdownRemark___htmlAst',
    FrontmatterImageFbChildMarkdownRemarkExcerptAst = 'frontmatter___imageFb___childMarkdownRemark___excerptAst',
    FrontmatterImageFbChildMarkdownRemarkHeadings = 'frontmatter___imageFb___childMarkdownRemark___headings',
    FrontmatterImageFbChildMarkdownRemarkTimeToRead = 'frontmatter___imageFb___childMarkdownRemark___timeToRead',
    FrontmatterImageFbChildMarkdownRemarkTableOfContents = 'frontmatter___imageFb___childMarkdownRemark___tableOfContents',
    FrontmatterImageFbChildMarkdownRemarkChildren = 'frontmatter___imageFb___childMarkdownRemark___children',
    FrontmatterImageFbChildImageSharpId = 'frontmatter___imageFb___childImageSharp___id',
    FrontmatterImageFbChildImageSharpChildren = 'frontmatter___imageFb___childImageSharp___children',
    FrontmatterDisqus = 'frontmatter___disqus',
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
    slug?: Maybe<Scalars['String']>;
    cover?: Maybe<File>;
    generate_card?: Maybe<Scalars['Boolean']>;
    date?: Maybe<Scalars['Date']>;
    language?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    imageTw?: Maybe<File>;
    imageFb?: Maybe<File>;
    disqus?: Maybe<Scalars['Boolean']>;
};

export type MdxFrontmatterDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    cover?: Maybe<FileFilterInput>;
    generate_card?: Maybe<BooleanQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    language?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    imageTw?: Maybe<FileFilterInput>;
    imageFb?: Maybe<FileFilterInput>;
    disqus?: Maybe<BooleanQueryOperatorInput>;
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
    allFile?: Maybe<FileConnection>;
    mdx?: Maybe<Mdx>;
    allMdx?: Maybe<MdxConnection>;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp?: Maybe<ImageSharpConnection>;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;
    sitePage?: Maybe<SitePage>;
    allSitePage?: Maybe<SitePageConnection>;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin?: Maybe<SitePluginConnection>;
    site?: Maybe<Site>;
    allSite?: Maybe<SiteConnection>;
    directory?: Maybe<Directory>;
    allDirectory?: Maybe<DirectoryConnection>;
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
    childMdx?: Maybe<MdxFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
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
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
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
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
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
    pathPrefix?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
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
    SiteMetadataMultilangPosts = 'siteMetadata___multilangPosts',
    SiteMetadataAuthorDescription = 'siteMetadata___authorDescription',
    SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
    SiteMetadataDisqusSiteUrl = 'siteMetadata___disqusSiteUrl',
    SiteMetadataPathPrefix = 'siteMetadata___pathPrefix',
    SiteMetadataSiteCover = 'siteMetadata___siteCover',
    SiteMetadataGoogleAnalyticsId = 'siteMetadata___googleAnalyticsId',
    SiteMetadataBackgroundColor = 'siteMetadata___background_color',
    SiteMetadataThemeColor = 'siteMetadata___theme_color',
    SiteMetadataDisplay = 'siteMetadata___display',
    SiteMetadataIcon = 'siteMetadata___icon',
    SiteMetadataPostsPerPage = 'siteMetadata___postsPerPage',
    SiteMetadataDisqusShortname = 'siteMetadata___disqusShortname',
    SiteMetadataHeaderTitle = 'siteMetadata___headerTitle',
    SiteMetadataHeaderLinksIcon = 'siteMetadata___headerLinksIcon',
    SiteMetadataHeaderLinks = 'siteMetadata___headerLinks',
    SiteMetadataHeaderLinksLabel = 'siteMetadata___headerLinks___label',
    SiteMetadataHeaderLinksUrl = 'siteMetadata___headerLinks___url',
    SiteMetadataWebsiteHostName = 'siteMetadata___websiteHost___name',
    SiteMetadataWebsiteHostUrl = 'siteMetadata___websiteHost___url',
    SiteMetadataFooterLinks = 'siteMetadata___footerLinks',
    SiteMetadataFooterLinksSectionName = 'siteMetadata___footerLinks___sectionName',
    SiteMetadataFooterLinksLinks = 'siteMetadata___footerLinks___links',
    SiteMetadataFooterLinksLinksLabel = 'siteMetadata___footerLinks___links___label',
    SiteMetadataFooterLinksLinksUrl = 'siteMetadata___footerLinks___links___url',
    Port = 'port',
    Host = 'host',
    PathPrefix = 'pathPrefix',
    Polyfill = 'polyfill',
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
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
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
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextNextFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
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
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextPreviousFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
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
    ContextPreviousFrontmatterTags = 'context___previous___frontmatter___tags',
    ContextNextFileAbsolutePath = 'context___next___fileAbsolutePath',
    ContextNextFrontmatterTitle = 'context___next___frontmatter___title',
    ContextNextFrontmatterSlug = 'context___next___frontmatter___slug',
    ContextNextFrontmatterTags = 'context___next___frontmatter___tags',
    ContextWidth = 'context___width',
    ContextHeight = 'context___height',
    ContextType = 'context___type',
    ContextTag = 'context___tag',
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
    PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
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
    tracedSVG?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    wrapperStyle?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    showCaptions?: Maybe<BooleanQueryOperatorInput>;
    tracedSVG?: Maybe<BooleanQueryOperatorInput>;
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
    multilangPosts?: Maybe<Scalars['Boolean']>;
    authorDescription?: Maybe<Scalars['String']>;
    siteUrl?: Maybe<Scalars['String']>;
    disqusSiteUrl?: Maybe<Scalars['String']>;
    pathPrefix?: Maybe<Scalars['String']>;
    siteCover?: Maybe<Scalars['String']>;
    googleAnalyticsId?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    theme_color?: Maybe<Scalars['String']>;
    display?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    postsPerPage?: Maybe<Scalars['Int']>;
    disqusShortname?: Maybe<Scalars['String']>;
    headerTitle?: Maybe<Scalars['String']>;
    headerLinksIcon?: Maybe<Scalars['String']>;
    headerLinks?: Maybe<Array<Maybe<SiteSiteMetadataHeaderLinks>>>;
    websiteHost?: Maybe<SiteSiteMetadataWebsiteHost>;
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
    multilangPosts?: Maybe<BooleanQueryOperatorInput>;
    authorDescription?: Maybe<StringQueryOperatorInput>;
    siteUrl?: Maybe<StringQueryOperatorInput>;
    disqusSiteUrl?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    siteCover?: Maybe<StringQueryOperatorInput>;
    googleAnalyticsId?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    display?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    postsPerPage?: Maybe<IntQueryOperatorInput>;
    disqusShortname?: Maybe<StringQueryOperatorInput>;
    headerTitle?: Maybe<StringQueryOperatorInput>;
    headerLinksIcon?: Maybe<StringQueryOperatorInput>;
    headerLinks?: Maybe<SiteSiteMetadataHeaderLinksFilterListInput>;
    websiteHost?: Maybe<SiteSiteMetadataWebsiteHostFilterInput>;
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

export type SiteSiteMetadataWebsiteHost = {
    __typename?: 'SiteSiteMetadataWebsiteHost';
    name?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataWebsiteHostFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
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