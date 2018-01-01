import {cloneDeep} from 'lodash'
import {getPopularThemes} from './helpers/remotes/queries'
import db, {upsert} from '../db'

export default async ({commit, getters}, limit) => {
  commit('loading', true)

  try {
    const themes = db.getCollection('themes')
    const users = db.getCollection('users')
    const {data} = await getPopularThemes(limit)
    const {popularThemes} = data
    const savedThemes = []

    popularThemes.forEach((theme) => {
      const savedTheme = cloneDeep(theme)

      upsert(users, savedTheme.user)
      savedTheme.user = {
        '_id': theme.user._id
      }
      savedThemes.push(savedTheme)
      upsert(themes, savedTheme)
    })
    commit('loading', false)
    commit('actionError', null)
    return savedThemes
  } catch (error) {
    commit('loading', false)
    commit('actionError', error)
  }
}