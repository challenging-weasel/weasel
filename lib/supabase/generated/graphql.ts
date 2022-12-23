/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type IBigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  neq?: InputMaybe<Scalars["BigInt"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type IBooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  neq?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression comparing fields on type "Date" */
export type IDateFilter = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<Scalars["Date"]>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  neq?: InputMaybe<Scalars["Date"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type IDatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]>;
  gt?: InputMaybe<Scalars["Datetime"]>;
  gte?: InputMaybe<Scalars["Datetime"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]>>;
  lt?: InputMaybe<Scalars["Datetime"]>;
  lte?: InputMaybe<Scalars["Datetime"]>;
  neq?: InputMaybe<Scalars["Datetime"]>;
};

/** Boolean expression comparing fields on type "Float" */
export type IFloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IIdFilter = {
  eq?: InputMaybe<Scalars["ID"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IIntFilter = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

/** The root type for creating and mutating data */
export type IMutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `challenges` collection */
  deleteFromchallengesCollection: IChallengesDeleteResponse;
  /** Deletes zero or more records from the `confirmations` collection */
  deleteFromconfirmationsCollection: IConfirmationsDeleteResponse;
  /** Deletes zero or more records from the `participations` collection */
  deleteFromparticipationsCollection: IParticipationsDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: IProfilesDeleteResponse;
  /** Adds one or more `challenges` records to the collection */
  insertIntochallengesCollection?: Maybe<IChallengesInsertResponse>;
  /** Adds one or more `confirmations` records to the collection */
  insertIntoconfirmationsCollection?: Maybe<IConfirmationsInsertResponse>;
  /** Adds one or more `participations` records to the collection */
  insertIntoparticipationsCollection?: Maybe<IParticipationsInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<IProfilesInsertResponse>;
  /** Updates zero or more records in the `challenges` collection */
  updatechallengesCollection: IChallengesUpdateResponse;
  /** Updates zero or more records in the `confirmations` collection */
  updateconfirmationsCollection: IConfirmationsUpdateResponse;
  /** Updates zero or more records in the `participations` collection */
  updateparticipationsCollection: IParticipationsUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: IProfilesUpdateResponse;
};

/** The root type for creating and mutating data */
export type IMutationDeleteFromchallengesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IChallengesFilter>;
};

/** The root type for creating and mutating data */
export type IMutationDeleteFromconfirmationsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IConfirmationsFilter>;
};

/** The root type for creating and mutating data */
export type IMutationDeleteFromparticipationsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IParticipationsFilter>;
};

/** The root type for creating and mutating data */
export type IMutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IProfilesFilter>;
};

/** The root type for creating and mutating data */
export type IMutationInsertIntochallengesCollectionArgs = {
  objects: Array<IChallengesInsertInput>;
};

/** The root type for creating and mutating data */
export type IMutationInsertIntoconfirmationsCollectionArgs = {
  objects: Array<IConfirmationsInsertInput>;
};

/** The root type for creating and mutating data */
export type IMutationInsertIntoparticipationsCollectionArgs = {
  objects: Array<IParticipationsInsertInput>;
};

/** The root type for creating and mutating data */
export type IMutationInsertIntoprofilesCollectionArgs = {
  objects: Array<IProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type IMutationUpdatechallengesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IChallengesFilter>;
  set: IChallengesUpdateInput;
};

/** The root type for creating and mutating data */
export type IMutationUpdateconfirmationsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IConfirmationsFilter>;
  set: IConfirmationsUpdateInput;
};

/** The root type for creating and mutating data */
export type IMutationUpdateparticipationsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IParticipationsFilter>;
  set: IParticipationsUpdateInput;
};

/** The root type for creating and mutating data */
export type IMutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<IProfilesFilter>;
  set: IProfilesUpdateInput;
};

export type INode = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"];
};

/** Defines a per-field sorting order */
export type IOrderByDirection =
  /** Ascending order, nulls first */
  | "AscNullsFirst"
  /** Ascending order, nulls last */
  | "AscNullsLast"
  /** Descending order, nulls first */
  | "DescNullsFirst"
  /** Descending order, nulls last */
  | "DescNullsLast";

