export const initialState = {}


export const getUserId = (state) => state.user && state.user.uid || null
export const getAccessToken = (state) => state.user.stsTokenManager.access.token || null