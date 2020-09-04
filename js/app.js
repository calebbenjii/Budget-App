

// Data Module
const budgetController = ( function() {

  const Expences = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let allExpence = [];
  let allIncome = [];
  let total = []

  const data = {
    allItems: {
      exp: = [],
      inc: = []
    }
    allTotals: {
      exp: 0,
      inc: 0
    }
  }

})();


// UI CONTROLLER
const UIController = ( function() {

  const DOMStrings = {
    inputTypes: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputAdd: '.add__btn',
  }

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMStrings.inputTypes).value, // will be either income or expense
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      }
    },

    getDomStrings: () => {
      return DOMStrings;
    }
  }

})();


// GLOBAL APP CONTROLLER
const controller = ( function(budgetCtrl, UICtrl) {
  
  const setUpEventListeners = () => {
    let DOM = UICtrl.getDomStrings()
    document.querySelector(DOM.inputAdd).addEventListener('click', ctrlAddItem);
  
    // handeling enter keypress
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem(); 
      }
    });
  }

  const ctrlAddItem = function() {
      // 1. Get the field input data
      let inputs = UICtrl.getInput();
      console.log(inputs);
  
      // 2. Add the item to the budget controller
  
      // 3. Add the item to the UI
  
      // 4. Calculate the budget
  
      // 5. Display the budget on this UI
  };
 
  return {
    init: () => {
      console.log('Application has Started...');
      setUpEventListeners()
    }
  }
  
})(budgetController, UIController); 

// without this line nothing will happen because there will be no eventListeners, without eventlistener we can not input data and without data there no application.
controller.init();

