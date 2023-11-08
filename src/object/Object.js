class product {
  constructor(name, id, price, image, category, description, size, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.description = description;
    this.size = size;
    this.like = false;
    this.quantity = quantity;
    this.favourite = false;
  }
}

export let airPurifyPlantes = [];
airPurifyPlantes.name = "공기정화식물";
export let cactus = [];
cactus.name = "다육식물";
export let flower = [];
flower.name = "꽃";
// export let flowerBox = [];
// flowerBox.name = "flowerBox";
export let pot = [];
pot.name = "분재";

export let products = [airPurifyPlantes, flower, cactus, pot];

airPurifyPlantes.push(
  new product(
    "금전수",
    0,
    "18,000",
    [
      require("./공기정화식물/image000.png"),
      require("./공기정화식물/image001.png"),
      require("./공기정화식물/image002.png"),
    ],
    "공기정화식물",
    "금전수는 그늘진 곳에서 잘 견디지만, 실내 밝은 간접광에서 키우는 것이 더 좋습니다. 환경 조건에 견디는 힘이 뛰어나고 과습한 상태에서 저온상태가 되면 뿌리가 썩기 쉽습니다. 수분이 많은 지하경을 가지고 광택이 있는 잎이 매력적인 선인장입니다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "녹보수",
    1,
    "38,000",
    [
      require("./공기정화식물/image010.png"),
      require("./공기정화식물/image011.png"),
    ],
    "공기정화식물",
    "녹색의 보석 나무라 하여 이름이 녹보수이며 많은 재복과 행운을 불러들인다는 설이 있는 식물입니다. 사무실이나 가정에서 통풍이 잘 되는 곳으로 반양지, 반그늘 간접광을 받을 수 있는 곳이 좋다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "몬스테라",
    2,
    "23,000",
    [
      require("./공기정화식물/image020.png"),
      require("./공기정화식물/image021.png"),
    ],
    "공기정화식물",
    "본래 몬스테라 크기는 상당히 큰 편에 속하여 가정에서 기르기에는 어려움이 있었으나 북유럽풍의 인테리어가 유행하면서 가정에서 키우는 비중이 늘어났다. 건조한 환경, 과습한 환경에서 모두 잘 자라나는 식물이기 때문에 얇은 잎으로 인하여 바람에 찢어지는 부분만 신경쓴다면 어느 위치에서든 잘 자란다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "뱅갈고무나무",
    3,
    "48,000",
    [
      require("./공기정화식물/image030.png"),
      require("./공기정화식물/image031.png"),
      require("./공기정화식물/image032.png"),
      require("./공기정화식물/image033.png"),
    ],
    "공기정화식물",
    "뱅갈고무나무는 더운 지역에서 성장하는 식물이기 때문에 가장 성장하기 좋은 온도는 25°C이다. 따라서 한겨울에는 반드시 실내로 옮겨서 최소한 10°C 이상의 온도를 유지해주는 것이 중요하다. 습도가 과한 환경을 피하고 반양지, 반음지의 환경을 유지해서 간접적인 햇빛이 드는 곳이 가장 좋은 위치이다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "크루시아",
    4,
    "29,000",
    [
      require("./공기정화식물/image040.png"),
      require("./공기정화식물/image041.png"),
      require("./공기정화식물/image042.png"),
    ],
    "공기정화식물",
    "크루시아는 열대 식물인만큼, 따뜻한 열대성 기후에서 키워주시는 것이 좋다. 크루시아키우기의 적정 온도는 16~29°C이며, 겨울에는 10~13°C 이다. 크루시아는 습도에도 강한 식물이라 잎을 젖은 수건으로 자주 닦아주시거나잎에 스프레이해주시는 것도 좋다",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "테이블야자",
    5,
    "11,000",
    [require("./공기정화식물/image050.png")],
    "공기정화식물",
    "테이블야자는 열대 우림에서 사는 관엽식물로 멕시코 남쪽에서 자라는 식물이다. 야자는 기본적으로 키가 굉장히 크나 테이블 야자는 그 중에서 작은 편에 속한다. 실내에서 키울 경우 최대 2미터까지 성장하며 다른 식물에 비해서 햇빛과 습도의 영향을 덜 받기 때문에 키우기 쉬운 편에 속하며 겨울에는 반드시 실내에 들여놓아야 한다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "홍콩야자",
    6,
    "10,000",
    [require("./공기정화식물/image060.png")],
    "공기정화식물",
    "홍콩야자는 햇빛이 은은하게 들어오는 반양지 또는 반음지에서 건강하게 자란다. 또한 통풍이 잘 되는 곳에서 잎이 시들지 않게 하고 줄기가 곧게 자라게 키우는 것이 중요하다. 10년 정도 꾸준히 키운다면 1년동안 꽃대가 나오며 꽃이 지면 열매도 볼 수 있는 매력적인 식물이다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "스투키",
    7,
    "21,000",
    [
      require("./공기정화식물/image070.png"),
      require("./공기정화식물/image071.png"),
    ],
    "공기정화식물",
    "스투키가 잘 자라기 위해서는 햇볕에 두고 좀 더 물을 자주 주어야 한다. 스투키의 새순이 자랄 때 특히 많은 양의 햇빛과 적당한 물을 필요로 하는데 이때 햇빛과 물을 제공해주지 않으면 잘 자라지 못한다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "아레카야자",
    8,
    "52,000",
    [
      require("./공기정화식물/image080.png"),
      require("./공기정화식물/image081.png"),
      require("./공기정화식물/image082.png"),
    ],
    "공기정화식물",
    "아레카야자는 실내 공기 중에 있는 본드, 니스, 페인트, 합판 등에서 나오는 휘발성 유기 화합물질 및 담배연기 등을 흡수하는데 탁월한 효과가 있다. 따라서 새롭게 인테리어를 끝낸 사무실 공간이나 새로 입주한 집에서 나타나는 새집 증후군을 막아주는데 도움이 된다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "스킨답서스",
    9,
    "14,000",
    [
      require("./공기정화식물/image090.png"),
      require("./공기정화식물/image091.png"),
    ],
    "공기정화식물",
    " 스킨답서스는 병해충에 대한 저항력이 무척 강합니다. 어떤 실내조건에도 적응력이 뛰어나므로 실내에서 기르기 적합한 식물입니다. 인체에 해로운 일산화탄소와 폼알데하이드를 제거하는 공기 정화 능력도 우수하여 실내 식물로 많은 이들의 인기를 끌고있는 식물입니다.",
    "Small"
  )
);

