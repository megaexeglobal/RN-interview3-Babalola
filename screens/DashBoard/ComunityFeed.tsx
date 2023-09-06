import { View, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import apptw from "../../utils/lib/tailwind"




const CommunityFeed = () => {
    return (
        <View
            style={apptw`mt-2`}
        >

            <ScrollView
                horizontal={true}
                style={apptw``}
            >
                <View
                    style={apptw` mx-3`}
                >
                    <Image
                        source={require("../../assets/community_feed.png")}
                        style={{

                        }}
                    />
                </View>

                <View
                    style={apptw` mx-3`}
                >
                    <Image
                        source={require("../../assets/community_feed.png")}
                        style={{

                        }}
                    />
                </View>

                <View
                    style={apptw` mx-3`}
                >
                    <Image
                        source={require("../../assets/community_feed.png")}
                        style={{

                        }}
                    />
                </View>

            </ScrollView>


        </View>
    )
}
export default CommunityFeed

