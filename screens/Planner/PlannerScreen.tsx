
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import apptw from "../../utils/lib/tailwind"
import { View } from "react-native"
import AppText from "../../components/Display/AppText"

const PlannerScreen = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <LoggedInLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={apptw`px-4`}
                >



                    <View >
                        <AppText style={apptw`text-center text-2xl`}>Planner</AppText>
                    </View>
                </ScrollView>
            </LoggedInLayout>
        </GestureHandlerRootView>
    )
}

export default PlannerScreen