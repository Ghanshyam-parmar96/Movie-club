import React, { useState } from "react";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";

const listOfCountryData = [
  {
    id: 1,
    countryCode: "AL",
    country: "Albania",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AL-c484c009f5ea9fea49556008d43190384ef8f7276a8248e0fb47fbe532a2c834.png",
  },
  {
    id: 2,
    countryCode: "DZ",
    country: "Algeria",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/DZ-ac97f91e52d33c3c5e5481c62a1a0c53a3726133d233e934ecb805931ddbe0f8.png",
  },
  {
    id: 3,
    countryCode: "AD",
    country: "Andorra",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AD-94531c9fa3fc7b91a70b53dde5badcb0ad8f66dfbd466862689bf67029c37157.png",
  },
  {
    id: 4,
    countryCode: "AO",
    country: "Angola",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AO-adcfe12b9c19dad22213163af00f45c2eac0bf0ea8f93a649b90922affceac3b.png",
  },
  {
    id: 5,
    countryCode: "AG",
    country: "Antigua & Barbuda",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AG-11a801f43f4190c71c56fe8fb948cd3d5bf5b3b5bed0713cf5fe284a0af97a0a.png",
  },
  {
    id: 6,
    countryCode: "AR",
    country: "Argentina",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AR-af53c8037def87d38995d642d93f899f5e4922ca62843dde5b5cc361771c3bf0.png",
  },
  {
    id: 7,
    countryCode: "AU",
    country: "Australia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AU-987875cfcb3626621074bb52ae1c72b43d15f51801aa8271888a32e25395b844.png",
  },
  {
    id: 8,
    countryCode: "AT",
    country: "Austria",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AT-1ca78073a82e2b8ad5093a822e70521cca2bccff557ded1d5707f26c62620755.png",
  },
  {
    id: 9,
    countryCode: "AZ",
    country: "Azerbaijan",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AZ-01aaccc6b81f819171d125e19920419b304d9044bac002e159a586f64b5842ee.png",
  },
  {
    id: 10,
    countryCode: "BS",
    country: "Bahamas",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BS-85a403d8bd000c47e97becfea0a71f897da12a107a9d00a1f5f7308639174771.png",
  },
  {
    id: 11,
    countryCode: "BH",
    country: "Bahrain",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BH-5b206cea0074e9da028316b643168f0d3061d17dabd6cc328eb70999090844d9.png",
  },
  {
    id: 12,
    countryCode: "BB",
    country: "Barbados",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BB-ae56b0f3d593c89338f9595e63e0313cc67915842dd7a25cb115e84dfb8f13c0.png",
  },
  {
    id: 13,
    countryCode: "BY",
    country: "Belarus",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BY-2fbf6f41adba999379b228ca8ec668f4b88e5b6e98a42f343a848a5a6a936a6f.png",
  },
  {
    id: 14,
    countryCode: "BE",
    country: "Belgium",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BE-cc3358e59c409a83da1607f9bae3cd79c63cf28db983355863b68382ba097008.png",
  },
  {
    id: 15,
    countryCode: "BZ",
    country: "Belize",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BZ-9f6b1f3a1d62fc44dcf8364fcc6ec60d90d58cdc792cdd7a5a160a436b6f75ea.png",
  },
  {
    id: 16,
    countryCode: "BM",
    country: "Bermuda",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BM-b8cce80d1fb6f16c6695175a9a27c91ce1e2081b8caa0eb8e25f560accd51eeb.png",
  },
  {
    id: 17,
    countryCode: "BO",
    country: "Bolivia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BO-8a539e324deac4c650ec2ba28f6c9e63787899d469adcc98350f8654325b3484.png",
  },
  {
    id: 18,
    countryCode: "BA",
    country: "Bosnia & Herzegovina",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BA-2b8cd0b97c50f0ef1ee435d3dab26bf39adcc26710ef7979651f31c2079a97eb.png",
  },
  {
    id: 19,
    countryCode: "BR",
    country: "Brazil",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BR-9860aa017ee236029feb86e4a2f57a14d38d21a27798f7a4a533778a6ea6c06a.png",
  },
  {
    id: 20,
    countryCode: "BG",
    country: "Bulgaria",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BG-fb1949b0d995a0d9e254faab192a63d4e297df59fbc59b3dd83812d074a9f78a.png",
  },
  {
    id: 21,
    countryCode: "BF",
    country: "Burkina Faso",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/BF-7b994176305c409a49c641371fc236144f36b4c48d8323eb182aa6d4c3c264d7.png",
  },
  {
    id: 22,
    countryCode: "CM",
    country: "Cameroon",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CM-c4744344b87f516c37bd237530ad1e6f6d9f7c2b952cee3090d230dfea58141b.png",
  },
  {
    id: 23,
    countryCode: "CA",
    country: "Canada",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CA-38886a65a797a310778fb80880452089fe6970c466646eb1ad487cc08fc5f224.png",
  },
  {
    id: 24,
    countryCode: "CV",
    country: "Cape Verde",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CV-94453955d292ac01173e408676438abf5962d6299a27f692c0b98db8c7ff1649.png",
  },
  {
    id: 25,
    countryCode: "TD",
    country: "Chad",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TD-e78af2a96b82de49a58408626beed79f18f1bfd38c628a5c28a1d706b6eac96f.png",
  },
  {
    id: 26,
    countryCode: "CL",
    country: "Chile",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CL-b3ba3b4e958dc55a4732734d667f47a1703501a7baa19939d57912e9d8d9b50f.png",
  },
  {
    id: 27,
    countryCode: "CO",
    country: "Colombia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CO-4ca65d222eddfe12f55aa2e04628fc0336f028124ec7c93712c8a46fa300a0a4.png",
  },
  {
    id: 28,
    countryCode: "CR",
    country: "Costa Rica",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CR-79f73010236e5d5ea1fbbfc099d9939b1a21542b237924f47eee49cdac09f97d.png",
  },
  {
    id: 29,
    countryCode: "HR",
    country: "Croatia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/HR-0309597f6d84308b671d1257a4dc98235ba6d519b00369e8f38102148da01ca2.png",
  },
  {
    id: 30,
    countryCode: "CU",
    country: "Cuba",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CU-f74d5b99e74f181ef220cbbb4c0cd355e8bd2109b2633d22eddbe04d3fd41297.png",
  },
  {
    id: 31,
    countryCode: "CY",
    country: "Cyprus",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CY-62b59c23afab8a6857d40b70c6d75364eb3d313e8e9b37cbe6a821c08e1dce88.png",
  },
  {
    id: 32,
    countryCode: "CZ",
    country: "Czech Republic",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CZ-91dd5d92623653d7c7d1dbaf80f635092a5672d1d7d05d8c448595f1672578e1.png",
  },
  {
    id: 33,
    countryCode: "CI",
    country: "Côte d’Ivoire",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CI-7b2b4fd0cabbd349d78e53fff2a92be6bbc792ab9146103e551ddc1e1b76a87e.png",
  },
  {
    id: 34,
    countryCode: "CD",
    country: "Democratic Republic of the Congo (Kinshasa)",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CD-2017b88dc780a0c6c6a6b53fbf9348dfcc5fc64443053c507c86440d46bd4553.png",
  },
  {
    id: 35,
    countryCode: "DK",
    country: "Denmark",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/DK-fd8b7ed6b65fc796dab2c998bb9bf0c6151ebfa188ad939243a56c5089df696a.png",
  },
  {
    id: 36,
    countryCode: "DO",
    country: "Dominican Republic",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/DO-eaf6f96469144edd422defd288375a3b1c4749c9547b808141ca77a3603b2f39.png",
  },
  {
    id: 37,
    countryCode: "EC",
    country: "Ecuador",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/EC-385020285cbde4247c16e9bf8b9a344254dc3468cd4af49b5a56589f3f667720.png",
  },
  {
    id: 38,
    countryCode: "EG",
    country: "Egypt",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/EG-644cde0f5c69c3ce1bb26552d9a264fec82c0fca9eb6de7b10bdefc2124eaf9c.png",
  },
  {
    id: 39,
    countryCode: "SV",
    country: "El Salvador",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SV-9c4c269a41fb7dd95126286d6f9687e38daef6c7c934d156007b0e77c800992c.png",
  },
  {
    id: 40,
    countryCode: "GQ",
    country: "Equatorial Guinea",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GQ-3d090bef72ac89f8ee2f13582e92c9a814f6b520ab76d2c64364bc53f9a685f2.png",
  },
  {
    id: 41,
    countryCode: "EE",
    country: "Estonia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/EE-aafc24f97bf432fa3530d2bdd689839058cac586c65e7017df4040837ed2c322.png",
  },
  {
    id: 42,
    countryCode: "FJ",
    country: "Fiji",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/FJ-c47ade8f59b2ebf45fa768da8ce666ac1d9e288debb799bf0a7f0cebe8dc4ea0.png",
  },
  {
    id: 43,
    countryCode: "FI",
    country: "Finland",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/FI-c3bae4a5062e7a52e200d813b69753ff09734a07071dd50150b4731d1721b251.png",
  },
  {
    id: 44,
    countryCode: "FR",
    country: "France",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/FR-45e57f71db90cee6ebd54ed7bb28cc7fdcbd2f4592ade4998f2bc6458d997b3f.png",
  },
  {
    countryCode: "GF",
    id: 45,
    country: "French Guiana",
    flagIcon: "/NO_IMAGE_ICON.png",
  },
  {
    id: 46,
    countryCode: "PF",
    country: "French Polynesia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PF-c8cc1dfad5919b53e682f40c5f52e8ac980495d3569abc4274db3e70983c2ab2.png",
  },
  {
    id: 47,
    countryCode: "DE",
    country: "Germany",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/DE-1877858abee51cabe053ceb7d0561f538597c5c1aca56ba25319abba343a9ca0.png",
  },
  {
    id: 48,
    countryCode: "GH",
    country: "Ghana",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GH-9e150153f83eda9ac96ad891fc1cd389c6b95c1d93624b6748dc07643435ff76.png",
  },
  {
    id: 49,
    countryCode: "GI",
    country: "Gibraltar",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GI-853c0a2d90c05396d71d2be131aeacbba220bd89dda75220f37af5d420839da3.png",
  },
  {
    id: 50,
    countryCode: "GR",
    country: "Greece",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GR-6b6b3ee799e88c48a6e9326783dc220715e91d783520b7bf3e7d45703bbf3310.png",
  },
  {
    countryCode: "GP",
    id: 51,
    country: "Guadeloupe",
    flagIcon: "/NO_IMAGE_ICON.png",
  },
  {
    id: 52,
    countryCode: "GT",
    country: "Guatemala",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GT-d4015e353a17fb8f3772cd76aaec3e32371a411354d4cf2a78a433ca1155e4a7.png",
  },
  {
    id: 53,
    countryCode: "GY",
    country: "Guyana",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GY-1e263417ddb9bde9cba8f0c6a8c864f034158ee3bcb95d20008be8de9479927d.png",
  },
  {
    id: 54,
    countryCode: "HN",
    country: "Honduras",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/HN-be747559f4010cc7716ca84ee23655c08c5e9e77c15e6715f60a48b1114c2101.png",
  },
  {
    id: 55,
    countryCode: "HK",
    country: "Hong Kong SAR China",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/HK-1c08823e81a30327188a562d32fe5c34582d1a37dac52a4cc0fe08e02a0dc949.png",
  },
  {
    id: 56,
    countryCode: "HU",
    country: "Hungary",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/HU-623b538d2d51a467de0dcad45401dc55f5228ae6325f7b6ec934527cd5d568ae.png",
  },
  {
    id: 57,
    countryCode: "IS",
    country: "Iceland",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IS-956d3ab99501ec75bf663e4bb20c762e7a690b2d7c558a6b0bf62d0dc21df118.png",
  },
  {
    id: 58,
    countryCode: "IN",
    country: "India",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IN-5b73f4605171eaa60539e5d69a85bebe7b800f5ee6f94f24dafecaa0d47209fd.png",
  },
  {
    id: 59,
    countryCode: "ID",
    country: "Indonesia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ID-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
  },
  {
    id: 60,
    countryCode: "IQ",
    country: "Iraq",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IQ-ba90e1c8592943baec42857c18c8397069f2e86ddcfd5c39368a28d24f8590cd.png",
  },
  {
    id: 61,
    countryCode: "IE",
    country: "Ireland",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IE-0d036291e102322c836051481b5f76bc64df1d147138be9dbbfe3dbf56aba128.png",
  },
  {
    id: 62,
    countryCode: "IL",
    country: "Israel",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IL-1805f916b282a2536ccff3ac02c23f586baf3b2646dc4822be2d9fbd76d709f5.png",
  },
  {
    id: 63,
    countryCode: "IT",
    country: "Italy",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/IT-e1a18e2f092f368e800469ae610c25137573e555cd4984a03c74d1ef04579822.png",
  },
  {
    id: 64,
    countryCode: "JM",
    country: "Jamaica",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/JM-09cc0a9df714371df6ef87827bd9b1c930cae70afbe9a8ea386bb24170b992eb.png",
  },
  {
    id: 65,
    countryCode: "JP",
    country: "Japan",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/JP-094ae25e6726ba8c9eaece21da437f5236662d9419c198310d30e0960acebe1c.png",
  },
  {
    id: 66,
    countryCode: "JO",
    country: "Jordan",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/JO-b7ff4e2625b0399bfcb9004a92edcedf362ec95debcf4be92fcbf7e3abe8a53a.png",
  },
  {
    id: 67,
    countryCode: "KE",
    country: "Kenya",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/KE-248ba156a39dfa8bb91a0480ebdeb53848951e0d44ca826b48d9ca8c597d661a.png",
  },
  {
    countryCode: "XK",
    id: 68,
    country: "Kosovo",
    flagIcon: "/NO_IMAGE_ICON.png",
  },
  {
    id: 69,
    countryCode: "KW",
    country: "Kuwait",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/KW-b2c90760fb9780db0fa7b6e20d8aba8788bafbd28974796f6d575f8cac96149e.png",
  },
  {
    id: 70,
    countryCode: "LV",
    country: "Latvia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LV-ba2030c39ecd68e7313d46aa1fd56025394ec39af6190a8e531d0c1a3d8c90eb.png",
  },
  {
    id: 71,
    countryCode: "LB",
    country: "Lebanon",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LB-5a70f5231e7ebc3c3cda430db5ce00ab5f93e01099cffcd84c202eb43484f770.png",
  },
  {
    id: 72,
    countryCode: "LY",
    country: "Libya",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LY-ca7444014487f1fb5f3f9fb16d3614a78ecf9decdd9034e0ea44d08251cd8fc8.png",
  },
  {
    id: 73,
    countryCode: "LI",
    country: "Liechtenstein",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LI-e65ac0f79a6985ed6d049f51b08bed17b8d3495e9a4721ac2696fbaad27538e0.png",
  },
  {
    id: 74,
    countryCode: "LT",
    country: "Lithuania",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LT-85614c5fd7332fbf27b2bf9160944295f6067a6793dda105068a431e6f8e1252.png",
  },
  {
    id: 75,
    countryCode: "LU",
    country: "Luxembourg",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LU-47556c387b7cf5c9704b91b0254fe0c35d0b3a260dd03b76720f99cea83d19b2.png",
  },
  {
    id: 76,
    countryCode: "MK",
    country: "Macedonia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MK-9dc26b38ea3b90342e05a57f523c9d3c21d1cfe00f2a42a672f67438ec234a81.png",
  },
  {
    id: 77,
    countryCode: "MG",
    country: "Madagascar",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MG-aaf1e6f710c5e0cb87797663a60cc7b74105610790681eaf64f7604ce07d3395.png",
  },
  {
    id: 78,
    countryCode: "MW",
    country: "Malawi",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MW-abebe4606446991796c4702e7c9febfd378e89c772012a8387b43b9bb8f871f2.png",
  },
  {
    id: 79,
    countryCode: "MY",
    country: "Malaysia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MY-ab75bb0362b542f155ef53047806213086c302c5622a39c6f4f628b65935b11f.png",
  },
  {
    id: 80,
    countryCode: "ML",
    country: "Mali",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ML-f0e93cdaf10e5a932e2efec45a43219ee4810624b8d51282ddb42dfc42779b44.png",
  },
  {
    id: 81,
    countryCode: "MT",
    country: "Malta",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MT-1f603f129e9a2d5f1ffbbda82d93daa6a5ba7099881445e33c5fd5469d92e393.png",
  },
  {
    id: 82,
    countryCode: "MU",
    country: "Mauritius",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MU-47f2ab2370a5a3017ad0ee0bc10109cf209bc9ccbd0cec16ecc73beb8f9b0522.png",
  },
  {
    id: 83,
    countryCode: "MX",
    country: "Mexico",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MX-6e1feed2ded1b9d724497ba082957828cffe11b6cbe53c9914f837b5fd7d914e.png",
  },
  {
    id: 84,
    countryCode: "MD",
    country: "Moldova",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MD-30609306e91e950a46992136c3981696433c751314af9949f05cc37b31852cd6.png",
  },
  {
    id: 85,
    countryCode: "MC",
    country: "Monaco",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MC-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
  },
  {
    id: 86,
    countryCode: "ME",
    country: "Montenegro",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ME-c32fb96a12839144785b0344c4512cfcb764cbbfcd6ae938a3d31368d6b8975c.png",
  },
  {
    id: 87,
    countryCode: "MA",
    country: "Morocco",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MA-772de74a482c46f684fae12f294a154c275c5c03da40d6c8538778dca2ef3e40.png",
  },
  {
    id: 88,
    countryCode: "MZ",
    country: "Mozambique",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/MZ-f6ab155a82813ff1ebea3d1c0273bd87ed49b0387cb24cd10979c0858e252247.png",
  },
  {
    id: 89,
    countryCode: "NL",
    country: "Netherlands",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NL-6f692817fdb935d856a9c976703fd7f4e1b656442bfcc1739a8643ba6a122a97.png",
  },
  {
    id: 90,
    countryCode: "NZ",
    country: "New Zealand",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NZ-55035bfdecb1f546e7d0f47515368c222cb5d781260ba283c268ec47c822d51b.png",
  },
  {
    id: 91,
    countryCode: "NI",
    country: "Nicaragua",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NI-768301e483e5cc69a81aa964953eaf7c21067ae51e03ba9752799513fa15e291.png",
  },
  {
    id: 92,
    countryCode: "NE",
    country: "Niger",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NE-da0768c15183c9e4e4eefbf28da2d8150ab52ce8e4c247ccb4eb2a56fc519c27.png",
  },
  {
    id: 93,
    countryCode: "NG",
    country: "Nigeria",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NG-65215f0ccbe9011892bcf48e1bee64a33ad36a5cbd6302cdf8e5574fdb83b45a.png",
  },
  {
    id: 94,
    countryCode: "NO",
    country: "Norway",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/NO-5190735f3735ed2a927a33177baf3125ce201263a704da930e526dee5a4352d8.png",
  },
  {
    id: 95,
    countryCode: "OM",
    country: "Oman",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/OM-2abae9aa2241f0baa7f3a9b0b11eb3f547e3a121274092763f6a2751ac9cf749.png",
  },
  {
    id: 96,
    countryCode: "PK",
    country: "Pakistan",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PK-fb2ba362fdb5d40bb4ea17b843a26ec88cf1e14d853c3343b0ced99df29308d8.png",
  },
  {
    id: 97,
    countryCode: "PS",
    country: "Palestinian Territories",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PS-10ba8e52835a8ad4eae22eeb7cbde333d7f658202d9dedf11f8eece2d1fd8a98.png",
  },
  {
    id: 98,
    countryCode: "PA",
    country: "Panama",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PA-10a6b756c09c2c9431c9a1d185dc3e91f2bcb24f229845964a14a2676acc39ca.png",
  },
  {
    id: 99,
    countryCode: "PG",
    country: "Papua New Guinea",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PG-ac85ce197ff8d0e108d95bf5867169df8fff6448c12999e0f0c0e12617cfd65f.png",
  },
  {
    id: 100,
    countryCode: "PY",
    country: "Paraguay",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PY-f09678417172f5a98e9d2b28cfd9d5a854a4c12f4f33d3cc59454cf011567b7e.png",
  },
  {
    id: 101,
    countryCode: "PE",
    country: "Peru",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PE-c12deb68829f455243b9d7aba016b8047676581473e73c579e2f3220a1033f9a.png",
  },
  {
    id: 102,
    countryCode: "PH",
    country: "Philippines",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PH-e184176368c0703af1e2d0d68daafc9134ff5ae913b22a08ac6dd58c0a18915d.png",
  },
  {
    id: 103,
    countryCode: "PL",
    country: "Poland",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PL-2c59201663e243a6301c363498eb34ec164bbce57521c1d29eef0121a5459b78.png",
  },
  {
    id: 104,
    countryCode: "PT",
    country: "Portugal",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/PT-a02b40637d0de02097b2322c3117c80575be518c1669f0f28c69cfce0d20a826.png",
  },
  {
    id: 105,
    countryCode: "QA",
    country: "Qatar",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/QA-fc40ef1f53643e1eed33ab62e906590d2fd7dc453d6b7a940b65083f7c109327.png",
  },
  {
    id: 106,
    countryCode: "RO",
    country: "Romania",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/RO-4098a7242007d38c3d0968bb58320ac70714d47fcdd064d76443c08087e9eb71.png",
  },
  {
    id: 107,
    countryCode: "RU",
    country: "Russia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/RU-44aaee85b78b6bd07f861e4927f147f4ca8b00dc8766fd20ecc88aa612d06fcd.png",
  },
  {
    id: 108,
    countryCode: "SM",
    country: "San Marino",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SM-53be820dc298703a9ff0eaf29d58f3efe409f3301b5d70ec9e44b92f511a97ba.png",
  },
  {
    id: 109,
    countryCode: "SA",
    country: "Saudi Arabia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SA-35ecfd4b56472c32a76a7b0e2966cb830f31ee340b831b2df66ab74c08e7d2a8.png",
  },
  {
    id: 110,
    countryCode: "SN",
    country: "Senegal",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SN-ebdd6ed9e88e9cc10b87802a32a10383d5f5f445b075df702f447d6c8c07b374.png",
  },
  {
    id: 111,
    countryCode: "RS",
    country: "Serbia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/RS-e9a417f8d7dd2a210c364b8fd45983122f5cba5a4aa34e3cfc72d6293e07f4ef.png",
  },
  {
    id: 112,
    countryCode: "SC",
    country: "Seychelles",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SC-d95787218bb380c15485e54fc33151df26fba297ae3a2f6a72fa832a21804390.png",
  },
  {
    id: 113,
    countryCode: "SG",
    country: "Singapore",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SG-327ee0325d7fc6424fdee9487353eac1ccea73db53298dfae0dd0c48231b3baa.png",
  },
  {
    id: 114,
    countryCode: "SK",
    country: "Slovakia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SK-5f70f0ff53ab2b4c3cc3f97c8081d387e4b76144bc2906f7f61302f0580dd844.png",
  },
  {
    id: 115,
    countryCode: "SI",
    country: "Slovenia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SI-fe61c691870ff961b61978367c0b1b434ca62631619f9151ba8998a3abcb91a8.png",
  },
  {
    id: 116,
    countryCode: "ZA",
    country: "South Africa",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ZA-4e8b8c43d8dd2f9cbb77d5d353fd98c5844f922eb227ad3478eb37af8329f8c4.png",
  },
  {
    id: 117,
    countryCode: "KR",
    country: "South Korea",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/KR-42af849ebe299438948216ee9270f194b5358cac2e5604773fc07bb66802af14.png",
  },
  {
    id: 118,
    countryCode: "ES",
    country: "Spain",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ES-ef578e78363c45694fb713a7c8d6ceddf7f23e294c30d9bba1c7547f61ba42b2.png",
  },
  {
    id: 119,
    countryCode: "LC",
    country: "St. Lucia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/LC-9a50a30f97cd78250e67a8e2cf579f86ad27a031c5f39d8522f56edcc8b919c2.png",
  },
  {
    id: 120,
    countryCode: "SE",
    country: "Sweden",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/SE-5a97536c4c12f83fe02794f9aa3eb82b47ead7677217d0954a8cef22ac57233f.png",
  },
  {
    id: 121,
    countryCode: "CH",
    country: "Switzerland",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/CH-5b64386f84ee6594a68b5dfc248a88892ab38178c1682702689d82c66ba8e20a.png",
  },
  {
    id: 122,
    countryCode: "TW",
    country: "Taiwan",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TW-47fec93073999a2397c91426ed10a4ded3ddfe3345fe1016401e053a8541ce2d.png",
  },
  {
    id: 123,
    countryCode: "TZ",
    country: "Tanzania",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TZ-34a76401d61899319a1dbc580e7563bc9d54c8dac619694b94e7b750e03effa2.png",
  },
  {
    id: 124,
    countryCode: "TH",
    country: "Thailand",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TH-a7f1ca882f8d0c6a7b532c8c4d9ac056505a97dc5dd33e8d7b82b1312d4c348b.png",
  },
  {
    id: 125,
    countryCode: "TT",
    country: "Trinidad & Tobago",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TT-328bfa8f9d72edcd00009d360bbdb2b21a47e81ed89ee4a8d8b7ebf33f0922f4.png",
  },
  {
    id: 126,
    countryCode: "TN",
    country: "Tunisia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TN-934ff25d61ede4b7b169faaf04358ce194aa6e701c2a40321a681edd1e601004.png",
  },
  {
    id: 127,
    countryCode: "TR",
    country: "Turkey",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TR-dde9ebaa44f6027c50ab4ebe6372c3f1656f12c7db00cdec8a447cb785fee93a.png",
  },
  {
    id: 128,
    countryCode: "TC",
    country: "Turks & Caicos Islands",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/TC-4261bc2ddda415a1253dece799fe4409c98a1030e27fc09e5240a88412230853.png",
  },
  {
    id: 129,
    countryCode: "UG",
    country: "Uganda",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/UG-2591667e374ef615c19ad3c2e333a5858701292eaa2827afb26a6825326df8fa.png",
  },
  {
    id: 130,
    countryCode: "UA",
    country: "Ukraine",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/UA-69f9221eb0890805f4c36d35d3ff68267a1158b5411a02fa4d852ff5632f3b4f.png",
  },
  {
    id: 131,
    countryCode: "AE",
    country: "United Arab Emirates",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/AE-afa064bc388b2f8fdf243b697018ac3759c0a4bd80854e18f69d1eb7d2f445d1.png",
  },
  {
    id: 132,
    countryCode: "GB",
    country: "United Kingdom",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/GB-d20d3c377f9a6cd80339dd457b5ced7c2bbdd62197d8ef99085ec104fd1f7709.png",
  },
  {
    id: 133,
    countryCode: "US",
    country: "United States",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/US-fc54af6e5c8237200d49fd6a49061fffeb8a7217bb9000acd1c02039b65b22ba.png",
  },
  {
    id: 134,
    countryCode: "UY",
    country: "Uruguay",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/UY-82c74dfa146618466b26f344ae35b9434f3c2c35786da10166f25a96f8981b2e.png",
  },
  {
    id: 135,
    countryCode: "VA",
    country: "Vatican City",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/VA-80c9075f05740778759c170248360b4271964b93e3fc0ccfb25fde4b2438d73b.png",
  },
  {
    id: 136,
    countryCode: "VE",
    country: "Venezuela",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/VE-e7d4498591a5d5797b902e380aeee6715e1ae131f7b28588b0203673ede2ed99.png",
  },
  {
    id: 137,
    countryCode: "YE",
    country: "Yemen",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/YE-2737540e3c61b1397cc4a354336dee4bbf1ab7468a3b8e2ced2d8b0c83092ef3.png",
  },
  {
    id: 138,
    countryCode: "ZM",
    country: "Zambia",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ZM-4ea15bfa09722cb6b6e32cc5818b06ad37fa2199b32b5d0f997fbf03b776f672.png",
  },
  {
    id: 139,
    countryCode: "ZW",
    country: "Zimbabwe",
    flagIcon:
      "https://www.themoviedb.org/assets/2/flags_v2/48/ZW-176e6c0f9ed6108aac542cb2d31a90a2bb6114d456019de853903649360d910f.png",
  },
];

