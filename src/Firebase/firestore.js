import { fs } from './firebase';

const settings = {/* your settings... */ timestampsInSnapshots: true };
fs.settings(settings);

export const addReferee = (data) =>
    fs.collection(`/referees`).add(data)

export const fetchReferees = () => 
    fs.collection('/referees').get()

export const updateReferee = data => 
    fs.doc(`referees/${data.id}`).update(data)