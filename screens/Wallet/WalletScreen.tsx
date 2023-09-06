import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import LoggedLayout from "../../components/Layout/LoggedLayout";
import apptw from "../../utils/lib/tailwind";
import AppText from "../../components/Display/AppText";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";




export default function WalletScreen() {
    return (
        <KeyboardAvoidingView
            style={apptw` flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BasicBackButtonLayout>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    style={apptw`px-6`}
                    contentContainerStyle={apptw.style(` `, {
                        flexGrow: 1
                    })}>

                    <View >
                        <AppText style={apptw`text-center text-2xl`}>Wallet</AppText>
                    </View>

                   

                </ScrollView>
            </BasicBackButtonLayout>
        </KeyboardAvoidingView>
    )
}