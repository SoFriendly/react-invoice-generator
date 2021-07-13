import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  title: 'INVOICE',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'United States',
  billTo: 'Bill To:',
  clientName: 'Simform LLC',
  clientAddress: '111 N Orange Ave Suite 800',
  clientAddress2: 'Orlando, FL, 32801',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Write whatever we are invoicing you for here...',
      quantity: '1',
      rate: '4166.67',
    },
   
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (0%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: '',
  termLabel: 'Terms & Conditions',
  term: '',
}
