import { Foundation } from "@expo/vector-icons"
import { View, StyleSheet, Dimensions, Text } from "react-native"
import AppText from "../../components/Display/AppText"
import apptw from "../../utils/lib/tailwind"
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from "react";

interface Slide {
    id: number;
    content: JSX.Element;
}

const InfoCarousel = () => {

    const width = Dimensions.get('window').width;
    const [activeSlide, setActiveSlide] = useState(0);

    const { width: viewportWidth } = Dimensions.get('window');

    const sliderWidth = viewportWidth;
    const itemWidth = viewportWidth;



    const data = [
        {
            id: 1,

            content: (
                <View
                    style={apptw``}
                >
                    <View
                        style={apptw`bg-purple-800 h-40 rounded-xl  flex-row `}
                    >
                        <View
                            style={apptw`mx-5 my-5   w-20 bg-purple-400 flex-col rounded-lg px-5 py-3`}
                        >
                            <AppText
                                style={apptw`text-white text-3`}
                            >
                                29
                            </AppText>
                            <AppText
                                style={apptw`text-white text-3 `}
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
                                style={apptw`text-white text-3`}
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



            )
        },


        {
            id: 2,

            content: (
                <View
                    style={apptw``}
                >
                    <View
                        style={apptw`bg-red-800 h-40 rounded-xl  flex-row `}
                    >
                        <View
                            style={apptw`mx-5 my-5   w-20 bg-purple-400 flex-col rounded-lg px-5 py-3`}
                        >
                            <AppText
                                style={apptw`text-white text-3`}
                            >
                                29
                            </AppText>
                            <AppText
                                style={apptw`text-white text-3 `}
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
                                style={apptw`text-white text-3`}
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



            )
        }
    ]


    const renderItem = ({ item }: { item: Slide }) => item.content;
    return (

        <View
        style={apptw``}
        >


            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                containerCustomStyle={styles.carouselContainer}
                contentContainerCustomStyle={styles.carouselContentContainer}
                onSnapToItem={(index) => setActiveSlide(index)}
          />


            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />






        </View>

    )
}


const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
    },
    carouselContentContainer: {
        alignItems: 'center',
    },
    slide: {
        width: '100%',
        // Slide styles
    },
    paginationContainer: {
        position: 'absolute',
        top: 140,
        alignSelf: 'center',
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },

});


export default InfoCarousel