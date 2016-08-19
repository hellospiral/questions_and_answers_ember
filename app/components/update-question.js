import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },

    updateFormHide() {
      this.set('updateQuestionForm', false);
    },

    update(question){
      var tagArray = this.get('tags').split(',');
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        tags: tagArray
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
