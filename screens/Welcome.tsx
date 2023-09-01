import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "./allroutes";
import React from "react";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import PressAppText from "../components/Display/PressAppText";


type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">



const Welcome = ({ navigation }: WelcomeProps) => {

    const navigatetoLogin = () => {
        navigation.navigate("SignIn")
    }

    const navigatetoSignUp = () => {
        navigation.navigate("SignUp")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    This is some nice text

                </Text>

            </View>

            <View
                style={styles.contentArea}
            >
                <View style={apptw`h-4/5 flex justify-between`}>
                  

                    <AppText style={apptw`text-lg max-w-[70] mt-7`}>

                    </AppText>

                    <View

                    >
                        <AppButton
                            text="Get Started"
                            buttonStyle={apptw.style("")}
                            onPress={navigatetoSignUp}
                        />
                        <AppText style={apptw`left-[19] mt-4 text-lg`}>
                            Have an account?{" "}

                            <PressAppText
                                style={apptw`text-primary text-center`}
                                onPress={navigatetoLogin}
                            >
                                Login
                            </PressAppText>
                        </AppText>


                    </View>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default Welcome



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logoArea: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    contentArea: {
        flex: 4,
        padding: 20,
    },
});