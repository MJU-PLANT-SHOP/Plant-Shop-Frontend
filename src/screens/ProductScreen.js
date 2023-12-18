import { StatusBar } from "expo-status-bar";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import FooterButton from "../component/FooterButton";
import BasicButton from "../component/BasicButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { priceToInt, products } from "../object/Object";
import { productApi } from "../api/Api";
import { func } from "prop-types";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ProductScreen = ({ route, navigation }) => {
  const productId = route.params.productId;
  const [productObject, setProductObject] = useState(null);
  const [recommandList, setRecommandList] = useState([]);

  class ProductObject {
    constructor(data) {
      this.id = data.id;
      this.category = data.category;
      this.name = data.name;
      this.price = data.price;
      this.size = data.size;
      this.description = data.description;
      this.imageUrlList = data.imageUrlList;
    }
  }

  const getProduct = async productId => {
    try {
      const response = await productApi.getProduct(productId);
      if (response.data.code === "1") {
        const newProductObject = new ProductObject(response.data.data);
        setProductObject(newProductObject);
      } else if (response.data.code === "13") {
        await memberApi.reissue();
        navigation.navigate("상품 페이지", {
          productId: productId,
        });
      }
    } catch (error) {
      console.error(error);
      setMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setModalVisible(true);
    }
  };
  const getRecommandList = async productId => {
    try {
      const response = await productApi.getRecommendProductList(productId);
      if (response.data.code === "1") {
        setRecommandList(response.data.data);
      }
    } catch (error) {
      console.error(error);
      setMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setModalVisible(true);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getRecommandList(productId);
      await getProduct(productId);
    };

    fetchData();
  }, [productId]);

  // 1. 상품 객체의 n개의 이미지를 출력하는 함수와 변수
  let productImage = [];
  const renderImage = () => {
    for (let i = 0; i < productObject.imageUrlList.length; i++) {
      productImage.push(
        <View
          style={{
            width: SCREEN_WIDTH / 1,
            height: SCREEN_WIDTH / 1.05,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: productObject.imageUrlList[i] }}
            style={{
              width: SCREEN_WIDTH / 1.04,
              height: SCREEN_WIDTH / 1.05,
              borderBottomLeftRadius: 95,
              borderBottomRightRadius: 95,
            }}
          />
        </View>
      );
    }
    return productImage;
  };
  // 1번 함수 끝

  // 2번 함수: 상품의 같은 카테고리 상품 5개 랜덤으로 선택

  const renderRecommand = () => {
    let tempItemArray = [];
    console.log(recommandList);
    for (let i = 0; i < recommandList.length; i++) {
      tempItemArray.push(
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderColor: "lightgray",
            borderWidth: 2,
            marginRight: 3,
            marginLeft: 3,
            borderRadius: 30,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("상품 페이지", {
                productId: recommandList[i].id,
              })
            }
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: recommandList[i].imageUrl }}
              style={{
                width: SCREEN_WIDTH / 3.3,
                height: SCREEN_WIDTH / 3.3,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              }}
            ></Image>
            <Text style={{ marginTop: 10, fontSize: 20 }}>
              {recommandList[i].name}
            </Text>
            <Text style={{ marginTop: 7, marginBottom: 7 }}>
              {recommandList[i].price}원
            </Text>
            <BasicButton
              title="상품 보기"
              style={{
                marginBottom: 15,
              }}
              onPress={() =>
                navigation.navigate("상품 페이지", {
                  productId: recommandList[i].id,
                })
              }
            ></BasicButton>
          </Pressable>
        </View>
      );
    }
    return tempItemArray;
  };

  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [productNum, setProductNum] = useState(1);
  if (productNum < 1) {
    setProductNum(1);
  } else if (productNum > 10) {
    setProductNum(10);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>

      {productObject && (
        <View style={{ flex: 10 }}>
          <ScrollView
            contentContainerStyle={[styles.scrollViewContext]}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightgray",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
                overflow: "hidden",
                paddingBottom: SCREEN_WIDTH / 47,
              }}
            >
              <ScrollView
                horizontal
                contentContainerStyle={[
                  styles.scrollView,
                  {
                    backgroundColor: "lightgray",
                  },
                ]}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              >
                {renderImage()}
              </ScrollView>
            </View>
            <View
              style={{
                paddingBottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <View style={{ backgroundColor: "lightgray", paddingBottom: 3 }}>
                <View
                  style={[styles.nameAndPrice, { backgroundColor: "white" }]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 15,
                    }}
                  >
                    <Text style={[styles.productName]}>
                      {productObject.name}
                    </Text>
                    <Text
                      style={[
                        styles.productName,
                        { fontSize: 15, marginLeft: 5 },
                      ]}
                    >
                      ({productObject.category})
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={[
                        styles.productName,
                        { color: "green", fontSize: 35 },
                      ]}
                    >
                      {productObject.price}원
                    </Text>
                    <Text
                      style={[
                        styles.productName,
                        { fontSize: 16, marginLeft: 5 },
                      ]}
                    >
                      무료배송
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.productName,
                      { fontSize: 16, marginBottom: 10 },
                    ]}
                  >
                    상품 사이즈: {productObject.size}
                  </Text>
                </View>

                <View style={{ backgroundColor: "white", marginTop: 3 }}>
                  <Text
                    style={[
                      styles.productName,
                      { fontSize: 25, marginTop: 10, marginBottom: 5 },
                    ]}
                  >
                    상품 설명
                  </Text>
                  <Text
                    style={[
                      styles.productName,
                      { fontSize: 15, marginBottom: 10 },
                    ]}
                  >
                    {productObject.description}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 3,
                marginBottom: 20,
              }}
            >
              <Text
                style={[
                  styles.productName,
                  {
                    fontSize: 20,
                    marginTop: 10,
                    marginBottom: 5,
                    paddingLeft: 20,
                  },
                ]}
              >
                동일 카테고리 추천 상품
              </Text>
              <ScrollView
                horizontal
                contentContainerStyle={[styles.scrollView]}
                //pagingEnabled
                showsHorizontalScrollIndicator={false}
                // indicatorStyle='white' ios에서만 작동
              >
                {renderRecommand()}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )}
      {productObject && (
        <View style={[styles.footer, { flex: 1 }]}>
          <FooterButton
            title="구매하기"
            onPress={() => setBuyModalVisible(true)}
            style={[styles.button, { borderTopRightRadius: 100 }]}
          ></FooterButton>
          <FooterButton
            title="장바구니"
            onPress={() => {
              setCartModalVisible(true);
            }}
            style={[
              styles.button,
              { borderTopLeftRadius: 100, backgroundColor: "tomato" },
            ]}
          ></FooterButton>
        </View>
      )}
      {productObject && (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={cartModalVisible}
            style={{}}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                setCartModalVisible(false);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity>
                    <View style={{}}>
                      <Text style={[styles.productName, { fontSize: 20 }]}>
                        이름: {productObject.name}
                      </Text>
                      <Text style={[styles.productName, { fontSize: 20 }]}>
                        수량: {productNum}개
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <BasicButton
                        title="+"
                        onPress={() => setProductNum(productNum + 1)}
                        style={[styles.modalButton]}
                      ></BasicButton>
                      <BasicButton
                        title="-"
                        onPress={() => setProductNum(productNum - 1)}
                        style={[styles.modalButton]}
                      ></BasicButton>
                    </View>
                    <BasicButton
                      style={styles.modalButton}
                      title="장바구니 담기"
                      onPress={async () => {
                        productObject.quantity = productNum;
                        let data = productObject;

                        const currentItems = await AsyncStorage.getItem("cart");
                        let updatedItems = currentItems
                          ? JSON.parse(currentItems)
                          : [];

                        let existsInCart = updatedItems.some(item => {
                          return item.id == productObject.id;
                        });

                        if (existsInCart) {
                          Alert.alert(
                            "",
                            "상품이 이미 장바구니에 존재합니다. 장바구니 페이지로 이동 하시겠습니까?",
                            [
                              {
                                text: "OK",
                                onPress: () => {
                                  navigation.navigate("장바구니");
                                },
                              },
                              {
                                text: "NO",
                                onPress: () => {
                                  setCartModalVisible(false);
                                },
                              },
                            ]
                          );
                          setCartModalVisible(false);
                        } else {
                          let updatedItems = currentItems
                            ? JSON.parse(currentItems)
                            : [];
                          updatedItems = [...updatedItems, data];
                          await AsyncStorage.setItem(
                            "cart",
                            JSON.stringify(updatedItems)
                          );
                          Alert.alert(
                            "",
                            "상품이 장바구니에 담겼습니다. 장바구니 페이지로 이동 하시겠습니까?",
                            [
                              {
                                text: "OK",
                                onPress: () => {
                                  navigation.navigate("장바구니");
                                },
                              },
                              {
                                text: "NO",
                                onPress: () => {
                                  setCartModalVisible(false);
                                },
                              },
                            ]
                          );
                        }

                        setCartModalVisible(false);
                        setProductNum(0);
                      }}
                    ></BasicButton>

                    <BasicButton
                      title="취소"
                      onPress={() => {
                        setCartModalVisible(false);
                        setProductNum(1);
                      }}
                      style={styles.modalButton}
                    ></BasicButton>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={buyModalVisible}
            style={{}}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                setBuyModalVisible(false);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity>
                    <View style={{}}>
                      <Text style={[styles.productName, { fontSize: 20 }]}>
                        이름: {productObject.name}
                      </Text>
                      <Text style={[styles.productName, { fontSize: 20 }]}>
                        수량: {productNum}개
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <BasicButton
                        title="+"
                        onPress={() => setProductNum(productNum + 1)}
                        style={styles.modalButton}
                      ></BasicButton>
                      <BasicButton
                        title="-"
                        onPress={() => setProductNum(productNum - 1)}
                        style={[styles.modalButton]}
                      ></BasicButton>
                    </View>

                    <BasicButton
                      style={styles.modalButton}
                      title="구매하기"
                      onPress={() => {
                        productObject.quantity = productNum;
                        let totalPrice =
                          priceToInt(productObject.price) * productNum;
                        object.push(productObject);
                        navigation.navigate("purchase", {
                          object: object,
                          price: totalPrice,
                        });
                        setBuyModalVisible(false);
                        setProductNum(1);
                      }}
                    ></BasicButton>

                    <BasicButton
                      title="취소"
                      onPress={() => {
                        setBuyModalVisible(false);
                        setProductNum(1);
                      }}
                      style={styles.modalButton}
                    ></BasicButton>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  productName: {
    fontSize: 40,
    paddingBottom: 5,
    textShadowColor: "rgba(0, 0, 0, 0.1)", // 그림자의 색상과 투명도
    textShadowOffset: { width: 2, height: 2 }, // 그림자의 위치 조정
    textShadowRadius: 30, // 그림자의 반경 조정
  },
  product: {
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: SCREEN_WIDTH / 2,
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  modalButton: {
    marginTop: 10,
    paddingRight: "auto",
  },
});
export default ProductScreen;
