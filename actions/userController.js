"use server"

export const register = async function(prevState, formData) {
   const errors = {}

   const ourUser = {
    userName: formData.get("username"),
    password: formData.get("password")
   }

   if (typeof ourUser.userName != "string") ourUser.username = ""
   if (typeof ourUser.password != "string") ourUser.password = ""

   ourUser.username = ourUser.userName.trim()
   ourUser.password = ourUser.password.trim()

   if (ourUser.username.length < 3) errors.username = "username must at least 3 characters."
   if (ourUser.username.length > 30) errors.username = "username cannot esceed 30 characters."

   if (errors.username || errors.passwor) {
    return {
        errors: error,
        sucess: false
    }
   }

   //storing a new user in the database

   //log the user in by giving them a cookie

   return {
    success: true
   }
}