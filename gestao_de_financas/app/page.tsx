import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="header w-full">
        <div className="header-left">
          <h1 className="header-title">
            Gestão de Finanças
          </h1>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 className="wrapper-description-page">Está app consiste em conseguir gerir as nossas finanças</h2>
      </main>
    </div>
  );
}
