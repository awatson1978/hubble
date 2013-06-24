Template.appContainerTemplate.events({
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

Template.appContainerTemplate.title = function(){
    return Session.get('account_search_term');
}

//-----------------------------------------------------
// Atmosphere Links

Template.homePage.events({
    'click .atmosphere-customers': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-customers';
    },
    'click .atmosphere-dowjones': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-dowjones';
    },
    'click .atmosphere-dictionary': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-dictionary';
    },
    'click .atmosphere-wordlist': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-wordlist';
    },
    'click .about-panel': function(){
        window.location.href = 'https://github.com/awatson1978';
    },
    'touchend .atmosphere-customers': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-customers';
    },
    'touchend .atmosphere-dowjones': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-dowjones';
    },
    'touchend .atmosphere-dictionary': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-dictionary';
    },
    'touchend .atmosphere-wordlist': function(){
        window.location.href = 'https://atmosphere.meteor.com/package/dataset-wordlist';
    },
    'touchend .about-panel': function(){
        window.location.href = 'https://github.com/awatson1978';
    },


    'click .records-customers': function(){
        window.location.href = '/customers';
    },
    'click .records-dowjones': function(){
        window.location.href = '/dowjones';
    },
    'click .records-dictionary': function(){
        window.location.href = '/dictionary';
    },
    'click .records-wordlist': function(){
        window.location.href = '/wordlist';
    },
    'click .about-panel': function(){
        window.location.href = 'https://github.com/awatson1978';
    },
    'touchend .records-customers': function(){
        window.location.href = '/customers';
    },
    'touchend .records-dowjones': function(){
        window.location.href = '/dowjones';
    },
    'touchend .records-dictionary': function(){
        window.location.href = '/dictionary';
    },
    'touchend .records-wordlist': function(){
        window.location.href = '/wordlist';
    },
    'touchend .about-panel': function(){
        window.location.href = 'https://github.com/awatson1978';
    }



});


//-----------------------------------------------------
// NAVBARS

Template.navbarFooterTemplate.isVisible = function(){
    if(Session.get('currentDataset')){
        return true;
    }else{
        return false;
    }
};

//-----------------------------------------------------
// THUMB MENU

Template.thumbMenu.events({
   'click .dictionary-button': function(){
       Meteor.Router.to('/dictionary');
    },
    'click .wordlist-button': function(){
        Meteor.Router.to('/wordlist');
    },
    'click .customers-button': function(){
        Meteor.Router.to('/customers');
    },
    'click .dowjones-button': function(){
        Meteor.Router.to('/dowjones');
    }
});
Template.thumbMenu.isVisible = function(){
    if(Session.get('currentDataset')){
        return true;
    }else{
        return false;
    }
};
Template.thumbMenu.isCustomersPage = function(){
    if(Session.get('currentDataset') == 'customers'){
        return 'highlighted';
    }else{
        return 'dimmed';
    }
};
Template.thumbMenu.isDowJonesPage = function(){
    if(Session.get('currentDataset') == 'dowjones'){
        return 'highlighted';
    }else{
        return 'dimmed';
    }
};
Template.thumbMenu.isWordlistPage = function(){
    if(Session.get('currentDataset') == 'wordlist'){
        return 'highlighted';
    }else{
        return 'dimmed';
    }
};
Template.thumbMenu.isDictionaryPage = function(){
    if(Session.get('currentDataset') == 'dictionary'){
        return 'highlighted';
    }else{
        return 'dimmed';
    }
};
