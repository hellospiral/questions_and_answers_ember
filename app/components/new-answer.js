import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    newAnswerHide() {
      this.set('addNewAnswer', false);
    },

    saveAnswer1() {
      var params= {
        question: this.get('question'),
        content: this.get('content'),
        author: this.get('author')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
      this.set('author', "" );
      this.set('content' , "");
    }
  }
});
