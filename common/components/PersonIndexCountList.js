/* eslint-disable */

import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import createArray from '../../tools/helpers'

const PersonIndexCountItem = (props) => {
    return(
        <li className={css(styles.personIndexItem)}>{props.letter}</li>
    )
}

const PersonIndexCountList = (props) => {

    const listIndexArray = createArray(0, props.data.length, 1)

    return (
        <ul className={css(styles.personIndexList)}>
           { listIndexArray.map( (e) =>
                    <PersonIndexCountItem
                            key={e.toString()}
                            letter={props.data[e]} >
                    </PersonIndexCountItem> )
           }
        </ul>
    )
}

const styles = StyleSheet.create({

    personIndexItem: {
        float: 'left',
        width: '30px',
        display: 'inline',
        padding: '5px',
        height: 'auto',
        margin: '0 5px 5px 5px',
        backgroundColor: '#ddd',
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    personIndexList: {
        listStyle: 'none',
        textAlign: 'justify',
        margin: '0',
        padding: '0',
        width: '100%'
    }
})

export default PersonIndexCountList