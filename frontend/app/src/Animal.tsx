import { IAnimal } from "./types"

const Animal = ({ id, type, name, age }: IAnimal) => {
  return (
    <li>
        <strong>{type}</strong> - <span>{name}</span>
    </li>
  )
}
export default Animal