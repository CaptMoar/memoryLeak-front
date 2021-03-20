import { fetchHelper } from "../helpers/fetchHelper";
import { types } from "../types/types";

export const getMetricas = () => {
    return async (dispatch) => {
        const resp = await fetchHelper('/memory', { }, 'POST')
        const body = await resp.json();
        dispatch(loadAuditoriaCaso(body))
    }
}

export const loadAuditoriaCaso = (arrData) => ({
    type: types.uiMetricasLoad,
    data : arrData
})