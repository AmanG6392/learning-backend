const asyncHandler = (requestHandler) => {
(req,res ,next) => {
    Promise.resolve(requestHandler( req, res, next)).catch((err) => next(err))
}

}





export {asyncHandler}
//  higherOrder function that function which can accept another function as parametr and can also return it

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler =  (fn) => async (req, res, next) => {
//   try{

//    await fn(req, res, next)

//   } catch (error){
//     res.status(error.code || 500 ).json({
//         success: false,
//         message: error.message
//     })
//   }

// }