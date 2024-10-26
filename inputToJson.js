
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();


    const brandname=document.getElementById('brandName').value;
    const brandNameHTML=document.getElementById('brandNameHTML').value;
    const currency=document.getElementById('currency').value;
    const timezone=document.getElementById('timezone').value;
    const heroimage=document.getElementById('formFile').value;
    const mapLocationimg=document.getElementById('formFileLocation').value;
    const heroVideo=document.getElementById('formFileVideo').value;
    const brandLogo=document.getElementById('formFileLogo').value;
    const theme=document.getElementById('theme').value;
    const brandShortName=document.getElementById('brandShortName').value;
    const brandSlogan=document.getElementById('brandSlogan').value;
    const brandAlertMessage=document.getElementById('brandAlertMessage').value;
    const customCSS=document.getElementById('customCSS').value;
    const customJS=document.getElementById('customJS').value;
    const GSTNumber=document.getElementById('GSTNumber').value;
    const BusiessCetification=document.getElementById('BusiessCetification').value;
    const CerrtificationNumber=document.getElementById('CerrtificationNumber').value;
    const panNumber=document.getElementById('panNumber').value;
    const brandEmail=document.getElementById('brandEmail').value;
    const mapLocationPin=document.getElementById('mapLocationPin').value;
    const brandAddress=document.getElementById('brandAddress').value;
    const brandAddressHTML=document.getElementById('brandAddressHTML').value;
    const youtube=document.getElementById('youtube').value;
    const X=document.getElementById('X').value;
    const instagram=document.getElementById('instagram').value;
    const facebook=document.getElementById('facebook').value;
    const linkedIn=document.getElementById('linkedIn').value;
    const activityType=document.getElementById('activityType').value;
    const ProductURL=document.getElementById('ProductURL').value;
    const RootURL=document.getElementById('RootURL').value;
    const HostingURL=document.getElementById('HostingURL').value;
    const primaryLanguageSelect = document.getElementById('Planguage');
    const selectedPrimaryLanguage = primaryLanguageSelect.value;
    const secondaryLanguageSelect = document.getElementById('Slanguage');
    const selectedSecondaryLanguage = secondaryLanguageSelect.value;
    const SupportMail = document.getElementById('SupportMail').value;
    const SupportPhone = document.getElementById('SupportPhone').value;
    const addonName = document.getElementById('addonName').value;
    const addonId = document.getElementById('addonId').value;
    const addonDescription = document.getElementById('addonDescription').value;
    const addonunitPrice = document.getElementById('addonunitPrice').value;
    const addonTaxName = document.getElementById('addonTaxName').value;
    const addonTaxRate = document.getElementById('addonTaxRate').value;
    const addonminimumQuantity = document.getElementById('addonminimumQuantity').value;
    const addonmaximumQuantity = document.getElementById('addonmaximumQuantity').value;
    const addonstockLimit = document.getElementById('addonstockLimit').value;
    const taxname = document.getElementById('taxname').value;
    const taxrrate = document.getElementById('taxrrate').value;
    const defaultPrinter = document.getElementById('defaultPrinter').value;
    const printBrandname = document.getElementById('printBrandname').value;
    const brandnameorder = document.getElementById('brandnameorder').value;
    const printBrandAddress = document.getElementById('printBrandAddress').value;
    const Addressorder = document.getElementById('Addressorder').value;
    const QR = document.getElementById('QR').value;
    const QRorder = document.getElementById('QRorder').value;
    const bookingtimestamp = document.getElementById('bookingtimestamp').value;
    const bookingtimestamporder = document.getElementById('bookingtimestamporder').value;
    const visittimestamp = document.getElementById('visittimestamp').value;
    const visitttimestampOrder = document.getElementById('visitttimestampOrder').value;
    const Validity = document.getElementById('Validity').value;
    const ValidityOrder = document.getElementById('ValidityOrder').value;
    const WebsiteUrl = document.getElementById('WebsiteUrl').value;
    const WebsiteUrlorder = document.getElementById('WebsiteUrlorder').value;
    const TotalingOrder = document.getElementById('TotalingOrder').value;
    const DelaytimeSuccess = document.getElementById('DelaytimeSuccess').value;
    const DelaytimeFailure = document.getElementById('DelaytimeFailure').value;
    const surveyurl = document.getElementById('surveyurl').value;
    const DelaytimeSurvey = document.getElementById('DelaytimeSurvey').value;
    const Currencysymbol = document.getElementById('Currencysymbol').value;
    const advanceBooking = document.getElementById('advanceBooking').value;
    const bookingTimeOut = document.getElementById('bookingTimeOut').value;
    const bookingStatsGraph = document.getElementById('bookingStatsGraph').value;
    const openingTimeHour = document.getElementById('openingTimeHour').value;
    const openingTimeHourMins = document.getElementById('openingTimeHourMins').value;
    const closingTimeHours = document.getElementById('closingTimeHours').value;
    const closingTimeMins = document.getElementById('closingTimeMins').value;
    const openingmeridian = document.getElementById('openingmeridian').value;
    const closingmeridian = document.getElementById('closingmeridian').value;
    const paxNumber = document.getElementById('paxNumber').value;
    const videoUrl = document.getElementById('videoUrl').value;
    const threedurl = document.getElementById('threedurl').value;
    const dedicatedPageurl = document.getElementById('dedicatedPageurl').value;
    const maxTicketsPerDay = document.getElementById('maxTicketsPerDay').value;
    const AddonvideoUrl = document.getElementById('AddonvideoUrl').value;
    const Addon3durl = document.getElementById('Addon3durl').value;
    const AddondedicatedPageurl = document.getElementById('AddondedicatedPageurl').value;
    const AddonmaxTicketsPerDay = document.getElementById('AddonmaxTicketsPerDay').value;
    
   
    // let CurrencySymbol;
