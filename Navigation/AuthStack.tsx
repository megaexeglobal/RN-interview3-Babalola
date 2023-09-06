import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allroutes";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator<RootStackParamList>();




const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Welcome'
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen
                name="DashBoardScreen"
                component={AppStack }
            />

        </Stack.Navigator>
    )


}

export default AuthStack