import {environment} from "../environment";
import http from "../shared/services/http-service.js";

export const ProductPageUrl = environment.baseUrl + '/api/products';
// // export const doGetTestRequestFlowBaseUrl = TestRequestsUrl + '/flow/';
// // export const doGetTestRequestByIDBaseUrl = TestRequestsUrl+ "/";

// // export const doGetMyTestRequests = () => {


// //     return http.get(TestRequestsUrl);
// // }

// // export const doGetTestRequestByID = (id) => {



// //     return http.get(doGetTestRequestByIDBaseUrl + id);
// // }


export const doCreateProductPage = (products) => {

//     // {
//     //     "address": "string",
//     //     "age": 0,
//     //     "email": "string",
//     //     "gender": "MALE",
//     //     "name": "string",
//     //     "phoneNumber": "string",
//     //     "pinCode": 0
//     // }




    return http.post(ProductPageUrl, products);


}

// // export const doGetTestRequestFlow = (id) => {


// //     return http.get(doGetTestRequestFlowBaseUrl  + id);
// // }

