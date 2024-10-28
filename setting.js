let eventCount = 1;

function addEventForm() { 
    eventCount++;
    const eventFormContainer = document.getElementById('event-form-container');
    const newEventForm = document.querySelector('.event-form').cloneNode(true);
    
    // Update the event number
    newEventForm.querySelector('.event-number').innerHTML = `<strong>Event ${eventCount}</strong>`;
    
    // Update all form inputs and labels with new IDs and placeholders
    const inputs = newEventForm.querySelectorAll('input, textarea, label');
    inputs.forEach((input) => {
        const currentId = input.getAttribute('id');
        if (currentId) {
            const newId = currentId.replace(/\d+$/, '') + eventCount;
            input.setAttribute('id', newId);
        }
        if (input.tagName === 'LABEL') {
            const labelFor = input.getAttribute('for');
            if (labelFor) {
                const newFor = labelFor.replace(/\d+$/, '') + eventCount;
                input.setAttribute('for', newFor);
            }
        }
        // Clear values for input fields and textareas
        if (input.tagName === 'INPUT' && input.type !== 'checkbox') {
            input.value = ''; // Clear text inputs
        } else if (input.tagName === 'TEXTAREA') {
            input.value = ''; // Clear textareas
        } else if (input.type === 'checkbox') {
            input.checked = false; // Uncheck checkboxes
        }
    });

    // Add the new event form to the container
    eventFormContainer.appendChild(newEventForm);
    
    // Show delete button if more than one event form
    toggleDeleteButton();
}

function deleteLatestEventForm() {
    if (eventCount > 1) {
        const eventFormContainer = document.getElementById('event-form-container');
        eventFormContainer.removeChild(eventFormContainer.lastElementChild);
        eventCount--;
    }
    
    // Show or hide delete button based on the number of forms
    toggleDeleteButton();
}

function toggleDeleteButton() {
    const deleteButton = document.getElementById('deleteEventButton');
    if (eventCount > 1) {
        deleteButton.style.display = 'inline-block';
    } else {
        deleteButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggleDeleteButton();
});

