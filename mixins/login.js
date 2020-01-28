import * as firebase from 'firebase/app'
export default {
  methods: {
    login(auth) {
      const firebaseui = require('firebaseui')
      if (auth.currentUser) {
        return
      }
      const ui = new firebaseui.auth.AuthUI(auth)
      return new Promise((resolve) => {
        ui.start('#signin-ui', {
          callbacks: {
            signInSuccessWithAuthResult: resolve
          },
          signInFlow: 'popup',
          // signInSuccessUrl: '<url-to-redirect-to-on-success>',
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID
          ]
          // Terms of service url.
          // tosUrl: '<your-tos-url>',
          // Privacy policy url.
          // privacyPolicyUrl: '<your-privacy-policy-url>'
        })
      })
    }
  }
}
