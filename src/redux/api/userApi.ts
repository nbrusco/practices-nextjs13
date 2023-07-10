import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi = createApi({
  // El nombre del slice a crear en el Store, donde el estado de la API se va a guardar
  reducerPath: "userAPI",
  // La dirección de las query
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  // Los endpoints de la api, recibe un builder con el método query (get) o mutation (post, delete, put)
  endpoints: (builder) => ({
    // el TS acá indica que retorna un ARRAY que respeta el type User y no requiere de parámetros adicionales para ejecutarse
    getUsers: builder.query<User[], null>({
      // El query: indica el destino de la petición => http://domain/users
      query: () => "users",
    }),
    // Acá, con la indicación del id: string, marca a TS de que es requerido que a esta función se le envíe un parámetro id que debe ser string.
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`, // Pide a http://domain/users/{id}
    }),
  }),
  // Es decir, lo que pidas a "/users", almacenalo en "getUsers"
});

// El createApi nos devuelve unos hooks con los endpoitns que hayamos creado para facilitar tu uso
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
