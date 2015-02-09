//-------------------------------------------------------------
// A.  Generate Wordlist

Template.wordlistIndexTemplate.helpers({
  fryWordList: function () {
    return WordList.find({
      'Word': {
        $regex: Session.get('word_search'),
        $options: 'i'
      }
    }, {
      limit: 96
    });
  }
});


//-------------------------------------------------------------
// B.  Display Word in Edit Pannel When Clicked

Template.wordlistIndexTemplate.events({
  'click .list-group-item': function (event, template) {
    Session.set('selected_word', this._id);
    Session.set('current_action', 'view');
  },
  'keyup #wordlistSearchInput': function (evt, tmpl) {
    Session.set('word_search', $('#wordlistSearchInput').val());
  }
});


//-------------------------------------------------------------
// D.  Edit Form Helper

Template.wordlistFormTemplate.helpers({
  word: function () {
    if (Session.get('current_action') == 'new') {
      return {
        "Word": ""
      };
    } else {
      return WordList.findOne(Session.get('selected_word'));
    }
  }
});


//-------------------------------------------------------------
// E. Active Input When Clicked ot Tapped

Template.wordlistFormTemplate.events({
  'click #wordInput': function () {
    Session.set('editing_word', true);
  },
  'touchend #wordInput': function () {
    Session.set('editing_word', true);
  },
  'mouseout #wordInput': function () {
    Session.set('editing_word', false);
  }
})



//-------------------------------------------------------------
// F. Submit Input to Mongo (Update)

Template.wordlistFormTemplate.events(
  okCancelEvents('#wordInput', {
    ok: function (value) {
      WordList.update(Session.get('selected_word'), {
        $set: {
          'Word': value
        }
      });
      Session.set('editing_word', false);
      Meteor.flush();
    },
    cancel: function () {
      Session.set('editing_word', false);
    }
  })
);


//-------------------------------------------------------------
// G. Determine if Input should be Readonly

Template.wordlistFormTemplate.helpers({
  word_enabled: function () {
    if (Session.get('global_edit')) {
      return "enabled";
    } else if (Session.get('editing_word')) {
      return "enabled";
    } else {
      return "readonly";
    }
  },
  isNewWord: function () {
    if (Session.get('current_action') == 'new') {
      return true;
    } else {
      return false;
    }
  },
  isDeletingWord: function () {
    if (Session.get('current_action') == 'delete') {
      return true;
    } else {
      return false;
    }
  },
});





//-------------------------------------------------------------
// I. Call Server Side New Word Method (New, Delete)

Template.wordlistFormTemplate.events({
  'click #newWordButton': function () {
    console.log('creating new word...');

    // TODO:  add validation functions
    if ($('#wordInput').val().length) {

      Meteor.call('createNewWord', {
        Word: $('#wordInput').val()
      }, function (error, word) {
        console.log('error: ' + error);
        console.log('word: ' + word);
      });
    } else {
      Session.set("createError",
        "Word needs characters, or why bother?");
    }
    evt.target.value = '';

    Session.set('current_action', 'view');
  },
  'click #deleteWordButton': function () {
    WordList.remove(Session.get('selected_word'));
    Session.set('current_action', 'view');
  },
  'click #cancelDeleteWordButton': function () {
    Session.set('current_action', 'view');
  }
});
