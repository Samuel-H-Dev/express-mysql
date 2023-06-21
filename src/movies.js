import { db } from './connectdb.js'

export function getMovies(req, res){
    db.query('SELECT * FROM movietable', (err, movies) => {
        if(err){
            return res.status(500).send({success: false, message: err})
        }
        res.send(movies)
    })
}