export type IPageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

/** The root type for querying data */
export type IQuery = {
  __typename?: "Query";
  /** A pagable collection of type `challenges` */
  challengesCollection?: Maybe<IChallengesConnection>;
  /** A pagable collection of type `confirmations` */
  confirmationsCollection?: Maybe<IConfirmationsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<INode>;
  /** A pagable collection of type `participations` */
  participationsCollection?: Maybe<IParticipationsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<IProfilesConnection>;
};

/** The root type for querying data */
export type IQueryChallengesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IChallengesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IChallengesOrderBy>>;
};

/** The root type for querying data */
export type IQueryConfirmationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IConfirmationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IConfirmationsOrderBy>>;
};

/** The root type for querying data */
export type IQueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root type for querying data */
export type IQueryParticipationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IParticipationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IParticipationsOrderBy>>;
};

/** The root type for querying data */
export type IQueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IProfilesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type IStringFilter = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression comparing fields on type "Time" */
export type ITimeFilter = {
  eq?: InputMaybe<Scalars["Time"]>;
  gt?: InputMaybe<Scalars["Time"]>;
  gte?: InputMaybe<Scalars["Time"]>;
  in?: InputMaybe<Array<Scalars["Time"]>>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type IUuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>;
  in?: InputMaybe<Array<Scalars["UUID"]>>;
  neq?: InputMaybe<Scalars["UUID"]>;
};

export type IChallenges = INode & {
  __typename?: "challenges";
  config: Scalars["JSON"];
  created_at: Scalars["Datetime"];
  deleted_at?: Maybe<Scalars["Datetime"]>;
  desc?: Maybe<Scalars["String"]>;
  id: Scalars["BigInt"];
  manager_id: Scalars["BigInt"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  participationsCollection?: Maybe<IParticipationsConnection>;
  profiles?: Maybe<IProfiles>;
  public_id: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  updated_at: Scalars["Datetime"];
};

export type IChallengesParticipationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IParticipationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IParticipationsOrderBy>>;
};

export type IChallengesConnection = {
  __typename?: "challengesConnection";
  edges: Array<IChallengesEdge>;
  pageInfo: IPageInfo;
};

export type IChallengesDeleteResponse = {
  __typename?: "challengesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IChallenges>;
};

export type IChallengesEdge = {
  __typename?: "challengesEdge";
  cursor: Scalars["String"];
  node: IChallenges;
};

export type IChallengesFilter = {
  created_at?: InputMaybe<IDatetimeFilter>;
  deleted_at?: InputMaybe<IDatetimeFilter>;
  desc?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IBigIntFilter>;
  manager_id?: InputMaybe<IBigIntFilter>;
  nodeId?: InputMaybe<IIdFilter>;
  public_id?: InputMaybe<IStringFilter>;
  title?: InputMaybe<IStringFilter>;
  updated_at?: InputMaybe<IDatetimeFilter>;
};

export type IChallengesInsertInput = {
  config?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  manager_id?: InputMaybe<Scalars["BigInt"]>;
  public_id?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IChallengesInsertResponse = {
  __typename?: "challengesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IChallenges>;
};

export type IChallengesOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>;
  deleted_at?: InputMaybe<IOrderByDirection>;
  desc?: InputMaybe<IOrderByDirection>;
  id?: InputMaybe<IOrderByDirection>;
  manager_id?: InputMaybe<IOrderByDirection>;
  public_id?: InputMaybe<IOrderByDirection>;
  title?: InputMaybe<IOrderByDirection>;
  updated_at?: InputMaybe<IOrderByDirection>;
};

