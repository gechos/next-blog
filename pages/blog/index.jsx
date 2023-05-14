import Layout from "@/components/Layout";
import Link from "next/link";


export default function index({ data }) {
  return (
    <Layout
      title="Lista de post escritos por mi"
      description="descripcion de posts"
    >
      <h1>Lista de artículos</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
          <Link href ={`/blog/${id}`}legacyBehavior>
          <a>{id} - {title}</a>
          </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}
// llama a datos esternos de forma estatica GET
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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