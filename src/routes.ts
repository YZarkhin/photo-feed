export enum Routes {
  Feed = 'Feed',
  Details = 'Details',
};

export type RootStackParamList = {
  [Routes.Feed]: undefined;
  [Routes.Details]: { photoUrl: string };
};
