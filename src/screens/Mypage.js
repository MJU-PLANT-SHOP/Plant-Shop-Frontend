import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { loginUserList } from "./Login";
import { purchaseCount } from "./Purchase";

const { width: ScreenWidth } = Dimensions.get("window");
const { height: ScreenHeight } = Dimensions.get("window");

const Mypage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userContext}>
          <Image
            source={require("../assets/icons/icon-user-profile.png")}
            style={styles.userProfile}
          />
          <View style={styles.userNameRank}>
            <Text style={styles.userName}>{loginUserList[0].name} 님</Text>
            <Text
              style={{
                fontSize: 22,
                paddingHorizontal: 8,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              FAMILY
            </Text>
          </View>
        </View>
        <View style={styles.userInfoContext}>
          <Text style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}>
            회원정보
          </Text>
          <View style={[styles.userInfo, { marginTop: 20 }]}>
            <Text style={{ fontSize: 17, color: "gray", marginRight: 43 }}>
              이메일
            </Text>
            <Text style={{ fontSize: 17 }}>{loginUserList[0].email}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={{ fontSize: 17, color: "gray", marginRight: 28 }}>
              전화번호
            </Text>
            <Text style={{ fontSize: 17 }}>{loginUserList[0].phoneNumber}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={{ fontSize: 17, color: "gray", marginRight: 59 }}>
              주소
            </Text>
            <Text style={{ fontSize: 17 }}>{loginUserList[0].address}</Text>
          </View>
        </View>
        <View style={styles.service}>
          <View style={styles.event}>
            <View style={styles.eachEvent}>
              <Image
                source={require("../assets/icons/icon-coupon.png")}
                style={styles.coupon}
              />
              <Text style={{ fontSize: 15, color: "gray", marginTop: 10 }}>
                쿠폰
              </Text>
            </View>
            <View
              style={[
                styles.eachEvent,
                { paddingHorizontal: 0, borderLeftWidth: 1 },
              ]}
            >
              <Text style={{ fontSize: 25, marginTop: 10, fontWeight: "bold" }}>
                10000
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 29 }}>
                Plant Money
              </Text>
            </View>
            <View
              style={[
                styles.eachEvent,
                { paddingHorizontal: 30, borderLeftWidth: 1 },
              ]}
            >
              <Text style={{ fontSize: 25, marginTop: 10, fontWeight: "bold" }}>
                0
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 29 }}>
                포인트
              </Text>
            </View>
          </View>
          <View style={styles.pointCard}>
            <Text
              style={{
                fontSize: 20,
                color: "#FFFFFF",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              포인트 카드
            </Text>
            <View
              style={{
                width: 40,
                height: 32,
                backgroundColor: "#FFFFFF",
                position: "absolute",
                top: 10,
                bottom: 20,
                right: 10,
                left: 290,
                borderRadius: 10,
                paddingLeft: 5,
                paddingVertical: 1,
              }}
            >
              <Image
                source={require("../assets/icons/icon-barcode.png")}
                style={[styles.coupon, { height: 30 }]}
              />
            </View>
          </View>
        </View>
        <View style={styles.order}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            주문/배송 조회
          </Text>
          <View style={styles.deliveryStatus}>
            <View style={styles.statusContext}>
              <Text
                style={{
                  fontSize: 50,
                  color: "#BDBDBD",
                  fontWeight: "bold",
                  marginBottom: -10,
                }}
              >
                {purchaseCount}
              </Text>
              <Text style={{ fontSize: 15 }}>결제완료</Text>
            </View>
            <Text style={{ fontSize: 15, marginHorizontal: 10 }}>▷</Text>
            <View style={styles.statusContext}>
              <Text
                style={{
                  fontSize: 50,
                  color: "#BDBDBD",
                  fontWeight: "bold",
                  marginBottom: -10,
                }}
              >
                0
              </Text>
              <Text style={{ fontSize: 15 }}>상품준비중</Text>
            </View>
            <Text style={{ fontSize: 15, marginHorizontal: 10 }}>▷</Text>
            <View style={styles.statusContext}>
              <Text
                style={{
                  fontSize: 50,
                  color: "#BDBDBD",
                  fontWeight: "bold",
                  marginBottom: -10,
                }}
              >
                0
              </Text>
              <Text style={{ fontSize: 15 }}>배송중</Text>
            </View>
            <Text style={{ fontSize: 15, marginHorizontal: 10 }}>▷</Text>
            <View style={styles.statusContext}>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  marginBottom: -10,
                }}
              >
                0
              </Text>
              <Text style={{ fontSize: 15 }}>배송완료</Text>
            </View>
          </View>
          <View style={styles.orderChoice}>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 30 }}>
              취소
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginRight: 10 }}>
              0
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
              |
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 30 }}>
              교환
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginRight: 10 }}>
              0
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
              |
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 30 }}>
              반품
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginRight: 10 }}>
              0
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
              |
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 30 }}>
              구매확정
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>0</Text>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            상품 리뷰 작성
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginTop: 8 }}>
            남겨주신 리뷰는 다른 고객들에게 큰 도움이 됩니다. 리뷰 작성 시,
            스페셜 리뷰{" "}
            <Text style={{ fontWeight: "bold", color: "black" }}>1,000</Text>원
            한달 사용 리뷰{" "}
            <Text style={{ fontWeight: "bold", color: "black" }}>500</Text>원의{" "}
            <Text style={{ fontWeight: "bold", color: "black" }}>
              Plant Money
            </Text>
            가 제공됩니다.
          </Text>
          <View style={styles.ableReview}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginRight: 100 }}
            >
              지금 작성 가능한 리뷰
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 5 }}>
              일반
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "gray",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              0
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 10 }}>
              |
            </Text>
            <Text style={{ fontSize: 15, color: "gray", marginRight: 5 }}>
              스페셜
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "gray",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              0
            </Text>
          </View>
          <View style={styles.userReview}>
            <Text style={{ fontSize: 15, color: "gray" }}>
              당신의 소중한 리뷰를 기다립니다.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "light-gray",
  },
  userContext: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 1,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userProfile: {
    height: 80,
    resizeMode: "cover",
    marginRight: 10,
  },
  userNameRank: {
    alignItems: "flex-start",
    marginLeft: 10,
  },
  userName: {
    fontSize: 30,
  },
  userInfoContext: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  userInfo: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  service: {
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  event: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  eachEvent: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    height: 130,
    width: "33%",
    borderColor: "gray",
  },
  coupon: {
    height: 60,
    resizeMode: "cover",
  },
  pointCard: {
    marginHorizontal: 20,
    backgroundColor: "#04B45F",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 60,
  },
  order: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
  },
  deliveryStatus: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 10,
  },
  statusContext: {
    alignItems: "center",
    width: 69,
  },
  orderChoice: {
    paddingHorizontal: 15,
    marginTop: 8,
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  review: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 1,
  },
  ableReview: {
    paddingHorizontal: 15,
    marginTop: 25,
    borderColor: "#BDBDBD",
    borderWidth: 0.7,
    width: "100%",
    height: 45,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  userReview: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
});
export default Mypage;
