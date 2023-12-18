import React, { useEffect, useState } from "react";
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
import productApi from "../api/ProductApi";
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("window").width / 2 - 30;

const ListScreen = ({ navigation, route }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryItem, setCategoryItem] = useState([]);
  const categories = ["선인장", "정화식물", "분재", "꽃"];
  const { itemId, category } = route.params;

  const fetchProductList = async category => {
    try {
      const response = await productApi.getProductList(category);
      if (response.data.code === "1") {
        setCategoryItem(response.data.data);
        console.log(response.data.data[0].id);
      }
    } catch (error) {
      console.error(error);
      setMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setModalVisible(true);
    }
  };

  useEffect(() => {
    setCategoryIndex(itemId);
    fetchProductList(category);
  }, [itemId]);

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              if (index === 0) {
                navigation.navigate("listScreen", {
                  itemId: index,
                  category: "CACTUS",
                });
              } else if (index === 1) {
                navigation.navigate("listScreen", {
                  itemId: index,
                  category: "AIR_PURITY_PLANT",
                });
              } else if (index === 2) {
                navigation.navigate("listScreen", {
                  itemId: index,
                  category: "POT",
                });
              } else if (index === 3) {
                navigation.navigate("listScreen", {
                  itemId: index,
                  category: "FLOWER",
                });
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
    const imageUrl = plant.imageUrl;
    console.log(imageUrl);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("상품 페이지", { productId: plant.id })
        }
      >
        <View style={style.card}>
          <Image
            source={{ uri: imageUrl }}
            style={{
              flex: 1,
            }}
          />
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
    width: width / 1.08,
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
