import { Pressable, View, Image, StyleSheet, Switch } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import apptw from "../../utils/lib/tailwind"
import { AntDesign, Foundation, Ionicons, SimpleLineIcons } from "@expo/vector-icons"
import AppText from "../../components/Display/AppText"
import { useNavigation } from "@react-navigation/native"
import Carousel from "react-native-reanimated-carousel"
import InfoCarousel from "./InfoCarousel"
import InfoCarousel2 from "./InfoCarousel2"
import CommunityFeed from "./ComunityFeed"



function DashBoardScreen() {

    const navigation = useNavigation()
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LoggedInLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={apptw`px-6`}

                >
                    <View
                        style={apptw` w-full flex-row `}
                    >

                        <Image
                            source={require("../../assets/profile_pic.png")}
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
                                style={apptw`text-5 text-black `}
                            >
                                Welcome Dr,
                            </AppText>
                            <AppText
                                style={apptw`text-3 text-black `}
                            >
                                What do you want today?
                            </AppText>
                        </View>



                        <AntDesign
                            name="bells"
                            size={20}
                            style={apptw`mx-auto p-4`}
                            color="black"
                        />

                        <Pressable
                            onPress={() => navigation.toggleDrawer()}
                            style={apptw.style("",)}
                        >
                            <SimpleLineIcons
                                name="menu"
                                size={20}
                                style={apptw`mx-auto p-4`}
                                color="black"
                            />
                        </Pressable>

                    </View>

                    {/* vertical scroll thing  */}
                    <View>
                        <InfoCarousel2 />
                    </View>

                    <View
                        style={apptw`mt-10 `}
                    >
                        <View
                            style={apptw`bg-green-200 rounded-full p-2 flex-row justify-between mb-5`}
                        >
                            <AppText
                                style={apptw`text-green-600 mx-3`}
                            >
                                I am Available

                            </AppText>
                            <Switch
                                thumbColor={"white"}

                            />

                        </View>



                        <View
                            style={apptw`bg-gray-200 rounded-full p-2 flex-row justify-between`}
                        >
                            <AntDesign name="calendar" size={24} color="black" />
                            <AppText
                                style={apptw`text-black mx-3`}
                            >
                                Schedule appointment calender

                            </AppText>

                            <AntDesign name="arrowright" size={24} color="black" />


                        </View>
                    </View>



                    <View
                        style={apptw`flex-row justify-between mt-10`}
                    >
                        <AppText
                            style={apptw`text-black font-bold`}
                        >
                            Community Feed
                        </AppText>
                        <AppText
                            style={apptw`text-blue-400`}
                        >
                            View All
                        </AppText>



                    </View>

                    <CommunityFeed />




                </ScrollView>
            </LoggedInLayout>
        </GestureHandlerRootView >

    )
}



export default DashBoardScreen