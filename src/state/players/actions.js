import { createActionCreator } from 'state/actions'

export const nextPlayer = createActionCreator('NEXT_PLAYER')
export const playerWon = createActionCreator('WINNING_MOVE')

