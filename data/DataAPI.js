/* eslint-disable */

import * as data from './bundesland.json'

export default class DataApi {

     static getJsonStateList() {
        if(data !== undefined && data !== null) {
            let _stateList = data.stateList.map( (e) => {
                return {
                    name: e.name,
                    schoolCount: e.schoolCount,
                    url: e.url
                }
        })

        return(_stateList)

        } else {
            throw new Error('No suitable data loaded.')
        }
    }

    static getJsonPersonIndexList() {
        if(data !== undefined && data !== null) {
            const obj = data.personIndexCounts;
            let _personIndexCounts = Object.keys(obj).filter((k) => {
                                if(obj[k] > 0) {
                                    return obj[k]
                                }
            })

            return(_personIndexCounts)

        } else {
            throw new Error('No suitable data loaded.')
        }
    }
}