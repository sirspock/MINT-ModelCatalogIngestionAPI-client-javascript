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
    instance = new ModelCatalog.ModelConfiguration();
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

  describe('ModelConfiguration', function() {
    it('should create an instance of ModelConfiguration', function() {
      // uncomment below and update the code to test ModelConfiguration
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be.a(ModelCatalog.ModelConfiguration);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasInput (base name: "hasInput")', function() {
      // uncomment below and update the code to test the property hasInput
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasOutput (base name: "hasOutput")', function() {
      // uncomment below and update the code to test the property hasOutput
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasCAG (base name: "hasCAG")', function() {
      // uncomment below and update the code to test the property hasCAG
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasProcess (base name: "hasProcess")', function() {
      // uncomment below and update the code to test the property hasProcess
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasTimeInterval (base name: "hasTimeInterval")', function() {
      // uncomment below and update the code to test the property hasTimeInterval
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasImplementationScriptLocation (base name: "hasImplementationScriptLocation")', function() {
      // uncomment below and update the code to test the property hasImplementationScriptLocation
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasContainer (base name: "hasContainer")', function() {
      // uncomment below and update the code to test the property hasContainer
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasConstraint (base name: "hasConstraint")', function() {
      // uncomment below and update the code to test the property hasConstraint
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasParameter (base name: "hasParameter")', function() {
      // uncomment below and update the code to test the property hasParameter
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property hasComponentLocation (base name: "hasComponentLocation")', function() {
      // uncomment below and update the code to test the property hasComponentLocation
      //var instane = new ModelCatalog.ModelConfiguration();
      //expect(instance).to.be();
    });

  });

}));
