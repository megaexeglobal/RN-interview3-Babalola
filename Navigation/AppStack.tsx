import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Tabs from "./Tabs";
import WalletScreen from "../screens/Wallet/WalletScreen";
import TrackOrderScreen from "../screens/TrackOrder/TrackOrderScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import MyPostsScreen from "../screens/Pots/MyPosts";
import LiveSupportScreen from "../screens/LiveSupport/LiveSupportScreen";
import SuggestFeatScreen from "../screens/SuggestFeatures/SuggestFeatScreen";
import { EvilIcons, FontAwesome, Foundation, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import AppText from "../components/Display/AppText";



const Drawer = createDrawerNavigator();
const AppStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName="DashBoard"
            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 15,
                    color: "black"
                },
                drawerStyle: {
                    width: '70%',

                },
                drawerActiveTintColor: "#4425F50A",
            }}
            drawerContent={props => <CustomDrawer{...props} />}
        >


            <Drawer.Screen
                name='DashBoard'
                component={Tabs}

                options={{
                    drawerType: 'front',

                    title: "dashboard",
                    headerShown: false,


                }}
            />

            <Drawer.Screen
                name='Wallet'
                component={WalletScreen}
                options={{
                    drawerType: 'front',
                    title: "wallet",
                    headerShown: false,
                    drawerIcon: () =>
                        <SimpleLineIcons
                            name="wallet"
                            size={24}
                            color="black" />

                }}
            />

            <Drawer.Screen
                name='TrackOrder'
                component={TrackOrderScreen}
                options={{
                    drawerType: 'front',
                    title: "Track Order",
                    headerShown: false,
                    drawerIcon: () =>
                        <EvilIcons
                            name="location"
                            size={24}
                            color="black"
                        />
                }}
            />
            <Drawer.Screen
                name='My Posts'
                component={MyPostsScreen}
                options={{
                    drawerType: 'front',
                    title: "My Posts",
                    headerShown: false,
                    drawerIcon: () =>
                        <FontAwesome name="pencil-square-o" size={24} color="black" />

                }}
            />

            <Drawer.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    drawerType: 'front',
                    title: "Settings",
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="md-settings-outline" size={24} color="black" />

                }}
            />



            <Drawer.Screen
                name='Live Support'
                component={LiveSupportScreen}
                options={{
                    drawerType: 'front',
                    title: "Live Support",
                    headerShown: false,
                    drawerIcon: () => <Foundation name="clipboard-pencil" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name='Suggest Features'
                component={SuggestFeatScreen}
                options={{
                    drawerType: 'front',
                    title: "Suggest Features",
                    headerShown: false,
                    drawerIcon: () =>
                        <Ionicons name="md-settings-outline" size={24} color="black" />

                }}
            />





        </Drawer.Navigator>

    )
}

export default AppStack


