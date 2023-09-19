export type TMainTabs = {
  PostsScreen: undefined
  ProfileScreen: undefined
}

export type TRootNavigator = {
  HomeStack: TMainTabs
  AuthStack: TAuthStack
}

export type TAuthStack = {
  LoginScreen: undefined
  RegisterScreen: undefined
}
