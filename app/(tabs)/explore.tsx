import { Link } from "expo-router"
import { View, Text } from "react-native"

export default function Explore() {
    return <View>
        <Text>explore section</Text>
        <Link href={"/accountInfo"}>
            <Text>Account Information</Text>
        </Link>
    </View>
}
