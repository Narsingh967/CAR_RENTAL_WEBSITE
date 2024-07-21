

//   function takedata (){
//     const name= document.getElementById('fullName').value;
//     const  location= document.getElementById('location').value;
//     const email= document.getElementById('email').value;
//     const phoneNumber= document.getElementById('phoneNumber').value;
//     const adhar_card= document.getElementById('Aadhar-Card-Number').value;
//     const lpu_id= document.getElementById('LPU-ID').value;
//     // const d1= document.getElementById('name').value;
//   const gender="male"

//   return {name, location , email, phoneNumber, adhar_card, lpu_id, gender}
//   }
//   async function sendData(url, data) {
//     try {

//       const response = await fetch(url, {
//         method: 'POST',  // 'PUT' can also be used depending on the requirement
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)  // convert the JavaScript object to a JSON string
//       });
  
//       if (!response.ok) {
//         // Throw an error if the response status code is not in the 200-299 range
//         throw new Error('Network response was not ok: ' + response.statusText);
//       }
  
//       const jsonResponse = await response.json();  // parse the JSON response body
//       console.log('Success:', jsonResponse);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
//   // Call the function with the URL of your server endpoint
  
  
//   function starter(){

//     const data=takedata();
//     console.log(data)

//     sendData('http://localhost:3000/api/rentnow', data);
//   }



function takedata() {
    const name = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const adhar_card = document.getElementById('Aadhar-Card-Number').value;
    const lpu_id = document.getElementById('LPU-ID').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    return { name, location, email, phoneNumber, adhar_card, lpu_id, gender };
}

async function sendData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        const jsonResponse = await response.json();
        console.log('Success:', jsonResponse.success);

        if( jsonResponse.success===true){
            window.location.href = 'confirm.html'
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function starter() {
    const data = takedata();
    console.log(data);
    sendData('http://localhost:3000/api/rentnow', data);
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    starter();
});
