import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/Navigation";

interface DefaultLoginScreenProps {
  onLogin?: () => void;
  navigation: StackNavigationProp<RootStackParamList, "RegistrationScreen">;
}

export default DefaultLoginScreenProps;
