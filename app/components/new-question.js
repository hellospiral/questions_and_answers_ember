import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions:{
    questionFormShow(){
      this.set('addNewQuestion', true);
    },

    questionFormHide() {
      this.set('addNewQuestion', false);
    },

    newQuestionSave1() {
      var params ={
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('sentFromNewQuestionComponent', params);
      this.set('content', "");
      this.set('author', "");
    }
  }
});
