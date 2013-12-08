(function ($) {
    Namespace("YourFramework.User");
    Namespace("YourFramework.YourDiv");

    /*
     * Model & Views
     */

     /*
      * Your Model
      */
    YourFramework.User.Model = Backbone.Model.extend({
        defaults: {
            name: "name has not been set yet"
        },
        setName : function(newName) {
            if (newName !== undefined && newName !== '') {
                this.set({"name": newName});
            }
        }
    });

    /*
     * Your View - renders the element but does not insert it in DOM
     */
    YourFramework.YourDiv.View = Backbone.View.extend({
        tagName   : 'div',
        initialize: function(parameter){
            this.listenTo(this.model, 'change:name', this.render );
        },
        render    : function() {
            this.$el.attr('id', this.cid);
            this.$el.html(this.model.get('name'));
            return this;
        },
        events    : {
            click   : 'click',
            dblclick: 'dblclick'
        },
        click     : function() {
            alert('clicked by view ' + this.model.get('name'));
        },
        dblclick  : function() {
            alert('double click');
        }
    });

    /*
     * Your Object
     */
    YourFramework.YourDiv.NameDiv = Backbone.View.extend({
        el: $('#NameDiv'),
        view: null,
        initialize: function() {
            this.model = new YourFramework.User.Model;
            this.view  = new YourFramework.YourDiv.View({model: this.model});
            this.$el.append(this.view.render().el);
            this.setName(this.options.name);
        },
        printName: function(){
            console.log(this.model.get('name'));
        },
        setName: function(newName) {
            this.model.setName(newName);
        }
    });

    /*
     * Your clickable object (inherited)
     */
    YourFramework.YourDiv.NameDivClick = YourFramework.YourDiv.NameDiv.extend({
        el: $('#NameDivClick'),
        initialize: function() {
            // call parent constructor - not necessary
            this.constructor.__super__.initialize.apply(this, arguments);
            
            //todo ...
            this.view.events['click'] = function() {
                //alert('single click: ' + this.model.get('name'));
            };
        },

        events: function() {
            return _.extend({}, YourFramework.YourDiv.NameDiv.prototype.events,{
                'click' : 'onclickChild'
            });
        },
        onclickChild: function() {
            //alert('child click');
        },
        printName: function(newName) {
            console.log('Name:' + this.model.get('name'));
        }
    });
})(jQuery);

