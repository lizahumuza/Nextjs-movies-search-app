/*import { InferGetStaticPropsType } from 'next'

type data = [
  name: string,
  id: string
]

export const getStaticProps = async () => {
  const res = await fetch('https://api.themoviedb.org/3/movie/latest?api_key=74c1d56d75920a478c87d4728a25af08')
  const data: data[] = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      movies:data
    },
  }
}

function Blog({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(movies)

  return (
    <div>
      <h1>All Ninjas</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <a>
            <h3>{ movie.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blog*/
