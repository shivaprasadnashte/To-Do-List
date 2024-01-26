const express = require("express");
const connectDB = require("./config/db");
const todoSchema = require("./module/module");
const cors = require("cors");
const app = express();
app.use(cors());
connectDB();
app.use(express.json({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//get 
app.get("/todos", async (req, res) => {
  try {
    let response = await todoSchema.find({});
    res.status(201).json(response);
  } catch (error) {
    res.status(501).json({
      msg: "Something went wrong!",
      error: error.message,
    });
  }  
});
//put request

app.put("/todos/:todoID", async (req, res) => {

  try {
    let response = await todoSchema.updateOne({ _id: req.params.todoID }, {status:true});
    res.status(201).json(response);
  } catch (error) {
    res.status(501).json({
      msg: "Something went wrong!",
      error: error.message,
    });
  }
});

//post request
app.post("/add", async (req, res) => {
  const todo = new todoSchema({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status
  });
  let response = await todo.save();
  res.status(201).json(response);
});

//delete request

app.delete("/delete/:id", async (req,res)=>{
  try {
    const response = await todoSchema.deleteOne({_id:req.params.id})
    res.status(201).json(response);
  } catch (error) {
    console.log(
      error
    )
    
  }
})

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
