import apiSlice from '../apiSlice'
import { createUserWithEmailAndPassword, User } from 'firebase/auth'
import { auth, storage } from '@/firebase/firebaseConfig'
import { IUserAvatar } from '@/types/IProfile'
import { getDownloadURL, listAll, ref, uploadBytesResumable, uploadBytes } from 'firebase/storage'
import { RootState } from '@/store'
import { updateUploadingProgress } from '@/store/app/appSlice'

const AVATAR_FOLDER = 'avatars'

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAvatar: build.query<string, { userId: string }>({
      providesTags: ['avatar'],
      queryFn: async ({ userId }, { getState }) => {
        const listReference = ref(storage, `${AVATAR_FOLDER}/${userId}`)
        try {
          const data = []
          await listAll(listReference)
            .then((res) => {
              res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
              })
              res.items.forEach((itemRef) => {
                console.log(itemRef)
                // All the items under listRef.
              })
            })
            .catch((error) => {
              // Uh-oh, an error occurred!
            })
          return { data: 'avatars downloaded sucessfully' }
        } catch (error) {
          const errorCode = error.code
          const errorMessage = error.message
          return { error: { data: errorMessage, status: errorCode } }
        }
      }
    }),
    updateAvatar: build.mutation<string, { avatarData: string; filename: string }>({
      invalidatesTags: ['avatar'],
      queryFn: async ({ avatarData, filename }, { getState, dispatch }) => {
        const userId = (getState() as RootState).auth.user.uid
        const storageRef = ref(storage, `${AVATAR_FOLDER}/${userId}`)

        try {
          const fetchAvatarBlob = await fetch(avatarData).then((data) => data.blob())
          const avatarUpload = uploadBytesResumable(storageRef, fetchAvatarBlob)

          function uploadUtil() {
            return new Promise((resolve, reject) => {
              avatarUpload.on(
                'state_changed',
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  dispatch(updateUploadingProgress(progress))
                },
                (error) => {
                  reject(error)
                },
                () => {
                  getDownloadURL(avatarUpload.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL)
                    dispatch(updateUploadingProgress(0))
                    resolve(downloadURL)
                  })
                }
              )
            })
          }

          const url = await uploadUtil()

          return { data: url as string }
        } catch (error) {
          const errorCode = error.code
          const errorMessage = error.message
          return { error: { data: errorMessage, status: errorCode } }
        }
      }
    })
  }),
  overrideExisting: true
})

export default profileApi

export const { useUpdateAvatarMutation, useGetAvatarQuery } = profileApi
