import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/Navigation";

export interface RegistrationScreenProps {
  onRegister: () => void;
  navigation: StackNavigationProp<RootStackParamList, "LoginScreen">;
}
