import express from "express"
import  {addBook, getAllBooks} from  '../controllers/bookController'

const router = express.Router()

router.get('/', getAllBooks)
router.post('/', addBook )

export default router;