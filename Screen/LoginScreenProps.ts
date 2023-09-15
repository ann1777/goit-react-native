import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/Navigation";

interface LoginScreenProps {
  onLogin?: () => void;
  navigation: StackNavigationProp<RootStackParamList, "RegistrationScreen">;
}

export default LoginScreenProps;
