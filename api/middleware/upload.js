const path = require('path')
const multer  = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
    //   let ext = Date.now() + '-' + Math.round(Math.random() * 1E9)
         let ext = path.extname(file.originalname)
      cb(null, Date.now() + ext)
    }
  })
  
//   var upload = multer({ 
//     storage: storage,
//     fileFilter: function(req,file,callback){
//         if(
//             file.mimetype==
//         )
//     }

//     })

var upload = multer ({
    storage: storage,
    fileFilter: function (req, file, callback) {
    if(
        file.mimetype=="application/pdf" ||file.mimetype=="image/png" ||
        file.mimetype=="image/jpg"){
     callback(null, true)
    }else{
        console.log('only pdf &jpg & png file supported!') 
        callback(null, false)
    }
    },
    limits: {
    fileSize: 1024* 1024 * 2
    }

})

module.exports=upload