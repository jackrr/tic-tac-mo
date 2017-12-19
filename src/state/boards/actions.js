import { createActionCreator } from 'state/actions'

export const play = createActionCreator('PLAY')
export const move = createActionCreator('MOVE')
export const illegalMove = createActionCreator('ILLEGAL_MOVE')
