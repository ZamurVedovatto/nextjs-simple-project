interface Params {
  params: {
    name: string;
  };
}

export default function Page({ params }: Params) {
  return (
    <main>
      <span>{params.name}</span>
    </main>
  );
}
