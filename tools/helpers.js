/* eslint-disable */

import 'babel-polyfill'
import 'babel-core/register'

// generate arrays automatically from start, end, and increment arguments
function* arrGen(start, end, increment) {
    for (start; start <= end - increment - 1; start += increment) {
        yield start
    }
    yield start
}

const createArray = (s, e, inc) => { return Array.from(arrGen(s, e, inc), (value) => value) }

export default createArray

export function getClientWindowDims() {
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight

    return {width: width, height: height}
}