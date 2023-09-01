import { ScrollView, View } from "react-native"
import AppButton from "../components/Display/AppButton"
import AppText from "../components/Display/AppText"
import PressAppText from "../components/Display/PressAppText"
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout"
import apptw from "../utils/lib/tailwind"
import AppTextField from "../components/Input/AppTextField"
import tw from "twrnc"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "./allroutes"

import { useForm } from "react-hook-form"


import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"




type SignUpScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignUp"
>;

const SignUp = ({ navigation }: SignUpScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    // const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);

    // const dispatch = useDispatch<AppDispatch>();

    const navigateToSignIn = () => {
        navigation.navigate("SignIn")
    }



   

    

    return (
        <BasicBackButtonLayout>
            <>
                <View>

                </View>
                <ScrollView
                    style={tw`px-5 mt-5`}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-primary`}>
                            Sign Up
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center text-specpurple pb-5`}>
                            Let's begin your Anti-Social Adventure
                        </AppText>


                        <AppTextField
                            title="Username"


                            validationName="userName"
                            placeholder="username"
                        />

                        <AppTextField
                            title="Email"


                            validationName="email"
                            placeholder="email"
                        />

                        <AppTextField
                            title="Password"

                            validationName="password"

                            placeholder="***********"
                            isPassword={true}
                        />




                    </View>
                    <View style={apptw`mb-19`}>
                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Create Account"}
                            onPress={navigateToSignIn}
                        // text="Create Account"

                        />



                        <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                            Already have an account?{' '}


                            <PressAppText
                                onPress={navigateToSignIn}
                                style={apptw`text-primary top-[1]  `}>
                                Sign In
                            </PressAppText>



                        </AppText>


                    </View>
                </ScrollView>

            </>

        </BasicBackButtonLayout>
    )
}

export default SignUp