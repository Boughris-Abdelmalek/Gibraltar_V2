import { firebaseApiSlice } from "../../app/api/firebaseApi";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../utils/firebase-config";

export const authApiSlice = firebaseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          return { data: user };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
