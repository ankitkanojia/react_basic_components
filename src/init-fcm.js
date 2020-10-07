import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
    apiKey: "AIzaSyDsyzOHtQbgKMCcRWf6jCC13dP6Bque9wE",
    authDomain: "notification-22344.firebaseapp.com",
    databaseURL: "https://notification-22344.firebaseio.com",
    projectId: "notification-22344",
    storageBucket: "notification-22344.appspot.com",
    messagingSenderId: "1080267744612",
    appId: "1:1080267744612:web:ca83763f0c11f0004c0671"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJ_GDfO_mQWhpM3EP0L4hEKbBnCln_-HsdA87jLREpchZ9PzAL-QrHwTDA5hLCVn49iF3Nr6wMNqoH0uj5zOCLA"
);

export { messaging };