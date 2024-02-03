import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl : 'https://reqres.in/api'
})

export default createApi ({
    reducerPath : 'api',
    baseQuery ,
    tagTypes : [
        'Users'
    ],
    endpoints : () =>({})
});

