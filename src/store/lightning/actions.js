import { lightningUrl } from '../../const/const'

export const lightningActions = {
  INVOICE_REQUEST: '@@invoice/INVOICE_REQUEST',
  INVOICE_FULFILED: '@@invoice/INVOICE_FULFILED',
  INVOICE_ERROR: '@@invoice/INVOICE_ERROR',
 
  invoice: data => ({
    type: lightningActions.INVOICE_REQUEST,
    payload: {
      data: data,
      method: 'post',
      url: lightningUrl + '/createInvoice',
      sucess: lightningActions.invoiceFulfilled,
      error: lightningActions.invoiceError
    }
  }),
  invoiceFulfilled: resp => ({
    type: lightningActions.INVOICE_FULFILED,
    payload: {resp}
  }),
  invoiceError: error => ({
    type: lightningActions.INVOICE_ERROR,
    payload: {error}
  }),  
}