export const Users = [
  {
    id: "1",
    name: "User 1",
    image: "https://robohash.org/user1",
  },
  {
    id: "2",
    name: "User 2",
    image: "https://robohash.org/user2",
  },
  {
    id: "3",
    name: "User 3",
    image: "https://robohash.org/user3",
  },
  {
    id: "4",
    name: "User 4",
    image: "https://robohash.org/user4",
  },
  {
    id: "5",
    name: "User 5",
    image: "https://robohash.org/user5",
  },
];

{Users.map((user, index) => {
  return (
    <div key={index}>
      <h1> {user.id} </h1>
      <span> {user.name} </span>
      <img src={user.image} />
    </div>
  );
})}