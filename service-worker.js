/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "439bfa97b10115391ab2f8175b5229bf"
  },
  {
    "url": "assets/css/0.styles.89c56574.css",
    "revision": "cba343d50c31b8fd7b0f9570cf746e59"
  },
  {
    "url": "assets/img/020053010554587.3e09755f.jpg",
    "revision": "3e09755f1a0788bfe6a7dbe0a3dec85d"
  },
  {
    "url": "assets/img/1_r2TGgvBeXucD_IC2QaQM8Q.366fab70.png",
    "revision": "366fab701781f2408730070aeb67ee45"
  },
  {
    "url": "assets/img/1682c95bc11faf81.2b6ac08d.jpg",
    "revision": "2b6ac08dce9419c9ca7eb26a483d901b"
  },
  {
    "url": "assets/img/2ce265fef92dce741e67db232357796d.2ce265fe.jpg",
    "revision": "2ce265fef92dce741e67db232357796d"
  },
  {
    "url": "assets/img/3425b0b9-bc67-45b0-afc2-5d67a9ad2349.e09f7e1a.png",
    "revision": "e09f7e1a79f86bfe18bd5792b9cac7cf"
  },
  {
    "url": "assets/img/4a526c56d8cbd9c6c8ae608e342752ca.4a526c56.jpg",
    "revision": "4a526c56d8cbd9c6c8ae608e342752ca"
  },
  {
    "url": "assets/img/4f8a1fa1dd67249171244df356b64396.4f8a1fa1.jpg",
    "revision": "4f8a1fa1dd67249171244df356b64396"
  },
  {
    "url": "assets/img/54b41661-1a35-40d4-a651-adb7334fc0e2.be901f73.png",
    "revision": "be901f7325bfbebe172a9655fa2ece16"
  },
  {
    "url": "assets/img/5536bccaa266329c324fa9033ee16826.5536bcca.png",
    "revision": "5536bccaa266329c324fa9033ee16826"
  },
  {
    "url": "assets/img/55a7604a-28eb-4276-b12b-9ebd2726c902.c55f9c75.png",
    "revision": "c55f9c75f43d1a142153c0dd27864683"
  },
  {
    "url": "assets/img/73607121b26944c77f657e62a8894e2d.73607121.png",
    "revision": "73607121b26944c77f657e62a8894e2d"
  },
  {
    "url": "assets/img/a902c4aa-9d54-47c3-af59-a8343f02b60a.403e7f76.png",
    "revision": "403e7f76ee099bb7afe6e2bb28abb78a"
  },
  {
    "url": "assets/img/a985e1c0-1c52-48c9-b3d3-1b7b29aa32bc.1b03a8dc.png",
    "revision": "1b03a8dcf9ebba9cca5fc844ffe971a2"
  },
  {
    "url": "assets/img/bdd_process.b92d9a24.jpg",
    "revision": "b92d9a24ca6f20bf7efc702f82c44c99"
  },
  {
    "url": "assets/img/bdd-cuketest-01.20bddb1d.png",
    "revision": "20bddb1de27be6aa817b5d87673eae95"
  },
  {
    "url": "assets/img/bdd-doit-01.962fc6e4.png",
    "revision": "962fc6e459e1611a4a79dc81b4c7bc11"
  },
  {
    "url": "assets/img/bdd-doit-02.8382307d.png",
    "revision": "8382307d9c228738c65df0c12997f4e0"
  },
  {
    "url": "assets/img/bdd-flow01.d8ea1ba9.png",
    "revision": "d8ea1ba93b4f4da49c314e4cd66c2ada"
  },
  {
    "url": "assets/img/decomposs-01.c749423b.png",
    "revision": "c749423b12fc556d0878dafc7f229828"
  },
  {
    "url": "assets/img/demand-for-dismantling.b143f7f7.png",
    "revision": "b143f7f73889af50daaa06f9bc4b91f0"
  },
  {
    "url": "assets/img/df011cc5-0c56-48a5-9ed2-0b576a784480.84754adb.png",
    "revision": "84754adb4734f5f0558006d4b7488050"
  },
  {
    "url": "assets/img/fizzbuzzgame01.e9ca0c30.png",
    "revision": "e9ca0c308aa4e071547b47f81af49e37"
  },
  {
    "url": "assets/img/img-bdd-report-01.73a5d5e1.png",
    "revision": "73a5d5e107d016c5ac6a93368cacefd1"
  },
  {
    "url": "assets/img/img-vue-just-01.bdafe9fc.png",
    "revision": "bdafe9fc783e7eb18c7783e1158d9ba0"
  },
  {
    "url": "assets/img/img-vue-just-02.351636e7.png",
    "revision": "351636e7ed90696213bf6ed7f6316f44"
  },
  {
    "url": "assets/img/img-vue-just-03.32812e5c.png",
    "revision": "32812e5c8f7d22ae20d61261b66c3456"
  },
  {
    "url": "assets/img/performance-01.13bc6d4b.png",
    "revision": "13bc6d4b3d385292bbb026277cdc06a0"
  },
  {
    "url": "assets/img/performance-02.1be65388.png",
    "revision": "1be65388e871b083070c96fc30fc6324"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tdd-flowchart.9035316a.png",
    "revision": "9035316a349dd9ef7e80057a9ac9ab43"
  },
  {
    "url": "assets/img/theTestingTrophy-01.ee5dea20.png",
    "revision": "ee5dea20aa19c85a011723f54e8585e3"
  },
  {
    "url": "assets/img/theTestingTrophy-02.d29e5c74.png",
    "revision": "d29e5c74d5fbb2e30bcaa1462324a286"
  },
  {
    "url": "assets/img/user-story-map.83b34245.png",
    "revision": "83b34245d8b68870f7c2b8c3e581e96e"
  },
  {
    "url": "assets/img/ut-mock-01.6a3f99df.png",
    "revision": "6a3f99df870113e9838336f9d75eb292"
  },
  {
    "url": "assets/img/vue-doit-1.fe9b6bbf.png",
    "revision": "fe9b6bbfb4bfdd9d1498f04d13292a62"
  },
  {
    "url": "assets/img/vue-doit-2.4eb4b9c3.png",
    "revision": "4eb4b9c35514d1d509ed0b944d9c6cfd"
  },
  {
    "url": "assets/img/vue-doit-3.910697cb.png",
    "revision": "910697cb0fffc7dd4c3cfea37cea85e8"
  },
  {
    "url": "assets/img/vue-doit-4.d3e4ca1c.png",
    "revision": "d3e4ca1cb4649c09e4115cbab7b2a81d"
  },
  {
    "url": "assets/img/vue-doit-5.b6bc8510.png",
    "revision": "b6bc8510ae02fc5e9c177431258ac12a"
  },
  {
    "url": "assets/img/vue-doit-6.2ca743bb.jpg",
    "revision": "2ca743bb8a4ff34ec4f580ade0f0878f"
  },
  {
    "url": "assets/img/vue-doit-7.f192532c.jpg",
    "revision": "f192532c75fa4fe35ce20d9b3bd3ab90"
  },
  {
    "url": "assets/img/WechatIMG256.14e2579f.png",
    "revision": "14e2579ff50c12f9de071896e2836dc8"
  },
  {
    "url": "assets/img/work01.7ce6460f.png",
    "revision": "7ce6460f51eb898245476a4d087d67e6"
  },
  {
    "url": "assets/img/work02.cf6ad2d0.png",
    "revision": "cf6ad2d0850b48b425243dd26cecd875"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-01-34.acf5c447.jpg",
    "revision": "acf5c447c9a9e8dbff0f7d06d22a9077"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-10-08.d6cbed0d.jpg",
    "revision": "d6cbed0d7190c4d44670b2e3cc4df724"
  },
  {
    "url": "assets/img/Xnip2019-04-02_18-33-24.b7bfb3a4.jpg",
    "revision": "b7bfb3a489e1212e837fb5dcfd584988"
  },
  {
    "url": "assets/js/10.21852b11.js",
    "revision": "3938399bcd09ed6bf5349948c39c5bff"
  },
  {
    "url": "assets/js/11.f64d45b2.js",
    "revision": "1d8000cc42f62b0d3ed748418ab8a351"
  },
  {
    "url": "assets/js/12.9586b2eb.js",
    "revision": "dbc9baf6cdd66a0f65792ed4a477fffa"
  },
  {
    "url": "assets/js/13.362695f8.js",
    "revision": "6816335f3ecf0168969d8c060b95bc56"
  },
  {
    "url": "assets/js/14.5011e510.js",
    "revision": "a95b323d8823df0a1ebd4e8c76a9f085"
  },
  {
    "url": "assets/js/15.602ee5a0.js",
    "revision": "e154a23585631b2b5d6f7e358d9f547e"
  },
  {
    "url": "assets/js/16.f76b32cd.js",
    "revision": "7d4403074ad19561b886d65da684bca3"
  },
  {
    "url": "assets/js/17.12a6afbb.js",
    "revision": "39c9f6fef9d2ad31948310983a39df46"
  },
  {
    "url": "assets/js/18.eab1da27.js",
    "revision": "247b7848bad9d170dabe8bc8266c8f23"
  },
  {
    "url": "assets/js/19.2b640b10.js",
    "revision": "68435b7a3a5651901258bc19b3de7f21"
  },
  {
    "url": "assets/js/2.d5709b3c.js",
    "revision": "d722c226c466ad395afdb286af36f3e3"
  },
  {
    "url": "assets/js/20.3398b7c2.js",
    "revision": "51826edc70f283474991deeef6c570ab"
  },
  {
    "url": "assets/js/21.c325b732.js",
    "revision": "fce16db176f7a971f0ec68fa6c991152"
  },
  {
    "url": "assets/js/22.c3df5e1b.js",
    "revision": "b6643e927362f3603eab3ed87b8ca62e"
  },
  {
    "url": "assets/js/23.898e6112.js",
    "revision": "817b720a0383cf6b0cdf243d9cc23e05"
  },
  {
    "url": "assets/js/24.051a0bbc.js",
    "revision": "1b9345cc30113bbce01168bd3e17e597"
  },
  {
    "url": "assets/js/25.554600d3.js",
    "revision": "6837a7008d78a8e5469d6c89034f552b"
  },
  {
    "url": "assets/js/26.16320fe2.js",
    "revision": "69c5bd3bc9c2fb7e347a74c478001d0c"
  },
  {
    "url": "assets/js/27.512eede4.js",
    "revision": "c5e44dc7ed88c378700bcdcccd1ab9db"
  },
  {
    "url": "assets/js/28.3e0725db.js",
    "revision": "43c52d15f08a21947068b20c74a80022"
  },
  {
    "url": "assets/js/29.5466dfa8.js",
    "revision": "8b5efac71c4a4336549d1637b17a7092"
  },
  {
    "url": "assets/js/3.0689ac69.js",
    "revision": "5dc0b7d73010e8b5a753387276bb04d7"
  },
  {
    "url": "assets/js/30.cd41e5b5.js",
    "revision": "20e7fb692260b4d16944da993d9c8d35"
  },
  {
    "url": "assets/js/31.002ecbd9.js",
    "revision": "b7742d3db969aa55b7fe690f363638b2"
  },
  {
    "url": "assets/js/32.a705fe0e.js",
    "revision": "c67e1bb11236eaca96b2777e5a01dcc4"
  },
  {
    "url": "assets/js/33.97b79008.js",
    "revision": "2edf00ec6404b6bce66bb0b0df10087d"
  },
  {
    "url": "assets/js/34.3796137b.js",
    "revision": "3726eee55093d1db4742b0211ca8d16f"
  },
  {
    "url": "assets/js/35.0b4e016b.js",
    "revision": "a2e2eeafc78fae18c53fa8d6007ec38c"
  },
  {
    "url": "assets/js/36.dd2588d5.js",
    "revision": "0736e385a5e31f8d6130770f1f4db5bd"
  },
  {
    "url": "assets/js/37.b7cf03a2.js",
    "revision": "d6d4d66f62e26bd0f123c17278a8c3d9"
  },
  {
    "url": "assets/js/38.8e43f6aa.js",
    "revision": "094ba3516473572a235cc6372981f0d6"
  },
  {
    "url": "assets/js/39.2fd073aa.js",
    "revision": "08f6dd527001672011fa5c3bc400c5e0"
  },
  {
    "url": "assets/js/4.1d131f68.js",
    "revision": "0448808c5142edd08976fda715df1036"
  },
  {
    "url": "assets/js/40.739236ee.js",
    "revision": "974ca6f91efc7076f0b4848e090342e2"
  },
  {
    "url": "assets/js/41.77a6a6db.js",
    "revision": "5a5895d3140a6e9b34d58ef8ef9cbdb5"
  },
  {
    "url": "assets/js/42.147c2537.js",
    "revision": "11cd49302f44988636764c0535558af7"
  },
  {
    "url": "assets/js/43.98113f75.js",
    "revision": "dc3bc2b0afa07fcf791f8459477538e8"
  },
  {
    "url": "assets/js/44.7e138f8f.js",
    "revision": "48606ea850cd51eeea981eabc8f13789"
  },
  {
    "url": "assets/js/45.18960dae.js",
    "revision": "c5c5bf9f63e8bb91a91871e8481f1e0b"
  },
  {
    "url": "assets/js/46.5facf218.js",
    "revision": "1923a5b56ca0936fc6ed1a9e55feb1aa"
  },
  {
    "url": "assets/js/47.80ebf3e6.js",
    "revision": "14841bda4e5e80655818de93936e25a0"
  },
  {
    "url": "assets/js/5.cb412c95.js",
    "revision": "cbeacb3f2300e434f0a081e864e6b2a6"
  },
  {
    "url": "assets/js/6.59392cf1.js",
    "revision": "42594d88fcd53e74c90fc531d5e1115b"
  },
  {
    "url": "assets/js/7.62b86de1.js",
    "revision": "eec21e248d689226f811fc8738a6a140"
  },
  {
    "url": "assets/js/8.455db33c.js",
    "revision": "24f7deb06087972c57fe8568b47649b4"
  },
  {
    "url": "assets/js/9.eab8be47.js",
    "revision": "655ab21dafa09f694a0d81c1601da782"
  },
  {
    "url": "assets/js/app.21f02376.js",
    "revision": "a4b2abab8679afd703d8d095c15bc773"
  },
  {
    "url": "decomposs/index.html",
    "revision": "189f7bccad5e0055ed7b85fe39866bc9"
  },
  {
    "url": "demand/index.html",
    "revision": "1c6980c891558888c5d3943fce00dc06"
  },
  {
    "url": "designpattern/index.html",
    "revision": "3a04ac0e863120506bfd6d17d00978b9"
  },
  {
    "url": "explanation/index.html",
    "revision": "0c36310380727be8dabb0f52d2e32277"
  },
  {
    "url": "function/index.html",
    "revision": "7756f01075878cce7ce4245f900c2979"
  },
  {
    "url": "img/020053010554587.jpg",
    "revision": "3e09755f1a0788bfe6a7dbe0a3dec85d"
  },
  {
    "url": "img/0382d995-86f0-40a2-aee9-7a8559a0668d.png",
    "revision": "d2393b139ffc2aa6f451558842e8018b"
  },
  {
    "url": "img/1_r2TGgvBeXucD_IC2QaQM8Q.png",
    "revision": "366fab701781f2408730070aeb67ee45"
  },
  {
    "url": "img/1682c95bc11faf81.jpg",
    "revision": "2b6ac08dce9419c9ca7eb26a483d901b"
  },
  {
    "url": "img/2ce265fef92dce741e67db232357796d.jpg",
    "revision": "2ce265fef92dce741e67db232357796d"
  },
  {
    "url": "img/3425b0b9-bc67-45b0-afc2-5d67a9ad2349.png",
    "revision": "e09f7e1a79f86bfe18bd5792b9cac7cf"
  },
  {
    "url": "img/4a526c56d8cbd9c6c8ae608e342752ca.jpg",
    "revision": "4a526c56d8cbd9c6c8ae608e342752ca"
  },
  {
    "url": "img/4f8a1fa1dd67249171244df356b64396.jpg",
    "revision": "4f8a1fa1dd67249171244df356b64396"
  },
  {
    "url": "img/54b41661-1a35-40d4-a651-adb7334fc0e2.png",
    "revision": "be901f7325bfbebe172a9655fa2ece16"
  },
  {
    "url": "img/5536bccaa266329c324fa9033ee16826.png",
    "revision": "5536bccaa266329c324fa9033ee16826"
  },
  {
    "url": "img/55a7604a-28eb-4276-b12b-9ebd2726c902.png",
    "revision": "c55f9c75f43d1a142153c0dd27864683"
  },
  {
    "url": "img/73607121b26944c77f657e62a8894e2d.png",
    "revision": "73607121b26944c77f657e62a8894e2d"
  },
  {
    "url": "img/a902c4aa-9d54-47c3-af59-a8343f02b60a.png",
    "revision": "403e7f76ee099bb7afe6e2bb28abb78a"
  },
  {
    "url": "img/a985e1c0-1c52-48c9-b3d3-1b7b29aa32bc.png",
    "revision": "1b03a8dcf9ebba9cca5fc844ffe971a2"
  },
  {
    "url": "img/bdd_process.jpg",
    "revision": "b92d9a24ca6f20bf7efc702f82c44c99"
  },
  {
    "url": "img/bdd-cuketest-01.png",
    "revision": "20bddb1de27be6aa817b5d87673eae95"
  },
  {
    "url": "img/bdd-doit-01.png",
    "revision": "962fc6e459e1611a4a79dc81b4c7bc11"
  },
  {
    "url": "img/bdd-doit-02.png",
    "revision": "8382307d9c228738c65df0c12997f4e0"
  },
  {
    "url": "img/bdd-flow01.png",
    "revision": "d8ea1ba93b4f4da49c314e4cd66c2ada"
  },
  {
    "url": "img/decomposs-01.png",
    "revision": "c749423b12fc556d0878dafc7f229828"
  },
  {
    "url": "img/demand-for-dismantling.png",
    "revision": "b143f7f73889af50daaa06f9bc4b91f0"
  },
  {
    "url": "img/df011cc5-0c56-48a5-9ed2-0b576a784480.png",
    "revision": "84754adb4734f5f0558006d4b7488050"
  },
  {
    "url": "img/fizzbuzzgame01.png",
    "revision": "e9ca0c308aa4e071547b47f81af49e37"
  },
  {
    "url": "img/img-bdd-report-01.png",
    "revision": "73a5d5e107d016c5ac6a93368cacefd1"
  },
  {
    "url": "img/img-vue-just-01.png",
    "revision": "bdafe9fc783e7eb18c7783e1158d9ba0"
  },
  {
    "url": "img/img-vue-just-02.png",
    "revision": "351636e7ed90696213bf6ed7f6316f44"
  },
  {
    "url": "img/img-vue-just-03.png",
    "revision": "32812e5c8f7d22ae20d61261b66c3456"
  },
  {
    "url": "img/logo.png",
    "revision": "c49dba5fb97c77a234aeaf06c815cb60"
  },
  {
    "url": "img/performance-01.png",
    "revision": "13bc6d4b3d385292bbb026277cdc06a0"
  },
  {
    "url": "img/performance-02.png",
    "revision": "1be65388e871b083070c96fc30fc6324"
  },
  {
    "url": "img/Screen Shot 2019-04-01 at 17.41.47.png",
    "revision": "0180a39a74b72c533c47c479875ccacd"
  },
  {
    "url": "img/Screen Shot 2019-04-01 at 17.42.07.png",
    "revision": "747ec1ae30a3a532ca2e35fd869420fd"
  },
  {
    "url": "img/tdd-flowchart.png",
    "revision": "9035316a349dd9ef7e80057a9ac9ab43"
  },
  {
    "url": "img/theTestingTrophy-01.png",
    "revision": "ee5dea20aa19c85a011723f54e8585e3"
  },
  {
    "url": "img/theTestingTrophy-02.png",
    "revision": "d29e5c74d5fbb2e30bcaa1462324a286"
  },
  {
    "url": "img/user-story-map.png",
    "revision": "83b34245d8b68870f7c2b8c3e581e96e"
  },
  {
    "url": "img/ut-mock-01.png",
    "revision": "6a3f99df870113e9838336f9d75eb292"
  },
  {
    "url": "img/vue-doit-1.png",
    "revision": "fe9b6bbfb4bfdd9d1498f04d13292a62"
  },
  {
    "url": "img/vue-doit-2.png",
    "revision": "4eb4b9c35514d1d509ed0b944d9c6cfd"
  },
  {
    "url": "img/vue-doit-3.png",
    "revision": "910697cb0fffc7dd4c3cfea37cea85e8"
  },
  {
    "url": "img/vue-doit-4.png",
    "revision": "d3e4ca1cb4649c09e4115cbab7b2a81d"
  },
  {
    "url": "img/vue-doit-5.png",
    "revision": "b6bc8510ae02fc5e9c177431258ac12a"
  },
  {
    "url": "img/vue-doit-6.jpg",
    "revision": "2ca743bb8a4ff34ec4f580ade0f0878f"
  },
  {
    "url": "img/vue-doit-7.jpg",
    "revision": "f192532c75fa4fe35ce20d9b3bd3ab90"
  },
  {
    "url": "img/WechatIMG256.png",
    "revision": "14e2579ff50c12f9de071896e2836dc8"
  },
  {
    "url": "img/work01.png",
    "revision": "7ce6460f51eb898245476a4d087d67e6"
  },
  {
    "url": "img/work02.png",
    "revision": "cf6ad2d0850b48b425243dd26cecd875"
  },
  {
    "url": "img/Xnip2019-04-02_18-01-34.jpg",
    "revision": "acf5c447c9a9e8dbff0f7d06d22a9077"
  },
  {
    "url": "img/Xnip2019-04-02_18-10-08.jpg",
    "revision": "d6cbed0d7190c4d44670b2e3cc4df724"
  },
  {
    "url": "img/Xnip2019-04-02_18-33-24.jpg",
    "revision": "b7bfb3a489e1212e837fb5dcfd584988"
  },
  {
    "url": "index.html",
    "revision": "473959d1865f47517c34c33f4b52cc89"
  },
  {
    "url": "other/index.html",
    "revision": "a1b0dd563f818c894fee5eb3b560ff71"
  },
  {
    "url": "performance/index.html",
    "revision": "9ce62a2e4fcb673939e332a18d8a6f54"
  },
  {
    "url": "refactor/anew.html",
    "revision": "5a7dd4b1620bfa4f3a624552bc6022cc"
  },
  {
    "url": "refactor/api.html",
    "revision": "ebfc653b129268f53531049ad784aafc"
  },
  {
    "url": "refactor/encapsulate.html",
    "revision": "7dd9c8fbb37008207a5990b52df46d41"
  },
  {
    "url": "refactor/index.html",
    "revision": "5ebb5298dd1ae13884b74bf96e2f9d56"
  },
  {
    "url": "refactor/inherit.html",
    "revision": "01e6039e9931c3b851a04ebc4708c50d"
  },
  {
    "url": "refactor/move.html",
    "revision": "24c18f7a027afde47e625d37e580d606"
  },
  {
    "url": "refactor/refactor.html",
    "revision": "4971b403eb148ac54ae1526b20bbbeb9"
  },
  {
    "url": "refactor/simplify.html",
    "revision": "3a27fa70b43425bee286b50df08df06a"
  },
  {
    "url": "styles/index.html",
    "revision": "1baf21e7383aada02cd2c31ca5f4493d"
  },
  {
    "url": "task/index.html",
    "revision": "3147cb6edaa64d00fc85f62a4351c3ce"
  },
  {
    "url": "tdd/index.html",
    "revision": "b2cf6984ad06cd687c9172478fbddc84"
  },
  {
    "url": "tdd/TDD-touch.html",
    "revision": "d2b8e1b0e600b18d3bc2147da046809e"
  },
  {
    "url": "test-strategy/index.html",
    "revision": "336b4626bb0d7f00eff72294a6fb9919"
  },
  {
    "url": "user-story/index.html",
    "revision": "e0155e1a2b7e05d45b6afd118a818147"
  },
  {
    "url": "ut/index.html",
    "revision": "47dc789b2f428c36d6a9056ea9b355a4"
  },
  {
    "url": "ut/jest.html",
    "revision": "5234d143bc616d1d597af9af29c1cf75"
  },
  {
    "url": "ut/ut-doit.html",
    "revision": "6075eea713e89f7fae51dfa42512b971"
  },
  {
    "url": "ut/ut-question.html",
    "revision": "c466bd1f1199ccb0df410aadd54f109d"
  },
  {
    "url": "ut/ut-vue.html",
    "revision": "b8fcdee2cb20915007aabcb3f570344b"
  },
  {
    "url": "ut/vue-jest-callback-functions.html",
    "revision": "25c0b79ba88ae50e017f223f5fa59489"
  },
  {
    "url": "ut/vue-jest-mock.html",
    "revision": "509738b19b8817128733c0c6eae220c4"
  },
  {
    "url": "ut/vue-jest-template1.html",
    "revision": "c8090d28508465b504e187fc244bcdc4"
  },
  {
    "url": "ut/vue-jest-template2.html",
    "revision": "7b983b00c6e452482974eb236a9d96e5"
  },
  {
    "url": "ut/vue-jest-template3.html",
    "revision": "2c6f4f5ad0e26a3353980ac0f40f91a4"
  },
  {
    "url": "ut/vue-jest-template4.html",
    "revision": "2640b09f6fe2199740f906db3da96f3e"
  },
  {
    "url": "ut/vue-jest-tools.html",
    "revision": "1d80e7ae5344523a8f28d47b763a432e"
  },
  {
    "url": "vue-bdd-test/bdd-cucumber.html",
    "revision": "69ef63b3f03958bdf3038973583297a1"
  },
  {
    "url": "vue-bdd-test/bdd-cuketest.html",
    "revision": "7bd3e49a9cc24039626548a1e90b3f66"
  },
  {
    "url": "vue-bdd-test/bdd-doit-2.html",
    "revision": "ab80d0504a3cf5b348a743a10718e93e"
  },
  {
    "url": "vue-bdd-test/bdd-doit.html",
    "revision": "e3de14bedf6b26d8e3f0c1e9e954483c"
  },
  {
    "url": "vue-bdd-test/bdd-nightwatch.html",
    "revision": "171410ca34f8a00c5dd561ab43f9f2ab"
  },
  {
    "url": "vue-bdd-test/bdd-report.html",
    "revision": "dfa9686ddb40c7c9e25d79e0ea55c983"
  },
  {
    "url": "vue-bdd-test/index.html",
    "revision": "89e741b9ee3dfa68ebbe61eba481f987"
  },
  {
    "url": "work/index.html",
    "revision": "f0bfe6e8126397d319a0f6196df77a4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
