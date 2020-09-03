

// Data Module
const budgetController = ( function() {

  // date module for expenses and income
  const expense = function(id, description, value) {
    this.id = id,
    this.description = description,
    this.value = value
  };

  const income = function(id, description, value) {
    this.id = id,
    this.description = description,
    this.value = value;
  };

})();



// UI CONTROLLER
const UIController = ( function() {

  const DOMStrings = {
    inputType: '.add__type',
    description: '.add__description',
    valued: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.description).value,
        value: document.querySelector(DOMStrings.valued).value,
      }
    }, 

    getDomString: () => {
      return DOMStrings; 
    }

  };

})();


// GLOBAL APP CONTROLLER
const controller = ( function(budgetCtrl, UICtrl) {

  const setUpEventListeners = () => {

    const DOM =  UICtrl.getDomString();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // handeling enter keypress
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem(); 
      }
    });
  }

  const ctrlAddItem = function() {

      // 1. Get the field input data
      const input = UICtrl.getInput();
  
      // 2. Add the item to the budget controller
  
      // 3. Add the item to the UI
  
      // 4. Calculate the budget
  
      // 5. Display the budget on this UI 
  };

  return {
    init: function() {
      console.log('Application has started.');
      setUpEventListeners();
    }
  };

})(budgetController, UIController); 

// without this line nothing will happen because there will be no eventListeners, without eventlistener we can not input data and without data there no application.
controller.init();

