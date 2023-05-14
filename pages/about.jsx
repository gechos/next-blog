import Layout from "@/components/Layout";
// antes como react ../ ahora relativa position @ funciona como el context

export default function about() {
  return (
    <div>
      <Layout
          title="About | next.js"
          description="Descripcion About">
        <h1>About</h1>
      </Layout>
    </div>
  )
}


