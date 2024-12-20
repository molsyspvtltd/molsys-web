let baseUrl;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

const cloudHosts = ['ec2-18-206-197-93.compute-1.amazonaws.com',"18.206.197.93"]
if(cloudHosts.includes(hostname)) {
    baseUrl = 'http://molsys.in:8080';

} else {
    baseUrl = "http://localhost:8080";
}




export const environment={
    baseUrl
}

// let baseUrl;
// const apiVersion = 'v1';

// const hostname = window && window.location && window.location.hostname;

// const cloudHosts = ['ec2-18-206-197-93.compute-1.amazonaws.com', 'molsys.in'];

// if (cloudHosts.includes(hostname)) {
//     baseUrl = 'http//molsys.in:8082';
// } else {
//     baseUrl = "http//molsys.in:8082";
// }

// export const environment = {
//     baseUrl
// };

