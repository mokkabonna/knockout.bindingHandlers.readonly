/* jshint boss:true*/
define(['knockout', 'module'], function(ko, module) {
  'use strict';

  var bindingName = module.config().name || 'readonly';

  return ko.bindingHandlers[bindingName] = {
    update: function(element, valueAccessor) {
      if (ko.utils.unwrapObservable(valueAccessor())) {
        //set it to string readonly for consistency with older IE browsers, they report boolean attributes like that anyway
        element.setAttribute('readonly', 'readonly');
      } else {
        element.removeAttribute('readonly');
      }
    }
  };
});
