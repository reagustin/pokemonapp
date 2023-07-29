import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';

interface LayoutProps extends PropsWithChildren<{}> {
    children?: React.ReactNode,
    title?:string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({children, title}) => {

  console.log(origin);

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Cosme Fulanito" />
            <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`}  />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
};
