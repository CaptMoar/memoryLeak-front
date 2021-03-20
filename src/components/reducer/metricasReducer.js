import { types } from "../types/types";

const initialState = {
    loading: false,
    data: []
}

export const metricasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiMetricasLoad:
            return {
                ...state,
                data: action.data,
                loading: true
            };
        case types.uiMetricasRefresh:
            return {
                data: action.data,
                loading: true
            }
        case types.uiMetricasReset:
            return {
                initialState
            }
        default:
            return state;
    }
}