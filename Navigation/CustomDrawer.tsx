import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, ImageBackground, Image } from "react-native";
import { RollInRight } from "react-native-reanimated";
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function CustomDrawer(props: any) {
    return (

        <View
            style={{ flex: 1 }}
        >
            <DrawerContentScrollView
                contentContainerStyle={{

                    backgroundColor: "#4425F5",

                    // justifyContent: "space-between"
                }}

                {...props}
            >
                <ImageBackground

                    style={{
                        padding: 20, flexDirection: "row"
                    }}
                >
                    <Image
                        source={require("../assets/profile_pic.png")}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 40,
                            marginBottom: 10
                        }}
                    />
                    <View
                        style={apptw`flexDirection: "column" mx-5 `}
                    >
                        <AppText
                            style={apptw`text-5 text-white `}
                        >
                            Welcome Dr,
                        </AppText>
                        <AppText
                            style={apptw`text-3 text-white `}
                        >
                            What do you want today?
                        </AppText>
                    </View>



                </ImageBackground>

                <View
                    style={apptw`flex:1 bg-white pt-10 `}
                >
                    <DrawerItemList {...props} />
                </View>


                <View
                    style={apptw`bg-white flex-row px-5 pt-5`}
                >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                    <AppText
                    style={apptw`mx-10`}
                    >
                        Logout
                    </AppText>
                </View>
            </DrawerContentScrollView>



        </View>

    )
}