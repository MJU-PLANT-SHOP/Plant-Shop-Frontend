import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native"
import { COLORS, SIZES, icons, images } from "../constants"
import { getFonts } from "../constants/theme";

const CateScreen = ({ navigation }) => {
  const featuresData = [
    {
      id: 1,
      icon: icons.cactus,
      color: COLORS.purple,
      backgroundColor: COLORS.lightpurple,
      description: "선인장"
    },
    {
      id: 2,
      icon: icons.air,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightyellow,
      description: "정화식물"
    },
    {
      id: 3,
      icon: icons.pot,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: "분재"
    },
    {
      id: 4,
      icon: icons.flower,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: "꽃"
    }
  ]

  const specialPromoData = [
    {
      id: 1,
      img: images.inner,
      title: "실내에서 멋지게 식물을 키우는 현실적인 방법",
      description: "집을 좀 꾸며볼까"
    },
    {
      id: 2,
      img: images.water,
      title: "식물이 좋아하는 물주기 방법",
      description: "어떻게 물을 줘야 제대로 주는 걸까"
    },
    {
      id: 3,
      img: images.sun,
      title: "우리집은 햇빛이 잘 들어오지 않습니다만",
      description: "어느곳에서나 식물을 잘 키우는 사람들의 특징"
    },
    {
      id: 4,
      img: images.cactus,
      title: "선인장이 레고처럼 가족을 만드는 이유",
      description: "혼자보다는 함께를 선택한 선인장의 생존전략"
    },
  ]

  const [features, setFeatures] = React.useState(featuresData)
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
        <View style={{ flex: 1 }}>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightGray
            }}
          >
            <Image
              source={icons.bell}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.secondary
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 5
              }}
            >
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 120,
          borderRadius: 20,
        }}
      >
        <Image
          source={images.banner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20
          }}
        />
      </View>
    )
  }

  function renderFeatures() {

    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        <Text style={{ }}>카테고리</Text>
      </View>
    )

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
        onPress={() => navigation.navigate("listScreen",{itemId : item.id})}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color
            }}
          />
        </View>
        <Text style={{ textAlign: 'center', flexWrap: 'wrap'}}>{item.description}</Text>
      </TouchableOpacity>
    )

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
    )
  }

  function renderPromos() {

    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    )

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: SIZES.padding
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{}}>매거진</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("View All")}
        >
          <Text style={{ color: COLORS.gray}}>View All</Text>
        </TouchableOpacity>
      </View>

    )

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
        >
          <Text style={{  }}>{item.title}</Text>
          <Text style={{ }}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{ marginBottom: 80 }}>
          </View>
        }
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderPromos()}
    </SafeAreaView>
  )
}

export default CateScreen;