flower.push(
  new product(
    "호접란",
    10,
    "123,000",
    [require("./꽃/image000.png"), require("./꽃/image001.png")],
    "꽃",
    "호접란은 동남아시아 나무에 붙어사는 음지성 착생 난초입니다. 잎의 생김새는 우리나라 자생난초 나도풍란과 비슷하게 생겼으나 꽃은 조금 다릅니다. 화색은 백색, 황색, 분홍, 자주가 많으며 여러 색이 섞인 꽃들도 많아 품종이 다양합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "라일락",
    11,
    "19,500",
    [require("./꽃/image010.png"), require("./꽃/image011.png")],
    "꽃",
    "라일락은 꿀풀목 물푸레나무과의 낙엽 활엽 소교목입니다. 수수꽃다리속의 다른 종 식물을 부르는 말로 쓰이기도 합니다. 유럽 남동부 발칸반도가 원산지이며, 온대 아시아에 걸친 지방에서 많이 가꿉니다. 따라서 따뜻한 온도의 햇빛이 잘 드는 실내에서 키우는 것이 좋습니다.",
    "medium"
  )
);
flower.push(
  new product(
    "수국",
    12,
    "15,500",
    [
      require("./꽃/image020.png"),
      require("./꽃/image021.png"),
      require("./꽃/image022.png"),
    ],
    "꽃",
    "수국은 동아시아 원산의 갈잎 떨기나무입니다. 수국 꽃송이는 분단화 또는 수구화라고 불리기고 하고, 백거이와 관련되어 자양화나 팔선화라고 하기도 합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "시클라멘",
    13,
    "17,500",
    [require("./꽃/image030.png")],
    "꽃",
    "시클라멘은 독특한 화형과 겨울동안 실내에서 오래 꽃을 감상할 수 있고 저온건조한 겨울의 실내환경에서 잘 견디며 겨울동안 재배가 용이한 장점이 있어 겨울분화로 각광을 받고 있다.",
    "medium"
  )
);
flower.push(
  new product(
    "안스리움",
    14,
    "16,000",
    [
      require("./꽃/image040.png"),
      require("./꽃/image041.png"),
      require("./꽃/image042.png"),
    ],
    "꽃",
    "안스리움은 고온 고습에서 찌듯이 키우는 방법과 실습에서 적당히 키우는 방식으로 나눌 수 있다. 고온 고습의 경우는 까다로운 종을 관리하기 위해 온실에 넣고 온습도 맞춰서 키우는 방식이 주가 되며, 식물등과 함께 온실에서 고광량으로 키운다. 이렇게 키운 안스리움은 잎에 물이 맺혀서 잎 끝이 타는 현상이 적고 성장이 보다 빠르다.",
    "medium"
  )
);
flower.push(
  new product(
    "장미",
    15,
    "13,000",
    [require("./꽃/image050.png"), require("./꽃/image051.png")],
    "꽃",
    "장미과 장미속의 관목을 통틀어 이르는 말이다. 높이는 2~3m이며 잎은 어긋나고 깃 모양으로, 5~6월에 담홍색, 담자색, 흰색 등의 꽃이 피고는 한다. 개량 품종이 많은 관상 꽃나무이다. 북반구의 온대와 아한대에 주로 분포한다. 장미는 광을 매우 좋아하는 식물이며 물빠짐이 좋고 공기유통이 비옥한 사양토에서 잘 자란다.",
    "medium"
  )
);
flower.push(
  new product(
    "카네이션",
    16,
    "24,000",
    [
      require("./꽃/image060.png"),
      require("./꽃/image061.png"),
      require("./꽃/image062.png"),
    ],
    "꽃",
    "물을 좋아하기 때문에 카네이션 화분은 흙이 항상 촉촉하게 젖어있는 상태를 유지해야 한다. 다만 꽃과 잎에 직접 물을 뿌려주면 잎이 물러 버리고 좋지 않기 때문에 화분 아래가 물에 잠기게 담가두는 저면관수 방식으로 물을 주면 된다. 때마다 물을 부어줄 필요가 없어서 오히려 편하다.",
    "medium"
  )
);
flower.push(
  new product(
    "튤립",
    17,
    "12,500",
    [require("./꽃/image070.png")],
    "꽃",
    "튤립은 네덜란드의 국화이기도 하며 네덜란드하면 떠오르는 꽃이지만, 사실 야생 튤립의 원산지는 중앙아시아 파미르고원이다. 튤립은 한국의 덥고 습한 여름을 견디지 못하고 녹거나 썩어 사라지는 경우가 대부분이다.",
    "small"
  )
);
flower.push(
  new product(
    "프리지아",
    18,
    "26,000",
    [
      require("./꽃/image080.png"),
      // require("./꽃/image081.png"),
      require("./꽃/image082.png"),
    ],
    "꽃",
    "꽃 프리지아는 처음 발견한 학자가 자신의 연구를 계속 도왔던 친구의 이름을 따서 지은 이름이며, 학명은 Freesia refracta Klatt이다. 색깔은 노란색이 대표적이지만 그 외에도 흰색, 빨간색, 보라색, 자주색, 분홍색 등 여러 가지 색이 있다. ",
    "small"
  )
);
flower.push(
  new product(
    "해바라기",
    19,
    "21,000",
    [require("./꽃/image090.png")],
    "꽃",
    "해바라기는 중앙아메리카가 원산지인 한해살이풀로, 해를 닮은 노란 꽃이 상당히 인상적인 식물이다.",
    "medium"
  )
);