////////////////////////////////extracting the cureny symbol section///////////////////////////////////////////////////////////////////////////////////////
// document.getElementById('currency').addEventListener('change', function() {
//     let selectedOption = this.options[this.selectedIndex];
//      CurrencySymbol= selectedOption.getAttribute('currencySymbol');
//     console.log(CurrencySymbol); // Output the symbol, e.g., ₹, $, €, etc.
// });

////////////////////////////////disclaimers code///////////////////////////////////////////////////////////////////////////////////////



  

  
////////////////////////////////checking section END///////////////////////////////////////////////////////////////////////////////////////

    const userdata=
        {
            "info": {
                "version": "1.0", // dont apply
                "author": "Zipr",  // dont apply // dont apply
                "lastUpdated": "09/07/2024"  // dont apply // dont apply
            },
            "obfuscate":{
            "enabled":document.getElementById('obfuscateEnable').checked,
            "consoleMessages":document.getElementById('consoleMessages').checked,
            "deadCode":document.getElementById('deadCode').checked
            },
            "customCSS": customCSS ,
            "customJS": customJS,
            "brand": {
                "brandID": "BR12345",  // dont apply // dont apply
                 "currency":currency ,
                "ncmc": false,  // dont apply // dont apply
                 "CurrencySymbol": Currencysymbol,
                 "brandName": brandname,
                "licenceType": "Commercial",  // dont apply // dont apply
                 "timezone": timezone,
                 "brandHeroImage":heroimage ,
                 "brandHeroVideo":heroVideo,
                 "theme": theme,
                 "brandNameHTML": brandNameHTML,
                 "brandShortName":brandShortName ,
                 "brandLogo":brandLogo ,
                 "brandSlogan":brandSlogan ,
                 "GSTNumber": GSTNumber,
                 "brandAlertMessage": brandAlertMessage,
                "isGSTNumberVerified": true,  // dont apply // dont apply
                 "businessCertification": BusiessCetification ,
                 "certificationNumber":CerrtificationNumber,
                 "panNumber": panNumber,
                 "brandEmail": brandEmail,
                "isPanVerified": true,  // dont apply // dont apply
                "disableSecondaryEventWarning":document.getElementById('disableSecondaryEventWarning').checked,
                "disableAddonWarning":document.getElementById('disableAddonWarning').checked, 
                 "mapLocationImage":mapLocationimg ,
                 "mapLocationPin": mapLocationPin,
                 "brandAddress": brandAddress,
                 "brandAddressHTML":brandAddressHTML ,
                 "socialMediaLinks": {
                    "youtube": {
                        "show": document.getElementById('youtubeshow').checked,
                        "url": youtube
                    },
                    "instagram": {
                        "show": document.getElementById('instagramshow').checked,
                        "url": instagram
                    },
                    "facebook": {
                        "show":document.getElementById('facebookshow').checked,
                        "url": facebook
                    },
                    "linkedin": {
                        "show": document.getElementById('linkedshow').checked,
                        "url": linkedIn
                    },
                    "X": {
                        "show": document.getElementById('Xprofileshow').checked,
                        "url": X
                    }
                }
            },
             "features": {
                "geoLocation": {
                    "enabled": document.getElementById('GeolocationEnable').checked,
                    "sendNotification":document.getElementById('Geolocationnotification').checked,
                    "isGeoMandatory":document.getElementById('GeolocationMandatory').checked
                },
                "multiLanguage": {
                    "enabled":document.getElementById('multilanguageenable').checked,
                    "defaultLanguage":selectedPrimaryLanguage ,
                    "secondaryLanguage": selectedSecondaryLanguage
                }
            },
             "gatekeeperSettings": {
                 "multiScan": document.getElementById('multiScan').checked,
                 "ncmcEnabled": false, // dont apply
                "activityType": activityType,
                 "paxInfo": document.getElementById('paxInfo').checked
            },
            "supabase": { // dont apply // dont apply
                "url": "https://cgqnakbbmorvmxphokrq.supabase.co", // dont apply
                "serviceKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncW5ha2JibW9ydm14cGhva3JxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTM3NjY1MywiZXhwIjoyMDM2OTUyNjUzfQ.XIdB6Jmk4jZBoTMSdvuncai_wq99YOetKYER0fgs3dE"
            },
             "instructions": [  //PENDING
                
            ],
            "portalFees": {
                "portalFeeNameHtml": "Portal Fee", // dont apply
                "variable": false, // dont apply
                "value": 1 // dont apply
            },
             "events": [ //PENDING //Done
                
            ],
             "paymentGateway": { // remain to fix
                "activePaymentGateway": "",
                "payTMSettings": {
                    "LIVE": {
                        "merchantID":"" ,
                        "secretKey": "",
                        "productionURL": "https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/THEDES23431159116929.js", // dont apply
                        "redirectionURL": "/success", // dont apply
                        "createOrderAPIPath": "https://securegw.paytm.in/theia/api/v1/initiateTransaction", // dont apply
                        "orderStatusAPIPath": "https://securegw.paytm.in/v3/order/status" // dont apply
                    },
                    "stage": {
                        "merchantID": "",
                        "secretKey": "", 
                        "stagingURL": "https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/Resell00448805757124.js", // dont apply
                        "redirectionURL": "/success", // dont apply
                        "createOrderAPIPath": "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction", // dont apply
                        "orderStatusAPIPath": "https://securegw-stage.paytm.in/v3/order/status" // dont apply
                    }
                },
                "cashFreeSettings": {
                    "LIVE": {
                        "merchantID": "",
                        "secretKey":"" , // not to supply
                        "productionURL": "https://sdk.cashfree.com/js/v3/cashfree.js",// not to supply
                        "redirectionURL": "/success",// not to supply
                        "createOrderAPIPath": "https://sandbox.cashfree.com/pg/orders",// not to supply
                        "orderStatusAPIPath": "https://sandbox.cashfree.com/pg/orders",// not to supply
                        "createPaymentLinkAPIPath": "https://sandbox.cashfree.com/pg/links"// not to supply
                    },
                    "stage": {
                        "merchantID":"",
                        "secretKey":"" ,
                        "stagingURL": "https://sdk.cashfree.com/js/v3/cashfree.js", // dont apply
                        "redirectionURL": "/success", // dont apply
                        "createOrderAPIPath": "https://sandbox.cashfree.com/pg/orders", // dont apply
                        "orderStatusAPIPath": "https://sandbox.cashfree.com/pg/orders", // dont apply
                        "createPaymentLinkAPIPath": "https://sandbox.cashfree.com/pg/links" // dont apply
                    }
                },
                "razorPaySettings": {
                    "LIVE": {
                        "merchantID":"",
                        "secretKey": "",
                        "productionURL": "https://sdk.cashfree.com/js/v3/cashfree.js", // dont apply
                        "redirectionURL": "/success", // dont apply
                        "createOrderAPIPath": "https://api.razorpay.com/v1/orders", // dont apply
                        "orderStatusAPIPath": "https://api.razorpay.com/v1/orders", // dont apply
                        "createPaymentLinkAPIPath": "https://sandbox.cashfree.com/pg/links" // dont apply
                    },
                    "stage": {
                        "merchantID": "",
                        "secretKey": "",
                        "stagingURL": "https://checkout.razorpay.com/v1/checkout.js", // dont apply
                        "redirectionURL": "/success", // dont apply
                        "createOrderAPIPath": "https://api.razorpay.com/v1/orders", // dont apply
                        "orderStatusAPIPath": "https://api.razorpay.com/v1/orders", // dont apply
                        "createPaymentLinkAPIPath": "https://sandbox.cashfree.com/pg/links" // dont apply
                    }
                },
                "isPaymentGatewayLIVE": false
            },
             "URLs": {
                "productURL":ProductURL,
                "rootURL":RootURL ,
                "hostingURL":HostingURL,
                "isHostingURLVerified": true // dont apply
            },
             "supportDetails": {
                "supportEmail":SupportMail ,
                "supportPhone":SupportPhone ,
                "isEmailVerified": true, // dont apply
                "isPhoneVerified": true, // dont apply
                "supportWhatsAppNumber": SupportWhatsapp,
                "isWhatsAppVerified": true // dont apply
            },
             "addons": [
                {
                    "addonName":addonName ,
                    "addonId":addonId ,
                    "AddonvideoUrl":AddonvideoUrl ,
                    "Addon3durl":Addon3durl ,
                    "AddondedicatedPageurl":AddondedicatedPageurl ,
                    "addonDescription":addonDescription ,
                    "unitPrice":addonunitPrice ,
                    "taxname":addonTaxName ,
                    "taxRate":addonTaxRate ,
                    "minimumQuantity":addonminimumQuantity ,
                    "maximumQuantity":addonmaximumQuantity,
                    "AddonmaxTicketsPerDay":AddonmaxTicketsPerDay,
                    "stockLimit":addonstockLimit 

                }
            ],
             "taxDetails": {
                "isTaxable":document.getElementById('isTaxable').checked,
                "taxName":taxname,
                "taxRate":taxrrate ,
                "showOnPrintPage": document.getElementById('showOnPrintPage').checked,
                "printEnabled": document.getElementById('printEnabled').checked,
                "iMinPrinter": document.getElementById('iMinPrinter').checked,
                "browserPrintable":document.getElementById('browserPrintable').checked,
                "showPrintButton":document.getElementById('showPrintButton').checked,
                "isMultiPrint":document.getElementById('isMultiPrint').checked
            },
             "printerSettings": {
                "defaultPrinter": defaultPrinter || "Imin",
                "autoPrint": document.getElementById('autoPrint').checked,
                "isMultiPrint":document.getElementById('printerMultiPrint').checked,
            },
            "printSettings": {
                 "brandName": {
                    "print": document.getElementById('brandnamePrint').checked,
                    "value":printBrandname ,
                    "order":brandnameorder 
                },
                 "address": {
                    "print": document.getElementById('AddressPrint').checked,
                    "value":printBrandAddress ,
                    "order":Addressorder 
                 },
                "qr": {
                    "print": document.getElementById('QRPrint').checked,
                    "value":QR ,
                    "order":QRorder
                },
                 "bookingTimestamp": {
                    "print": document.getElementById('bookingtimestampPrint').checked,
                    "value":bookingtimestamp ,
                    "order":bookingtimestamporder
                },
                 "visitTimestamp": {
                    "print": document.getElementById('visitttimestampPrint').checked,
                    "value":visittimestamp ,
                    "order":visitttimestampOrder
                },
                 "validity": {
                    "print": document.getElementById('ValidityPrint').checked,
                    "value":Validity,
                    "order":ValidityOrder 
                },
                 "disclaimers":[ //yet to do //DOME

                 ],
                 "WebsiteUrl": {
                    "print": document.getElementById('WebsiteUrlPrint').checked,
                    "value":WebsiteUrl ,
                    "order":WebsiteUrlorder 
                },
                 "Totaling": {
                    "print": document.getElementById('TotalingPrint').checked,
                    "order": TotalingOrder
                },
                 "events": [  // yet to do //DONE
                  
                ]
            },
              "notifications": {
                "success": {
                    "SMS": document.getElementById('SMSSuccess').checked,
                    "showWhatsApp": document.getElementById('showWhatsAppSuccess').checked,
                    "delayedDelivery": document.getElementById('delayedDeliverySuccess').checked,
                    "delayTime":DelaytimeSuccess
                },
                "failure": {
                    "SMS":document.getElementById('SMSFailure').checked,
                    "WhatsApp": document.getElementById('showWhatsAppFailure').checked,
                    "delayedDelivery": document.getElementById('delayedDeliveryFailure').checked,
                    "delayTime": DelaytimeFailure
                },
                "survey": {
                    "surveyURL":surveyurl ,
                    "SMS": document.getElementById('SMSSurvey').checked,
                    "WhatsApp":document.getElementById('showWhatsAppSurvey').checked,
                    "delayedDelivery": document.getElementById('delayedDeliverySurvey').checked,
                    "delayTime": DelaytimeSurvey
                }
            },
            "bankingDetails": {
                "accountName": "Zipr Inc.", // dont apply
                "accountNumber": "1234567890", // dont apply
                "IFSCCode": "IFSC1234", // dont apply
                "UPIAddress": "zipr@upi", // dont apply
                "Currency": "USD", // dont apply
                "accountType": "Current" // dont apply
            },
             "portalDetails": { //PENDING
                 "advanceBooking":advanceBooking,
                 "startTime": openingTimeHour+":"+openingTimeHourMins+" "+openingmeridian,
                 "closingTime":closingTimeHours+":"+closingTimeMins+" "+closingmeridian,
                "bookingTimeOut":bookingTimeOut,
                 "bookingStatsGraph": bookingStatsGraph,
                 "closedOnDays": [ //done
                  
                ],
                 "exceptionDates": [ //done
                    
                ],
                 "closedOnDates": [//done
              
                ],
                 "collectPersonalInfo": document.getElementById('collectPersonalInfo').checked,
                 "paxNumber": paxNumber,
                 "collectForAll":document.getElementById('collectforAll').checked,
                 "fields": [ //DONE
                   
                ]
            },
             "discounts": [ //PENDING //DONE
               
                
            ],
            "paymentOptions": { // dont apply
                "UPI": {
                    "MDRCharges": 0,
                    "GST": 0
                },
                "CC": {
                    "MDRCharges": 2,
                    "GST": 18
                },
                "DC": {
                    "MDRCharges": 1,
                    "GST": 18
                },
                "Netbanking": {
                    "MDRCharges": 0,
                    "GST": 0
                }
            }
           
          }
