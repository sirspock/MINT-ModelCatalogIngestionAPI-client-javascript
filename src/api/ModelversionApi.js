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


import ApiClient from "../ApiClient";
import ModelVersion from '../model/ModelVersion';

/**
* Modelversion service.
* @module api/ModelversionApi
* @version 0.0.2
*/
export default class ModelversionApi {

    /**
    * Constructs a new ModelversionApi. 
    * @alias module:api/ModelversionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createModelVersion operation.
     * @callback module:api/ModelversionApi~createModelVersionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a ModelVersion
     * Creates a new instance of a `ModelVersion`.
     * @param {module:model/ModelVersion} modelVersion A new `ModelVersion` to be created.
     * @param {module:api/ModelversionApi~createModelVersionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createModelVersion(modelVersion, callback) {
      let postBody = modelVersion;
      // verify the required parameter 'modelVersion' is set
      if (modelVersion === undefined || modelVersion === null) {
        throw new Error("Missing the required parameter 'modelVersion' when calling createModelVersion");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelversions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModelVersion operation.
     * @callback module:api/ModelversionApi~deleteModelVersionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a ModelVersion
     * Deletes an existing `ModelVersion`.
     * @param {String} id A unique identifier for a `ModelVersion`.
     * @param {module:api/ModelversionApi~deleteModelVersionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteModelVersion(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteModelVersion");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelversion/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelVersion operation.
     * @callback module:api/ModelversionApi~getModelVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a ModelVersion
     * Gets the details of a single instance of a `ModelVersion`.
     * @param {String} id A unique identifier for a `ModelVersion`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelversionApi~getModelVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelVersion}
     */
    getModelVersion(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModelVersion");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelVersion;
      return this.apiClient.callApi(
        '/modelversion/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelVersions operation.
     * @callback module:api/ModelversionApi~getModelVersionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelVersion>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All ModelVersions
     * Gets a list of all `ModelVersion` entities.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelversionApi~getModelVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelVersion>}
     */
    getModelVersions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelVersion];
      return this.apiClient.callApi(
        '/modelversions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModelVersion operation.
     * @callback module:api/ModelversionApi~updateModelVersionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a ModelVersion
     * Updates an existing `ModelVersion`.
     * @param {String} id A unique identifier for a `ModelVersion`.
     * @param {module:model/ModelVersion} modelVersion Updated `ModelVersion` information.
     * @param {module:api/ModelversionApi~updateModelVersionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateModelVersion(id, modelVersion, callback) {
      let postBody = modelVersion;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateModelVersion");
      }
      // verify the required parameter 'modelVersion' is set
      if (modelVersion === undefined || modelVersion === null) {
        throw new Error("Missing the required parameter 'modelVersion' when calling updateModelVersion");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelversion/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}