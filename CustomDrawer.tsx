import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";

export default function CustomDrawer(props: any) {
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                paddingBottom: 40,
                paddingTop: 90,
                backgroundColor: "white",
                flex: 1,
                justifyContent: "space-between"
            }}
            {...props}
        >
            <View
                style={{
                    flexDirection: "column",
                    // padding: 
                    backgroundColor: "white",
                    alignItems: "center",
                }}

            >



            </View>

            <View
            >
                <DrawerItemList {...props} />
            </View>

            <View>
                <Text>
                    Logout
                </Text>
            </View>



        </DrawerContentScrollView>
    )
}