////////////////////////////////instructoin section///////////////////////////////////////////////////////////////////////////////////////
const instructionValue = document.getElementById("instruction").value;

    // Split the input by newline, trim each line, and filter out empty lines
    const instructionsArray = instructionValue
        .split('\n') // Split by newline
        .map(instruction => instruction.trim()) // Trim each instruction
        .filter(instruction => instruction !== ""); // Filter out empty strings

    // Push each instruction into the JSON instructions array
    instructionsArray.forEach(instruction => {
        userdata.instructions.push(instruction); // Push without additional quotes
    });

    // Log the updated JSON structure
    console.log(JSON.stringify(userdata.instructions, null, 2)); 

   

 

//////////////////////////////////////Events Adding/////////////////////////////////////////////////////////////
function collectEventData() {
    const eventsArray = userdata.events
    // Reset array before collecting data
    const eventForms = document.querySelectorAll('.event-form');

    eventForms.forEach((form) => {
        const eventNameInput = form.querySelector('input[id="EventName"]');
        const eventHeroImageInput = form.querySelector('input[id="formFileEventHeroImage"]');
        const eventVenueInput = form.querySelector('input[id="floatingInputEventVenue"]');
        const shadowEventInput = form.querySelector('input[id="flexSwitchCheckChecked"]');
        const isLockedInput = form.querySelector('input[id="flexSwitchCheckCheckedLocked"]');
        const taxNameInput = form.querySelector('input[id="eventTaxName"]');
        const variableTaxInput = form.querySelector('input[id="flexSwitchCheckCheckedVariable"]');
        const taxValueInput = form.querySelector('input[id="floatingInputValue"]');
        const disclaimerTextArea = form.querySelector('textarea[id="floatingTextarea"]');
        const offDaysInputs = form.querySelectorAll('input[name="offDays[]"]:checked');
        const exceptionDatesInput = form.querySelector('input[id="exceptionbooking"]');
        const offDatesInput = form.querySelector('input[id="offbooking"]');
        const isLiveInput = form.querySelector('input[id="flexSwitchCheckCheckedLive"]');
        const hideBrandNameInput = form.querySelector('input[id="flexSwitchCheckCheckedHide"]');
        const descriptionTextArea = form.querySelector('textarea[id="floatingTextareaEventDescription"]');
        const helperTextArea = form.querySelector('textarea[id="floatingTextareaEventHelperText"]');
        const unitPriceInput = form.querySelector('input[id="floatingInputEventPrice"]');
        const maxQuantityInput = form.querySelector('input[id="floatingInputEventPriceMaximumQuantity"]');
        const minQuantityInput = form.querySelector('input[id="floatingInputEventPriceMinimumQuantity"]');
        const maxGroupSizeInput = form.querySelector('input[id="floatingInputEventPriceMaximumGroupSize"]');
        const isPrimaryEventInput = form.querySelector('input[id="flexSwitchCheckCheckedPrimary"]');
        const eventExpiryInput = form.querySelector('input[id="EventExpiry"]');
        const statusSelect = form.querySelector('select[id="eventStatus"]');
        const availableOnInput = form.querySelector('input[id="floatingInputAvailableOn"]');
        const goLiveDateInput = form.querySelector('input[id="floatingInputGoLiveDate"]');
        const addonsIdInput = form.querySelector('input[id="floatingInputGrid"]');
        const sendNotificationInput = form.querySelector('input[id="flexSwitchCheckCheckedNotification"]');
        const eventTypeSelect = form.querySelector('select[id="eventType"]');
        const ticketTypeSelect = form.querySelector('select[id="eventTicketType"]');

        const eventData = {
            "eventId": "",
            eventName: eventNameInput ? eventNameInput.value : "",
            eventHeroImage: eventHeroImageInput?.files[0]?.name || "",
            eventVenue: eventVenueInput ? eventVenueInput.value : "",
            shadowEvent: shadowEventInput?.checked || false,
            eventLatLng: "", // Adjust based on your needs
            isLocked: isLockedInput?.checked || false,
            tax: {
                taxNameHtml: taxNameInput ? taxNameInput.value : "",
                variable: variableTaxInput?.checked || false,
                value: parseFloat(taxValueInput?.value) || 0,
                disclaimerText: disclaimerTextArea ? disclaimerTextArea.value : "",
            },
            eventOffDays: Array.from(offDaysInputs).map(el => el.value),
            eventExceptionOnDates: exceptionDatesInput ? exceptionDatesInput.value.split('|') : [],
            eventOffDates: offDatesInput ? offDatesInput.value.split('|') : [],
            isLive: isLiveInput?.checked || false,
            hideBrandName: hideBrandNameInput?.checked || false,
            eventDescription: descriptionTextArea ? descriptionTextArea.value : "",
            eventHelperText: helperTextArea ? helperTextArea.value : "",
            unitPrice: parseFloat(unitPriceInput?.value) || 0,
            maximumQuantity: parseInt(maxQuantityInput?.value) || 0,
            minimumQuantity: parseInt(minQuantityInput?.value) || 0,
            eventMaxGroupSize: parseInt(maxGroupSizeInput?.value) || 0,
            isPrimaryEvent: isPrimaryEventInput?.checked || false,
            eventExpiry: eventExpiryInput ? eventExpiryInput.value : "",
            eventStatus: statusSelect ? statusSelect.value : "",
            availableOn: availableOnInput ? availableOnInput.value : "",
            goLiveDatetimestamp: goLiveDateInput ? goLiveDateInput.value : "",
            addonsId: addonsIdInput ? addonsIdInput.value.split('|') : [],
            sendNotification: sendNotificationInput?.checked || false,
            eventType: eventTypeSelect ? eventTypeSelect.value : "",
            eventTicketType: ticketTypeSelect ? ticketTypeSelect.value : "",
        };

        eventsArray.push(eventData);
    });

    console.log(JSON.stringify(eventsArray, null, 2)); // Outputs the array in the desired format
    return eventsArray;
}

