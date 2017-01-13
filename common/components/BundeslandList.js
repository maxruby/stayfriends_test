/* eslint-disable */

import React, {Component, PropTypes} from 'react'
import { StyleSheet, css } from 'aphrodite'
import createArray from '../../tools/helpers'

const Bundesland = (props) => {

    return (
        <li className={css(styles.listItem)}>
            <a href={props.url} className={css(styles.url)}>
                <div className={css(styles.listItemContent)}>
                    {props.name}
                    <p className={css(styles.schoolCount)}>
                         {props.schoolCount} Schulen
                    </p>
                </div>
            </a>
        </li>
    )
}

const BundeslandList = (props) => {

    const listSizeArray = createArray(0, props.data.length, 1)

    return (
        <ul className={css(styles.list)}>{ listSizeArray.map((index) =>
            <Bundesland
                key={index.toString()}
                index={index}
                url={props.data[index].url}
                name={props.data[index].name}
                schoolCount={props.data[index].schoolCount} >
        </Bundesland>)}</ul>
    )
}

const screenSize = {
  small: '@media all and (max-width: 500px)',
  medium: '@media all and (min-width: 500px) and (max-width: 800px)',
  large: '@media all and (min-width: 800px)'
}

const styles = StyleSheet.create({

    list: {
        display: 'flex',
        'flex-direction': 'row',
        'flex-flow': 'wrap',
        'justify-content':'space-between',
        margin: '0',
        listStyle: 'none',
        width: '100%',
        height: 'auto',
        padding: '0',
        marginBottom: '5px',
        marginLeft: '0',
        marginRight: '0'
    },

    listItem: {
        border: '10px solid #eee',
        margin: '0 0 10px 0',
        backgroundColour:'#fff',
        padding: '10px',
        height: 'auto',
        ':hover': {
            border: '10px solid #FF751A'
        },

        [screenSize.large]: {
            width: '32.744%'
        },
        [screenSize.medium]: {
            width: '49.55%'
        },
        [screenSize.small]: {
            width: '100%'
        }
    },

    schoolCount: {
        fontSize: '0.8em',
        color: '#B6B1AF',
        display: 'block',
        margin: '4px 0 0 0'
    },
    url: {
        color: '#666',
        textDecoration: 'none'
    }
})

export default BundeslandList