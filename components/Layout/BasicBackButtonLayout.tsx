import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Keyboard,
    Platform,
    Pressable,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import apptw from "../../utils/lib/tailwind";



type BasicBackButtonLayoutProp = {
    children: React.ReactNode;
};

const BasicBackButtonLayout = ({ children }: BasicBackButtonLayoutProp) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => (Platform.OS != "web" ? Keyboard.dismiss() : null)}
        >
            <SafeAreaView
                style={apptw`bg-secondary   flex-1 shadow-md`}
                edges={["top", "left", "right"]}
            >
                <Pressable
                    onPress={() => navigation.goBack()}
                    //  style={tw.style("py-2 px-3 ", )}
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'transparent', // Make the background transparent
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: 'gray', // Set the border color to gray
                        borderWidth: 1, // Set the border width to 3
                        marginTop:5,
                        marginLeft:15
                    }}
                >
                   <Ionicons 
                   name="ios-arrow-back-sharp" 
                   size={24} 
                   color="black" />
                </Pressable>

                {children}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default BasicBackButtonLayout;