export type IChallengesUpdateInput = {
  config?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  manager_id?: InputMaybe<Scalars["BigInt"]>;
  public_id?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IChallengesUpdateResponse = {
  __typename?: "challengesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IChallenges>;
};

export type IConfirmations = INode & {
  __typename?: "confirmations";
  created_at: Scalars["Datetime"];
  creator_id: Scalars["BigInt"];
  date: Scalars["Datetime"];
  deleted_at?: Maybe<Scalars["Datetime"]>;
  desc?: Maybe<Scalars["String"]>;
  id: Scalars["BigInt"];
  images?: Maybe<Scalars["JSON"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  participation_id: Scalars["BigInt"];
  participations?: Maybe<IParticipations>;
  profiles?: Maybe<IProfiles>;
  status: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  updated_at: Scalars["Datetime"];
};

export type IConfirmationsConnection = {
  __typename?: "confirmationsConnection";
  edges: Array<IConfirmationsEdge>;
  pageInfo: IPageInfo;
};

export type IConfirmationsDeleteResponse = {
  __typename?: "confirmationsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IConfirmations>;
};

export type IConfirmationsEdge = {
  __typename?: "confirmationsEdge";
  cursor: Scalars["String"];
  node: IConfirmations;
};

export type IConfirmationsFilter = {
  created_at?: InputMaybe<IDatetimeFilter>;
  creator_id?: InputMaybe<IBigIntFilter>;
  date?: InputMaybe<IDatetimeFilter>;
  deleted_at?: InputMaybe<IDatetimeFilter>;
  desc?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IBigIntFilter>;
  nodeId?: InputMaybe<IIdFilter>;
  participation_id?: InputMaybe<IBigIntFilter>;
  status?: InputMaybe<IStringFilter>;
  title?: InputMaybe<IStringFilter>;
  updated_at?: InputMaybe<IDatetimeFilter>;
};

export type IConfirmationsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  creator_id?: InputMaybe<Scalars["BigInt"]>;
  date?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Scalars["JSON"]>;
  participation_id?: InputMaybe<Scalars["BigInt"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IConfirmationsInsertResponse = {
  __typename?: "confirmationsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IConfirmations>;
};

export type IConfirmationsOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>;
  creator_id?: InputMaybe<IOrderByDirection>;
  date?: InputMaybe<IOrderByDirection>;
  deleted_at?: InputMaybe<IOrderByDirection>;
  desc?: InputMaybe<IOrderByDirection>;
  id?: InputMaybe<IOrderByDirection>;
  participation_id?: InputMaybe<IOrderByDirection>;
  status?: InputMaybe<IOrderByDirection>;
  title?: InputMaybe<IOrderByDirection>;
  updated_at?: InputMaybe<IOrderByDirection>;
};

export type IConfirmationsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  creator_id?: InputMaybe<Scalars["BigInt"]>;
  date?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Scalars["JSON"]>;
  participation_id?: InputMaybe<Scalars["BigInt"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IConfirmationsUpdateResponse = {
  __typename?: "confirmationsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IConfirmations>;
};

export type IParticipations = INode & {
  __typename?: "participations";
  challenge_id: Scalars["BigInt"];
  challenges?: Maybe<IChallenges>;
  config: Scalars["JSON"];
  confirmationsCollection?: Maybe<IConfirmationsConnection>;
  created_at: Scalars["Datetime"];
  deleted_at?: Maybe<Scalars["Datetime"]>;
  desc?: Maybe<Scalars["String"]>;
  id: Scalars["BigInt"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  profile_id: Scalars["BigInt"];
  profiles?: Maybe<IProfiles>;
  status: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  updated_at: Scalars["Datetime"];
};

export type IParticipationsConfirmationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IConfirmationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IConfirmationsOrderBy>>;
};

export type IParticipationsConnection = {
  __typename?: "participationsConnection";
  edges: Array<IParticipationsEdge>;
  pageInfo: IPageInfo;
};

export type IParticipationsDeleteResponse = {
  __typename?: "participationsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IParticipations>;
};

export type IParticipationsEdge = {
  __typename?: "participationsEdge";
  cursor: Scalars["String"];
  node: IParticipations;
};

export type IParticipationsFilter = {
  challenge_id?: InputMaybe<IBigIntFilter>;
  created_at?: InputMaybe<IDatetimeFilter>;
  deleted_at?: InputMaybe<IDatetimeFilter>;
  desc?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IBigIntFilter>;
  nodeId?: InputMaybe<IIdFilter>;
  profile_id?: InputMaybe<IBigIntFilter>;
  status?: InputMaybe<IStringFilter>;
  title?: InputMaybe<IStringFilter>;
  updated_at?: InputMaybe<IDatetimeFilter>;
};

export type IParticipationsInsertInput = {
  challenge_id?: InputMaybe<Scalars["BigInt"]>;
  config?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  profile_id?: InputMaybe<Scalars["BigInt"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IParticipationsInsertResponse = {
  __typename?: "participationsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IParticipations>;
};

export type IParticipationsOrderBy = {
  challenge_id?: InputMaybe<IOrderByDirection>;
  created_at?: InputMaybe<IOrderByDirection>;
  deleted_at?: InputMaybe<IOrderByDirection>;
  desc?: InputMaybe<IOrderByDirection>;
  id?: InputMaybe<IOrderByDirection>;
  profile_id?: InputMaybe<IOrderByDirection>;
  status?: InputMaybe<IOrderByDirection>;
  title?: InputMaybe<IOrderByDirection>;
  updated_at?: InputMaybe<IOrderByDirection>;
};

export type IParticipationsUpdateInput = {
  challenge_id?: InputMaybe<Scalars["BigInt"]>;
  config?: InputMaybe<Scalars["JSON"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  profile_id?: InputMaybe<Scalars["BigInt"]>;
  status?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type IParticipationsUpdateResponse = {
  __typename?: "participationsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IParticipations>;
};

export type IProfiles = INode & {
  __typename?: "profiles";
  challengesCollection?: Maybe<IChallengesConnection>;
  confirmationsCollection?: Maybe<IConfirmationsConnection>;
  created_at: Scalars["Datetime"];
  deleted_at?: Maybe<Scalars["Datetime"]>;
  desc?: Maybe<Scalars["String"]>;
  id: Scalars["BigInt"];
  name?: Maybe<Scalars["String"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  participationsCollection?: Maybe<IParticipationsConnection>;
  public_id: Scalars["String"];
  updated_at: Scalars["Datetime"];
  user_id?: Maybe<Scalars["UUID"]>;
};

export type IProfilesChallengesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IChallengesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IChallengesOrderBy>>;
};

export type IProfilesConfirmationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IConfirmationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IConfirmationsOrderBy>>;
};

export type IProfilesParticipationsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<IParticipationsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<IParticipationsOrderBy>>;
};

export type IProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<IProfilesEdge>;
  pageInfo: IPageInfo;
};

export type IProfilesDeleteResponse = {
  __typename?: "profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>;
};

export type IProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"];
  node: IProfiles;
};

export type IProfilesFilter = {
  created_at?: InputMaybe<IDatetimeFilter>;
  deleted_at?: InputMaybe<IDatetimeFilter>;
  desc?: InputMaybe<IStringFilter>;
  id?: InputMaybe<IBigIntFilter>;
  name?: InputMaybe<IStringFilter>;
  nodeId?: InputMaybe<IIdFilter>;
  public_id?: InputMaybe<IStringFilter>;
  updated_at?: InputMaybe<IDatetimeFilter>;
  user_id?: InputMaybe<IUuidFilter>;
};

export type IProfilesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  public_id?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type IProfilesInsertResponse = {
  __typename?: "profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>;
};

export type IProfilesOrderBy = {
  created_at?: InputMaybe<IOrderByDirection>;
  deleted_at?: InputMaybe<IOrderByDirection>;
  desc?: InputMaybe<IOrderByDirection>;
  id?: InputMaybe<IOrderByDirection>;
  name?: InputMaybe<IOrderByDirection>;
  public_id?: InputMaybe<IOrderByDirection>;
  updated_at?: InputMaybe<IOrderByDirection>;
  user_id?: InputMaybe<IOrderByDirection>;
};

export type IProfilesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  deleted_at?: InputMaybe<Scalars["Datetime"]>;
  desc?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  public_id?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type IProfilesUpdateResponse = {
  __typename?: "profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<IProfiles>;
};
