export function createActionCreator(type) {
  const actionCreator = (payload = {}) => {
    return { type, payload }
  }

  actionCreator.toString = () => type

  return actionCreator
}
