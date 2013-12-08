describe('YourFramework.User model', function() {
    beforeEach(function() {
        this.model = new YourFramework.User.Model('Demo');
    });

    describe('when instantiated with a name', function() {
        it('should return an object of backbone model.', function() {
            expect(this.model instanceof Backbone.Model).toBeTruthy;
        });
        it('should exhibit the attribute "name" to be "name has not been set yet".', function() {
            expect(this.model.get('name')).toEqual('name has not been set yet');
        });
    });

    describe('when using the method "setName" with a given name "Demo"', function() {
        it('should have the attribute "name" set to "Demo".', function() {
            this.model.setName('Demo');
            expect(this.model.get('name')).toEqual('Demo');
        });
    });

    describe('when using the method "setName" with no parameter', function() {
        it('should have the attribute "name" set to "name has not been set yet".', function() {
            this.model.setName();
            expect(this.model.get('name')).toEqual('name has not been set yet');
        });
    });

});

describe('YourFramework.YourDiv.View', function() {
    beforeEach(function() {
            this.eventSpy = sinon.spy(YourFramework.YourDiv.View.prototype, 'initialize');
            this.model = new YourFramework.User.Model('Demo');
            this.view  = new YourFramework.YourDiv.View({model: this.model});
    });

    afterEach(function() {
        YourFramework.YourDiv.View.prototype.initialize.restore();
    });

    describe('when instantiated with a model', function() {
        it('should return an object of backbone view.', function() {
            expect(this.view instanceof Backbone.View).toBeTruthy;
        });
        it('should have a member el which is set to node div', function() {
            expect(this.view.el.nodeName).toEqual("DIV");
        });
        it('should call method initialize.', function() {
            expect(this.eventSpy.called).toBeTruthy();
        });

    });

});

describe('YourFramework.YourDiv.NameDiv', function() {
    beforeEach(function() {
        this.eventSpy = sinon.spy(YourFramework.YourDiv.NameDiv.prototype, 'setName');
    });
    afterEach(function() {
        YourFramework.YourDiv.NameDiv.prototype.setName.restore();
    });
    
    describe('when instantiated', function() {
        it('should call the method setName', function() {
            new YourFramework.YourDiv.NameDiv();
            expect(this.eventSpy.called).toBeTruthy();            
        });
    });
    
    describe('when instantiated with a name', function() {
        it('should call the method setName and set its args to model attribute name', function() {
            var myApp = new YourFramework.YourDiv.NameDiv({name: 'Demo'});
            expect(myApp.model.get('name')).toEqual("Demo");
        });
    });
    
    describe('when instantiated without a name', function() {
        it('should call the method setName and set "name has not been set yet" to model attribute name', function() {
            var myApp = new YourFramework.YourDiv.NameDiv();
            expect(myApp.model.get('name')).toEqual('name has not been set yet');
        });
    });
    
});
