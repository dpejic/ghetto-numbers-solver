import { solutions } from "../../utils/helpers/numbers";

export default async function handler(req, res) {
  const { target, numbers, position, negative } = req.query;
  const numbersArray = numbers.split(",").map((number) => +number);
  const exp = await solutions(+target, numbersArray);
  res.json({ target, exp: exp.toString(), position, negative });
}
