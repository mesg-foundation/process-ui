import * as firebase from 'firebase/app'
import mixin from '~/mixins/login'
export default async () => {
  if (firebase.auth().currentUser) { return }
  await mixin.methods.login(firebase.auth())
}
