import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { cactus, flower, pot, airPurifyPlantes } from "../object/Object";
//price, image, category, description, size
const Category = ({ navigation, route }) => {
  const items = airPurifyPlantes;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {items.map(item => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() =>
            navigation.navigate("상품 페이지", {
              object: item,
            })
          }
        ></Button>
      ))}
      <Button
        title="purchase"
        onPress={() => navigation.navigate("purchase", { object: items[0] })}
      ></Button>
      <Button title="list" onPress={() => navigation.navigate("list")}></Button>
      <Button title="Cate" onPress={() => navigation.navigate("Cate")}></Button>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate("SignUp")}
      ></Button>
      <Button
        title="categoryScreen"
        onPress={() => navigation.navigate("cateScreen")}
      ></Button>
      <Button
        title="ListScreen"
        onPress={() => navigation.navigate("listScreen")}
      ></Button>
      <Button
        title="장바구니"
        onPress={() => navigation.navigate("장바구니")}
      ></Button>
      <Button
        title="Mypage"
        onPress={() => navigation.navigate("Mypage")}
      ></Button>
    </View>
  );
};
export default Category;
