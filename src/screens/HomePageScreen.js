import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { images, icons, COLORS, SIZES } from "../constants";
import {
  airPurifyPlantes,
  cactus,
  flower,
  popular,
  pot,
} from "../object/Object";
import IconButton from "../component/IconButton";
import IconMenuButton from "../component/IconMenuButton";
import IconMyPageButton from "../component/IconMypageButton";
import { productApi } from "../api/Api";
import memberApi from "../api/Api";

import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

const Home = ({ navigation }) => {
  React.useEffect(() => {}, []);
  const [firstProductList, setFirstProductList] = useState([]);
  const [secondProductList, setSecondProductList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getSecondList = async () => {
      try {
        const response = await productApi.getProductListForHomepageSecondMenu();
        if (response.data.code === "1") {
          console.log(response.data.data);
          setSecondProductList(response.data.data);
        } else if (response.data.code === "13") {
          await memberApi.reissue();
          navigation.navigate("HomePageScreen");
        }
      } catch (error) {
        console.error(error);
        setMessage("오류가 발생했습니다. 다시 시도해주세요.");
        setModalVisible(true);
      }
    };
    const getFirstList = async () => {
      try {
        const response = await productApi.getProductListForHomepageFirstMenu();
        if (response.data.code === "1") {
          setFirstProductList(response.data.data);
        }
      } catch (error) {
        console.error(error);
        setMessage("오류가 발생했습니다. 다시 시도해주세요.");
        setModalVisible(true);
      }
    };
    getFirstList();
    getSecondList();
  }, []);
  const renderItem = ({ item }) => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: SIZES.base,
      }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        resizeMode="cover"
        style={{
          width: SIZES.width * 0.23,
          height: "82%",
          borderRadius: 15,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: "17%",
          right: 0,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text style={{ color: COLORS.white }}>{item.name}</Text>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: "15%",
          left: 7,
        }}
        onPress={() =>
          navigation.navigate("상품 페이지", { productId: item.id })
        }
      >
        <Image
          source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Today's Share */}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding * 2,
              marginHorizontal: SIZES.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  justifyContent: "flex-start",
                  marginRight: 210,
                }}
              >
                새로운 식물
              </Text>
              <IconButton
                style={{ justifyContent: "flex-end" }}
                onPress={() => navigation.navigate("장바구니")}
              ></IconButton>
              <IconMyPageButton
                style={{ justifyContent: "flex-end" }}
                onPress={() => navigation.navigate("Mypage")}
              ></IconMyPageButton>
              <IconMenuButton
                onPress={() => navigation.navigate("cateScreen")}
              ></IconMenuButton>
            </View>

            <View style={{ marginTop: SIZES.base }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={firstProductList}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View
            style={{
              height: 250,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: COLORS.white,
            }}
          >
            <View
              style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: COLORS.secondary }}>오늘의 추천상품</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  height: "88%",
                  marginTop: SIZES.base,
                }}
              >
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[0].id,
                      })
                    }
                  >
                    {secondProductList[0] ? (
                      <Image
                        source={{ uri: secondProductList[0].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[1].id,
                      })
                    }
                  >
                    {secondProductList[1] ? (
                      <Image
                        source={{ uri: secondProductList[1].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[2].id,
                      })
                    }
                  >
                    {secondProductList[2] ? (
                      <Image
                        source={{ uri: secondProductList[2].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View
            style={{
              height: 300,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: COLORS.white,
            }}
          >
            <View
              style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "88%",
                  marginTop: SIZES.base,
                }}
              >
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[3].id,
                      })
                    }
                  >
                    {secondProductList[3] ? (
                      <Image
                        source={{ uri: secondProductList[3].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[4].id,
                      })
                    }
                  >
                    {secondProductList[4] ? (
                      <Image
                        source={{ uri: secondProductList[4].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[5].id,
                      })
                    }
                  >
                    {secondProductList[5] ? (
                      <Image
                        source={{ uri: secondProductList[5].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 300, backgroundColor: COLORS.lightGray }}>
          <View
            style={{
              height: 250,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: COLORS.white,
            }}
          >
            <View
              style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: "88%",
                  marginTop: SIZES.base,
                }}
              >
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[6].id,
                      })
                    }
                  >
                    {secondProductList[6] ? (
                      <Image
                        source={{ uri: secondProductList[6].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[7].id,
                      })
                    }
                  >
                    {secondProductList[7] ? (
                      <Image
                        source={{ uri: secondProductList[7].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        productId: secondProductList[8].id,
                      })
                    }
                  >
                    {secondProductList[8] ? (
                      <Image
                        source={{ uri: secondProductList[8].imageUrl }}
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                          borderColor: COLORS.green,
                          borderWidth: 2,
                        }}
                      />
                    ) : (
                      <ActivityIndicator size="small" color={COLORS.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
