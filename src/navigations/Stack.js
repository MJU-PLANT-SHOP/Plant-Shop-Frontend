import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/ProductScreen";
import Category from "../screens/Category";
import Cart from "../screens/Cart";
import ListScreen from "../screens/ListScreen";
import cateScreen from "../screens/CateScreen";
import { getFonts } from "../constants/theme";
import purchasePay from "../screens/Purchase";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Mypage from "../screens/Mypage";
import { Image, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomePageScreen from "../screens/HomePageScreen";

//MobileProject\src\screens\ProductScreen.js

const Stack = createStackNavigator();

const StaclNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}

        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="HomePageScreen"
        component={HomePageScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="cateScreen"
        component={cateScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="상품 페이지"
        component={ProductScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="장바구니"
        component={Cart}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="listScreen"
        component={ListScreen}
        //options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="purchase"
        component={purchasePay}
        //options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        component={SignUp}

        //options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name="Mypage"
        component={Mypage}

        //options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
function LogoTitle() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Mypage")}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/icons/user.png")}
        />
        <Text style={{ fontSize: 10 }}>MyPage</Text>
      </View>
    </Pressable>
  );
}
export default StaclNavigation;
