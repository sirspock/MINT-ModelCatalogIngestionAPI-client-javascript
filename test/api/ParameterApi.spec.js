/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about     Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * OpenAPI spec version: 0.0.2
 * Contact: mosorio@isi.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ModelCatalog);
  }
}(this, function(expect, ModelCatalog) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ModelCatalog.ParameterApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ParameterApi', function() {
    describe('createParameter', function() {
      it('should call createParameter successfully', function(done) {
        //uncomment below and update the code to test createParameter
        //instance.createParameter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getParameters', function() {
      it('should call getParameters successfully', function(done) {
        //uncomment below and update the code to test getParameters
        //instance.getParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
