const loggeMiddleware = (store) => (next) => (action) => {
    console.log('Current State: ', store.getState())
    console.log('Action: ', action)
    next(action)
    console.log('New State: ', store.getState())
}

export default loggeMiddleware