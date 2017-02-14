import firebase from 'firebase'
import firebaseService from './FirebaseService'
import store from '../store'

class NotificationService {
  constructor() {
  }

  broadcast(
    type,
    recipientType,
    content,
    subjectId,
    subjectType,
    meta = null
  ) {
    if (
      store.getState()[recipientType] &&
      Object.keys(store.getState()[recipientType]).length
    ) {
      Object.keys(store.getState()[recipientType]).map((recipientId) => {
        const recipient = store.getState()[recipientType][recipientId]
        let notification = {
          content,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          lastModifiedAt: firebase.database.ServerValue.TIMESTAMP,
          meta,
          recipientId: recipient.userId,
          status: 'SENT',
          subjectId,
          subjectType,
          type,
        }
        const id = firebaseService.add(
          'notifications',
          notification,
        )
        console.log('added ' + id)
      })
    }
  }

  notify(
    type,
    recipientType,
    recipientUid,
    content,
    subjectId,
    subjectType,
    meta = null
  ) {
    let recipientId = store.getState()[recipientType] &&
    Object.keys(store.getState()[recipientType]).find(recipientId => {
      return store.getState()[recipientType][recipientId].userId === recipientUid
    })

    if (
      recipientId
    ) {
      let notification = {
        content,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        lastModifiedAt: firebase.database.ServerValue.TIMESTAMP,
        meta,
        recipientId: store.getState()[recipientType][recipientId].userId,
        status: 'SENT',
        subjectId,
        subjectType,
        type,
      }
      firebaseService.add(
        'notifications',
        notification,
      )
    }
  }
}

const notificationService = new NotificationService()

export default notificationService
