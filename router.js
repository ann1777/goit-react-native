import {useSelector} from 'react-redux';
import {CommentsScreen} from './Screens/CommentsScreen';
import {CreatePostsScreen} from './Screens/CreatePostsScreen';
import RegistrationScreen from './Screens/LoginScreen';

import HomeScreen from './Screens/HomeScreen';
import InitialPostsScreen from './Screens/InitialPostsScreen';
import LoginScreen from './Screens/LoginScreen';
import MapScreen from './Screens/MapScreen';
import PostsScreen from './Screens/PostsScreen';
import ProfileScreen from './Screens/ProfileScreen';

const DefaultScreenComponent = HomeScreen; // Set your default screen component here

const useRoute = stateChange => {
  const routes = {
    home: HomeScreen,
    profile: ProfileScreen,
    registration: RegistrationScreen,
    login: LoginScreen,
    comments: CommentsScreen,
    addpost: CreatePostsScreen,
    post: InitialPostsScreen,
    posts: PostsScreen,
    map: MapScreen,
  };

  const {selectedRoute} = useSelector(state => state.router);

  return routes[selectedRoute] || DefaultScreenComponent;
};

export default useRoute;
