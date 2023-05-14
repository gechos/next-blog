import Link from "next/link";
import Image from "next/image";
// import Head from "next/head";
import Layout from "@/components/Layout";

// para navegar por las paginas
// {/* <a href="/">Ancla al incio</a> no utilizar ya que carga de nuevo la pagina solo para anclas externos y por link esta optimizada y la carga de memoria si no cambia nada */}
export default function primerPost() {
  return (
    <div>
    <Layout
          title="Primer Post | next.js"
          description="Descripcion Primer Post">
      <h1>Mi primer Post</h1>
      <Image src="/img/1.jpg" width={500} height={500} alt="Post 1"></Image>
      {/* <Link href="/"> */}
      {/* <a>Volver al inicio</a>  antiguo ya no se puede con <a> hijo para poder utilizar a lo siguiente en Link */}
      <Link href="/" legacyBehavior>
        <a>Volver al inicio</a>
      </Link>
    </Layout>
    </div>
  );
}
