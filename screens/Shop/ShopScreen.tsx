import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import { View, Image } from "react-native"
import AppText from "../../components/Display/AppText"



const ShopScreen = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <LoggedInLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={apptw`px-4`}
                >


                    <View
                        style={apptw`flex-row justify-between mt-1 mb-5`}
                    >
                        <AppText
                            style={apptw`text-black font-bold`}
                        >
                            Shop for Medical Devices
                        </AppText>
                        <AppText
                            style={apptw`text-blue-400`}
                        >
                            View All
                        </AppText>



                    </View>


                    <View
                        style={apptw`bg-white  w-[200px] rounded-xl shadow-xl pb-5`}
                    >

                        <Image
                            source={require("../../assets/MEDeq.png")}
                            style={apptw`w-full h-40`}
                        />


                        <View
                            style={apptw`px-3`}
                        >
                            <AppText>
                                Temperature checker
                            </AppText>

                            <AppText
                                style={apptw`font-bold`}
                            >
                                N5,000
                            </AppText>

                        </View>

                    </View>


                    <View
                        style={apptw`flex-row justify-between mt-1 mb-5 mt-5`}
                    >
                        <AppText
                            style={apptw`text-black font-bold`}
                        >
                            Shop for Medicines
                        </AppText>
                        <AppText
                            style={apptw`text-blue-400`}
                        >
                            View All
                        </AppText>



                    </View>


                    <View
                        style={apptw`bg-white  w-[200px] rounded-xl shadow-xl pb-5`}
                    >

                        <Image
                            source={require("../../assets/medicince1.png")}
                            style={apptw`w-full h-40`}
                        />


                        <View
                            style={apptw`px-3`}
                        >
                            <AppText>
                                Temperature checker
                            </AppText>

                            <AppText
                                style={apptw`font-bold`}
                            >
                                N5,000
                            </AppText>

                        </View>

                    </View>



                </ScrollView>
            </LoggedInLayout>
        </GestureHandlerRootView>

    )
}


export default ShopScreen