collectEventData();

//////////////////////////////////////payment  gateway Setting/////////////////////////////////////////////////////////////
function showJSON() {
    const PaymentGateway = document.getElementById('PaymentGateway').value;
    const merchantIDLive = document.getElementById('merchantIDLive').value;
    const secretKeyLive = document.getElementById('secretKeyLive').value;
    const merchantIDStage = document.getElementById('merchantIDStage').value;
    const secretKeystage = document.getElementById('secretKeystage').value;
    const isPaymentGatewayLIVE = document.getElementById('isgtwylive').checked;
    
    
    userdata.paymentGateway.activePaymentGateway = PaymentGateway;

    if (PaymentGateway === "PayTM") {
        userdata.paymentGateway.payTMSettings.LIVE.merchantID = merchantIDLive;
        userdata.paymentGateway.payTMSettings.LIVE.secretKey = secretKeyLive;
        userdata.paymentGateway.payTMSettings.stage.merchantID = merchantIDStage;
        userdata.paymentGateway.payTMSettings.stage.secretKey = secretKeystage;
    } else if (PaymentGateway === "CashFree") {
        userdata.paymentGateway.cashFreeSettings.LIVE.merchantID = merchantIDLive;
        userdata.paymentGateway.cashFreeSettings.LIVE.secretKey = secretKeyLive;
        userdata.paymentGateway.cashFreeSettings.stage.merchantID = merchantIDStage;
        userdata.paymentGateway.cashFreeSettings.stage.secretKey = secretKeystage;
    } else {
        userdata.paymentGateway.razorPaySettings.LIVE.merchantID = merchantIDLive;
        userdata.paymentGateway.razorPaySettings.LIVE.secretKey = secretKeyLive;
        userdata.paymentGateway.razorPaySettings.stage.merchantID = merchantIDStage;
        userdata.paymentGateway.razorPaySettings.stage.secretKey = secretKeystage;
    }
    userdata.paymentGateway.isPaymentGatewayLIVE = isPaymentGatewayLIVE; 
 }
  showJSON();
 


