import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../color/colors";
import {
  airPurifyPlantes,
  popular,
  flower,
  pot,
  cactus,
  products,
} from "../object/Object";
import cart from "./Cart";
import IconButton from "../component/IconButton";
const width = Dimensions.get("window").width / 2 - 30;

const ListScreen = ({ navigation, route }) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [categoryItem, setCategoryItem] = React.useState(popular);
  const categories = ["추천", "선인장", "정화식물", "분재", "꽃"];
  const { itemId } = route.params;
  useEffect(() => {
    setCategoryIndex(itemId);
    if (itemId === 0) {
      setCategoryItem(popular);
    } else if (itemId === 1) {
      setCategoryItem(cactus);
    } else if (itemId === 2) {
      setCategoryItem(airPurifyPlantes);
    } else if (itemId === 3) {
      setCategoryItem(pot);
    } else if (itemId === 4) {
      setCategoryItem(flower);
    }
  });

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              if (index === 0) {
                navigation.navigate("listScreen", { itemId: index });
              } else if (index === 1) {
                navigation.navigate("listScreen", { itemId: index });
              } else if (index === 2) {
                navigation.navigate("listScreen", { itemId: index });
              } else if (index === 3) {
                navigation.navigate("listScreen", { itemId: index });
              } else if (index === 4) {
                navigation.navigate("listScreen", { itemId: index });
              }
            }}
          >
            <Text
              style={[
                style.categoryText,
                categoryIndex === index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("상품 페이지", { object: plant })}
      >
        <View style={style.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: plant.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2)",
              }}
            >
              <Icon
                name="favorite"
                size={19}
                color={plant.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: "center",
            }}
          >
            <Image
              source={plant.image[0]}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginTop: 10,
              color: COLORS.fontGreen,
            }}
          >
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 15 }}>${plant.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, color: COLORS.green, fontWeight: "bold" }}
          >
            Plant Shop
          </Text>
        </View>
        <IconButton
          onPress={() => navigation.navigate("장바구니")}
        ></IconButton>

      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={categoryItem}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    margin: 20,
    justifyContent: "space-between",
  },
  categoryText: { fontSize: 16, color: "grey", fontWeight: "bold" },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginLeft: 30,
    marginTop: 40,
    marginRight: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListScreen;
