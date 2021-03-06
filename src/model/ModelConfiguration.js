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

import ApiClient from '../ApiClient';
import CAG from './CAG';
import DatasetSpecification from './DatasetSpecification';
import Parameter from './Parameter';
import Process from './Process';
import TimeInterval from './TimeInterval';

/**
 * The ModelConfiguration model module.
 * @module model/ModelConfiguration
 * @version 0.0.2
 */
class ModelConfiguration {
    /**
     * Constructs a new <code>ModelConfiguration</code>.
     * @alias module:model/ModelConfiguration
     * @param id {String} 
     */
    constructor(id) { 
        
        ModelConfiguration.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ModelConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelConfiguration} obj Optional instance to populate.
     * @return {module:model/ModelConfiguration} The populated <code>ModelConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelConfiguration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('hasInput')) {
                obj['hasInput'] = ApiClient.convertToType(data['hasInput'], [DatasetSpecification]);
            }
            if (data.hasOwnProperty('hasOutput')) {
                obj['hasOutput'] = ApiClient.convertToType(data['hasOutput'], [DatasetSpecification]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('hasCAG')) {
                obj['hasCAG'] = ApiClient.convertToType(data['hasCAG'], [CAG]);
            }
            if (data.hasOwnProperty('hasProcess')) {
                obj['hasProcess'] = ApiClient.convertToType(data['hasProcess'], [Process]);
            }
            if (data.hasOwnProperty('hasTimeInterval')) {
                obj['hasTimeInterval'] = ApiClient.convertToType(data['hasTimeInterval'], [TimeInterval]);
            }
            if (data.hasOwnProperty('hasImplementationScriptLocation')) {
                obj['hasImplementationScriptLocation'] = ApiClient.convertToType(data['hasImplementationScriptLocation'], 'String');
            }
            if (data.hasOwnProperty('hasContainer')) {
                obj['hasContainer'] = ApiClient.convertToType(data['hasContainer'], [Object]);
            }
            if (data.hasOwnProperty('hasConstraint')) {
                obj['hasConstraint'] = ApiClient.convertToType(data['hasConstraint'], 'String');
            }
            if (data.hasOwnProperty('hasParameter')) {
                obj['hasParameter'] = ApiClient.convertToType(data['hasParameter'], [Parameter]);
            }
            if (data.hasOwnProperty('hasComponentLocation')) {
                obj['hasComponentLocation'] = ApiClient.convertToType(data['hasComponentLocation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ModelConfiguration.prototype['id'] = undefined;

/**
 * @member {Array.<String>} type
 */
ModelConfiguration.prototype['type'] = undefined;

/**
 * @member {String} label
 */
ModelConfiguration.prototype['label'] = undefined;

/**
 * @member {Array.<module:model/DatasetSpecification>} hasInput
 */
ModelConfiguration.prototype['hasInput'] = undefined;

/**
 * @member {Array.<module:model/DatasetSpecification>} hasOutput
 */
ModelConfiguration.prototype['hasOutput'] = undefined;

/**
 * @member {String} description
 */
ModelConfiguration.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/CAG>} hasCAG
 */
ModelConfiguration.prototype['hasCAG'] = undefined;

/**
 * @member {Array.<module:model/Process>} hasProcess
 */
ModelConfiguration.prototype['hasProcess'] = undefined;

/**
 * @member {Array.<module:model/TimeInterval>} hasTimeInterval
 */
ModelConfiguration.prototype['hasTimeInterval'] = undefined;

/**
 * @member {String} hasImplementationScriptLocation
 */
ModelConfiguration.prototype['hasImplementationScriptLocation'] = undefined;

/**
 * @member {Array.<Object>} hasContainer
 */
ModelConfiguration.prototype['hasContainer'] = undefined;

/**
 * @member {String} hasConstraint
 */
ModelConfiguration.prototype['hasConstraint'] = undefined;

/**
 * @member {Array.<module:model/Parameter>} hasParameter
 */
ModelConfiguration.prototype['hasParameter'] = undefined;

/**
 * @member {String} hasComponentLocation
 */
ModelConfiguration.prototype['hasComponentLocation'] = undefined;






export default ModelConfiguration;

