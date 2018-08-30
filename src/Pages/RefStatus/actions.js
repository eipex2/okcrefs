import { fs } from '../../Firebase';

/**
 * Add a new referee
 * @param {string} firstname 
 * @param {string} lastname 
 */
export const addReferee = (firstname, lastname) => dispatch =>
    fs.addReferee({ firstname, lastname, name: `${firstname} ${lastname}` }).then(
        succ => dispatch({ type: "ADD_REFEREE", data: { firstname, lastname, name: `${firstname} ${lastname}` } })
    ).catch(err => console.log(err))

/**
 * Set Referees
 * Redux action
 * @param {object} data 
 */
export const setReferees = data => ({
    type: "SET_REFEREES",
    data
})

/**
 * Fetch referees from the db
 */
export const getReferees = () =>
    dispatch => fs.fetchReferees().then(snap => {
        var data = []
        snap.forEach(doc => {
            const ref = {
                ...doc.data(),
                id: doc.id,
            }
            data.push(ref);
        })
        dispatch(setReferees(data))
    }).catch(err => console.log(err))

/**
 * Update a referee record
 * Firebase doesnt accept undefined fields so 
 * i had to spread data and set action to empty string
 * @param {} data 
 */
export const updateReferee = data => dispatch => fs.updateReferee({ ...data, action: '' }).then(
    succ => console.log('updated')
).catch(err => console.log(err))