const CountryList = ({ setPop, pop, countryCode }) => {
  const [searchData, setSearchData] = useState(listOfCountryData);


  const handleSearch = (event) => {
    const result = listOfCountryData.filter((item) =>
      item.country.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchData(result);
  };

  const handleClickData = (event) => {
    const idNumber = Number(event.target.dataset.offsetIndex);
    const [clickData] = listOfCountryData.filter(
      (item) => item.id === idNumber
    );
    countryCode(clickData);
    setPop(!pop);
  };

  return (
    <div className="absolute px-2 top-12 right-0 w-52 scale-up-tl font-poppins z-50 border border-[#e3e3e3] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.1)]">
      <div className=" my-2 rounded-xl overflow-y-auto h-72 w-full cardScrollbar">
        <div className="flex items-center gap-2 rounded-md p-1 mx-2 my-6 border-[1px] border-sky-400">
          <input
            type="text"
            autoComplete="on"
            className="focus:outline-none text-sm pl-1 tracking-wider w-full"
            onChange={(e) => handleSearch(e)}
          />
          <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
        </div>
        <ul
          unselectable="off"
          className="k-list k-reset"
          aria-hidden="true"
          id="watch_region_listbox"
          aria-live="polite"
          data-role="staticlist"
          role="listbox"
          onClick={(e) => handleClickData(e)}
        >
          {searchData.map((item) => {
            return (
              <li
                key={item.id}
                role="option"
                unselectable="off"
                className="flex items-center gap-1 mt-2 px-2 text-sm tracking-wider "
                aria-selected="false"
                data-offset-index={item.id}
              >
                <span
                  data-offset-index={item.id}
                >
                  <LazyImage src={item.flagIcon} className="h-6 w-8 object-cover object-center select-none" />
                </span>
                <span
                  className="select-none"
                  draggable="false"
                  data-offset-index={item.id}
                >
                  {item.country}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryList;
