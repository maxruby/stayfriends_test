/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'
import BundeslandList from './BundeslandList'
import PersonIndexCountList from './PersonIndexCountList'
import DataApi from '../../data/DataAPI'

const App = ({children}) => {

    return(
        <div className={css(styles.root)}>
          <Helmet title='Testaufgabe - Bundesland' />
          <h1 className={css(styles.header)}>Bundesländer</h1>
          <BundeslandList data={DataApi.getJsonStateList()}/>
          <PersonIndexCountList data={DataApi.getJsonPersonIndexList()}/>
      </div>
    )
}

const styles = StyleSheet.create({
  root: {
    maxWidth: '1024px'
   /* padding: '0 5px 0 5px' */
  },
  header: {
    padding: '10px 20px 7px 20px',
    margin: '10px 0 10px 0',
    color: '#666666',
    backgroundColor: '#DDDDDD',
    textTransform: 'uppercase'
  }
})

export default App