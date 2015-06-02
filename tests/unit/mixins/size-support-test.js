import Ember from 'ember';
import SizeSupportMixin from '../../../mixins/size-support';
import { module, test } from 'qunit';

module('Unit | Mixin | size support');

// Replace this with your real tests.
test('it works', function(assert) {
  var SizeSupportObject = Ember.Object.extend(SizeSupportMixin);
  var subject = SizeSupportObject.create();
  assert.ok(subject);
});
