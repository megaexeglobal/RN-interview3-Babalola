import { MaterialCommunityIcons, AntDesign, MaterialIcons, Ionicons, Octicons, Feather, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import apptw from "../utils/lib/tailwind";
import MyTabBar from "./CustomBottomNav";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import Test from "../screens/Tests/Test";
import ShopScreen from "../screens/Shop/ShopScreen";
import PlannerScreen from "../screens/Planner/PlannerScreen";
import GroupScreen from "../screens/Group/GroupScreen";
import PersonalScreen from "../screens/Personal/PersonalScreen";



const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: { backgroundColor: "white" },
                tabBarInactiveTintColor: "black",
                // tabBarShowLabel: false,
                tabBarActiveBackgroundColor: "#4425F51A",
                headerShown: false,
                tabBarActiveTintColor: "#0413BB"
            }}
        // tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='Home'
                component={DashBoardScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="home"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            <Tab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" size={24} color={color} />),
                }}
            />

            <Tab.Screen
                name="Group"
                component={GroupScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="people-outline" size={24} color={color} />),
                }}
            />

            < Tab.Screen
                name='Shop'
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shop" size={24} color={color} />
                    ),
                }}
            />






            <Tab.Screen
                name="Personal"
                component={PersonalScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={24} color={color} />),
                }}
            />





        </Tab.Navigator>
    )


}


export default Tabs