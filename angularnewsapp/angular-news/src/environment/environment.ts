export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDyIc-i_3eYm8CP1GmC5T1kk_HzZh7EhLk",
    authDomain: "angularnews-bbc07.firebaseapp.com",
    projectId: "angularnews-bbc07",
    storageBucket: "angularnews-bbc07.appspot.com", // Corrigi o domínio (removi "firebasestorage")
    messagingSenderId: "358032595791",
    appId: "1:358032595791:web:4f341213b363839a0c033a"
  },
  newsApi: {
    apiKey: "fad5abc231ea4171a40646587577fbf1",
    apiUrl: "https://newsapi.org/v2" // URL base da API (inclua a versão "/v2")
  }
};
