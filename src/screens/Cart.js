import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { priceToInt } from "../object/Object";
import Button, { ButtonTypes } from "../component/PurchaseButton";
import BasicButton from "../component/BasicButton";

import axios from "axios";
import {cartApi} from "../api/Api";
import memberApi from "../api/Api";
const fetchData = async (setItems, navigation) => {
  try {
    const response = await cartApi.getCartList();
    if (response.data.code === "1") {
      const cartItems = response.data.data.map(item => ({
        productId: item.productId,
        productName: item.productName,
        count: item.count,
        price: item.price,
      }));
      setItems(cartItems);
    } else if(response.data.code === "13") {
      await tokenUpdate(navigation);
      await fetchData();
    } else {
      console.log(response.data.code);
      console.log(response);
      // setErrorMessage("장바구니 목록 가져오기에 실패했습니다.");
      // setModalVisible(true);
    }
  } catch (error) {
    console.log(error);
  }
};
const Item = ({ item, index, onDelete, navigation }) => {
  const [renderPrice, setRenderPrice] = useState(item.price*item.count);
  const [num, setNum] = useState(item.count);
  const { width: SCREEN_WIDTH } = Dimensions.get("window");

  useEffect(() => {
    setNum(item.count);
    setRenderPrice(item.price*num);
  }, [item.count, item.price]);

  if (num < 1) {
    setNum(1);
    setRenderPrice(item.price);
    item.count = 1;
  }
  if (num > 10) {
    setNum(10);
    setRenderPrice(item.price * 10);
    item.count = 10;
  }
  const setPlusValue = async () => {
    try {
      const newNum = item.count + 1;
      if(newNum<=10) {
        const response = await cartApi.updateCartItem({
          "productId": item.productId,
          "count": newNum,
        });
        if (response.data.code === "1") {
          setRenderPrice(item.price * newNum);
          item.count = newNum;
        } else if (response.data.code === "13") {
          await tokenUpdate(navigation);
          await setPlusValue();
        } else if (response.data.code === "30") {
          console.error("존재하지 않는 장바구니 아이템입니다.");
        } else {
          console.error("알 수 없는 오류 발생.");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const setMinusValue = async () => {
    try {
      const newNum = item.count - 1;
      if(newNum>0) {
        const response = await cartApi.updateCartItem({
          "productId": item.productId,
          "count": newNum,
        });
        if (response.data.code === "1") {
          setRenderPrice(item.price * newNum);
          item.count = newNum;
        } else if (response.data.code === "13") {
          await tokenUpdate(navigation);
          await setMinusValue();
        } else if (response.data.code === "30") {
          console.error("존재하지 않는 장바구니 아이템입니다.");
        } else {
          console.error("알 수 없는 오류 발생.");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <View
          style={{
            flexDirection: "row",
            width: SCREEN_WIDTH,
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 30,
            marginBottom: 5,
          }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{"이름: " + item.productName}</Text>
          <Text style={{ fontSize: 20 }}>{"수량: " + item.count}</Text>
          <Text style={{ fontSize: 20 }}>
            {"가격: " + (item.price*item.count).toLocaleString() + "원"}
          </Text>
        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
        >
          <BasicButton
              title="+"
              onPress={() => setPlusValue()}
              style={styles.button}
          ></BasicButton>
          <BasicButton
              title="-"
              onPress={() => setMinusValue()}
              style={styles.button}
          ></BasicButton>
          <BasicButton
              title="삭제"
              onPress={() => {
                onDelete(index);
              }}
              style={styles.button}
          ></BasicButton>
        </View>
      </View>
  );
};

const Cart = ({ navigation }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData(setItems, navigation);
  }, []);

  const handleDelete = async index => {
    try {
      const response = await cartApi.deleteCartItem(items[index].productId);
      if (response.data.code === "1") {
        fetchData(setItems, navigation);
      } else if (response.data.code === "13") {
        await tokenUpdate(navigation);
        await handleDelete(index);
      } else if (response.data.code === "30") {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let totalPrice = 0;
  const cartToPurchase = () => {
    for (let i = 0; i < items.length; i++) {
      totalPrice = totalPrice + items[i].price * items[i].count;
    }
    navigation.navigate("purchase", {
      object: items,
      price: totalPrice,
    });
    totalPrice = 0;
  };
  return (
      <View style={{ flex: 10 }}>
        <ScrollView
            contentContainerStyle={[styles.scrollViewContext]}
            showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {items.map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    index={index}
                    productId={item.productId}
                    productName={item.productName}
                    count={item.count}
                    price={item.price}
                    onDelete={handleDelete}
                />
            ))}
          </View>
        </ScrollView>
        <View style={styles.puchaseButton}>
          <Button
              buttonType={ButtonTypes.BUY}
              title="장바구니 상품 결제하기"
              onPress={() => cartToPurchase()}
              buttonStyle={styles.buyButton}
              textStyle={styles.deviceText}
              priceStyle={styles.priceText}
          />
        </View>
      </View>
  );
};
const tokenUpdate = async (navigation) => {
  try {
    const accessToken = await AsyncStorage.getItem('access-token');
    const refreshToken = await AsyncStorage.getItem('refresh-token');
    const updateTokenResponse = await memberApi.reissue({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    if (updateTokenResponse.data.code === "1") {
      const newAccessToken = updateTokenResponse.data.data.accessToken;
      const newRefreshToken = updateTokenResponse.data.data.refreshToken;

      await AsyncStorage.setItem('access-token', newAccessToken);
      await AsyncStorage.setItem('refresh-token', newRefreshToken);

    } else if(updateTokenResponse.data.code === "13"){
      console.error('토큰 업데이트 실패. 다시 로그인 부탁드립니다.');
      await AsyncStorage.clear();
      navigation.navigate("Login", {});
    }
  } catch (error) {
    console.error(error);
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  puchaseButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    backgroundColor: "(0,0,0,0.5)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buyButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fe7d67",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  priceText: {
    marginRight: 10,
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
    fontWeight: 700,
  },
  deviceText: {
    color: "#ffffff",
    //fontFamily: "Inter, sans-serif",
    fontSize: 20,
  },
  button: {
    backgroundColor: "lightgray",
    fontSize: 20,
  },
});
export default Cart;