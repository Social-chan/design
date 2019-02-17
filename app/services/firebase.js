import Service from '@ember/service';
import * as firebase from 'firebase/app'
import config from '../config/environment'
import RSVP from 'rsvp'
import { set } from '@ember/object'
import { computed } from '@ember-decorators/object'

import 'firebase/firestore'

export default class FirebaseService extends Service {
  init() {
    firebase.initializeApp(config.firebase)
  }

  getRecords(path) {
    firebase.firestore().collection(path).onSnapshot(querySnapshot => {
      let recordsArr = [];

      querySnapshot.forEach(docSnapshot => {
        recordsArr.push({
          id: docSnapshot.id,
          ...docSnapshot.data()
        })
      })

      set(this, 'results', recordsArr)
    })
  }
}