///////////////////////////////////////////////////////////Disclaimer code/////////////////////////////////////////////////////////////
let disclaimerConstantOrder=document.getElementById('disclaimersorder1')
let disclaimerCounter = 1;

    function addDisclaimerField() {
        disclaimerCounter++;
        const disclaimersContainer = document.getElementById('disclaimers-container');
        const newDisclaimerField = document.createElement('div');
        newDisclaimerField.classList.add('disclaimer-group');
        newDisclaimerField.setAttribute('data-index', disclaimerCounter);
        newDisclaimerField.innerHTML = `
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="disclaimers${disclaimerCounter}" placeholder="Enter disclaimer">
                <label for="disclaimers${disclaimerCounter}">Disclaimer: ${disclaimerCounter}</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="disclaimersPrint${disclaimerCounter}" checked>
                <label class="form-check-label" for="disclaimersPrint${disclaimerCounter}">Print</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="disclaimersorder${disclaimerCounter}" placeholder="Enter order">
                <label for="disclaimersorder${disclaimerCounter}">Order for Print (0-9) (It will be same for all the disclaimers)</label>
            </div>
            <button type="button" class="btn btn-danger deleteButton mb-3 w-100" onclick="deleteDisclaimerField(this)">Delete</button>
        `;
        disclaimersContainer.appendChild(newDisclaimerField);
        updateDisclaimerDeleteButtons();
    }

    function deleteDisclaimerField(button) {
        const disclaimerGroup = button.parentElement;
        disclaimerGroup.remove();
        disclaimerCounter--;
        updateDisclaimerLabels();
        updateDisclaimerDeleteButtons();
    }

    function updateDisclaimerLabels() {
        const disclaimerGroups = document.querySelectorAll('.disclaimer-group');
        disclaimerGroups.forEach((group, index) => {
            const label = group.querySelector('label[for^="disclaimers"]');
            label.textContent = `Disclaimer: ${index + 1}`;
            const input = group.querySelector('input[id^="disclaimers"]');
            input.id = `disclaimers${index + 1}`;
            
            const checkbox = group.querySelector('input[id^="disclaimersPrint"]');
            checkbox.id = `disclaimersPrint${index + 1}`;
            const checkboxLabel = group.querySelector('label[for^="disclaimersPrint"]');
            checkboxLabel.setAttribute('for', `disclaimersPrint${index + 1}`);
            
            const orderInput = group.querySelector('input[id^="disclaimersorder"]');
            orderInput.id = `disclaimersorder${index + 1}`;
        });
    }

    function updateDisclaimerDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.deleteButton');
        const disclaimerGroups = document.querySelectorAll('.disclaimer-group');
    
        if (disclaimerGroups.length === 1) {
            // If there's only one disclaimer, hide the delete button
            deleteButtons.forEach(button => button.style.display = 'none');
        } else {
            // Show the delete button if there are more than one disclaimers
            deleteButtons.forEach(button => button.style.display = 'inline-block');
        }
    }
    

    // ////////////////////////////////event code////////////////////////////////////////////////////////////////\
    let eventCounter = 1;

    function addEventField() {
        eventCounter++;
        const eventContainer = document.getElementById('event-store');
        const newEventField = document.createElement('div');
        newEventField.classList.add('Event-grouping');
        newEventField.setAttribute('data-index', eventCounter);
        newEventField.innerHTML = `
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="Event${eventCounter}" placeholder="Enter event URL">
                <label for="Event${eventCounter}">Event: ${eventCounter}</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="EventTickets${eventCounter}" placeholder="Enter number of tickets">
                <label for="EventTickets${eventCounter}">Tickets</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="EventAmount${eventCounter}" placeholder="Enter event amount">
                <label for="EventAmount${eventCounter}">Amount</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="EventPrint${eventCounter}" checked>
                <label class="form-check-label" for="EventPrint${eventCounter}">Print</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="Eventsorder${eventCounter}" placeholder="Enter print order">
                <label for="Eventsorder${eventCounter}">Order for Print (0-9) (It will be same for all the events)</label>
            </div>
            <button type="button" class="btn btn-danger EventdeleteButton mb-3 w-100" onclick="deleteEventField(this)">Delete</button>
        `;
        eventContainer.appendChild(newEventField);
        updateEventDeleteButtons();
    }

    function deleteEventField(button) {
        const eventField = button.parentElement;
        eventField.remove();
        eventCounter--;
        updateEventLabels();
        updateEventDeleteButtons();
    }

    function updateEventLabels() {
        const eventGroups = document.querySelectorAll('.Event-group');
        eventGroups.forEach((group, index) => {
            const eventLabel = group.querySelector('label[for^="Event"]');
            eventLabel.textContent = `Event: ${index + 1}`;
            const eventInput = group.querySelector('input[id^="Event"]');
            eventInput.id = `Event${index + 1}`;

            const ticketsLabel = group.querySelector('label[for^="EventTickets"]');
            ticketsLabel.textContent = `Tickets`;
            const ticketsInput = group.querySelector('input[id^="EventTickets"]');
            ticketsInput.id = `EventTickets${index + 1}`;

            const amountLabel = group.querySelector('label[for^="EventAmount"]');
            amountLabel.textContent = `Amount`;
            const amountInput = group.querySelector('input[id^="EventAmount"]');
            amountInput.id = `EventAmount${index + 1}`;

            const printLabel = group.querySelector('label[for^="EventPrint"]');
            printLabel.setAttribute('for', `EventPrint${index + 1}`);
            const printInput = group.querySelector('input[id^="EventPrint"]');
            printInput.id = `EventPrint${index + 1}`;

            const orderLabel = group.querySelector('label[for^="Eventsorder"]');
            orderLabel.textContent = `Order for Print (0-9) (keep it same for all events)`;
            const orderInput = group.querySelector('input[id^="Eventsorder"]');
            orderInput.id = `Eventsorder${index + 1}`;
        });
    }

    function updateEventDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.EventdeleteButton');
        const eventGroups = document.querySelectorAll('.Event-group'); // Assuming event fields have the class 'event-group'
    
        if (eventGroups.length === 1) {
            // If there's only one event, hide all delete buttons
            deleteButtons.forEach(button => button.style.display = 'none');
        } else {
            // Show the delete buttons if more than one event field exists
            deleteButtons.forEach(button => button.style.display = 'inline-block');
        }
    }
    
    // //////////////////////////////////////DISCOUNT CODE////////////////////////////////////////////////////////////////////////////////
    let discountCounter = 1;

    function addDiscountField() {
        discountCounter++;
        const discountsContainer = document.getElementById('discounts-settings');
        const newDiscountField = document.createElement('div');
        newDiscountField.classList.add('discount-section');
        newDiscountField.setAttribute('data-index', discountCounter);
        newDiscountField.innerHTML = `
            <h5>Discount ${discountCounter}</h5>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="discountId${discountCounter}" placeholder="Discount ID">
                <label for="discountId${discountCounter}">Discount ID</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="code${discountCounter}" placeholder="Discount Code">
                <label for="code${discountCounter}">Discount Code</label>
            </div>
            <div class="form-check form-switch mb-3">
                <input class="form-check-input" type="checkbox" id="isActive${discountCounter}" checked>
                <label class="form-check-label" for="isActive${discountCounter}">Is Active</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="criteria${discountCounter}" placeholder="Criteria">
                <label for="criteria${discountCounter}">Criteria</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="minAmount${discountCounter}" placeholder="Min Amount">
                <label for="minAmount${discountCounter}">Min Amount</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="maxAmount${discountCounter}" placeholder="Max Amount">
                <label for="maxAmount${discountCounter}">Max Amount</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="discountValue${discountCounter}" placeholder="Discount Value">
                <label for="discountValue${discountCounter}">Discount Value (%)</label>
            </div>
            <div class="form-check form-switch mb-3">
                <input class="form-check-input" type="checkbox" id="isVariable${discountCounter}" checked>
                <label class="form-check-label" for="isVariable${discountCounter}">Is Variable</label>
            </div>
            <button type="button" class="btn btn-danger DiscountdeleteButton w-100" onclick="deleteDiscountField(this)">Delete</button>
        `;
        discountsContainer.appendChild(newDiscountField);
        updateDiscountLabels();
        updateDiscountDeleteButtons();
    }
    
    function deleteDiscountField(button) {
        const discountField = button.parentElement;
        discountField.remove();
        discountCounter--;
        updateDiscountLabels();
        updateDiscountDeleteButtons();
    }
    
    function updateDiscountLabels() {
        const discountSections = document.querySelectorAll('.discount-section');
        discountSections.forEach((section, index) => {
            const discountHeader = section.querySelector('h5');
            discountHeader.textContent = `Discount ${index + 1}`;
    
            const discountIdInput = section.querySelector('input[id^="discountId"]');
            discountIdInput.id = `discountId${index + 1}`;
            const discountIdLabel = section.querySelector('label[for^="discountId"]');
            discountIdLabel.setAttribute('for', `discountId${index + 1}`);
    
            const codeInput = section.querySelector('input[id^="code"]');
            codeInput.id = `code${index + 1}`;
            const codeLabel = section.querySelector('label[for^="code"]');
            codeLabel.setAttribute('for', `code${index + 1}`);
    
            const isActiveInput = section.querySelector('input[id^="isActive"]');
            isActiveInput.id = `isActive${index + 1}`;
            const isActiveLabel = section.querySelector('label[for^="isActive"]');
            isActiveLabel.setAttribute('for', `isActive${index + 1}`);
    
            const criteriaInput = section.querySelector('input[id^="criteria"]');
            criteriaInput.id = `criteria${index + 1}`;
            const criteriaLabel = section.querySelector('label[for^="criteria"]');
            criteriaLabel.setAttribute('for', `criteria${index + 1}`);
    
            const minAmountInput = section.querySelector('input[id^="minAmount"]');
            minAmountInput.id = `minAmount${index + 1}`;
            const minAmountLabel = section.querySelector('label[for^="minAmount"]');
            minAmountLabel.setAttribute('for', `minAmount${index + 1}`);
    
            const maxAmountInput = section.querySelector('input[id^="maxAmount"]');
            maxAmountInput.id = `maxAmount${index + 1}`;
            const maxAmountLabel = section.querySelector('label[for^="maxAmount"]');
            maxAmountLabel.setAttribute('for', `maxAmount${index + 1}`);
    
            const discountValueInput = section.querySelector('input[id^="discountValue"]');
            discountValueInput.id = `discountValue${index + 1}`;
            const discountValueLabel = section.querySelector('label[for^="discountValue"]');
            discountValueLabel.setAttribute('for', `discountValue${index + 1}`);
    
            const isVariableInput = section.querySelector('input[id^="isVariable"]');
            isVariableInput.id = `isVariable${index + 1}`;
            const isVariableLabel = section.querySelector('label[for^="isVariable"]');
            isVariableLabel.setAttribute('for', `isVariable${index + 1}`);
        });
    }
    
    function updateDiscountDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.DiscountdeleteButton');
        const discountSections = document.querySelectorAll('.discount-section'); // Assuming each discount section has this class
    
        if (discountSections.length === 1) {
            // If there's only one discount, hide the delete button
            deleteButtons.forEach(button => button.style.display = 'none');
        } else {
            // Show the delete buttons if more than one discount field exists
            deleteButtons.forEach(button => button.style.display = 'inline-block');
        }
    }
    
    // /////////////////////////////Field Code/////////////////////////////////////////////////////////////////////////////////////////
    let fieldCounter = 1;

    function addField() {
        fieldCounter++;
        const formContainer = document.getElementById('form-container');
        const newFieldSet = document.createElement('div');
        newFieldSet.classList.add('form-group');
        newFieldSet.setAttribute('data-index', fieldCounter);
        newFieldSet.id = `field-set-${fieldCounter}`;
        newFieldSet.innerHTML = `
            <b id="field-title-${fieldCounter}">Field ${fieldCounter}</b>
            <div class="form-floating mb-3">
                <input type="text" class="form-control mb-3" id="fieldName${fieldCounter}" placeholder="Field Name">
                <label for="fieldName${fieldCounter}">Field Name</label>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control mb-3" id="fieldType${fieldCounter}" placeholder="Field Type">
                <label for="fieldType${fieldCounter}">Field Type</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control mb-3" id="minimumValue${fieldCounter}" placeholder="Min">
                <label for="minimumValue${fieldCounter}">Minimum Value</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control mb-3" id="maximumValue${fieldCounter}" placeholder="Max">
                <label for="maximumValue${fieldCounter}">Maximum Value</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="regExValidation${fieldCounter}" placeholder="Validation">
                <label for="regExValidation${fieldCounter}">Validation</label>
            </div>
            <button type="button" class="btn btn-danger FielddeleteButton" onclick="deleteField(this)">Delete</button>
        `;
        formContainer.appendChild(newFieldSet);
        updateDeleteButtons();
    }
    
    function deleteField(button) {
        const fieldSet = button.parentElement;
        fieldSet.remove();
        fieldCounter--;
        updateFieldLabels();
        updateDeleteButtons();
    }
    
    function updateFieldLabels() {
        const fieldSets = document.querySelectorAll('.form-group');
        fieldSets.forEach((fieldSet, index) => {
            const fieldTitle = fieldSet.querySelector('b[id^="field-title"]');
            fieldTitle.id = `field-title-${index + 1}`;
            fieldTitle.textContent = `Field ${index + 1}`;
    
            const fieldNameInput = fieldSet.querySelector('input[id^="fieldName"]');
            fieldNameInput.id = `fieldName${index + 1}`;
            const fieldNameLabel = fieldSet.querySelector('label[for^="fieldName"]');
            fieldNameLabel.setAttribute('for', `fieldName${index + 1}`);
    
            const fieldTypeInput = fieldSet.querySelector('input[id^="fieldType"]');
            fieldTypeInput.id = `fieldType${index + 1}`;
            const fieldTypeLabel = fieldSet.querySelector('label[for^="fieldType"]');
            fieldTypeLabel.setAttribute('for', `fieldType${index + 1}`);
    
            const minValueInput = fieldSet.querySelector('input[id^="minimumValue"]');
            minValueInput.id = `minimumValue${index + 1}`;
            const minValueLabel = fieldSet.querySelector('label[for^="minimumValue"]');
            minValueLabel.setAttribute('for', `minimumValue${index + 1}`);
    
            const maxValueInput = fieldSet.querySelector('input[id^="maximumValue"]');
            maxValueInput.id = `maximumValue${index + 1}`;
            const maxValueLabel = fieldSet.querySelector('label[for^="maximumValue"]');
            maxValueLabel.setAttribute('for', `maximumValue${index + 1}`);
    
            const validationInput = fieldSet.querySelector('input[id^="regExValidation"]');
            validationInput.id = `regExValidation${index + 1}`;
            const validationLabel = fieldSet.querySelector('label[for^="regExValidation"]');
            validationLabel.setAttribute('for', `regExValidation${index + 1}`);
        });
    }
    
    function updateDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.FielddeleteButton');
        const fieldSets = document.querySelectorAll('.form-group');
    
        if (fieldSets.length === 1) {
            // If there's only one field set, hide the delete button
            deleteButtons.forEach(button => button.style.display = 'none');
        } else {
            // Show all delete buttons if more than one field set exists
            deleteButtons.forEach(button => button.style.display = 'inline-block');
        }
    }
    
    
    ///////////////////////////////////CURRENCY SYMBOL/////////////////////////////////////
    document.getElementById('currency').addEventListener('change', function() {
        try {
          // Get the selected option
          let selectedOption = this.options[this.selectedIndex];
          
          // Fetch the 'currencySymbol' attribute
          let CurrencySymbol = selectedOption.getAttribute('currencySymbol');
          
          // If symbol is found, update the input field
          if (CurrencySymbol) {
            document.getElementById('Currencysymbol').value = CurrencySymbol;
          } else {
            throw new Error('Currency symbol not found for the selected option.');
          }
          
          // Output the symbol to console
          console.log(CurrencySymbol); 
        } catch (error) {
          // Log any errors to the console
          console.error('Error updating currency symbol: ', error.message);
        }
      });