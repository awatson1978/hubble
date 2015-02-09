Router.configure({
  layoutTemplate: 'mainLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'}
  }
});


Router.route('/', function(){
  Session.set('currentDataset', false);
  this.render('homePage');
});
Router.route('/customers', function(){
  Session.set('currentDataset', 'customers');
  this.render('customersPage');
});
Router.route('/dowjones', function(){
  Session.set('currentDataset', 'dowjones');
  this.render('dowjonesPage');
});
Router.route('/wordlist', function(){
  Session.set('currentDataset', 'wordlist');
  this.render('wordlistPage');
});
Router.route('/dictionary', function(){
  Session.set('currentDataset', 'dictionary');
  this.render('dictionaryPage');
});
