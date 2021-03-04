
import { BaseURL  } from './ServiceURL';

const TAG = 'Api : '

class Api { 
 
  static get(route, header) {
    return this.callRes(route, null, header, 'GET');
  }


  static getResponseData(url, options, route) {

    console.log(TAG, 'METHOD : ' + options.method + " " + 'URL : ' + url + " " + 'BODY : ' + JSON.stringify(options.body) + " " + 'HEADER : ' + JSON.stringify(options.headers))

    let timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 30000, 'request timed out');
    })

    let fetchd = new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          console.log(response)
          return response;
        })
        .then(json => resolve(json))
        .catch(reject)
    })

    return Promise
      .race([timeout, fetchd])
      .then(response => {  
        return response; 
      })
      .catch(error => {
        console.log(error)
        return Promise.reject()
      })

  }

  static async callRes(route, params, header, verb) {

    const host = BaseURL
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);

    options.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    };
      

    return this.getResponseData(url, options, route);
    
  }


  static async processResponse(response: Response) {
    if (response && response.status < 200 || response.status >= 300) {
      const error: any = new Error(response.statusText);
      const contentType = response.headers.get('Content-Type');
      let errorMessage = null;

      if (contentType && contentType.includes('text/plain')) {
        errorMessage = await response.text();
      } else if (contentType && contentType.includes('application/json')) {
        const errorBody = await response.json();
        error.response = errorBody;

        if (errorBody.message) {
          errorMessage = errorBody.message;
        }
      }

      // Attach the message
      error.message = errorMessage;
      error.statusCode = response.status;

      // We throw the error even if we call a special handler
      throw error;
    }

    return response.json();
  }
}

export default Api;
