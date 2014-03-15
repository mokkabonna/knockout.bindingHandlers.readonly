define(['knockout', 'src/readonly'], function(ko, readonly) {

  describe('Readonly', function() {
    var viewModel;
    var element;
    var root;

    before(function() {
      root = document.createElement('div');
      root.innerHTML = '<input id="input" data-bind="readonly : obs" />';
      document.body.appendChild(root);
      element = document.getElementById('input');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element)).to.be(viewModel);
    });


    it('Element does not have attribute reaonly when undefined', function() {
      expect(!element.hasAttribute('readonly')).to.be(true);
    });

    it('Element has attribute readonly when observable is truthy', function() {
      viewModel.obs(true);
      expect(element.hasAttribute('readonly')).to.be(true);
    });

    it('Element does not have attribute when set back to falsy', function() {
      viewModel.obs(true);
      expect(element.hasAttribute('readonly')).to.be(true);
      viewModel.obs(false);
      expect(element.hasAttribute('readonly')).to.be(false);
      viewModel.obs(null);
      expect(element.hasAttribute('readonly')).to.be(false);
      viewModel.obs(undefined);
      expect(element.hasAttribute('readonly')).to.be(false);
      viewModel.obs('');
      expect(element.hasAttribute('readonly')).to.be(false);
    });

  });
});
