import Ember from 'ember';
import TypeSupportMixin from '../../../mixins/type-support';
import { module, test } from 'qunit';

module('Unit | Mixin | type support');

// Replace this with your real tests.
test('it works', function(assert) {
  var TypeSupportObject = Ember.Object.extend(TypeSupportMixin);
  var subject = TypeSupportObject.create();
  assert.ok(subject);
});
