Session.setDefault('day_summary_search', '2009');
Session.set('is_deleting_record', false);

//-------------------------------------------------------------
// A.  Generate Index

Template.dowjonesIndexTemplate.daySummaryList = function(){
    try{
        return DowJones.find({
                'Date': { $regex: Session.get('day_summary_search'), $options: 'i' }
        },{limit: 20});
    }catch(error){
        console.log(error);
    }
};

//-------------------------------------------------------------
// B.  Display Record in Edit Pannel When Clicked

Template.dowjonesIndexTemplate.events({
    'click .list-group-item':function(event, template){
        try{
            //alert('selected_record! ' + this._id);
            Session.set('selected_record', this._id);
            Session.set('selected_date', this._id);
            Session.set('current_action','view');
        }catch(error){
            console.log(error);
        }
    }
});

//-------------------------------------------------------------
// C.  Filter Results When User Enters Search Term

Template.dowjonesIndexTemplate.events({
    'keyup #daySummarySearchInput': function(evt,tmpl){
        try{
            Session.set('day_summary_search', $('#daySummarySearchInput').val());
            Meteor.flush();
        }catch(err){
            console.log(err);
        }
    }
});



//-------------------------------------------------------------
// D.  Edit Form Helper

Template.dowjonesFormTemplate.helpers({
    record: function(){
        try{
            if(Session.get('current_action') == 'new'){
                return {"Date":"","Open":"","High":"","Low":"","Close":"","Volume":""};
            }else{
                return DowJones.findOne(Session.get('selected_date'));
            }
        }catch(error){
            console.log(error);
        }
    }
});

//-------------------------------------------------------------
// E. Active Input When Clicked ot Tapped

Template.dowjonesFormTemplate.events({
    'click #dateInput':function(){
        Session.set('editing_date', true);
        Meteor.flush();
    },
    'click #openInput':function(){
        Session.set('editing_open', true);
        Meteor.flush();
    },
    'click #highInput':function(){
        Session.set('editing_high', true);
        Meteor.flush();
    },
    'click #lowInput':function(){
        Session.set('editing_low', true);
        Meteor.flush();
    },
    'click #closeInput':function(){
        Session.set('editing_close', true);
        Meteor.flush();
    },
    'click #volumeInput':function(){
        Session.set('editing_volume', true);
        Meteor.flush();
    }
})

//-------------------------------------------------------------
// F. Submit Input to Mongo (Update)

Template.dowjonesFormTemplate.events(
    okCancelEvents('#dateInput',
        {
            ok: function (value) {
                DowJones.update(Session.get('selected_date'), {$set: { 'Date': value }});
                Session.set('editing_date', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_date', false);
            }
        })
);
Template.dowjonesFormTemplate.events(
    okCancelEvents('#openInput',
        {
            ok: function (value) {
                try{
                    DowJones.update(Session.get('selected_date'), {$set: { 'Open': value }});
                    Session.set('editing_open', false);
                    Meteor.flush();
                }catch(error){
                    console.log(error);
                }
            },
            cancel: function () {
                Session.set('editing_open', false);
            }
        })
);
Template.dowjonesFormTemplate.events(
    okCancelEvents('#highInput',
        {
            ok: function (value) {
                DowJones.update(Session.get('selected_date'), {$set: { 'High': value }});
                Session.set('editing_high', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_high', false);
            }
        })
);
Template.dowjonesFormTemplate.events(
    okCancelEvents('#volumeInput',
        {
            ok: function (value) {
                DowJones.update(Session.get('selected_date'), {$set: { 'Volume': value }});
                Session.set('editing_volume', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_volume', false);
            }
        })
);
Template.dowjonesFormTemplate.events(
    okCancelEvents('#closeInput',
        {
            ok: function (value) {
                DowJones.update(Session.get('selected_date'), {$set: { 'Close': value }});
                Session.set('editing_close', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_close', false);
            }
        })
);
Template.dowjonesFormTemplate.events(
    okCancelEvents('#lowInput',
        {
            ok: function (value) {
                DowJones.update(Session.get('selected_date'), {$set: { 'Low': value }});
                Session.set('editing_low', false);
                Meteor.flush();
            },
            cancel: function () {
                Session.set('editing_low', false);
            }
        })
);


//-------------------------------------------------------------
// G. Determine if Input should be Readonly

Template.dowjonesFormTemplate.date_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_date')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.dowjonesFormTemplate.open_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_open')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.dowjonesFormTemplate.high_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_high')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.dowjonesFormTemplate.volume_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_volume')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.dowjonesFormTemplate.close_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_close')){
        return "enabled";
    }else{
        return "readonly";
    }
};
Template.dowjonesFormTemplate.low_enabled = function(){
    if(Session.get('global_edit')){
        return "enabled";
    }else if(Session.get('editing_low')){
        return "enabled";
    }else{
        return "readonly";
    }
};




//-------------------------------------------------------------
// H. Determine if Buttons Should be Displayed

Template.dowjonesFormTemplate.isNewMarketSummary = function(){
    try{
        if(Session.get('current_action') == 'new'){
            return true;
        }else{
            return false;
        }
    }catch(error){
        console.log(error);
    }
};
Template.dowjonesFormTemplate.isDeletingMarketSummary = function(){
    try{
        if(Session.get('current_action') == 'delete'){
            return true;
        }else{
            return false;
        }
    }catch(error){
        console.log(error);
    }
};

//-------------------------------------------------------------
// I. Call Server Side New Word Method (New, Delete)


Template.dowjonesFormTemplate.events({
    'click #newMarketSummaryButton': function(){
        console.log('creating new user...');

        try{

            // TODO:  add validation functions
            if ($('#dateInput').val().length) {

                Meteor.call('createNewDaySummary', {
                    Date: $('#dateInput').val(),
                    Open: $('#openInput').val(),
                    High: $('#highInput').val(),
                    Low: $('#volumeInput').val(),
                    Close: $('#closeInput').val(),
                    Volume: $('#lowInput').val()
                }, function (error, customer) {
                    console.log('error: ' + error);
                    console.log('customer: ' + customer);
                });
            } else {
                Session.set("createError",
                    "Customer needs a name, or why bother?");
            }
            evt.target.value = '';
        }catch(err){
            console.log(err);
        }

        Session.set('current_action','view');
    },
    'click #deleteSummaryButton': function(){
        DowJones.remove(Session.get('selected_record'));
        Session.set('current_action','view');
    },
    'click #cancelDeleteSummaryButton': function(){
        Session.set('current_action','view');
    }
});
