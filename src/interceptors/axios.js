

// let refresh = false;

// axios.interceptors.response.use(resp => resp, async error => {
//     // console.log(error.response.status)
//     if (error.response.status === 401 && !refresh) {
//         refresh = true;

//         const response = await axios.post('refresh', {}, {withCredentials: true});

//         if (response.status === 200) {
          // const config={
          //     headers : {
          //       Authorization: 'Bearer ' + localStorage.getItem('accessToken')
          //     }
          //   }
//             console.log(`Bearer ${response.data.date.accesToken}`)
//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;
// });