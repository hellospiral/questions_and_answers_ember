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
      var tagArray = this.get('tags').split(',');
      var params ={
        content: this.get('content'),
        author: this.get('author'),
        tags: tagArray
      };
      this.set('addNewQuestion', false);
      this.sendAction('sentFromNewQuestionComponent', params);
      this.set('content', "");
      this.set('author', "");
      this.set('tags', "");
    }
  }
});
