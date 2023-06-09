import Layout from "@/components/Layout";


export default function ArticuloUno({ data }) {
  return (
    <Layout title="Articulo  title" description="descripcion del titulo ">
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </Layout>
  );
}
//para paginas dinamicas []
export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } })); // trasformamos a string el id
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }