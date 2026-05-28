export default function Transactions() {
    return(
        <section id="transactions" className="relative isolate flex flex-col flex-1 items-center bg-gray-900">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />            
            </div>
            <h1>Transactions</h1>

            <main className="font-sans mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <article className="relative flex flex-col items-center font-sans article-form card-item gap-6 rounded-lg bg-gray-800 max-lg:rounded-t-4xl p-8">
                    <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl"></div>
                    <h2 className="relative wrapper-description-page">Adicionar nova transação</h2>

                    <form className="relative font-sans form-transaction">
                        <input type="text" name="title" placeholder="Titulo" />
                        <input type="text" name="description" placeholder="Descrição" />
                        <input type="text" name="amount" placeholder="Valor" />
                        <input type="text" name="type" placeholder="Tipo" />
                        <input type="text" name="category" placeholder="Categoria" />
                        <input type="date" name="date" placeholder="Data" />
                    </form>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
                </article>

                <article className="relative font-sans article-list card-item gap-6 rounded-lg bg-gray-800 max-lg:rounded-t-4xl p-8">
                    <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl"></div>
                    <ul className="relative wrapper-description-page">
                        <li>Transaction 1</li>
                        <li>Transaction 2</li>
                        <li>Transaction 3</li>
                    </ul>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl"></div>
                </article>
            </main>
        </section>
    )
}