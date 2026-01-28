import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { useState } from 'react'

export async function rootLoader() {
  const response = await fetch('https://restcountries.com/v3.1/region/europe')
  if (!response.ok) {
    throw new Error('Error al cargar los países')
  }
  return response.json()
}

export default function RootLayout() {
  const countries = useLoaderData()
  const [search, setSearch] = useState('')

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="layout">
      <aside>
        <h2>Países de Europa</h2>

        {/* Filtro (fase 4) */}
        <input
          type="text"
          placeholder="Buscar país..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <ul>
          {filteredCountries.map(country => (
            <li key={country.cca3}>
              <NavLink to={`/country/${country.name.common.toLowerCase()}`}>
                <img src={country.flags.svg} alt="" />
                {country.name.common}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