cactus.push(
  new product(
    "귀면각",
    20,
    "144,000",
    [require("./다육식물/image000.png"), require("./다육식물/image001.png")],
    "다육식물",
    "귀면각은 잎이 없고 가시가 많은 다육 식물이다. 봄이면 해 질 녘에 꽃이 피고 아침이 되면 시든다. 과거에는 목재와 건축용으로 사용되거나 가뭄이 들었을 때 가축의 사료로 사용되었다. 지금은 울타리나 장식으로 사용한다.",
    "large"
  )
);
cactus.push(
  new product(
    "하월시아",
    21,
    "27,000",
    [require("./다육식물/image010.png")],
    "다육식물",
    "하월시아는 별 모양으로 자라는 게 특징으로, 영어로는 '별 선인장(Star cactus)'이라고 불린다. 남아프리카 공화국 웨스트 케이프 주의 특정한 지역을 원산지로 두지만 현재는 널리 재배된다. 꽃은 약 50cm 높이의 꽃차례를 이루며 핀다.",
    "small"
  )
);
cactus.push(
  new product(
    "금양환",
    22,
    "25,000",
    [require("./다육식물/image020.png"), require("./다육식물/image021.png")],
    "다육식물",
    "줄기는 단생 후 군생하며, 둥글넓적하고, 녹황색, 높이 6~15cm, 지름 5~12cm이다. 혹줄기는 피라미드 모양이고, 엽액은 솜털로 덮이며, 꽃이 피는 자리도 솜털로 덮인다. 햇빛이 잘 들지 않는 곳에 두어도 좋으며, 6년이 지나야 성숙해진다.",
    "small"
  )
);
cactus.push(
  new product(
    "아가베",
    23,
    "112,000",
    [
      require("./다육식물/image030.png"),
      require("./다육식물/image031.png"),
      require("./다육식물/image032.png"),
    ],
    "다육식물",
    "스페인어로 아가베라는 이름을 하는 다육식물이다. 넓은 로제트형으로 나는 잎과 잎 끝에 있는 큰 가시가 특징입니다. 또한, 햇빛에 강한 내성이 있습니다.",
    "large"
  )
);
cactus.push(
  new product(
    "알로에",
    24,
    "31,000",
    [require("./다육식물/image040.png"), require("./다육식물/image041.png")],
    "다육식물",
    "생명력이 좋고 병충해에 강하여 재배가 수월한 편이지만, 겨울에는 동해에 걸리지 않도록 주의하여야 합니다. 화장품 원료, 식용 등 다양한 용도로 활용되고 있습니다.",
    "medium"
  )
);
cactus.push(
  new product(
    "에케베리아",
    25,
    "24,500",
    [require("./다육식물/image050.png"), require("./다육식물/image051.png")],
    "다육식물",
    "에케베리아는 손이 덜 가는 관상용 다육식물이며, 돌멩이 사이, 컨테이너, 또는 지붕 조경에서 발견됩니다. 이들은 땅을 낮게 덮는 식물로 최고이며, 실내용 화초로 키울 수도 있습니다.",
    "small"
  )
);
cactus.push(
  new product(
    "용신목",
    26,
    "15,000",
    [require("./다육식물/image060.png"), require("./다육식물/image061.png")],
    "다육식물",
    "용신목(Myrtillocactus geometrizans)은 멕시코 북부와 중부가 원산지인 선인장이다. 용신목의 열매는 멕시코에서 소비자에게 판매되는 식용 과일이다. 이 종은 관상용으로 재배되며 빠르게 자라는 내한성으로 간주된다.",
    "small"
  )
);
cactus.push(
  new product(
    "유포르비아",
    27,
    "44,500",
    [
      require("./다육식물/image070.png"),
      require("./다육식물/image071.png"),
      require("./다육식물/image072.png"),
    ],
    "다육식물",
    "유포르비아(Euphorbia lactea)는 열대 아시아 중에서도 특히 인도가 원산지인 등대풀속 식물이다. 제금 유포르비아는 일반적으로 열대 지역에서 관상용으로 심고 온대 지역에서 실내용 화초로 재배된다.",
    "medium"
  )
);
cactus.push(
  new product(
    "크라슐라",
    28,
    "27,000",
    [require("./다육식물/image080.png")],
    "다육식물",
    "크라슐라의 이름은 확장을 뜻하는 라틴어 'expansa'에서 유래했다. 속명에서 'fragilis'는 섬세하고 연약한 식물의 모습을 가리킨다. 줄기는 가늘며 꽃은 흰색이나 옅은 핑크색으로 피어난다.",
    "medium"
  )
);
cactus.push(
  new product(
    "파키피덤",
    29,
    "44,500",
    [require("./다육식물/image090.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);

pot.push(
  new product(
    "느릅나무",
    30,
    "244,500",
    [require("./분재/image000.png")],
    "분재",
    "동아시아에 자생하는 낙엽 활엽수이다. 열매는 날개가 달려있어 바람을 타고 이동할 수 있으며, 느릅나무와 아주 비슷한 당느릅나무는 이 열매에 돌기가 돋았다. 잎을 씹으면 끈적끈적하다. 줄기와 잎에서 즙이 나오고 소침 같다고 소춤나무라고도 한다. 잎과 어린 순을 따서 된장국을 끓이고 떡을 만들 수 있다. 열매는 느릅나무 장을 담근다. 그리고 느릅나무 뿌리 껍질은 코질환의 좋다고 한다.",
    "large"
  )
);
pot.push(
  new product(
    "단풍나무",
    31,
    "214,500",
    [require("./분재/image010.png")],
    "분재",
    "단풍나무(Acer palmatum)는 손바닥 모양으로 갈라진 잎사귀가 특징으로, 봄에는 붉은 꽃봉오리를 가진 꽃이 피었다가 가을이 되면 선명한 빨간빛을 내는 우거진 잎들로 산천을 물들이는 나무로 유명합니다.",
    "large"
  )
);
pot.push(
  new product(
    "동백",
    32,
    "154,000",
    [require("./분재/image020.png")],
    "분재",
    "동백나무는 미국 앨라배마주의 주화이고, 사랑스러운 꽃과 윤기 나는 잎으로 잘 알려져 있으며 선물할 때에는 존경, 사랑, 동경을 뜻합니다. 참고로 프랑스 명품 브랜드 샤넬의 유명한 로고 까멜리아도 동백꽃입니다. ",
    "large"
  )
);
pot.push(
  new product(
    "매실나무",
    33,
    "354,000",
    [require("./분재/image030.png")],
    "분재",
    "봄의 시작을 알리는 매실나무(Prunus mume)는 장미과에 속하는 나무로, 한국에서는 '매화나무'로 불린다. 나무의 꽃인 매화는 잎이 나기 전에 피고, 열매인 매실은 둥글며 노랗게 익는다. 매실은 매실주, 정과 등을 만들어 먹는다. ",
    "large"
  )
);
pot.push(
  new product(
    "명자나무",
    34,
    "149,000",
    [require("./분재/image040.png")],
    "분재",
    "명자나무(Chaenomeles speciosa)는 은은하고 청초한 생김새 때문에 '아가씨나무'라고 불리기도 한다. 분홍빛과 붉은빛을 띠는 꽃이 피며, 모과를 닮은 열매가 열린다. 정원에 심기도 하고 개량종은 실내에서 기르기도 한다.",
    "large"
  )
);
pot.push(
  new product(
    "삼나무",
    35,
    "129,000",
    [require("./분재/image050.png")],
    "분재",
    "삼나무(Cryptomeria japonica)의 목재는 굉장히 향긋하고 피톤치드가 많이 발산되며 해충에도 강해 가구재나 건축재로 사용된다. 삼나무는 일본 특산종이며 수령이 길어 여러 전설이 깃들어 있는 경우를 쉽게 찾아볼 수 있다.",
    "large"
  )
);
pot.push(
  new product(
    "소나무",
    36,
    "129,000",
    [require("./분재/image060.png")],
    "분재",
    "나무 껍질은 적갈색으로 상처를내는 끈기있는 수액이 나오고, 나중에 담황색의 덩어리가된다. 잎은 바늘 모양으로 2 개씩 束生하고 바닥은 회갈색 칼집 모양의 비늘 조각이있다. 야니 냄새가있다.",
    "large"
  )
);
pot.push(
  new product(
    "은행나무",
    37,
    "129,000",
    [require("./분재/image070.png")],
    "분재",
    "은행나무(Ginkgo biloba) 열매의 껍질에는 은행산과 빌로볼이 함유돼 있어 악취가 나며 피부에 닿으면 염증을 일으킬 수 있다. 30년 이상은 자라야 열매를 맺기 때문에 어린 묘목의 암수를 알 수 없었는데, 현재는 유전자 분석으로 감별할 수 있게 되었다.",
    "large"
  )
);
pot.push(
  new product(
    "전나무",
    38,
    "129,000",
    [require("./분재/image080.png")],
    "분재",
    "전나무(학명: Abies holophylla, 영어: needle fir 또는 Manchurian fir, 문화어: 저수리)는 소나무과에 속하는 늘푸른큰키나무이다. 젓나무라고도 쓴다.",
    "large"
  )
);
pot.push(
  new product(
    "느티나무",
    39,
    "129,000",
    [require("./분재/image090.png")],
    "분재",
    "느티나무는 한국, 중국, 일본 등지에서 자라는 낙엽 활엽 교목이다. 흙이 깊고 그늘진 곳에서 잘 자란다. 목재는 가구나 건축물 등의 재료로 사용한다. 꽃은 초봄에 피며 열매는 가을에 익는다.",
    "large"
  )
);

export const findObject = (category, productName) => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      for (let j = 0; j < products[i].length; j++) {
        if (productName == products[i][j].name) {
          return products[i][j];
        }
      }
    }
  }
};
export const findCategory = category => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      return products[i].name;
    }
  }
};

export const choiceRandomObject = () => {
  let randomCategory = Math.floor(Math.random() * 3);
  let randomObject = Math.floor(Math.random() * 10);
  return products[randomCategory][randomObject];
};

export const choiceNum = ({ numItem }) => {
  let itemArray = [];
  while (itemArray.length < numItem) {
    let choiceItem = choiceRandomObject();
    console.log(choiceItem + "1");
    itemArray.push(choiceItem);
    for (let j = 0; j < itemArray.length; j++) {
      if (itemArray[j] == choiceItem) {
        itemArray.splice(j, 1);
        break;
      }
    }
  }
  console.log(itemArray);
  return itemArray;
};

export const priceToInt = stringPrice => {
  let noCommas = stringPrice.replace(/,/g, "");
  let price = parseInt(noCommas, 10);
  return price;
};
// 문자열 가격 -> 정수로
export let popular = [];
for (let i = 0; i < 3; i++) {
  popular.push(airPurifyPlantes[i]);
  popular.push(flower[i]);
  popular.push(cactus[i]);
  popular.push(pot[i]);
}
