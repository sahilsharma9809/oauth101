const express=require('express');
const authRoutes=require('./routes/auth-routes');
const profileRoutes=require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose=require('mongoose')
const keys=require('./config/keys')
const cookieSession=require('cookie-session');
const passport = require('passport');



//////
const app=express();

app.set('view engine','ejs');

const PORT =process.env.PORT || 3002
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
}) 

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.key]
}))

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//db connection
mongoose.connect(keys.mongodb.dbURI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('mongo connected'))
       .catch(err => console.log(err)); ;

//routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);


app.get('/',(req,res)=>{
    res.render('home',{user:req.user});
})
