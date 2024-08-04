import 'dotenv/config';

export default{
  "expo": {
    "name": "demo",
    "slug": "demo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra:{
      apiKey: "AIzaSyDSyvLQAcvbf1_IKaG73ggOF3pyypwmvPo",
      authDomain: "chatapp-e669f.firebaseapp.com",
      projectId: "chatapp-e669f",
      storageBucket: "chatapp-e669f.appspot.com",
      messagingSenderId: "583046484201",
      appId: "1:583046484201:web:9131551a33f3a7a6ace078"
    }
  }
}
