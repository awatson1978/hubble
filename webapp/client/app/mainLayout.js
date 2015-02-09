Template.mainLayout.events({
    'click .edit-button': function(){
        Session.set('current_action','edit');
        toggleSession('global_edit');
    },
    'click .new-button': function(){
        Session.set('current_action','new');
        Session.set('selected_user', 'newuser');
        Session.set('selected_word', 'newword');
        Session.set('selected_record', 'newrecord');
        Session.set('global_edit', true);
        Session.set('show_create_user_button', true);
    },
    'click .delete-button': function(){
        if(Session.get('selected_user') != ('' || 'newuser')){
            Session.set('current_action','delete');
        }
        if(Session.get('selected_word') != ('' || 'newword')){
            Session.set('current_action','delete');
        }
        if(Session.get('selected_record') != ('' || 'newrecord')){
            Session.set('current_action','delete');
        }
    },
    'click .view-button': function(){
        Session.set('current_action','view');
    }
});

Template.mainLayout.title = function(){
    return Session.get('account_search_term');
}
