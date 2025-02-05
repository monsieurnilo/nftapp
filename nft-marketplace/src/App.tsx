

function App() {
  return (
    <>
      <h1>NTF APP</h1>
      <div className="flex wrap spacing-x-1 spacing-y-1">
        <article className="flex column p-1" style={{ flex: '1 1 calc(33.333% - 1rem)' }}>
          <header>
            <h2 className="capitalize">Treecko</h2>
          </header>
          <img className="width" src="https://s1.qwant.com/thumbr/474x586/a/1/34098fcfb35caff76788ed696b513e3c3f8f76dda3fc5c04782716bf087bf0/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.xGcjGpnOBmE1rqp4qCraKgHaJK%26pid%3DApi&q=0&b=1&p=0&a=0" />
          <p className="normal">
            Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls.
            This Pokémon attacks by slamming foes with its thick tail.
          </p>
        </article>
      </div>
    </>
  )
}

export default App
