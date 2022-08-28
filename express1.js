const express=require('express');
const server=express();
server.get('/',function(req,res)
{
 const movies=[
    {
    title:'The ShawShank Redemption',
    year:1994,
    director:'Frank Darabent',
    rating:'9.3'
   },
 {
 title:'The GodFather',
    year:1972,
    director:'Francis Ford Coppola',
    rating:'9.2'
},
{
    title:'The GodFather:part2',
    year:1974,
    director:'Francis Ford Coppola',
    rating:'9.0'
}
];
 res.json(movies);
})
server.listen(4000,function(){
  console.log('server is running on post 4000');
});