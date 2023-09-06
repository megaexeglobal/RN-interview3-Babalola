import { Foundation } from "@expo/vector-icons"
import { View, StyleSheet, Dimensions } from "react-native"
import AppText from "../../components/Display/AppText"
import apptw from "../../utils/lib/tailwind"
import { ScrollView } from "react-native-gesture-handler"


const InfoCarousel2 = () => {
    return (
        <View>

            <ScrollView
                horizontal={true}
                style={apptw``}
            >

                <View
                    style={apptw` mx-3`}
                >
                    <View
                        style={apptw`bg-purple-800 h-40 rounded-xl  flex-row `}
                    >
                        <View
                            style={apptw`mx-5 my-5   w-20 bg-purple-400 flex-col rounded-lg px-5 py-3`}
                        >
                            <AppText
                                style={apptw`text-white text-3 text-center`}
                            >
                                29
                            </AppText>
                            <AppText
                                style={apptw`text-white text-3  text-center`}
                            >
                                Tue
                            </AppText>
                            <View
                                style={{
                                    borderBlockColor: "white",
                                    borderBottomWidth: StyleSheet.hairlineWidth
                                }}
                            />
                            <AppText
                                style={apptw`text-white text-3 text-center`}
                            >
                                2:00 PM
                            </AppText>
                        </View>

                        <View
                            style={apptw`mx-5 my-5  flex-col rounded-lg `}

                        >
                            <AppText
                                style={apptw`text-white`}
                            >
                                Pending appointment
                            </AppText>

                            <AppText>
                                Tanvir Ahmed
                            </AppText>
                            <AppText>
                                High Blood Pressure
                            </AppText>

                            <View
                                style={apptw`flex-row justify-between`}
                            >
                                <AppText
                                    style={apptw`text-white text-[10px]`}
                                >
                                    <Foundation name="clock" size={10} color="white" />
                                    {" "}0:01:20
                                </AppText>

                                <View
                                    style={apptw`bg-white rounded-full`}
                                >
                                    <AppText
                                        style={apptw`text-[10px] text-purple-800  px-4`}
                                    >
                                        View Patient →
                                    </AppText>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>


                <View
                    style={apptw``}
                >
                    <View
                        style={apptw`bg-orange-400 h-40 rounded-xl  flex-row `}
                    >
                        <View
                            style={apptw`mx-5 my-5   w-20 bg-orange-200 flex-col rounded-lg px-5 py-3`}
                        >
                            <AppText
                                style={apptw`text-white text-3 text-center`}
                            >
                                29
                            </AppText>
                            <AppText
                                style={apptw`text-white text-3 text-center `}
                            >
                                Tue
                            </AppText>
                            <View
                                style={{
                                    borderBlockColor: "white",
                                    borderBottomWidth: StyleSheet.hairlineWidth
                                }}
                            />
                            <AppText
                                style={apptw`text-white text-3  text-center`}
                            >
                                2:00 PM
                            </AppText>
                        </View>

                        <View
                            style={apptw`mx-5 my-5  flex-col rounded-lg `}

                        >
                            <AppText
                                style={apptw`text-white`}
                            >
                                Pending appointment
                            </AppText>

                            <AppText>
                                Tanvir Ahmed
                            </AppText>
                            <AppText>
                                High Blood Pressure
                            </AppText>

                            <View
                                style={apptw`flex-row justify-between`}
                            >
                                <AppText
                                    style={apptw`text-white text-[10px]`}
                                >
                                    <Foundation name="clock" size={10} color="white" />
                                    {" "}0:01:20
                                </AppText>

                                <View
                                    style={apptw`bg-white rounded-full`}
                                >
                                    <AppText
                                        style={apptw`text-[10px] text-purple-800  px-4`}
                                    >
                                        View Patient →
                                    </AppText>
                                </View>
                            </View>
                        </View>


                    </View>
                </View>
            </ScrollView>

        </View>
    )

}

export default InfoCarousel2