//
////-------------------------------------------------------------
//// Customers Index
//
//Template.customersIndexTemplate.userList = function(){
//    try{
//        return CustomerAccounts.find({
//            $or: [
//                {'FirstName': { $regex: Session.get('user_search_term'), $options: 'i' }},
//                {'LastName':  { $regex: Session.get('user_search_term'), $options: 'i' }}
//            ]
//        },{limit: 20});
//    }catch(error){
//        console.log(error);
//    }
//};
//Template.customersIndexTemplate.events({
//    'click .list-group-item':function(event, template){
//        Session.set('selected_user', this._id);
//        Session.set('current_task','view');
//    }
//});
//Template.customersIndexTemplate.events({
//    'keyup #customerSearchInput': function(evt,tmpl){
//        try{
//            Session.set('user_search_term', $('#customerSearchInput').val());
//            Meteor.flush();
//        }catch(err){
//            console.log(err);
//        }
//    }
//});
//
//
//
////-------------------------------------------------------------
//// A. Sessions Variables
//
//Session.set('editing_first_name', false);
//Session.set('editing_last_name', false);
//Session.set('editing_company', false);
//Session.set('editing_address', false);
//Session.set('editing_city', false);
//Session.set('editing_county', false);
//Session.set('editing_state', false);
//Session.set('editing_zip', false);
//Session.set('editing_phone', false);
//Session.set('editing_fax', false);
//Session.set('editing_email', false);
//Session.set('editing_web', false);
//
//Session.set('is_deleting_task', false);
//
////-------------------------------------------------------------
//// B.  Helpers
//
//Template.customersFormTemplate.helpers({
//    user: function(){
//        try{
//            if(Session.get('current_task') == 'new'){
//                return {"FirstName":"","LastName":"","Company":"","Address":"","City":"","County":"","State":"","ZIP":"","Phone":"","Fax":"","Email":"","Web":""};
//            }else{
//                return CustomerAccounts.findOne(Session.get('selected_user'));
//            }
//        }catch(error){
//            console.log(error);
//        }
//    }
//});
//
//
////-------------------------------------------------------------
//// C. Event Map
//
//Template.customersFormTemplate.events({
//
//    //-------------------------------------------------------------
//    // 1. Desktop Clicks - Editing
//
//    'click #firstNameInput':function(){
//        Session.set('editing_first_name', true);
//        Meteor.flush();
//    },
//    'click #lastNameInput':function(){
//        Session.set('editing_last_name', true);
//        Meteor.flush();
//    },
//    'click #companyInput':function(){
//        Session.set('editing_company', true);
//        Meteor.flush();
//    },
//    'click #addressInput':function(){
//        Session.set('editing_address', true);
//        Meteor.flush();
//    },
//    'click #cityInput':function(){
//        Session.set('editing_city', true);
//        Meteor.flush();
//    },
//    'click #countyInput':function(){
//        Session.set('editing_county', true);
//        Meteor.flush();
//    },
//    'click #stateInput':function(){
//        Session.set('editing_state', true);
//        Meteor.flush();
//    },
//    'click #zipInput':function(){
//        Session.set('editing_zip', true);
//        Meteor.flush();
//    },
//    'click #phoneInput':function(){
//        Session.set('editing_phone', true);
//        Meteor.flush();
//    },
//    'click #faxInput':function(){
//        Session.set('editing_fax', true);
//        Meteor.flush();
//    },
//    'click #emailInput':function(){
//        Session.set('editing_email', true);
//        Meteor.flush();
//    },
//    'click #webInput':function(){
//        Session.set('editing_web', true);
//        Meteor.flush();
//    },
//
//    //-------------------------------------------------------------
//    // 2. Mobile Tabs - Editing
//
//    'mouseout #firstNameInput':function(){
//        Session.set('editing_first_name', false);
//        Meteor.flush();
//    },
//    'mouseout #lastNameInput':function(){
//        Session.set('editing_last_name', false);
//        Meteor.flush();
//    },
//    'mouseout #companyInput':function(){
//        Session.set('editing_company', false);
//        Meteor.flush();
//    },
//    'mouseout #addressInput':function(){
//        Session.set('editing_address', false);
//        Meteor.flush();
//    },
//    'mouseout #cityInput':function(){
//        Session.set('editing_city', false);
//        Meteor.flush();
//    },
//    'mouseout #countyInput':function(){
//        Session.set('editing_county', false);
//        Meteor.flush();
//    },
//    'mouseout #stateInput':function(){
//        Session.set('editing_state', false);
//        Meteor.flush();
//    },
//    'mouseout #zipInput':function(){
//        Session.set('editing_zip', false);
//        Meteor.flush();
//    },
//    'mouseout #phoneInput':function(){
//        Session.set('editing_phone', false);
//        Meteor.flush();
//    },
//    'mouseout #faxInput':function(){
//        Session.set('editing_fax', false);
//        Meteor.flush();
//    },
//    'mouseout #emailInput':function(){
//        Session.set('editing_email', false);
//        Meteor.flush();
//    },
//    'mouseout #webInput':function(){
//        Session.set('editing_web', false);
//        Meteor.flush();
//    }
//})
//
////-------------------------------------------------------------
//// 3. Submit
//// 4. Stop Editing
//
//Template.customersFormTemplate.events(
//    okCancelEvents('#firstNameInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'FirstName': value }});
//                Session.set('editing_first_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_first_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#lastNameInput',
//        {
//            ok: function (value) {
//                try{
//                    CustomerAccounts.update(Session.get('selected_user'), {$set: { 'LastName': value }});
//                    Session.set('editing_last_name', false);
//                    Meteor.flush();
//                }catch(error){
//                    console.log(error);
//                }
//            },
//            cancel: function () {
//                Session.set('editing_last_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#companyInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Company': value }});
//                Session.set('editing_company_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_company_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#addressInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Address': value }});
//                Session.set('editing_address_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_address_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#cityInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'City': value }});
//                Session.set('editing_city_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_city_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#countyInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'County': value }});
//                Session.set('editing_county_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_county_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#stateInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'State': value }});
//                Session.set('editing_state_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_state_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#zipInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'ZIP': value }});
//                Session.set('editing_zip_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_zip_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#phoneInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Phone': value }});
//                Session.set('editing_phone_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_phone_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#faxInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Fax': value }});
//                Session.set('editing_fax_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_fax_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#emailInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Email': value }});
//                Session.set('editing_email_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_email_name', false);
//            }
//        })
//);
//Template.customersFormTemplate.events(
//    okCancelEvents('#webInput',
//        {
//            ok: function (value) {
//                CustomerAccounts.update(Session.get('selected_user'), {$set: { 'Web': value }});
//                Session.set('editing_web_name', false);
//                Meteor.flush();
//            },
//            cancel: function () {
//                Session.set('editing_web_name', false);
//            }
//        })
//);
//
//
////-------------------------------------------------------------
//// D. Display Readonly Value
//
//Template.customersFormTemplate.first_name_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_first_name')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.last_name_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_last_name')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.company_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_company')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.address_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_address')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.city_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_city')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.county_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_county')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.state_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_state')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.zip_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_zip')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.phone_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_phone')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.fax_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_fax')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.email_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_email')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//Template.customersFormTemplate.web_enabled = function(){
//    if(Session.get('global_edit')){
//        return "enabled";
//    }else if(Session.get('editing_web')){
//        return "enabled";
//    }else{
//        return "readonly";
//    }
//};
//
//
//
//
////-------------------------------------------------------------
//// E. Buttons
//
//Template.customersFormTemplate.isNewTask = function(){
//    try{
//        if(Session.get('current_task') == 'new'){
//            return true;
//        }else{
//            return false;
//        }
//    }catch(error){
//        console.log(error);
//    }
//};
//Template.customersFormTemplate.isDeletingTask = function(){
//    try{
//        if(Session.get('current_task') == 'delete'){
//            return true;
//        }else{
//            return false;
//        }
//    }catch(error){
//        console.log(error);
//    }
//};
//
//
//Template.customersFormTemplate.events({
//    'click #newUserButton': function(){
//        console.log('creating new user...');
//
//        try{
//
//            // TODO:  add validation functions
//            if ($('#firstNameInput').val().length) {
//
//                Meteor.call('createNewCustomer', {
//                    FirstName: $('#firstNameInput').val(),
//                    LastName: $('#lastNameInput').val(),
//                    Company: $('#companyInput').val(),
//                    Address: $('#addressInput').val(),
//                    City: $('#cityInput').val(),
//                    County: $('#countyInput').val(),
//                    State: $('#stateInput').val(),
//                    ZIP: $('#zipInput').val(),
//                    Phone: $('#phoneInput').val(),
//                    Fax: $('#faxInput').val(),
//                    Email: $('#emailInput').val(),
//                    Web: $('#webInput').val()
//                }, function (error, customer) {
//                    console.log('error: ' + error);
//                    console.log('customer: ' + customer);
//                });
//            } else {
//                Session.set("createError",
//                    "Customer needs a name, or why bother?");
//            }
//            evt.target.value = '';
//        }catch(err){
//            console.log(err);
//        }
//
//        Session.set('current_task','view');
//    },
//    'click #deleteUserButton': function(){
//        CustomerAccounts.remove(Session.get('selected_user'));
//        Session.set('current_task','view');
//    },
//    'click #cancelDeleteButton': function(){
//        Session.set('current_task','view');
//    }
//});
