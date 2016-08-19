import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(answer) {
      this.sendAction('upVote', answer);
      // console.log(answer);
    }
  }
});
