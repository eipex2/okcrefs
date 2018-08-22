import { fs } from './firebase';

const settings = {/* your settings... */ timestampsInSnapshots: true };
fs.settings(settings);

export const acceptChallenge = data =>
    fs.collection(`users`).add(data)

export const subscribe = (id, number) =>
    fs.doc(`users/${id}`).update({number})