import { Wrapper } from "./Wrapper"
import { UserCard } from "./UserCard"

export default function App(){
  const users=[
      {
        name:"Virat Kohli",
        role:"BatsMan",
        country:"India"
      },
      {
        name:"MS Dhoni",
        role:"WK-BatsMan",
        country:"India"
      }
    ]
  return(
    <>
    <h1>User DashBoard</h1>
    <Wrapper title="User list">
      {
      users.map((data)=>(<UserCard data={data} />))}
    </Wrapper>

    <Wrapper title="Person list"> </Wrapper>
    </>
  )
}