import express, { Request, Response } from "express";
import { connectDB, prisma } from "./config/db";
import { User, MOVIE, Comment } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const app = express();
app.use(express.json());
const port = 3444;

connectDB();

app.post("/createUser", async (req: Request, res: Response) => {
  const newUser = req.body as User;

  await prisma.user.create({
    data: newUser,
  });
  return res.json("user added");
});

app.get("/user/:userid", async (req: Request, res: Response) => {
  const User = await prisma.user.findMany();
  return res.json(User);
});

app.put("/updateuser/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body as User;
  await prisma.user.update({
    where: { id: id },
    data: user,
  });
  res.json("user updated");
});

app.delete("/deleteuser/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: String(id) },
  });
  res.json("user deleted");
});

app.get("/getmovies", async (req: Request, res: Response) => {
  const getmovies = await prisma.user.findMany();
  return res.json(getmovies);
});

app.post("/createmovie", async (req: Request, res: Response) => {
  const newUser = req.body as User;

  await prisma.user.create({
    data: newUser,
  });
  return res.json("createmovie");
});

app.get("/movie/:movieid", async (req: Request, res: Response) => {
  const movie = await prisma.mOVIE.findMany();
  return res.json(movie);
});

app.get("/moviecomments/:movieid", async (req: Request, res: Response) => {
  const moviecomments = await prisma.mOVIE.findMany();
  return res.json(moviecomments);
});

app.get("/getmoviewithrating", async (req: Request, res: Response) => {
  const moviewithrating = await prisma.mOVIE.findMany();
  return res.json(moviewithrating);
});

app.post("/addcomment", async (req: Request, res: Response) => {
  const newUser = req.body as User;

  await prisma.user.create({
    data: newUser,
  });
  return res.json("addcomment");
});

app.put("/updatecomment/:commentid", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body as User;
  await prisma.user.update({
    where: { id: id },
    data: user,
  });
  res.json("updatecomment");
});

app.delete("/deletecomment/:commentid", async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: String(id) },
  });
  res.json("comment deleted");
});


app.listen(3444, () => {
  console.log(`Server Listing ${port}`);
});
