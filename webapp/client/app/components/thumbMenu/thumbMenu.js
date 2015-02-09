
//-----------------------------------------------------
// THUMB MENU

Template.thumbMenu.events({
   'click .dictionary-button': function(){
       Router.go('/dictionary');
    },
    'click .wordlist-button': function(){
        Router.go('/wordlist');
    },
    'click .customers-button': function(){
        Router.go('/customers');
    },
    'click .dowjones-button': function(){
        Router.go('/dowjones');
    }
});

Template.thumbMenu.helpers({
  isVisible: function(){
    if(Session.get('currentDataset')){
        return true;
    }else{
        return false;
    }
  },
  isCustomersPage: function () {
    if(Session.get('currentDataset') == 'customers'){
      return 'highlighted';
    }else{
      return 'dimmed';
    }
  },
  isDowJonesPage: function () {
    if(Session.get('currentDataset') == 'dowjones'){
      return 'highlighted';
    }else{
      return 'dimmed';
    }
  },
  isWordlistPage: function () {
    if(Session.get('currentDataset') == 'wordlist'){
      return 'highlighted';
    }else{
      return 'dimmed';
    }
  },
  isDictionaryPage: function () {
    if(Session.get('currentDataset') == 'dictionary'){
      return 'highlighted';
    }else{
      return 'dimmed';
    }
  }
});