//////////////////////////////////////Disclaimer Adding/////////////////////////////////////////////////////////////
// Function to store input values in an array of JSON objects
function storeDisclaimersInArray() {
    const disclaimers = userdata.printSettings.disclaimers
    const disclaimerGroups = document.querySelectorAll('.disclaimer-group');

    disclaimerGroups.forEach((group, index) => {
        const disclaimerText = group.querySelector(`#disclaimers${index + 1}`).value;
        const disclaimerPrint = group.querySelector(`#disclaimersPrint${index + 1}`).checked;
        const disclaimerOrder = group.querySelector(`#disclaimersorder${index + 1}`).value;

        const disclaimerObj = {
            disclaimer: disclaimerText,
            print: disclaimerPrint,
            order: parseInt(disclaimerOrder, 10)
        };

        disclaimers.push(disclaimerObj);
    });

    console.log(disclaimers); // Log the array of disclaimer objects
    return disclaimers;
}
storeDisclaimersInArray();
//////////////////////////////////////EVENT  details/////////////////////////////////////////////////////////////
// Function to store input values in an array of JSON objects

function storeEventsInArray() {
    const events = userdata.printSettings.events
    const eventGroups = document.querySelectorAll('.Event-group');

    eventGroups.forEach((group, index) => {
        const eventName = group.querySelector(`#Event${index + 1}`).value;
        const eventTickets = group.querySelector(`#EventTickets${index + 1}`).value;
        const eventAmount = group.querySelector(`#EventAmount${index + 1}`).value;
        const eventPrint = group.querySelector(`#EventPrint${index + 1}`).checked;
        const eventOrder = group.querySelector(`#Eventsorder${index + 1}`).value;

        const eventObj = {
            eventName: eventName,
            tickets: parseInt(eventTickets, 10),
            amount: parseFloat(eventAmount),
            print: eventPrint,
            order: parseInt(eventOrder, 10)
        };

        events.push(eventObj);
    });

    console.log(events); // Log the array of event objects
    return events;
}
storeEventsInArray();
//////////////////////////////////////Closed onDates entry in portal details/////////////////////////////////////////////////////////////
function saveFields() {
   
    const fieldSets = document.querySelectorAll('.form-group');
    
    fieldSets.forEach((fieldSet) => {
        const index = fieldSet.getAttribute('data-index');
        const fieldName = document.getElementById(`fieldName${index}`).value;
        const fieldType = document.getElementById(`fieldType${index}`).value;
        const minimumValue = document.getElementById(`minimumValue${index}`).value;
        const maximumValue = document.getElementById(`maximumValue${index}`).value;
        const regExValidation = document.getElementById(`regExValidation${index}`).value;

        userdata.portalDetails.fields.push({
            fieldName,
            fieldType,
            minimumValue,
            maximumValue,
            regExValidation
        });
    });

    console.log(JSON.stringify(userdata.portalDetails.fields)); // Outputs JSON string for the fields
}
saveFields();
//////////////////////////////////////Closed onDates entry in portal details/////////////////////////////////////////////////////////////
function updateUncheckedDays() {
    
    document.querySelectorAll('input[name="offDay[]"]').forEach(checkbox => {
        if (checkbox.checked) {
            userdata.portalDetails.closedOnDays.push(checkbox.value);
        }
    });

}

