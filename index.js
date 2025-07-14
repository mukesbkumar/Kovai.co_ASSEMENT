// // Get:)
fetch("https://apihub.document360.io/v2/Drive/Folders", {
    headers: {
        'api_token': 'M1XbCrQnV47mHjZcYnpsUBOFPvDFo/PJhrSaPRNlJb4MYO0gWTQamNFIw6zn7KLCo5e4xx7aTm5dbDhSxFBJS64Qd34M8gn0/78uGxilK4Rg4MVNLVO62u18ElX59BSJJ1Pcfyar2N5TqrQMEypEOQ=='
    }
})
.then(response => response.json()) // data will be in JSON format
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("this is not secured, sorry:", error);
});



// // Post:)
 fetch('https://apihub.document360.io/v2/Drive/Folders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'api_token': 'M1XbCrQnV47mHjZcYnpsUBOFPvDFo/PJhrSaPRNlJb4MYO0gWTQamNFIw6zn7KLCo5e4xx7aTm5dbDhSxFBJS64Qd34M8gn0/78uGxilK4Rg4MVNLVO62u18ElX59BSJJ1Pcfyar2N5TqrQMEypEOQ=='
  },
  body: JSON.stringify({ folder_name: 'folder_name01', Id: 1 })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error("this is not secured", error));



//Put:)
fetch('https://apihub.document360.io/v2/Drive/Folders/3', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'api_token': 'M1XbCrQnV47mHjZcYnpsUBOFPvDFo/PJhrSaPRNlJb4MYO0gWTQamNFIw6zn7KLCo5e4xx7aTm5dbDhSxFBJS64Qd34M8gn0/78uGxilK4Rg4MVNLVO62u18ElX59BSJJ1Pcfyar2N5TqrQMEypEOQ=='
  },
  body: JSON.stringify({
    folder_name: 'folder_name01',
    Id: 3
  })
})
.then(res => {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
})
.then(data => console.log(" Folder updated:", data))
.catch(error => console.error("Error updating folder:", error));

//Delete:)
fetch('https://apihub.document360.io/v2/Drive/Folders/3', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'api_token': 'M1XbCrQnV47mHjZcYnpsUBOFPvDFo/PJhrSaPRNlJb4MYO0gWTQamNFIw6zn7KLCo5e4xx7aTm5dbDhSxFBJS64Qd34M8gn0/78uGxilK4Rg4MVNLVO62u18ElX59BSJJ1Pcfyar2N5TqrQMEypEOQ=='
  }
})
.then(res => {
  console.log("Status code:", res.status);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.text().then(text => text ? JSON.parse(text) : {});
})
.then(data => console.log("Folder deleted successfully:", data))
.catch(error => console.error(" Error deleting folder:", error));




