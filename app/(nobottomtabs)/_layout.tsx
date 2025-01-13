import { Link } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
    return <View >
        <View style={{backgroundColor:"black"}}>
        <Link href={".."} style={{color:"white"}}>Go Back</Link>
        </View>
        
    </View>
}