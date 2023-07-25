const getUser = async (username: string) => {
  const data = await fetch(`https://api.github.com/users/${username}`);
  // console.log(data);
  return data.json();
};

interface Params {
  params: {
    user: string;
  };
}

export default async function Profile({ params }: Params) {
  const userData = getUser(params.user);
  const { login, name, location, email, public_repos } = await userData;

  return (
    <div>
      <div>{login}</div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{public_repos}</div>
    </div>
  );
}
