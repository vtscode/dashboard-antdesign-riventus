import moment from 'moment';

const initURL = process.env.REACT_APP_BASE_URL;
const initialEndpoint = '/';
const defaultPathDomain = initURL+initialEndpoint;
// convert tgl
const formatDateInput = (format = 'YYYY-MM-DD') => format;
const formDateInputValue = (tgl = new Date(), format ='') => moment(tgl, format ? format : formatDateInput()); // output : Object { _isAMomentObject: true, ...}
const formDateDisplayValue = (tgl = new Date(), format ='') => moment(tgl).format(format ? format : formatDateInput()); // output : 2020-11-30
// convert number
export const numberFormat = (params,type ='') => type === 'uang' ? `Rp${new Intl.NumberFormat('id-ID', {}).format(params)},00` : new Intl.NumberFormat('id-ID', {}).format(params);

export { initURL, initialEndpoint, defaultPathDomain, formatDateInput, formDateInputValue,formDateDisplayValue, numberFormat };