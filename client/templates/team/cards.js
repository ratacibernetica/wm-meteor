Template.membercards.events({
  "click .wm-foto": function(e, template){
        e.preventDefault();
        var detailid = $(e.currentTarget).data('targetd');
        console.log(detailid);
        document.querySelector(detailid).click();
  },
  "click .js-show-skills":function(e){
    $('[id^="tab"]').hide();
    var target = $(e.currentTarget).data('teamid');
    $('.team-member[href="'+target+'"]').trigger('click');
  }

});
