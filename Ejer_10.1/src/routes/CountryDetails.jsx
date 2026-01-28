import { useParams, useRouteLoaderData, Link } from 'react-router-dom'

export default function CountryDetails() {
  const { countryName } = useParams()
  const countries = useRouteLoaderData('root')

  const country = countries.find(
    c => c.name.common.toLowerCase() === countryName
  )

  if (!country) {
    return <p>País no encontrado</p>
  }

  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : '—'

  return (
    <div>
      <h1>{country.name.official}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
      <p>
        <strong>Región:</strong> {country.region} – {country.subregion}
      </p>
      <p><strong>Idiomas:</strong> {languages}</p>

      <h3>Países fronterizos</h3>

      {(!country.borders || country.borders.length === 0) && (
        <p>No tiene fronteras</p>
      )}

      <ul>
        {country.borders?.map(code => {
          const borderCountry = countries.find(c => c.cca3 === code)
          if (!borderCountry) return null

          return (
            <li key={code}>
              <Link to={`/country/${borderCountry.name.common.toLowerCase()}`}>
                {borderCountry.name.common}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
