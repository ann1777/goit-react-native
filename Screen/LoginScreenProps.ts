import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/Navigation";

export interface LoginScreenProps {
  onLogin?: () => void;
  navigation: StackNavigationProp<RootStackParamList, "RegistrationScreen">;
}
