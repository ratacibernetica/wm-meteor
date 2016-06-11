Template.portfolio.onRendered(function () {
  // Use the Packery jQuery plugin
  this.$('.slider').slider({full_width: true});
  this.$('.modal-trigger').leanModal();
});
