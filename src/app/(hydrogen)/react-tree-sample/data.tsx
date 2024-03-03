export const TreeData: any = {
    "data": [
      {
        "id": 19,
        "title": "مدیریت ایوا",
        "key": "Iva",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "ایوا",
        "children": [
          {
            "id": 46,
            "title": "خطاهای شاپرکی",
            "key": "Iva.Shaparak.Errors",
            "iconPath": "/images/icons/warning.svg",
            "parentId": 19,
            "level": 1,
            "showInMenu": true,
            "description": "خطاهای شاپرکی",
            "children": [
              {
                "id": 47,
                "title": "گزارش خطاها",
                "key": "Iva.Shaparak.Errors.ReadAll",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 46,
                "level": 2,
                "showInMenu": true,
                "description": "لیست خطاهای شاپرکی",
                "children": []
              },
              {
                "id": 49,
                "title": "افزودن خطای جدید",
                "key": "Iva.Shaparak.Errors.Create",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 46,
                "level": 2,
                "showInMenu": true,
                "description": "ایجاد خطای شاپرکی",
                "children": []
              }
            ]
          },
          {
            "id": 58,
            "title": "گزارش های سرويس شاپرک",
            "key": "Iva.ShaparakReport",
            "iconPath": "/images/icons/report.svg",
            "parentId": 19,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش های سرويس شاپرک",
            "children": [
              {
                "id": 177,
                "title": "گزارش اطلاعات آخرین تراکنش های کارت",
                "key": "Iva.ShaparakReport.TopCardTransactionsInfo",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 58,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش اطلاعات آخرین تراکنش های کارت",
                "children": []
              },
              {
                "id": 178,
                "title": "گزارش آخرین تراکنش های سرویس پبچک",
                "key": "Iva.ShaparakReport.TopPichakTransactionsInfo",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 58,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش آخرین تراکنش های سرویس پبچک",
                "children": []
              }
            ]
          },
          {
            "id": 63,
            "title": "پشتیبانی",
            "key": "Iva.Support.Suggestions",
            "iconPath": "/images/icons/headphone.svg",
            "parentId": 19,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت نظرات و پیشنهادات",
            "children": [
              {
                "id": 65,
                "title": "گزارش نظرات کاربران",
                "key": "Iva.Support.Suggestions.Read",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 63,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده نظرات کاربران",
                "children": []
              },
              {
                "id": 66,
                "title": "مدیریت دسته بندی ها",
                "key": "Iva.Support.Suggestions.Categories.Read",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 63,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده دسته بندی ها",
                "children": []
              }
            ]
          },
          {
            "id": 175,
            "title": "پذیرنده ایوا",
            "key": "Iva.Merchant",
            "iconPath": "/images/icons/merchant.svg",
            "parentId": 19,
            "level": 1,
            "showInMenu": true,
            "description": "اطلاعات پذیرنده",
            "children": [
              {
                "id": 176,
                "title": "افزودن اطلاعات پذیرنده",
                "key": "Iva.Merchant.Create",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 175,
                "level": 2,
                "showInMenu": true,
                "description": "ایجاد پذیرنده جدید",
                "children": []
              }
            ]
          },
          {
            "id": 260,
            "title": "محدوديت های کارت به کارت",
            "key": "Iva.CardTransferRestriction",
            "iconPath": "/images/icons/merchant.svg",
            "parentId": 19,
            "level": 1,
            "showInMenu": true,
            "description": "مديريت محدوديت های کارت به کارت",
            "children": [
              {
                "id": 261,
                "title": "مشاهده محدوديت های کارت به کارت",
                "key": "Iva.CardTransferRestriction.Read",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 260,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده محدوديت های کارت به کارت",
                "children": []
              },
              {
                "id": 262,
                "title": "ايجاد/ويرايش محدوديت هاي کارت به کارت",
                "key": "Iva.CardTransferRestriction.Update",
                "iconPath": null,
                "parentId": 260,
                "level": 2,
                "showInMenu": false,
                "description": "ويرايش محدوديت هاي کارت به کارت",
                "children": []
              },
              {
                "id": 265,
                "title": "وایت لیست کارت به کارت",
                "key": "Iva.CardTransferWhiteList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 260,
                "level": 2,
                "showInMenu": true,
                "description": "وایت لیست کارت به کارت",
                "children": [
                  {
                    "id": 266,
                    "title": "مشاهده وایت لیست کارت به کارت",
                    "key": "Iva.CardTransferWhiteList.Read",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 265,
                    "level": 2,
                    "showInMenu": true,
                    "description": "بازیابی لیست وایت لیست کارت به کارت",
                    "children": []
                  },
                  {
                    "id": 267,
                    "title": "افزودن وایت لیست کارت به کارت",
                    "key": "Iva.CardTransferWhiteList.Create",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 265,
                    "level": 2,
                    "showInMenu": true,
                    "description": "افزودن وایت لیست کارت به کارت",
                    "children": []
                  },
                  {
                    "id": 268,
                    "title": "ویرایش وایت لیست کارت به کارت",
                    "key": "Iva.CardTransferWhiteList.Update",
                    "iconPath": null,
                    "parentId": 265,
                    "level": 2,
                    "showInMenu": null,
                    "description": "ویرایش وایت لیست کارت به کارت",
                    "children": []
                  },
                  {
                    "id": 269,
                    "title": "حذف وایت لیست کارت به کارت",
                    "key": "Iva.CardTransferWhiteList.Delete",
                    "iconPath": null,
                    "parentId": 265,
                    "level": 2,
                    "showInMenu": null,
                    "description": "حذف وایت لیست کارت به کارت",
                    "children": []
                  }
                ]
              },
              {
                "id": 270,
                "title": "بلک لیست کارت به کارت",
                "key": "Iva.CardTransferBlockedDestinationPan",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 260,
                "level": 2,
                "showInMenu": true,
                "description": "بلک لیست کارت به کارت",
                "children": [
                  {
                    "id": 271,
                    "title": "مشاهده بلک لیست کارت به کارت",
                    "key": "Iva.CardTransferBlockedDestinationPan.Read",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 270,
                    "level": 2,
                    "showInMenu": true,
                    "description": "مشاهده بلک لیست کارت به کارت",
                    "children": []
                  },
                  {
                    "id": 272,
                    "title": "حذف بلک لیست کارت به کارت",
                    "key": "Iva.CardTransferBlockedDestinationPan.Delete",
                    "iconPath": null,
                    "parentId": 270,
                    "level": 2,
                    "showInMenu": null,
                    "description": "حذف بلک لیست کارت به کارت",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": 20,
        "title": "مدیریت نشان",
        "key": "Neshan",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "نشان",
        "children": [
          {
            "id": 33,
            "title": "نشان اعتباری",
            "key": "Neshan.Pishgaman",
            "iconPath": "/images/icons/neshan.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "پیشگامان نشان",
            "children": [
              {
                "id": 34,
                "title": "گزارش پرداخت نشان اعتباری",
                "key": "Neshan.Pishgaman.PaymentReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش پرداخت ها در پیشگامان",
                "children": []
              },
              {
                "id": 41,
                "title": "گزارش تراکنش های نشان اعتباری",
                "key": "Neshan.UserTransactionReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش کارت اعتباری",
                "children": []
              },
              {
                "id": 60,
                "title": "گزارش ثبت نام نشان اعتباری",
                "key": "Neshan.LoanRegistrationReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش وام های ثبت نام شده",
                "children": []
              },
              {
                "id": 173,
                "title": "موجودی در لحظه کارت نشان اعتبار",
                "key": "Neshan.CreditCartBalance",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "موجودی در لحظه کارت نشان اعتبار",
                "children": []
              },
              {
                "id": 228,
                "title": "ترمينال",
                "key": "Neshan.Terminals",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "ترمينال",
                "children": [
                  {
                    "id": 229,
                    "title": "افزودن ترمینال جدید",
                    "key": "Neshan.Terminals.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 228,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن ترمينال جدید",
                    "children": []
                  },
                  {
                    "id": 230,
                    "title": "گزارش ترمينال ها",
                    "key": "Neshan.Terminals.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 228,
                    "level": 3,
                    "showInMenu": true,
                    "description": "ليست ترمينال ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 233,
                "title": "جزئیات تمدید کاربر",
                "key": "Neshan.InquiryExtend",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "جزئیات تمدید کاربر",
                "children": []
              },
              {
                "id": 235,
                "title": "جزئیات صدور کارت",
                "key": "Neshan.InquiryCreateCardRequest",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "جزئیات صدور کارت",
                "children": []
              },
              {
                "id": 263,
                "title": "اطلاعات کارت نشان اعتباری کاربر",
                "key": "Neshan.Pishgaman.GetUserCreditCartInfo",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "بازیابی اطلاعات کارت نشان اعتباری کاربر با شماره موبایل",
                "children": []
              },
              {
                "id": 264,
                "title": "گزارش صورتحساب های نشان اعتباری",
                "key": "Neshan.Pishgaman.GetPishgamanStatements",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "بازیابی لیست صورتحساب های نشان اعتباری",
                "children": []
              },
              {
                "id": 273,
                "title": "شعب",
                "key": "Neshan.Branches",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "شعب",
                "children": [
                  {
                    "id": 274,
                    "title": "افزودن شعبه غیر فعال در ثبت نام نشان اعتبار",
                    "key": "Neshan.BlockedBranches.AddBlockedBranch",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 273,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن شعبه غیر فعال در ثبت نام نشان اعتبار",
                    "children": []
                  },
                  {
                    "id": 275,
                    "title": "گزارش شعب غیر فعال در نشان اعتباری",
                    "key": "Neshan.BlockedBranches.GetBlockedBranches",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 273,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست شعب غیر فعال در نشان اعتباری",
                    "children": []
                  },
                  {
                    "id": 276,
                    "title": "حذف شعبه در نشان اعتباری",
                    "key": "Neshan.BlockedBranches.DeleteBlockedBranch",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 273,
                    "level": 3,
                    "showInMenu": false,
                    "description": "حذف شعبه در نشان اعتباری",
                    "children": []
                  }
                ]
              },
              {
                "id": 408,
                "title": "گزارش تراکنش های سرویس پیشگامان ",
                "key": "Neshan.Pishgaman.GetPishgamanTransactions",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "لیست تراکنش ها نشان اعتباری",
                "children": []
              },
              {
                "id": 425,
                "title": "سهام عدالت",
                "key": "Neshan.EquityStocks",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 33,
                "level": 2,
                "showInMenu": true,
                "description": "سهام عدالت",
                "children": [
                  {
                    "id": 422,
                    "title": "آزادسازی دسته ای",
                    "key": "Neshan.BulkFreeGage",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 425,
                    "level": 3,
                    "showInMenu": true,
                    "description": "آزادسازی دسته ای سهام ",
                    "children": [
                      {
                        "id": 423,
                        "title": "آپلود فایل آزادسازی دسته ای",
                        "key": "Neshan.BulkFreeGage.Upload",
                        "iconPath": "/images/icons/circle.svg",
                        "parentId": 422,
                        "level": 2,
                        "showInMenu": false,
                        "description": "آپلود فایل آزادسازی دسته ای سهام ",
                        "children": []
                      },
                      {
                        "id": 424,
                        "title": "دریافت فایل نمونه آزادسازی دسته ای",
                        "key": "Neshan.BulkFreeGage.GetSampleFiles",
                        "iconPath": "/images/icons/circle.svg",
                        "parentId": 422,
                        "level": 2,
                        "showInMenu": false,
                        "description": "دریافت فایل نمونه آزادسازی دسته ای سهام ",
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": 426,
                    "title": "گزارش آزادسازي سهام عدالت",
                    "key": "Neshan.EquityStocks.Release",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 425,
                    "level": 3,
                    "showInMenu": true,
                    "description": "گزارش آزادسازي سهام عدالت",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 38,
            "title": "گزارش بازپرداخت تسهیلات",
            "key": "Neshan.AccountFacilities.Loan.Repayment",
            "iconPath": "/images/icons/report.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش پرداخت تسهیلات",
            "children": []
          },
          {
            "id": 53,
            "title": "گزارش آمار فراخوانی سرویس ها",
            "key": "Neshan.StatisticalReport",
            "iconPath": "/images/icons/report.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش آمار فراخوانی سرویس های نشان",
            "children": []
          },
          {
            "id": 56,
            "title": "امضای دیجیتال",
            "key": "Neshan.RefoundSignatureFee",
            "iconPath": "/images/icons/sign.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "استرداد هزینه امضا",
            "children": [
              {
                "id": 57,
                "title": "استرداد هزینه گواهی امضا",
                "key": "Neshan.RefoundSignatureFee.Inquiry",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 56,
                "level": 2,
                "showInMenu": true,
                "description": "احراز هویت واستعلام تیکت فعال",
                "children": []
              },
              {
                "id": 74,
                "title": "استعلام وضعیت امضای دیجیتال",
                "key": "Neshan.RefoundSignatureFee.InquiryTicket",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 56,
                "level": 2,
                "showInMenu": true,
                "description": "استعلام وضعیت امضای دیجیتال",
                "children": []
              },
              {
                "id": 87,
                "title": "استعلام وضعیت استرداد هزینه",
                "key": "Neshan.RefoundSignatureFee.InquiryRefund",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 56,
                "level": 2,
                "showInMenu": true,
                "description": "استعلام وضعیت استرداد هزینه امضا",
                "children": []
              },
              {
                "id": 206,
                "title": "فعال سازی امضای دیجیتال",
                "key": "Neshan.RefoundSignatureFee.EnableTicket",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 56,
                "level": 2,
                "showInMenu": true,
                "description": "فعال سازی امضای دیجیتال",
                "children": []
              }
            ]
          },
          {
            "id": 64,
            "title": "کارت هدیه",
            "key": "Neshan.GiftCart",
            "iconPath": "/images/icons/gift.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": ";کارت هدیه",
            "children": [
              {
                "id": 54,
                "title": "گزارش کارت هدیه بانک ملی",
                "key": "Neshan.GiftCartHistoryReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 64,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تاریخچه کارت های هدیه نشان",
                "children": []
              },
              {
                "id": 55,
                "title": "گزارش کارت هدیه",
                "key": "Iva.GiftCartHistoryReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 64,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تاریخچه کارت های هدیه ایوا  ",
                "children": []
              }
            ]
          },
          {
            "id": 70,
            "title": "افتتاح حساب",
            "key": "Neshan.CreateAccount",
            "iconPath": "/images/icons/fileplus.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "افتتاح حساب",
            "children": [
              {
                "id": 42,
                "title": "گزارش درخواست های افتتاح حساب",
                "key": "Neshan.CreateAccount.RequestList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 70,
                "level": 2,
                "showInMenu": true,
                "description": "لیست درخواست های افتتاح حساب",
                "children": []
              }
            ]
          },
          {
            "id": 237,
            "title": "تسهیلات قوه قضاییه",
            "key": "Neshan.Facility",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "تسهیلات قوه قضاییه",
            "children": [
              {
                "id": 277,
                "title": "درخواست های داده ورزی",
                "key": "Neshan.Facility.Panel",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 237,
                "level": 2,
                "showInMenu": true,
                "description": "درخواست های داده ورزی",
                "children": [
                  {
                    "id": 238,
                    "title": "گزارش درخواست های داده ورزی",
                    "key": "Neshan.Facility.PanelRequests",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 277,
                    "level": 3,
                    "showInMenu": true,
                    "description": "گزارش درخواست های داده ورزی",
                    "children": []
                  },
                  {
                    "id": 239,
                    "title": "جزئیات قرارداد داده ورزی",
                    "key": "Neshan.Facility.ContractDetail",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 277,
                    "level": 3,
                    "showInMenu": false,
                    "description": "جزئیات قرارداد داده ورزی",
                    "children": []
                  }
                ]
              },
              {
                "id": 278,
                "title": "درخواست های ایوا",
                "key": "Neshan.Facility.Iva",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 237,
                "level": 2,
                "showInMenu": true,
                "description": "درخواست های ایوا",
                "children": [
                  {
                    "id": 240,
                    "title": "گزارش درخواست های ایوا",
                    "key": "Neshan.Facility.GetAllRequests",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 278,
                    "level": 3,
                    "showInMenu": true,
                    "description": "گزارش درخواست های ایوا",
                    "children": []
                  },
                  {
                    "id": 241,
                    "title": "کارتابل ایوا",
                    "key": "Neshan.Facility.Kartable",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 278,
                    "level": 3,
                    "showInMenu": true,
                    "description": "کارتابل ایوا",
                    "children": []
                  },
                  {
                    "id": 242,
                    "title": "قرارداد ایوا",
                    "key": "Neshan.Facility.Contract",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 278,
                    "level": 3,
                    "showInMenu": true,
                    "description": "قرارداد ایوا",
                    "children": []
                  },
                  {
                    "id": 243,
                    "title": "گزارش اقساط ایوا",
                    "key": "Neshan.Facility.ReportInstallment",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 278,
                    "level": 3,
                    "showInMenu": true,
                    "description": "گزارش اقساط ایوا",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 407,
            "title": "کارت اعتباری",
            "key": "Neshan.CreditCard",
            "iconPath": "/images/icons/gift.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "کارت اعتباری",
            "children": [
              {
                "id": 402,
                "title": "افزودن دسته بندی ترمینال",
                "key": "Neshan.CreditCard.CreateCategoryTypes",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 407,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن دسته بندی ترمینال",
                "children": []
              },
              {
                "id": 403,
                "title": "گزارش دسته بندی ترمینال ها",
                "key": "Neshan.CreditCard.GetAllCategoryTypes",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 407,
                "level": 2,
                "showInMenu": true,
                "description": "لیست دسته بندی ترمینال ها",
                "children": []
              },
              {
                "id": 404,
                "title": "گزارش ترمینال ها",
                "key": "Neshan.CreditCard.GetAllCategoryTypeToTerminal",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 407,
                "level": 2,
                "showInMenu": true,
                "description": "لیست ترمینال ها",
                "children": []
              },
              {
                "id": 405,
                "title": "افزودن ترمینال",
                "key": "Neshan.CreditCard.CreateCategoryTypeToTerminal",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 407,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن ترمینال",
                "children": []
              },
              {
                "id": 406,
                "title": "افزودن دسته ای ترمینال",
                "key": "Neshan.CreditCard.BulkCategoryTypeToTerminal",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 407,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن دسته ای ترمینال",
                "children": []
              }
            ]
          },
          {
            "id": 409,
            "title": "ملی کارت",
            "key": "Neshan.MelliCard",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 20,
            "level": 1,
            "showInMenu": true,
            "description": "ملی کارت",
            "children": [
              {
                "id": 410,
                "title": "گزارش درخواست صدور ملی کارت",
                "key": "Neshan.MelliCard.IssuedMelliCardsReqReports",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 409,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش صدور ملی کارت",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 21,
        "title": "مدیریت کیف پول",
        "key": "Wallet",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "کیف پول",
        "children": [
          {
            "id": 26,
            "title": "کیف پول کاربران",
            "key": "Wallet.WalletCharge",
            "iconPath": "/images/icons/wallet.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "شارژ کیف پول",
            "children": [
              {
                "id": 16,
                "title": "شارژ دسته ای",
                "key": "Wallet.WalletCharge.BulkCharge.Upload",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 26,
                "level": 2,
                "showInMenu": true,
                "description": "آپلود فایل شارژ دسته ای کیف پول",
                "children": []
              },
              {
                "id": 18,
                "title": "گزارش شارژهای دسته ای",
                "key": "Wallet.WalletCharge.BulkCharge.FileList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 26,
                "level": 2,
                "showInMenu": true,
                "description": "لیست فایل های شارژ دسته ای کیف پول",
                "children": []
              },
              {
                "id": 45,
                "title": "مسدود سازی و آزادسازی کیف پول",
                "key": "Wallet.DeActive",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 26,
                "level": 2,
                "showInMenu": true,
                "description": "مسدود سازی و آزادسازی کیف پول",
                "children": []
              },
              {
                "id": 51,
                "title": "گزارش کیف پول ایوا",
                "key": "Wallet.WalletCharge.WalletReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 26,
                "level": 2,
                "showInMenu": true,
                "description": "گردش حساب کيف پول",
                "children": []
              },
              {
                "id": 52,
                "title": "گزارش شاتوت",
                "key": "Wallet.WalletCharge.WalletTransaction",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 26,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تراکنش کیف پول",
                "children": []
              }
            ]
          },
          {
            "id": 29,
            "title": "کیف پول مرجع",
            "key": "Wallet.WalletCharge.VirtualCardBalance",
            "iconPath": "/images/icons/coin.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "موجودی کیف پول مرجع",
            "children": []
          },
          {
            "id": 30,
            "title": "کیف به کیف",
            "key": "Wallet.WalletToWallet",
            "iconPath": "/images/icons/walletToWallet.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "کیف به کیف",
            "children": [
              {
                "id": 31,
                "title": "گزارش کیف به کیف",
                "key": "Wallet.WalletToWallet.All",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 30,
                "level": 2,
                "showInMenu": true,
                "description": "لیست کیف به کیف",
                "children": []
              },
              {
                "id": 179,
                "title": "کیف به کیف های انجام شده",
                "key": "Wallet.WalletToWallet.Transferred",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 30,
                "level": 2,
                "showInMenu": true,
                "description": "کیف به کیف های انجام شده",
                "children": []
              }
            ]
          },
          {
            "id": 75,
            "title": "گزارش تجمیعی تعداد و مبلغ عملیات روی کیف پول",
            "key": "Wallet.Report.ComperhensiveReport",
            "iconPath": "/images/icons/report.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش تجمیعی تعداد و مبلغ عملیات روی کیف پول",
            "children": []
          },
          {
            "id": 76,
            "title": "سازمان ها",
            "key": "Wallet.Provider",
            "iconPath": "/images/icons/building.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "سازمان",
            "children": [
              {
                "id": 32,
                "title": "شارژ کیف پول سازمان ها",
                "key": "Wallet.WalletCharge.ProviderCharge",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "شارژ کیف پول سازمان",
                "children": []
              },
              {
                "id": 39,
                "title": "گزارش تراکنش های کیف سازمانی",
                "key": "Wallet.WalletProvider.TransactionReport",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تراکنش های کیف سازمانی",
                "children": []
              },
              {
                "id": 40,
                "title": "گزارش بازپرداخت سازماني",
                "key": "Wallet.Cashout.GetApproveList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش بازپرداخت سازماني",
                "children": []
              },
              {
                "id": 71,
                "title": "دریافت گزارش و مدیریت درخواست های بازپرداخت سازمانی",
                "key": "Wallet.Cashout.GetRequestList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "دریافت لیست و مدیریت درخواست های بازپرداخت سازمانی",
                "children": []
              },
              {
                "id": 73,
                "title": "گزارش شارژ کیف پول سازمان ها",
                "key": "Wallet.Report.ProviderChargeWallet",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش شارژ کیف پول سازمان ها",
                "children": []
              },
              {
                "id": 77,
                "title": "گزارش سازمان ها",
                "key": "Wallet.Provider.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "نمایش لیست سازمان ها",
                "children": []
              },
              {
                "id": 78,
                "title": "افزودن سازمان جدید",
                "key": "Wallet.Provider.Create",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 76,
                "level": 2,
                "showInMenu": true,
                "description": "نعریف کردن سازمان",
                "children": []
              }
            ]
          },
          {
            "id": 83,
            "title": "پرسش و پاسخ",
            "key": "Wallet.Faq",
            "iconPath": "/images/icons/question.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "پرسش و پاسخ",
            "children": [
              {
                "id": 84,
                "title": "افزودن پرسش و پاسخ",
                "key": "Wallet.Faq.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 83,
                "level": 2,
                "showInMenu": true,
                "description": "تعریف پرسش و پاسخ",
                "children": []
              },
              {
                "id": 86,
                "title": "گزارش پرسش و پاسخ ها",
                "key": "Wallet.Faq.GetAll",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 83,
                "level": 2,
                "showInMenu": true,
                "description": "لیست پرسش و پاسخ ها",
                "children": []
              }
            ]
          },
          {
            "id": 157,
            "title": "ایجاد کد امنیتی",
            "key": "Authentication.GenerateCode",
            "iconPath": "/images/icons/security.svg",
            "parentId": 21,
            "level": 1,
            "showInMenu": true,
            "description": "ایجاد کد امنیتی",
            "children": []
          }
        ]
      },
      {
        "id": 22,
        "title": "مدیریت پنل",
        "key": "Configuration",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "پیکربندی سیستم",
        "children": [
          {
            "id": 23,
            "title": "مدیریت کاربران",
            "key": "Configuration.Users",
            "iconPath": "/images/icons/users.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت کاربران",
            "children": [
              {
                "id": 1,
                "title": "افزودن کاربر جدید",
                "key": "Configuration.Users.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 23,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن کاربر جدید",
                "children": []
              },
              {
                "id": 3,
                "title": "تمام کاربران",
                "key": "Configuration.Users.Read",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 23,
                "level": 2,
                "showInMenu": true,
                "description": "دریافت اطلاعات کاربر",
                "children": []
              }
            ]
          },
          {
            "id": 24,
            "title": "مدیریت نقش ها",
            "key": "Configuration.Roles",
            "iconPath": "/images/icons/roles.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت نقش ها",
            "children": [
              {
                "id": 9,
                "title": "مشاهده نقش ها",
                "key": "Configuration.Roles.Read",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 24,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده نقش ها",
                "children": []
              },
              {
                "id": 10,
                "title": "افزودن نقش جدید",
                "key": "Configuration.Roles.Create",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 24,
                "level": 2,
                "showInMenu": true,
                "description": "ایجاد نقش",
                "children": []
              }
            ]
          },
          {
            "id": 25,
            "title": "مدیریت دسترسی ها",
            "key": "Configuration.Permissions",
            "iconPath": "/images/icons/access.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت دسترسی ها",
            "children": [
              {
                "id": 6,
                "title": "ویرایش دسترسی کاربران",
                "key": "Configuration.Users.Permissions.Update",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 25,
                "level": 2,
                "showInMenu": true,
                "description": "ویرایش مجوز های کاربر",
                "children": []
              },
              {
                "id": 13,
                "title": "ویرایش دسترسی نقش ها",
                "key": "Configuration.Roles.Permissions.Update",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 25,
                "level": 2,
                "showInMenu": true,
                "description": "ویرایش مجوز های نقش",
                "children": []
              }
            ]
          },
          {
            "id": 203,
            "title": "تنظیمات آلارم",
            "key": "Configuration.Notification.Settings.Get",
            "iconPath": "/images/icons/alarm.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "تنظیمات آلارم",
            "children": []
          },
          {
            "id": 209,
            "title": "راهنمای پنل",
            "key": "Configuration.Guide.PanelGuid",
            "iconPath": "/images/icons/guide.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "راهنمای پنل",
            "children": []
          },
          {
            "id": 212,
            "title": "مدیریت راهنمای پنل",
            "key": "Configuration.Guide.PanelGuidManagement",
            "iconPath": "/images/icons/guideManagement.svg",
            "parentId": 22,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت راهنمای پنل",
            "children": [
              {
                "id": 224,
                "title": "افزودن راهنما جدید",
                "key": "Configuration.Guide.KnowledgeBase.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 212,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن راهنما جدید",
                "children": []
              },
              {
                "id": 225,
                "title": "مشاهده راهنما ها",
                "key": "Configuration.Guide.KnowledgeBase.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 212,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده راهنما ها",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 88,
        "title": "پیکربندی اپلیکیشن موبایل",
        "key": "MobileConfiguration",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "پیکر بندی اپلیکیشن موبایل",
        "children": [
          {
            "id": 89,
            "title": "مدیریت سرویس ها",
            "key": "Mobile.ServiceManagement",
            "iconPath": "/images/icons/services.svg",
            "parentId": 88,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت سرویس ها",
            "children": [
              {
                "id": 93,
                "title": "ایوا",
                "key": "Mobile.ServiceManagement.Iva",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "ایوا",
                "children": [
                  {
                    "id": 98,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Iva.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 93,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 99,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Iva.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 93,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 94,
                "title": "نشان بانک",
                "key": "Mobile.ServiceManagement.Neshan",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "نشان بانک",
                "children": [
                  {
                    "id": 102,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Neshan.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 94,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 103,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Neshan.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 94,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 95,
                "title": "بیمه",
                "key": "Mobile.ServiceManagement.Insurance",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "بیمه",
                "children": [
                  {
                    "id": 106,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Insurance.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 95,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 107,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Insurance.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 95,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 96,
                "title": "گردشگری",
                "key": "Mobile.ServiceManagement.Tourism",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "گردشگری",
                "children": [
                  {
                    "id": 110,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Tourism.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 96,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 111,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Tourism.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 96,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 97,
                "title": "SDK",
                "key": "Mobile.ServiceManagement.SDK",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "SDK",
                "children": [
                  {
                    "id": 114,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.SDK.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 97,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 115,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.SDK.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 97,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 158,
                "title": "مهربانی",
                "key": "Mobile.ServiceManagement.Charity",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "مهربانی",
                "children": [
                  {
                    "id": 159,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Charity.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 158,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 160,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Charity.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 158,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 163,
                "title": "وجوهات شرعی",
                "key": "Mobile.ServiceManagement.Religiouse",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 89,
                "level": 2,
                "showInMenu": true,
                "description": "وجوهات شرعی",
                "children": [
                  {
                    "id": 164,
                    "title": "افزودن سرویس جدید",
                    "key": "Mobile.ServiceManagement.Religiouse.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 163,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سرویس جدید",
                    "children": []
                  },
                  {
                    "id": 165,
                    "title": "مشاهده سرویس ها",
                    "key": "Mobile.ServiceManagement.Religiouse.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 163,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده سرویس ها",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 90,
            "title": "مدیریت بنر ها",
            "key": "Mobile.BannerManagement",
            "iconPath": "/images/icons/picture.svg",
            "parentId": 88,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت بنر ها",
            "children": [
              {
                "id": 118,
                "title": "SDK",
                "key": "Mobile.BannerManagement.SDK",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 90,
                "level": 2,
                "showInMenu": true,
                "description": "SDK",
                "children": [
                  {
                    "id": 123,
                    "title": "افزودن بنر جدید",
                    "key": "Mobile.BannerManagement.SDK.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 118,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن بنر جدید",
                    "children": []
                  },
                  {
                    "id": 124,
                    "title": "مشاهده بنر ها",
                    "key": "Mobile.BannerManagement.SDK.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 118,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده بنر ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 119,
                "title": "نشان بانک",
                "key": "Mobile.BannerManagement.Neshan",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 90,
                "level": 2,
                "showInMenu": true,
                "description": "نشان بانک",
                "children": [
                  {
                    "id": 127,
                    "title": "افزودن بنر جدید",
                    "key": "Mobile.BannerManagement.Neshan.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 119,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن بنر جدید",
                    "children": []
                  },
                  {
                    "id": 128,
                    "title": "مشاهده بنر ها",
                    "key": "Mobile.BannerManagement.Neshan.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 119,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده بنر ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 120,
                "title": "بیمه",
                "key": "Mobile.BannerManagement.Insurance",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 90,
                "level": 2,
                "showInMenu": true,
                "description": "بیمه",
                "children": [
                  {
                    "id": 131,
                    "title": "افزودن بنر جدید",
                    "key": "Mobile.BannerManagement.Insurance.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 120,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن بنر جدید",
                    "children": []
                  },
                  {
                    "id": 132,
                    "title": "مشاهده بنر ها",
                    "key": "Mobile.BannerManagement.Insurance.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 120,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده بنر ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 121,
                "title": "گردشگری",
                "key": "Mobile.BannerManagement.Tourism",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 90,
                "level": 2,
                "showInMenu": true,
                "description": "گردشگری",
                "children": [
                  {
                    "id": 135,
                    "title": "افزودن بنر جدید",
                    "key": "Mobile.BannerManagement.Tourism.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 121,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن بنر جدید",
                    "children": []
                  },
                  {
                    "id": 136,
                    "title": "مشاهده بنر ها",
                    "key": "Mobile.BannerManagement.Tourism.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 121,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده بنر ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 122,
                "title": "مهربانی",
                "key": "Mobile.BannerManagement.Charity",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 90,
                "level": 2,
                "showInMenu": true,
                "description": "مهربانی",
                "children": [
                  {
                    "id": 139,
                    "title": "افزودن بنر جدید",
                    "key": "Mobile.BannerManagement.Charity.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 122,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن بنر جدید",
                    "children": []
                  },
                  {
                    "id": 140,
                    "title": "مشاهده بنر ها",
                    "key": "Mobile.BannerManagement.Charity.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 122,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده بنر ها",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 91,
            "title": "مدیریت متغیرها",
            "key": "Mobile.VariableManagement",
            "iconPath": "/images/icons/setting.svg",
            "parentId": 88,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت متغیرها",
            "children": [
              {
                "id": 143,
                "title": "افزودن متغیر جدید",
                "key": "Mobile.VariableManagement.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 91,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن متغیر جدید",
                "children": []
              },
              {
                "id": 144,
                "title": "مشاهده متغیرها",
                "key": "Mobile.VariableManagement.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 91,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده متغیرها",
                "children": []
              }
            ]
          },
          {
            "id": 92,
            "title": "مدیریت دسته‌بندی ها",
            "key": "Mobile.CategoriesManagement",
            "iconPath": "/images/icons/category.svg",
            "parentId": 88,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت دسته‌بندی ها",
            "children": [
              {
                "id": 147,
                "title": "مهربانی",
                "key": "Mobile.CategoriesManagement.Charity",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 92,
                "level": 2,
                "showInMenu": true,
                "description": "مهربانی",
                "children": [
                  {
                    "id": 149,
                    "title": "افزودن دسته بندی جدید",
                    "key": "Mobile.CategoriesManagement.Charity.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 147,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن دسته بندی جدید",
                    "children": []
                  },
                  {
                    "id": 150,
                    "title": "مشاهده دسته بندی ها",
                    "key": "Mobile.CategoriesManagement.Charity.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 147,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده دسته بندی ها",
                    "children": []
                  }
                ]
              },
              {
                "id": 148,
                "title": "عوارض خروج از کشور",
                "key": "Mobile.CategoriesManagement.Toll",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 92,
                "level": 2,
                "showInMenu": true,
                "description": "عوارض خروج از کشور",
                "children": [
                  {
                    "id": 153,
                    "title": "افزودن دسته بندی جدید",
                    "key": "Mobile.CategoriesManagement.Toll.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 148,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن دسته بندی جدید",
                    "children": []
                  },
                  {
                    "id": 154,
                    "title": "مشاهده دسته بندی ها",
                    "key": "Mobile.CategoriesManagement.Toll.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 148,
                    "level": 3,
                    "showInMenu": true,
                    "description": "مشاهده دسته بندی ها",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 168,
            "title": "مدیریت تبلیغ ها",
            "key": "Mobile.AdsManagement",
            "iconPath": "/images/icons/loudspeaker.svg",
            "parentId": 88,
            "level": 1,
            "showInMenu": true,
            "description": "مدیریت تبلیغ ها",
            "children": [
              {
                "id": 169,
                "title": "افزودن تبلیغ جدید",
                "key": "Mobile.AdsManagement.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 168,
                "level": 2,
                "showInMenu": true,
                "description": "افزودن تبلیغ جدید",
                "children": []
              },
              {
                "id": 170,
                "title": "مشاهده تبلیغ ها",
                "key": "Mobile.AdsManagement.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 168,
                "level": 2,
                "showInMenu": true,
                "description": "مشاهده تبلیغ ها",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 184,
        "title": "مدیریت باشگاه مشتریان پالس",
        "key": "Campaign",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "مدیریت باشگاه مشتریان پالس",
        "children": [
          {
            "id": 185,
            "title": "گزارش ها",
            "key": "Campaign.Report",
            "iconPath": "/images/icons/report.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش ها",
            "children": [
              {
                "id": 197,
                "title": "گزارش جوایز استفاده شده",
                "key": "Campaign.Report.RewardUsed",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 185,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش جوایز استفاده شده",
                "children": []
              },
              {
                "id": 200,
                "title": "گزارش تراکنش و امتیازات",
                "key": "Campaign.Report.UserActivity",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 185,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تراکنش و امتیازات",
                "children": []
              },
              {
                "id": 313,
                "title": "گزارش نتایج نظرسنجی",
                "key": "Campaign.Report.ReportOnSurveyResult",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 185,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش نتایج نظرسنجی",
                "children": []
              }
            ]
          },
          {
            "id": 186,
            "title": "جوایز",
            "key": "Campaign.Rewards",
            "iconPath": "/images/icons/reward.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "جوایز",
            "children": [
              {
                "id": 187,
                "title": "جوایز تعریف شده",
                "key": "Campaign.Rewards.Reward",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 186,
                "level": 2,
                "showInMenu": true,
                "description": "جوایز تعریف شده",
                "children": [
                  {
                    "id": 188,
                    "title": "گزارش جوایز تعریف شده",
                    "key": "Campaign.Rewards.Reward.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 187,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست جوایز تعریف شده",
                    "children": []
                  },
                  {
                    "id": 189,
                    "title": "افزودن جوایز تعریف شده",
                    "key": "Campaign.Rewards.Reward.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 187,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن جوایز تعریف شده",
                    "children": []
                  },
                  {
                    "id": 196,
                    "title": "ویرایش جوایز تعریف شده",
                    "key": "Campaign.Rewards.Reward.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 187,
                    "level": 1,
                    "showInMenu": false,
                    "description": "ویرایش جوایز تعریف شده",
                    "children": []
                  }
                ]
              },
              {
                "id": 198,
                "title": "مدیریت وضعیت جوایز درخواست شده",
                "key": "Campaign.Rewards.RewardUsedList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 186,
                "level": 2,
                "showInMenu": true,
                "description": "مدیریت وضعیت جوایز درخواست شده",
                "children": []
              },
              {
                "id": 288,
                "title": "خدمات و محصولات",
                "key": "Campaign.Rewards.Benefit",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 186,
                "level": 2,
                "showInMenu": true,
                "description": "خدمات و محصولات",
                "children": [
                  {
                    "id": 289,
                    "title": "گزارش خدمات و محصولات",
                    "key": "Campaign.Rewards.Benefit.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 288,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست خدمات و محصولات",
                    "children": []
                  },
                  {
                    "id": 290,
                    "title": "افزودن خدمات و محصولات",
                    "key": "Campaign.Rewards.Benefit.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 288,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن خدمات و محصولات",
                    "children": []
                  },
                  {
                    "id": 381,
                    "title": "ویرایش خدمات و محصولات",
                    "key": "Campaign.Rewards.Benefit.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 288,
                    "level": 3,
                    "showInMenu": false,
                    "description": "ویرایش خدمات و محصولات",
                    "children": []
                  },
                  {
                    "id": 382,
                    "title": "ویرایش خدمات و محصولات",
                    "key": "IvaClub.Rewards.Benefit.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 288,
                    "level": 3,
                    "showInMenu": false,
                    "description": "ویرایش خدمات و محصولات",
                    "children": []
                  }
                ]
              },
              {
                "id": 291,
                "title": "کد تخفیف",
                "key": "Campaign.Rewards.Voucher",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 186,
                "level": 2,
                "showInMenu": true,
                "description": "خدمات و محصولات",
                "children": [
                  {
                    "id": 205,
                    "title": "افزودن دسته ای کد تخفیف",
                    "key": "Campaign.Rewards.Voucher.AddBatch",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 291,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن دسته ای کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 292,
                    "title": "گزارش کد تخفیف",
                    "key": "Campaign.Rewards.Voucher.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 291,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 293,
                    "title": "افزودن کد تخفیف",
                    "key": "Campaign.Rewards.Voucher.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 291,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 379,
                    "title": "ویرایش کد تخفیف",
                    "key": "Campaign.Rewards.Voucher.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 291,
                    "level": 3,
                    "showInMenu": false,
                    "description": "ویرایش کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 380,
                    "title": "ویرایش کد تخفیف",
                    "key": "IvaClub.Rewards.Voucher.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 291,
                    "level": 3,
                    "showInMenu": false,
                    "description": "ویرایش کد تخفیف",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 190,
            "title": "دسته بندی جوایز",
            "key": "Campaign.RewardCategory",
            "iconPath": "/images/icons/reward.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "دسته بندی جوایز",
            "children": [
              {
                "id": 191,
                "title": "گزارش دسته بندی جوایز",
                "key": "Campaign.RewardCategory.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 190,
                "level": 1,
                "showInMenu": true,
                "description": "لیست دسته بندی جوایز",
                "children": []
              },
              {
                "id": 193,
                "title": "ویرایش دسته بندی جوایز",
                "key": "Campaign.RewardCategory.Update",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 190,
                "level": 1,
                "showInMenu": false,
                "description": "ویرایش دسته بندی جوایز",
                "children": []
              }
            ]
          },
          {
            "id": 194,
            "title": "گزارش نوع دسته بندی جوایز",
            "key": "Campaign.RewardCategoryType.Get",
            "iconPath": null,
            "parentId": 184,
            "level": 1,
            "showInMenu": false,
            "description": "لیست نوع دسته بندی جوایز",
            "children": []
          },
          {
            "id": 195,
            "title": "گزارش باشگاه ",
            "key": "Campaign.Club.Get",
            "iconPath": null,
            "parentId": 184,
            "level": 1,
            "showInMenu": false,
            "description": "لیست باشگاه ها",
            "children": []
          },
          {
            "id": 211,
            "title": "ابطال امتیازهای باشگاه",
            "key": "Campaign.UserPointService.BurnAllPoint",
            "iconPath": "/images/icons/warning.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "ابطال امتیازهای باشگاه",
            "children": []
          },
          {
            "id": 215,
            "title": "جشنواره",
            "key": "Campaign.Campaignt",
            "iconPath": "/images/icons/gift.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "جشنواره",
            "children": [
              {
                "id": 201,
                "title": "گزارش جشنواره ها",
                "key": "Campaign.Campaign.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 215,
                "level": 3,
                "showInMenu": true,
                "description": "ليست جشنواره ها",
                "children": []
              },
              {
                "id": 202,
                "title": "افزودن جشنواره جدید",
                "key": "Campaign.Campaign.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 215,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن جشنواره جديد",
                "children": []
              }
            ]
          },
          {
            "id": 294,
            "title": "راهنمای باشگاه",
            "key": "Campaign.ClubGuidline",
            "iconPath": "/images/icons/neshan.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "راهنمای باشگاه",
            "children": [
              {
                "id": 295,
                "title": "مشاهده راهنمای باشگاه",
                "key": "Campaign.ClubGuidline.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 294,
                "level": 3,
                "showInMenu": true,
                "description": "مشاهده راهنمای باشگاه",
                "children": []
              }
            ]
          },
          {
            "id": 298,
            "title": "سوالات پرتکرار",
            "key": "Campaign.FrequentlyQuestion",
            "iconPath": "/images/icons/question.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "سوالات پرتکرار",
            "children": [
              {
                "id": 299,
                "title": "گزارش سوالات پرتکرار",
                "key": "Campaign.FrequentlyQuestion.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 298,
                "level": 3,
                "showInMenu": true,
                "description": "لیست سوالات پرتکرار",
                "children": []
              },
              {
                "id": 300,
                "title": "افزودن سوالات پرتکرار",
                "key": "Campaign.FrequentlyQuestion.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 298,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن سوالات پرتکرار",
                "children": []
              }
            ]
          },
          {
            "id": 303,
            "title": "نظرسنجی",
            "key": "Campaign.Survey",
            "iconPath": "/images/icons/report.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "نظرسنجی",
            "children": [
              {
                "id": 304,
                "title": "گزارش نظرسنجی",
                "key": "Campaign.Survey.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 303,
                "level": 3,
                "showInMenu": true,
                "description": "لیست نظرسنجی",
                "children": []
              },
              {
                "id": 305,
                "title": "افزودن نظرسنجی",
                "key": "Campaign.Survey.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 303,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن نظرسنجی",
                "children": []
              },
              {
                "id": 306,
                "title": "ویرایش نظرسنجی",
                "key": "Campaign.Survey.Update",
                "iconPath": null,
                "parentId": 303,
                "level": 3,
                "showInMenu": null,
                "description": "ویرایش نظرسنجی",
                "children": []
              },
              {
                "id": 307,
                "title": "حذف نظرسنجی",
                "key": "Campaign.Survey.Delete",
                "iconPath": null,
                "parentId": 303,
                "level": 3,
                "showInMenu": null,
                "description": "حذف نظرسنجی",
                "children": []
              },
              {
                "id": 308,
                "title": "سوالات نظرسنجی",
                "key": "Campaign.Survey.SurveyQuestion",
                "iconPath": "/images/icons/question.svg",
                "parentId": 303,
                "level": 1,
                "showInMenu": true,
                "description": "سوالات نظرسنجی",
                "children": [
                  {
                    "id": 309,
                    "title": "گزارش سوالات نظرسنجی",
                    "key": "Campaign.Survey.SurveyQuestion.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 308,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 310,
                    "title": "افزودن سوالات نظرسنجی",
                    "key": "Campaign.Survey.SurveyQuestion.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 308,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 311,
                    "title": "ویرایش سوالات نظرسنجی",
                    "key": "Campaign.Survey.SurveyQuestion.Update",
                    "iconPath": null,
                    "parentId": 308,
                    "level": 3,
                    "showInMenu": null,
                    "description": "ویرایش سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 312,
                    "title": "حذف سوالات نظرسنجی",
                    "key": "Campaign.Survey.SurveyQuestion.Delete",
                    "iconPath": null,
                    "parentId": 308,
                    "level": 3,
                    "showInMenu": null,
                    "description": "حذف سوالات نظرسنجی",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 314,
            "title": "اسلایدر",
            "key": "Campaign.Slider",
            "iconPath": "/images/icons/services.svg",
            "parentId": 184,
            "level": 1,
            "showInMenu": true,
            "description": "اسلایدر",
            "children": [
              {
                "id": 315,
                "title": "گزارش اسلایدر",
                "key": "Campaign.Slider.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 314,
                "level": 3,
                "showInMenu": true,
                "description": "لیست اسلایدر",
                "children": []
              },
              {
                "id": 316,
                "title": "افزودن اسلایدر",
                "key": "Campaign.Slider.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 314,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن اسلایدر",
                "children": []
              },
              {
                "id": 317,
                "title": "ویرایش اسلایدر",
                "key": "Campaign.Slider.Update",
                "iconPath": null,
                "parentId": 314,
                "level": 3,
                "showInMenu": null,
                "description": "ویرایش اسلایدر",
                "children": []
              },
              {
                "id": 318,
                "title": "حذف اسلایدر",
                "key": "Campaign.Slider.Delete",
                "iconPath": null,
                "parentId": 314,
                "level": 3,
                "showInMenu": null,
                "description": "حذف اسلایدر",
                "children": []
              }
            ]
          },
          {
            "id": 414,
            "title": "بازه تاریخچه امتیازات",
            "key": "Campaign.Report.TimeRange",
            "iconPath": "/images/icons/report.svg",
            "parentId": 184,
            "level": 2,
            "showInMenu": true,
            "description": "بازه تاریخچه امتیازات",
            "children": [
              {
                "id": 415,
                "title": "گزارش بازه تاریخچه امتیازات",
                "key": "Campaign.Report.GetTimeRange",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 414,
                "level": 3,
                "showInMenu": true,
                "description": "گزارش بازه تاریخچه امتیازات",
                "children": []
              },
              {
                "id": 416,
                "title": "حذف بازه تاریخچه امتیازات",
                "key": "Campaign.Report.DeleteTimeRange",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 414,
                "level": 3,
                "showInMenu": false,
                "description": "حذف بازه تاریخچه امتیازات",
                "children": []
              },
              {
                "id": 418,
                "title": "افزودن بازه تاریخچه امتیازات",
                "key": "Campaign.Report.SetTimeRange",
                "iconPath": null,
                "parentId": 414,
                "level": 3,
                "showInMenu": false,
                "description": "افزودن بازه تاریخچه امتیازات",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": 248,
        "title": "داوری مسابقات عکاسی",
        "key": "Festival.Photography",
        "iconPath": "/images/icons/reward.svg",
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "داوری مسابقات عکاسی",
        "children": [
          {
            "id": 249,
            "title": "دسته بندی کردن عکس ها",
            "key": "Festival.Photography.Categorise",
            "iconPath": "/images/icons/category.svg",
            "parentId": 248,
            "level": 1,
            "showInMenu": true,
            "description": "دسته بندی کردن عکس ها",
            "children": []
          },
          {
            "id": 250,
            "title": "امتیازدهی به عکس ها",
            "key": "Festival.Photography.Rating",
            "iconPath": "/images/icons/campaignList.svg",
            "parentId": 248,
            "level": 1,
            "showInMenu": true,
            "description": "امتیازدهی به عکس ها",
            "children": []
          },
          {
            "id": 251,
            "title": "برترین ها",
            "key": "Festival.Photography.Top",
            "iconPath": "/images/icons/reward.svg",
            "parentId": 248,
            "level": 1,
            "showInMenu": true,
            "description": "برترین عکس ها",
            "children": []
          },
          {
            "id": 252,
            "title": "گزارش داوران عکاسی",
            "key": "Festival.Photography.GetJury",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "لیست داوران عکاسی",
            "children": []
          },
          {
            "id": 253,
            "title": "گزارش دسته ها",
            "key": "Festival.Photography.GetCategories",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "لیست دسته ها",
            "children": []
          },
          {
            "id": 254,
            "title": "گزارش عکس ها",
            "key": "Festival.Photography.AllPhotos",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "لیست عکس ها",
            "children": []
          },
          {
            "id": 255,
            "title": "امتیازدهی",
            "key": "Festival.Photography.Rate",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "امتیازدهی",
            "children": []
          },
          {
            "id": 256,
            "title": "دسته بندی کردن عکس",
            "key": "Festival.Photography.SetCategory",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "دسته بندی کردن عکس",
            "children": []
          },
          {
            "id": 257,
            "title": "گزارش عکس های برتر",
            "key": "Festival.Photography.TopPhotos",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "لیست عکس های برتر",
            "children": []
          },
          {
            "id": 258,
            "title": "دریافت فایل عکس",
            "key": "Festival.Photography.GetFile",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "دریافت فایل عکس",
            "children": []
          },
          {
            "id": 259,
            "title": "جزییات امتیاز عکس",
            "key": "Festival.Photography.RateDetail",
            "iconPath": "/images/icons/circle.svg",
            "parentId": 248,
            "level": 2,
            "showInMenu": false,
            "description": "جزییات امتیاز عکس",
            "children": []
          }
        ]
      },
      {
        "id": 319,
        "title": "مدیریت باشگاه مشتریان ایوا",
        "key": "IvaClub",
        "iconPath": null,
        "parentId": null,
        "level": 0,
        "showInMenu": true,
        "description": "مدیریت باشگاه مشتریان پالس",
        "children": [
          {
            "id": 320,
            "title": "گزارش ها",
            "key": "IvaClub.Report",
            "iconPath": "/images/icons/report.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "گزارش ها",
            "children": [
              {
                "id": 332,
                "title": "گزارش جوایز استفاده شده",
                "key": "IvaClub.Report.RewardUsed",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 320,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش جوایز استفاده شده",
                "children": []
              },
              {
                "id": 335,
                "title": "گزارش تراکنش و امتیازات",
                "key": "IvaClub.Report.UserActivity",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 320,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش تراکنش و امتیازات",
                "children": []
              },
              {
                "id": 367,
                "title": "گزارش نتایج نظرسنجی",
                "key": "IvaClub.Report.ReportOnSurveyResult",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 320,
                "level": 2,
                "showInMenu": true,
                "description": "گزارش نتایج نظرسنجی",
                "children": []
              }
            ]
          },
          {
            "id": 321,
            "title": "جوایز",
            "key": "IvaClub.Rewards",
            "iconPath": "/images/icons/reward.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "جوایز",
            "children": [
              {
                "id": 322,
                "title": "جوایز تعریف شده",
                "key": "IvaClub.Rewards.Reward",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 321,
                "level": 2,
                "showInMenu": true,
                "description": "جوایز تعریف شده",
                "children": [
                  {
                    "id": 323,
                    "title": "گزارش جوایز تعریف شده",
                    "key": "IvaClub.Rewards.Reward.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 322,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست جوایز تعریف شده",
                    "children": []
                  },
                  {
                    "id": 324,
                    "title": "افزودن جوایز تعریف شده",
                    "key": "IvaClub.Rewards.Reward.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 322,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن جوایز تعریف شده",
                    "children": []
                  },
                  {
                    "id": 331,
                    "title": "ویرایش جوایز تعریف شده",
                    "key": "IvaClub.Rewards.Reward.Update",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 322,
                    "level": 1,
                    "showInMenu": false,
                    "description": "ویرایش جوایز تعریف شده",
                    "children": []
                  }
                ]
              },
              {
                "id": 333,
                "title": "مدیریت وضعیت جوایز درخواست شده",
                "key": "IvaClub.Rewards.RewardUsedList",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 321,
                "level": 2,
                "showInMenu": true,
                "description": "مدیریت وضعیت جوایز درخواست شده",
                "children": []
              },
              {
                "id": 342,
                "title": "خدمات و محصولات",
                "key": "IvaClub.Rewards.Benefit",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 321,
                "level": 2,
                "showInMenu": true,
                "description": "خدمات و محصولات",
                "children": [
                  {
                    "id": 343,
                    "title": "گزارش خدمات و محصولات",
                    "key": "IvaClub.Rewards.Benefit.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 342,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست خدمات و محصولات",
                    "children": []
                  },
                  {
                    "id": 344,
                    "title": "افزودن خدمات و محصولات",
                    "key": "IvaClub.Rewards.Benefit.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 342,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن خدمات و محصولات",
                    "children": []
                  }
                ]
              },
              {
                "id": 345,
                "title": "کد تخفیف",
                "key": "IvaClub.Rewards.Voucher",
                "iconPath": "/images/icons/arrowleft.svg",
                "parentId": 321,
                "level": 2,
                "showInMenu": true,
                "description": "خدCampaign.Rewards.Voucher.AddBatchمات و محصولات",
                "children": [
                  {
                    "id": 338,
                    "title": "افزودن دسته ای کد تخفیف",
                    "key": "IvaClub.Rewards.Voucher.AddBatch",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 345,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن دسته ای کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 346,
                    "title": "گزارش کد تخفیف",
                    "key": "IvaClub.Rewards.Voucher.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 345,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست کد تخفیف",
                    "children": []
                  },
                  {
                    "id": 347,
                    "title": "افزودن کد تخفیف",
                    "key": "IvaClub.Rewards.Voucher.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 345,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن کد تخفیف",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 325,
            "title": "دسته بندی جوایز",
            "key": "IvaClub.RewardCategory",
            "iconPath": "/images/icons/reward.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "دسته بندی جوایز",
            "children": [
              {
                "id": 326,
                "title": "گزارش دسته بندی جوایز",
                "key": "IvaClub.RewardCategory.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 325,
                "level": 1,
                "showInMenu": true,
                "description": "لیست دسته بندی جوایز",
                "children": []
              },
              {
                "id": 328,
                "title": "ویرایش دسته بندی جوایز",
                "key": "IvaClub.RewardCategory.Update",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 325,
                "level": 1,
                "showInMenu": false,
                "description": "ویرایش دسته بندی جوایز",
                "children": []
              }
            ]
          },
          {
            "id": 329,
            "title": "گزارش نوع دسته بندی جوایز",
            "key": "IvaClub.RewardCategoryType.Get",
            "iconPath": null,
            "parentId": 319,
            "level": 1,
            "showInMenu": false,
            "description": "لیست نوع دسته بندی جوایز",
            "children": []
          },
          {
            "id": 330,
            "title": "گزارش باشگاه ",
            "key": "IvaClub.Club.Get",
            "iconPath": null,
            "parentId": 319,
            "level": 1,
            "showInMenu": false,
            "description": "لیست باشگاه ها",
            "children": []
          },
          {
            "id": 340,
            "title": "ابطال امتیازهای باشگاه",
            "key": "IvaClub.UserPointService.BurnAllPoint",
            "iconPath": "/images/icons/warning.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "ابطال امتیازهای باشگاه",
            "children": []
          },
          {
            "id": 341,
            "title": "جشنواره",
            "key": "IvaClub.Campaignt",
            "iconPath": "/images/icons/gift.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "جشنواره",
            "children": [
              {
                "id": 336,
                "title": "گزارش جشنواره ها",
                "key": "IvaClub.Campaign.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 341,
                "level": 3,
                "showInMenu": true,
                "description": "ليست جشنواره ها",
                "children": []
              },
              {
                "id": 337,
                "title": "افزودن جشنواره جدید",
                "key": "IvaClub.Campaign.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 341,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن جشنواره جديد",
                "children": []
              }
            ]
          },
          {
            "id": 348,
            "title": "راهنمای باشگاه",
            "key": "IvaClub.ClubGuidline",
            "iconPath": "/images/icons/neshan.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "راهنمای باشگاه",
            "children": [
              {
                "id": 349,
                "title": "مشاهده راهنمای باشگاه",
                "key": "IvaClub.ClubGuidline.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 348,
                "level": 3,
                "showInMenu": true,
                "description": "مشاهده راهنمای باشگاه",
                "children": []
              }
            ]
          },
          {
            "id": 352,
            "title": "سوالات پرتکرار",
            "key": "IvaClub.FrequentlyQuestion",
            "iconPath": "/images/icons/question.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "سوالات پرتکرار",
            "children": [
              {
                "id": 353,
                "title": "گزارش سوالات پرتکرار",
                "key": "IvaClub.FrequentlyQuestion.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 352,
                "level": 3,
                "showInMenu": true,
                "description": "لیست سوالات پرتکرار",
                "children": []
              },
              {
                "id": 354,
                "title": "افزودن سوالات پرتکرار",
                "key": "IvaClub.FrequentlyQuestion.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 352,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن سوالات پرتکرار",
                "children": []
              }
            ]
          },
          {
            "id": 357,
            "title": "نظرسنجی",
            "key": "IvaClub.Survey",
            "iconPath": "/images/icons/report.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "نظرسنجی",
            "children": [
              {
                "id": 358,
                "title": "گزارش نظرسنجی",
                "key": "IvaClub.Survey.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 357,
                "level": 3,
                "showInMenu": true,
                "description": "لیست نظرسنجی",
                "children": []
              },
              {
                "id": 359,
                "title": "افزودن نظرسنجی",
                "key": "IvaClub.Survey.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 357,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن نظرسنجی",
                "children": []
              },
              {
                "id": 360,
                "title": "ویرایش نظرسنجی",
                "key": "IvaClub.Survey.Update",
                "iconPath": null,
                "parentId": 357,
                "level": 3,
                "showInMenu": null,
                "description": "ویرایش نظرسنجی",
                "children": []
              },
              {
                "id": 361,
                "title": "حذف نظرسنجی",
                "key": "IvaClub.Survey.Delete",
                "iconPath": null,
                "parentId": 357,
                "level": 3,
                "showInMenu": null,
                "description": "حذف نظرسنجی",
                "children": []
              },
              {
                "id": 362,
                "title": "سوالات نظرسنجی",
                "key": "IvaClub.Survey.SurveyQuestion",
                "iconPath": "/images/icons/question.svg",
                "parentId": 357,
                "level": 1,
                "showInMenu": true,
                "description": "سوالات نظرسنجی",
                "children": [
                  {
                    "id": 363,
                    "title": "گزارش سوالات نظرسنجی",
                    "key": "IvaClub.Survey.SurveyQuestion.Get",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 362,
                    "level": 3,
                    "showInMenu": true,
                    "description": "لیست سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 364,
                    "title": "افزودن سوالات نظرسنجی",
                    "key": "IvaClub.Survey.SurveyQuestion.Add",
                    "iconPath": "/images/icons/circle.svg",
                    "parentId": 362,
                    "level": 3,
                    "showInMenu": true,
                    "description": "افزودن سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 365,
                    "title": "ویرایش سوالات نظرسنجی",
                    "key": "IvaClub.Survey.SurveyQuestion.Update",
                    "iconPath": null,
                    "parentId": 362,
                    "level": 3,
                    "showInMenu": null,
                    "description": "ویرایش سوالات نظرسنجی",
                    "children": []
                  },
                  {
                    "id": 366,
                    "title": "حذف سوالات نظرسنجی",
                    "key": "IvaClub.Survey.SurveyQuestion.Delete",
                    "iconPath": null,
                    "parentId": 362,
                    "level": 3,
                    "showInMenu": null,
                    "description": "حذف سوالات نظرسنجی",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": 368,
            "title": "اسلایدر",
            "key": "IvaClub.Slider",
            "iconPath": "/images/icons/services.svg",
            "parentId": 319,
            "level": 1,
            "showInMenu": true,
            "description": "اسلایدر",
            "children": [
              {
                "id": 369,
                "title": "گزارش اسلایدر",
                "key": "IvaClub.Slider.Get",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 368,
                "level": 3,
                "showInMenu": true,
                "description": "لیست اسلایدر",
                "children": []
              },
              {
                "id": 370,
                "title": "افزودن اسلایدر",
                "key": "IvaClub.Slider.Add",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 368,
                "level": 3,
                "showInMenu": true,
                "description": "افزودن اسلایدر",
                "children": []
              },
              {
                "id": 371,
                "title": "ویرایش اسلایدر",
                "key": "IvaClub.Slider.Update",
                "iconPath": null,
                "parentId": 368,
                "level": 3,
                "showInMenu": null,
                "description": "ویرایش اسلایدر",
                "children": []
              },
              {
                "id": 372,
                "title": "حذف اسلایدر",
                "key": "IvaClub.Slider.Delete",
                "iconPath": null,
                "parentId": 368,
                "level": 3,
                "showInMenu": null,
                "description": "حذف اسلایدر",
                "children": []
              }
            ]
          },
          {
            "id": 411,
            "title": "بازه تاریخچه امتیازات",
            "key": "IvaClub.Report.TimeRange",
            "iconPath": "/images/icons/report.svg",
            "parentId": 319,
            "level": 2,
            "showInMenu": true,
            "description": "بازه تاریخچه امتیازات",
            "children": [
              {
                "id": 412,
                "title": "گزارش بازه تاریخچه امتیازات",
                "key": "IvaClub.Report.GetTimeRange",
                "iconPath": "/images/icons/circle.svg",
                "parentId": 411,
                "level": 3,
                "showInMenu": true,
                "description": "گزارش بازه تاریخچه امتیازات",
                "children": []
              },
              {
                "id": 413,
                "title": "حذف بازه تاریخچه امتیازات",
                "key": "IvaClub.Report.DeleteTimeRange",
                "iconPath": "/images/icons/reward.svg",
                "parentId": 411,
                "level": 3,
                "showInMenu": false,
                "description": "حذف بازه تاریخچه امتیازات",
                "children": []
              },
              {
                "id": 417,
                "title": "افزودن بازه تاریخچه امتیازات",
                "key": "IvaClub.Report.SetTimeRange",
                "iconPath": null,
                "parentId": 411,
                "level": 3,
                "showInMenu": false,
                "description": "افزودن بازه تاریخچه امتیازات",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
