# goit-react-native

## Task 1

1. Install expo

2. Install Android Studio

3. Init the project using expo and blank option

4. Run the project

5. Maintain Android Studio

6. Install expo client on the phone

7. Run the project on the phone

## Task 2

1. Create Screens folder.

2. Create `RegistrationScreen` component.

3. Create `LoginScreen` component.

4. Create a `PostsScreen` screen.

5. Add form layout for the `RegistrationScreen` component.

6. Add form layout for the `LoginScreen` component.

7. Add styles for the `RegistrationScreen` component.

8. Add styles for the `LoginScreen` component.
   Use RegistrationScreen layout['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=3-26&mode=design&t=bamPCRiEccmWFDBc-0'],
   RegistrationScreen layout with opened keyboard['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=32-57&mode=design&t=FsuiHdsnYuUu3FbB-0'],
   LoginScreen layout['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=12-0&mode=design&t=TjqxuifN8oA0PeCU-0'],
   LoginScreen layout with opened keyboard['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=33-126&mode=design&t=jH1PMu0lsOZsXY0e-0']

## Task 3

1. Add the logic of working with the form to the RegistrationScreen component

2. Add the logic of working with the form to the LoginScreen component

3. Collect data from them and output them to the console during the submission of forms.

4. Add auto-close of the keyboard when clicked outside the forms (use Keyboard.dismiss)

## Task 4

1. Create screens: CreatePostsScreen, CommentsScreen, ProfileScreen, MapScreen, HomeScreen.

2. Connect Navigation to the Project
3. Add transitions between LoginScreen and RegistrationScreen to the project using the createStackNavigator component.

4. After submitting in the LoginScreen, the RegistrationScreen switches to Home, where the PostsScreen is immediately displayed
5. Connect the bottom navigation using createBottomTabNavigator.
6. Add a logout icon in the header on the PostsScreen screen

PostsScreen layout without Homework content (Copy)['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?type=design&node-id=33-126&mode=design&t=jH1PMu0lsOZsXY0e-0']

PostsScreen layout with Posts (Copy)['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?node-id=36-86&t=zLy5KtBgsPgUDWY3-0']

## Task 5

1. Connect the camera to the CreatePostsScreen component;

2. When the CreatePostsScreen screen is opened, the camera is activated and the image from it is displayed in the block with the camera icon
3. Clicking on the camera icon takes a picture
4. You can add the name of the photo to the input with the Name placeholder
5. You can add the name of the place where the picture was taken to the input with the Location placeholder
6. Add geolocation definition at the time of creating a post when clicking the Publish button
7. After creating a post, it should redirect to PostsScreen
8. В компоненті окремого посту при кліку на іконку коментарів перекидає на екран CommentsScreen
9. In the component of a separate post, when you click on the geolocation icon, it switches to the MapScreen screen, where you can see a map with a marker where the photo was taken

CommentsScreen layout with Comments['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?node-id=41-0&t=vDyJjIvhOk6v4uZ7-0']

CreatePostsScreen layout when opening the screen['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?node-id=36-86&t=hdpZPYSLTyS7klkX-0']

CreatePostsScreen layout after the photo is taken MapScreen component layout['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?node-id=36-13&t=5kWIH0XRsJwnJfHy-0']

MapScreen layout ['['https://www.figma.com/file/YqWLNarVE4x1zkXa6PYJfi/Homework-(Copy)-(Copy)?node-id=43-54&t=58UisgPOnMIySl1m-0']
.

## Task 6

1. Connect Redux to the project
2. Connect Firebase to the project
3. Add registration logic to the RegistrationScreen via Firebase methods
4. Add login logic to LoginScreen via Firebase methods
5. Update the user profile on Firebase and add the login there in the displayName field after registration
6. Store user data in Redux after registration or login
7. Add a check whether the user is logged in to the application or not. If logged in, immediately redirect to the PostsScreen screen, otherwise - to the LoginScreen screen
8. Add Logout logic to the PostsScreen when the icon is clicked in the header using Firebase methods
9. Add logic for uploading posts to the database using Firebase and Redux
10. Add logic to add a comment under a post using Firebase and Redux

## Task 7

1. Upload the project to the expo servers
