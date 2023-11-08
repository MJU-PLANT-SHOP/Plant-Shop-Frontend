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

const Home = ({ navigation }) => {
  React.useEffect(() => {}, []);

  // Render

  function renderNewPlants(item, index) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <Image
          source={item.image[0]}
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
          onPress={() => navigation.navigate("상품 페이지", { object: item })}
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
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginVertical: SIZES.base,
        width: SIZES.width / 2.5,
      }}
      onPress={() => navigation.navigate("상품 페이지", { object: item })}
    >
      <View
        style={{
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </View>

      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text style={{}}>{item.title}</Text>
        <Text style={{}}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* New Plants */}
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
                  marginRight: 230,
                }}
              >
                새로운 식물
              </Text>
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
                data={popular}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Today's Share */}
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

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("listScreen", { itemId: 0 })
                  }
                >
                  <Text style={{ color: COLORS.secondary }}>See All</Text>
                </TouchableOpacity>
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
                      navigation.navigate("상품 페이지", { object: flower[2] })
                    }
                  >
                    <Image
                      source={flower[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", { object: cactus[2] })
                    }
                  >
                    <Image
                      source={cactus[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", {
                        object: airPurifyPlantes[2],
                      })
                    }
                  >
                    <Image
                      source={airPurifyPlantes[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
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
                      navigation.navigate("상품 페이지", { object: flower[3] })
                    }
                  >
                    <Image
                      source={flower[3].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", { object: flower[4] })
                    }
                  >
                    <Image
                      source={cactus[4].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", { object: cactus[3] })
                    }
                  >
                    <Image
                      source={cactus[3].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
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
                      navigation.navigate("상품 페이지", { object: pot[2] })
                    }
                  >
                    <Image
                      source={pot[2].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ flex: 1, marginTop: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", { object: pot[3] })
                    }
                  >
                    <Image
                      source={pot[3].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1.3 }}>
                  <TouchableOpacity
                    style={{ flex: 1, marginLeft: SIZES.font }}
                    onPress={() =>
                      navigation.navigate("상품 페이지", { object: flower[5] })
                    }
                  >
                    <Image
                      source={flower[5].image[0]}
                      resizeMode="cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                        borderColor: COLORS.green,
                        borderWidth: 2,
                      }}
                    />
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
