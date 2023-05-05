module.exports = {
    AccountingJournals: {
        add: {
            type: 'POST',
            body: {
                Date: {
                    type: 'date',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                JournalItems: {
                    type: 'object',
                    mandatory: true
                }
            },
        },
        edit: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                Date: {
                    type: 'date',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                JournalItems: {
                    type: 'object',
                    mandatory: true
                }
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        remove: {
            type: 'DELETE',
        },
    },
    Accounts: {
        add: {
            type: 'POST',
            body: {
                SubGroupID: {
                    mandatory: true,
                    type: 'UUID'
                },
                Description: {
                    mandatory: true,
                    type: 'string'
                },
                Depreciation: {
                    mandatory: false,
                    type: 'number'
                }
            }
        },
        remove: {
            type: 'DELETE',
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_category: {
            type: 'GET',

        },
    },
    Activities: {
        add: {
            type: 'POST',
            body: {
                Comment: {
                    mandatory: true,
                    type: 'string'
                },
                StartDate: {
                    mandatory: true,
                    type: 'date'
                },
                EndDate: {
                    mandatory: true,
                    type: 'date'
                },
                EventType: {
                    mandatory: true,
                    type: 'UUID'
                },
                IsPublic: {
                    mandatory: true,
                    type: 'boolean'
                },
                Title: {
                    mandatory: true,
                    type: 'string'
                },
                Repeatable: {
                    mandatory: true,
                    type: 'boolean'
                },
                RepeatInterval: {
                    mandatory: false,
                    type: 'number'
                },
                RepeatType: {
                    mandatory: false,
                    type: 'number'
                },
                Repetitions: {
                    mandatory: false,
                    type: 'number'
                },
                ExternalID: {
                    mandatory: false,
                    type: 'UUID'
                },
                ExternalIDType: {
                    mandatory: false,
                    type: 'number'
                },
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    BankAccounts: {
        add: {
            type: 'POST',
            body: {
                AccountID: {
                    mandatory: true,
                    type: 'UUID'
                },
                ExchangeRate: {
                    mandatory: true,
                    type: 'number'
                },
                Amount: {
                    mandatory: true,
                    type: 'number'
                },
                SatAccountID: {
                    mandatory: true,
                    type: 'UUID'
                },
                Date: {
                    mandatory: false,
                    type: 'date'
                },
                Comments: {
                    mandatory: true,
                    type: 'string'
                },
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    Catalogs: {
        get_list_banks: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_category: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_cities: {
            type: 'GET',
            query: {
                stateID: {
                    type: 'UUID',
                    mandatory: true
                },
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_states: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_coins: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_prices: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_series: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_offices: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_users: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    Clients: {
        add: {
            type: 'POST',
            body: {
                LegalName: {
                    type: 'string',
                    mandatory: true
                },
                CommercialName: {
                    type: 'string',
                    mandatory: true
                },
                RFC: {
                    type: 'string',
                    mandatory: true
                },
                CreditDays: {
                    type: 'number',
                    mandatory: true
                },
                CreditAmount: {
                    type: 'number',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                AccountingNumber: {
                    type: 'string',
                    mandatory: true
                },
                Address: {
                    type: 'object',
                    mandatory: false
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                PaymentMethod: {
                    type: 'number',
                    mandatory: false
                },
                PaymentTerm: {
                    type: 'number',
                    mandatory: false
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                SalesEmployeeID: {
                    type: 'UUID',
                    mandatory: false
                },
                CreditEmployeeID: {
                    type: 'UUID',
                    mandatory: false
                },
                Comment: {
                    type: 'string',
                    mandatory: false
                },
                Telephone: {
                    type: 'string',
                    mandatory: false
                },
                AccountNumber: {
                    type: 'string',
                    mandatory: false
                },
                DefaultDiscount: {
                    type: 'number',
                    mandatory: false
                },
                Source: {
                    type: 'string',
                    mandatory: false
                },
                RegimenFiscal: {
                    type: 'string',
                    mandatory: false
                },
            },
        },
        remove: {
            type: 'DELETE',
            query: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        edit: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                LegalName: {
                    type: 'string',
                    mandatory: true
                },
                CommercialName: {
                    type: 'string',
                    mandatory: true
                },
                RFC: {
                    type: 'string',
                    mandatory: true
                },
                CreditDays: {
                    type: 'number',
                    mandatory: true
                },
                CreditAmount: {
                    type: 'number',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                AccountingNumber: {
                    type: 'string',
                    mandatory: true
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                PaymentMethod: {
                    type: 'number',
                    mandatory: false
                },
                PaymentTerm: {
                    type: 'number',
                    mandatory: false
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                SalesEmployeeID: {
                    type: 'UUID',
                    mandatory: false
                },
                CreditEmployeeID: {
                    type: 'UUID',
                    mandatory: false
                },
                Comment: {
                    type: 'string',
                    mandatory: false
                },
                Telephone: {
                    type: 'string',
                    mandatory: false
                },
                AccountNumber: {
                    type: 'string',
                    mandatory: false
                },
                DefaultDiscount: {
                    type: 'number',
                    mandatory: false
                },
                Source: {
                    type: 'string',
                    mandatory: false
                },
                RegimenFiscal: {
                    type: 'string',
                    mandatory: false
                },
            }
        },
        get_list_client: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_detailClient: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
    },
    Comments: {
        add: {
            type: 'POST',
            body: {
                ExternalID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comment: {
                    type: 'string',
                    mandatory: true
                },
            },
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    CreditNotes: {
        add: {
            type: 'POST',
            body: {
                Amount: {
                    type: 'number',
                    mandatory: true
                },
                BankAccount: {
                    type: 'string',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: true
                },
                Concept: {
                    type: 'string',
                    mandatory: true
                },
                Unit: {
                    type: 'string',
                    mandatory: true
                },
                CreditNotesItems: {
                    type: 'object',
                    mandatory: true
                },
                IEPSAmount: {
                    type: 'number',
                    mandatory: true
                },
                InvoiceID: {
                    type: 'UUID',
                    mandatory: false
                },
                ISRRet: {
                    type: 'number',
                    mandatory: false
                },
                PaymentMethod: {
                    type: 'number',
                    mandatory: false
                },
                PaymentTerm: {
                    type: 'number',
                    mandatory: false
                },
                SeriesID: {
                    type: 'UUID',
                    mandatory: false
                },
                Type: {
                    type: 'number',
                    mandatory: false
                },
                VAT: {
                    type: 'number',
                    mandatory: false
                },
                VATRet: {
                    type: 'number',
                    mandatory: false
                },
            },
        }
    },
    Expenses: {
        get_pays: {
            type: 'GET',
            query: {
                expenseID: {
                    type: 'UUID',
                    mandatory: true
                },
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_details: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                },
            }
        },
    },
    Formulas: {
        AddFormula: {
            type: 'POST',
            body: {
                Title: {
                    type: 'string',
                    mandatory: true
                },
                Qty: {
                    type: 'number',
                    mandatory: true
                },
                ProductID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                Items: {
                    type: 'object',
                    mandatory: false
                },
                AdditionalCost: {
                    type: 'number',
                    mandatory: false
                },
            },
        },
        DeleteFormula: {
            type: 'DELETE',
            query: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        GetFormulaDetailByID: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        UpdateFormula: {
            type: 'PUT',
            body: {
                Title: {
                    type: 'string',
                    mandatory: true
                },
                Qty: {
                    type: 'number',
                    mandatory: true
                },
                ProductID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                Items: {
                    type: 'object',
                    mandatory: false
                },
                AdditionalCost: {
                    type: 'number',
                    mandatory: false
                },
            },
        },
        get_list_products: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    Inventory: {
        addInventory: {
            type: 'POST',
            body: {
                ProductID: {
                    type: 'UUID',
                    mandatory: true
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                AdjustQty: {
                    type: 'number',
                    mandatory: true
                },
                Date: {
                    type: 'string',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: true
                },
                LotImportID: {
                    type: 'UUID',
                    mandatory: false
                },
                AccountingAccountID: {
                    type: 'UUID',
                    mandatory: false
                },
            },
        },
        addMerchandise: {
            type: 'POST',
            body: {
                PurchaseOrderID: {
                    type: 'UUID',
                    mandatory: false
                },
                DocumentDate: {
                    type: 'date',
                    mandatory: true
                },
                ReceptionDate: {
                    type: 'Date',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: false
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                ProviderID: {
                    type: 'UUID',
                    mandatory: false
                },
                SeriesID: {
                    type: 'UUID',
                    mandatory: false
                },
                DocumentType: {
                    type: 'number',
                    mandatory: true
                },
                CreditDays: {
                    type: 'number',
                    mandatory: false
                },
                Items: {
                    type: 'object',
                    mandatory: false
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                DocNumber: {
                    type: 'string',
                    mandatory: true
                },
                RetVAT: {
                    type: 'number',
                    mandatory: false
                },
                RetISR: {
                    type: 'number',
                    mandatory: false
                },
                Status: {
                    type: 'number',
                    mandatory: true
                },
                ExistingExpenses: {
                    type: 'string',
                    mandatory: false
                },
                AddNewProvider: {
                    type: 'boolean',
                    mandatory: false
                },
                NewProviderName: {
                    type: 'string',
                    mandatory: false
                },
                NewProviderRFC: {
                    type: 'string',
                    mandatory: true
                },
                Disccount: {
                    type: 'number',
                    mandatory: false
                },
                AditionalExpenses: {
                    type: 'object',
                    mandatory: false
                },
            },
        },
        getInventory: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_merchandise: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    Invoices: {
        add_venta: {
            type: 'POST',
            body: {
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                ClientID: {
                    type: 'UUID',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: true
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                CFDIUse: {
                    type: 'number',
                    mandatory: true
                },
                InvoiceDate: {
                    type: 'date',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                ISRRetRate: {
                    type: 'number',
                    mandatory: false
                },
                VATRetRate: {
                    type: 'number',
                    mandatory: false
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                VATRate: {
                    type: 'number',
                    mandatory: false,
                },
                DiscountType: {
                    type: 'number',
                    mandatory: false,
                },
                DiscountAmount: {
                    type: 'number',
                    mandatory: false,
                },
                Products: {
                    type: 'array',
                    mandatory: false,
                },
                Services: {
                    type: 'array',
                    mandatory: false,
                },
                Emails: {
                    type: 'array',
                    mandatory: false,
                },
                PurchaseOrder: {
                    type: 'string',
                    mandatory: false,
                },
                CreditDays: {
                    type: 'number',
                    mandatory: false,
                },
                IsFiscalInvoice: {
                    type: 'boolean',
                    mandatory: false,
                },
                ShowIEPS: {
                    type: 'boolean',
                    mandatory: false,
                },
                Number: {
                    type: 'number',
                    mandatory: false,
                },
                Account: {
                    type: 'string',
                    mandatory: false,
                },
                Payments: {
                    type: 'array',
                    mandatory: false,
                },
                Serie: {
                    type: 'string',
                    mandatory: false,
                },
                Reference: {
                    type: 'string',
                    mandatory: false,
                },
                PaymentTerm: {
                    type: 'number',
                    mandatory: false,
                }
            }
        },
        remove_fact: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_pdf: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_xml: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_pays: {
            type: 'GET',
            query: {
                invoiceID: {
                    type: 'UUID',
                    mandatory: true
                },
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_details: {
            type: 'GET',
            params: {
                idOrNumber: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        add_pay_venta: {
            type: 'POST',
            body: {
                InvoiceID: {
                    type: 'UUID',
                    mandatory: true
                },
                AccountID: {
                    type: 'UUID',
                    mandatory: true
                },
                Date: {
                    type: 'date',
                    mandatory: true
                },
                Reference: {
                    type: 'string',
                    mandatory: true
                },
                Amount: {
                    type: 'number',
                    mandatory: true
                },
                PaymentTerm: {
                    type: 'number',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                ExchangeRateAccount: {
                    type: 'number',
                    mandatory: false
                }
            }
        },

    },
    Orders: {
        add_order: {
            type: 'POST',
            body: {
                AddressID: {
                    type: 'UUID',
                    mandatory: true
                },
                ClientID: {
                    type: 'UUID',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: true
                },
                OrderDate: {
                    type: 'date',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                DiscountAmount: {
                    type: 'number',
                    mandatory: false
                },
                DiscountType: {
                    type: 'number',
                    mandatory: false
                },
                DocNumberID: {
                    type: 'UUID',
                    mandatory: false
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                ISRRate: {
                    type: 'number',
                    mandatory: false
                },
                PurchaseOrder: {
                    type: 'string',
                    mandatory: false
                },
                VATRate: {
                    type: 'number',
                    mandatory: false
                },
                VATRetRate: {
                    type: 'number',
                    mandatory: false
                },
                Emails: {
                    type: 'array',
                    mandatory: false
                },
                Products: {
                    type: 'array',
                    mandatory: false
                },
                Services: {
                    type: 'array',
                    mandatory: false

                }
            }
        },
        edit_order: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                AddressID: {
                    type: 'UUID',
                    mandatory: true
                },
                ClientID: {
                    type: 'UUID',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: true
                },
                OrderDate: {
                    type: 'date',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                DiscountAmount: {
                    type: 'number',
                    mandatory: false
                },
                DiscountType: {
                    type: 'number',
                    mandatory: false
                },
                DocNumberID: {
                    type: 'UUID',
                    mandatory: false
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                ISRRate: {
                    type: 'number',
                    mandatory: false
                },
                PurchaseOrder: {
                    type: 'string',
                    mandatory: false
                },
                VATRate: {
                    type: 'number',
                    mandatory: false
                },
                VATRetRate: {
                    type: 'number',
                    mandatory: false
                },
                Emails: {
                    type: 'array',
                    mandatory: false
                },
                Products: {
                    type: 'array',
                    mandatory: false
                },
                Services: {
                    type: 'array',
                    mandatory: false

                }
            }
        },
        remove_order: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                },
            }
        },
        get_order: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            },
        },
        get_order_details: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            },
        }
    },
    Products: {
        add_product: {
            type: 'POST',
            body: {
                Title: {
                    type: 'string',
                    mandatory: true
                },
                Cost: {
                    type: 'number',
                    mandatory: true
                },
                Price: {
                    type: 'number',
                    mandatory: true
                },
                CurrencyId: {
                    type: 'UUID',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                Code: {
                    type: 'string',
                    mandatory: true
                },
                Description: {
                    type: 'string',
                    mandatory: false
                },
                SKU: {
                    type: 'string',
                    mandatory: false
                },
                Category1Id: {
                    type: 'UUID',
                    mandatory: false
                },
                Category2Id: {
                    type: 'UUID',
                    mandatory: false
                },
                Category3Id: {
                    type: 'UUID',
                    mandatory: false
                },
                IEPS: {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        remove_product: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                },
            }
        },
        edit_product: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                Code: {
                    type: 'string',
                    mandatory: true
                },
                Title: {
                    type: 'string',
                    mandatory: true
                },
                Cost: {
                    type: 'number',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                SKU: {
                    type: 'string',
                    mandatory: false
                },
                Description: {
                    type: 'string',
                    mandatory: false
                },
                CostType: {
                    type: 'number',
                    mandatory: false
                },
                Category1ID: {
                    type: 'UUID',
                    mandatory: false
                },
                Category2ID: {
                    type: 'UUID',
                    mandatory: false
                },
                Category3ID: {
                    type: 'UUID',
                    mandatory: false
                },
                ChargeVAT: {
                    type: 'boolean',
                    mandatory: false
                },
                Number: {
                    type: 'number',
                    mandatory: false
                },
                PricingType: {
                    type: 'number',
                    mandatory: false
                },
                Unit: {
                    type: 'string',
                    mandatory: false
                },
                PurchaseType: {
                    type: 'number',
                    mandatory: false
                },
                IEPSRate: {
                    type: 'number',
                    mandatory: false
                },
                Type: {
                    type: 'number',
                    mandatory: false
                },
                ProductionAuto: {
                    type: 'boolean',
                    mandatory: false
                }
            },
        },
        get_product: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_list_prod: {
            type: 'GET',
            params: {
                warehouseId: {
                    type: 'UUID',
                    mandatory: true
                },
                priceListId: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_details: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: false
                }
            }
        },
    },
    Prospects: {
        add_prospect: {
            type: 'POST',
            body: {
                Name: {
                    type: 'string',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                Company: {
                    type: 'string',
                    mandatory: false
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                IsPublic: {
                    type: 'boolean',
                    mandatory: false
                },
                Phone: {
                    type: 'string',
                    mandatory: false
                },
                PhoneExt: {
                    type: 'string',
                    mandatory: false
                }
            }
        },
        remove_prospect: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        edit_prospect: {
            type: 'PUT',
            body: {
                Name: {
                    type: 'string',
                    mandatory: true
                },
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                Company: {
                    type: 'string',
                    mandatory: false
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                IsPublic: {
                    type: 'boolean',
                    mandatory: false
                },
                Phone: {
                    type: 'string',
                    mandatory: false
                },
                PhoneExt: {
                    type: 'string',
                    mandatory: false
                }
            }
        },
        get_prospects: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            },
        },
        get_prospects_details: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: false
                }
            },
        },

    },
    Providers: {
        add_providers: {
            type: 'POST',
            body: {
                LegalName: {
                    type: 'string',
                    mandatory: true
                },
                CommercialName: {
                    type: 'string',
                    mandatory: true
                },
                RFC: {
                    type: 'string',
                    mandatory: true
                },
                CreditDays: {
                    type: 'number',
                    mandatory: true
                },
                CreditAmount: {
                    type: 'number',
                    mandatory: true
                },
                SATCompanyAccountID: {
                    type: 'UUID',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                Telephones: {
                    type: 'string',
                    mandatory: false
                }
            }
        },
        remove_providers: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        edit_providers: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                LegalName: {
                    type: 'string',
                    mandatory: true
                },
                CommercialName: {
                    type: 'string',
                    mandatory: true
                },
                RFC: {
                    type: 'string',
                    mandatory: true
                },
                CreditDays: {
                    type: 'number',
                    mandatory: true
                },
                CreditAmount: {
                    type: 'number',
                    mandatory: true
                },
                SATCompanyAccountID: {
                    type: 'UUID',
                    mandatory: false
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: false
                },
                Email: {
                    type: 'string',
                    mandatory: false
                },
                Telephones: {
                    type: 'string',
                    mandatory: false
                }
            }
        },
        get_providers: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            },
        },
    },
    Purchases: {
        add_purchases: {
            type: 'POST',
            body: {
                ProviderID: {
                    type: 'UUID',
                    mandatory: true
                },
                WarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                SerieID: {
                    type: 'UUID',
                    mandatory: false
                },
                StatusID: {
                    type: 'number',
                    mandatory: true
                },
                RFC: {
                    type: 'string',
                    mandatory: true
                },
                AddCatalog: {
                    type: 'boolean',
                    mandatory: false
                },
                CreditDays: {
                    type: 'number',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                },
                ProductList: {
                    type: 'array',
                    mandatory: false
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                AddProject: {
                    type: 'array',
                    mandatory: false
                }
            }
        },
        get_purchase: {
            type: 'GET',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        get_list: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
    },
    Quotes: {
        Quotes_DeleteQuote: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        Quotes_Get: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        Quotes_Getdetail: {
            type: 'GET',
            params: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        Quotes_NewQuote: {
            type: 'POST',
            body: {
                LocationID: {
                    type: 'UUID',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                DocNumberID: {
                    type: 'UUID',
                    mandatory: false
                },
                IsrRetRate: {
                    type: 'number',
                    mandatory: false
                },
                VatRetRate: {
                    type: 'number',
                    mandatory: false
                },
                Items: {
                    type: 'array',
                    mandatory: true
                },
                Discount: {
                    type: 'number',
                    mandatory: false
                },
                ClientProspect: {
                    type: 'object',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                Series: {
                    type: 'string',
                    mandatory: false
                },
                VATRate: {
                    type: 'number',
                    mandatory: false
                },
                Emails: {
                    type: 'array',
                    mandatory: false
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                }
            }

        },
        Quotes_UpdateQuote: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                LocationID: {
                    type: 'UUID',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                ExchangeRate: {
                    type: 'number',
                    mandatory: false
                },
                DocNumberID: {
                    type: 'UUID',
                    mandatory: false
                },
                IsrRetRate: {
                    type: 'number',
                    mandatory: false
                },
                VatRetRate: {
                    type: 'number',
                    mandatory: false
                },
                Items: {
                    type: 'array',
                    mandatory: true
                },
                Discount: {
                    type: 'number',
                    mandatory: false
                },
                ClientProspect: {
                    type: 'object',
                    mandatory: true
                },
                PriceListID: {
                    type: 'UUID',
                    mandatory: true
                },
                Series: {
                    type: 'string',
                    mandatory: false
                },
                VATRate: {
                    type: 'number',
                    mandatory: false
                },
                Emails: {
                    type: 'array',
                    mandatory: false
                },
                Comments: {
                    type: 'string',
                    mandatory: false
                }
            }
        },
    },
    Services: {
        add_concept: {
            type: 'POST',
            body: {
                Code: {
                    type: 'string',
                    mandatory: true
                },
                Title: {
                    type: 'string',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                SATCompanyAccountID: {
                    type: 'UUID',
                    mandatory: true
                },
                MeasurementUnit: {
                    type: 'string',
                    mandatory: true
                },
                Description: {
                    type: 'string',
                    mandatory: false
                },
                Category1ID: {
                    type: 'UUID',
                    mandatory: false

                },
                Category2ID: {
                    type: 'UUID',
                    mandatory: false

                },
                Category3ID: {
                    type: 'UUID',
                    mandatory: false

                },
                VariableConcept: {
                    type: 'boolean',
                    mandatory: false
                },
                ChargeVAT: {
                    type: 'boolean',
                    mandatory: false
                }
            }
        },
        remove_service: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        edit_concept: {
            type: 'PUT',
            body: {
                ID: {
                    type: 'UUID',
                    mandatory: true
                },
                Code: {
                    type: 'string',
                    mandatory: true
                },
                Title: {
                    type: 'string',
                    mandatory: true
                },
                CurrencyID: {
                    type: 'UUID',
                    mandatory: true
                },
                SATCompanyAccountID: {
                    type: 'UUID',
                    mandatory: true
                },
                MeasurementUnit: {
                    type: 'string',
                    mandatory: true
                },
                Description: {
                    type: 'string',
                    mandatory: false
                },
                Category1ID: {
                    type: 'UUID',
                    mandatory: false

                },
                Category2ID: {
                    type: 'UUID',
                    mandatory: false

                },
                Category3ID: {
                    type: 'UUID',
                    mandatory: false

                },
                VariableConcept: {
                    type: 'boolean',
                    mandatory: false
                },
                ChargeVAT: {
                    type: 'boolean',
                    mandatory: false
                }

            }
        },
        get_list_concept: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_details_service: {
            type: 'GET',
            params: {
                id: {
                    type: 'string',
                    mandatory: true
                }
            }
        }
    },
    UserProfile: {
        get_info_profile_company: {
            type: 'GET'
        },
        get_info_profile_user: {
            type: 'GET'
        },

    },
    Warehouses: {
        get_list_warehouses: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_transfer: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        Warehouses_CompleteTransferMerchandise: {
            type: 'POST',
            body: {
                id: {
                    type: 'UUID',
                    mandatory: true
                },
                Items: {
                    type: 'array',
                    mandatory: false
                }
            }
        },
        Warehouses_CreateTransferMerchandise: {
            type: 'POST',
            body: {
                SourceWarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                DestinationWarehouseID: {
                    type: 'UUID',
                    mandatory: true
                },
                Date: {
                    type: 'date',
                    mandatory: true
                },
                Description: {
                    type: 'string',
                    mandatory: false
                },
                Articles: {
                    type: 'array',
                    mandatory: true
                }
            }
        }
    },
    WebHooks: {
        remove_subs_webhook: {
            type: 'DELETE',
            params: {
                id: {
                    type: 'UUID',
                    mandatory: true
                },
                subscriptionID: {
                    type: 'UUID',
                    mandatory: false
                }
            }
        },
        edit_subs_webhook: {
            type: 'PUT',
            body: {
                event: {
                    type: 'string',
                    mandatory: true
                },
                target_url: {
                    type: 'string',
                    mandatory: true
                }
            }
        },
        get_list_subs: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_list_webhook_disp: {
            type: 'GET',
            query: {
                '$filter': {
                    type: 'string',
                    mandatory: false
                },
                '$orderby': {
                    type: 'string',
                    mandatory: false
                },
                '$top': {
                    type: 'number',
                    mandatory: false
                },
                '$skip': {
                    type: 'number',
                    mandatory: false
                }
            }
        },
        get_data_webhook: {
            type: 'GET',
            params: {
                eventID: {
                    type: 'UUID',
                    mandatory: true
                }
            }
        },
        add_subscription: {
            type: 'POST',
            body: {
                event: {
                    type: 'string',
                    mandatory: true
                },
                target_url: {
                    type: 'string',
                    mandatory: true
                }
            }
        },


    },
    Zapier: {
        add_activities: {
            type: 'POST'
        },
        add_subs_webhook_zapier: {
            type: 'POST'
        }
    },
    Untagged: {
        add_prospect: {
            type: 'POST'
        }
    }
}