// Add event listener to all checkboxes
document.querySelectorAll('input[name="offDay[]"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateUncheckedDays);
});

// Call the function initially to update the unchecked days on page load
// updateUncheckedDays();

//////// CLOSED ON DATE////////////////////
let nobooking=document.getElementById('nobooking')
userdata.portalDetails.closedOnDates.push(nobooking.value);

//////// EXCEPTION ON DATE////////////////////

let exceptionDates=document.getElementById('exceptionDates')
userdata.portalDetails.exceptionDates.push(exceptionDates.value);




////////////////////////////////Discopunt section///////////////////////////////////////////////////////////////////////////////////////
function saveDiscounts() {
    const discountSections = document.querySelectorAll('.discount-section');

    discountSections.forEach((section, index) => {
        userdata.discounts.push({
            discountId: document.getElementById(`discountId${index + 1}`).value,
            code: document.getElementById(`code${index + 1}`).value,
            isActive: document.getElementById(`isActive${index + 1}`).checked,
            criteria: document.getElementById(`criteria${index + 1}`).value,
            amountRange: {
                minAmount: document.getElementById(`minAmount${index + 1}`).value,
                maxAmount: document.getElementById(`maxAmount${index + 1}`).value,
            },
            discountValue: document.getElementById(`discountValue${index + 1}`).value,
            isVariable: document.getElementById(`isVariable${index + 1}`).checked,
        });
    });

    console.log(JSON.stringify(userdata.discounts)); // Convert to JSON and log it
    // You can replace the console.log with code to send the JSON to your server or process it as needed.
}
saveDiscounts();


 
///////////////////////////////////////PRESENTING JSON FORRMAT////////////////////////////////////////////////////////////////////////

           
function updateJsonDisplay() {
    document.getElementById('jsonDisplay').textContent = JSON.stringify(userdata, null, 2);
}       


// Show the modal using Bootstrap's modal method
updateJsonDisplay(); // Update the JSON content in the modal
var jsonModal = new bootstrap.Modal(document.getElementById('jsonModal'), {});
jsonModal.show(); 

// Handle download button click
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Create a blob from JSON string
    const jsonString = JSON.stringify(userdata, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a link element for download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'abc.json';

    // Trigger download
    link.click();

    // Hide the modal after download
    jsonModal.hide();  

});


});


document.getElementById('copyBtn').addEventListener('click', function() {
    const jsonString = JSON.stringify(userdata, null, 2);

    // Copy JSON to clipboard using Clipboard API
    navigator.clipboard.writeText(jsonString).then(function() {
        alert('Copied to clipboard!');
    }).catch(function(error) {
        console.error('Error copying to clipboard: ', error);
    });
});