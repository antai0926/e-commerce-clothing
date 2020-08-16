import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore
  .collection('users')
  .doc('ffykA2E2AV6IzJkeYLGq')
  .collection('carItems')
  .doc('IA9h9A8h5o8cBBBzGuTT');

firestore.doc('/users/ffykA2E2AV6IzJkeYLGq/carItems/IA9h9A8h5o8cBBBzGuTT');
firestore.collection('/users/ffykA2E2AV6IzJkeYLGq/carItems');