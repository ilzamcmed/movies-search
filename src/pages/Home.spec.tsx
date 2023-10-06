
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Home from './Home';

jest.mock('axios');
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('Home Component', () => {

  const renderComponent = () => (render(<Home />));

  it("renders the search form", () => {

    const { getByText, getAllByRole, getByPlaceholderText } = renderComponent();
       screen.getByPlaceholderText("Search movies...");
      expect(searchInput).toBeInTheDocument();
  
      console.log(renderComponent)
  
    });
  it.only('renders the component and handles search', async () => {

    const { container } = renderComponent();

    console.log(container)

    mockedAxios.mockResolvedValueOnce({
      Search: [
          {
              Title: "Harry Potter 1",
              Year: "1982",
              imdbID: "tt0082045",
              Type: "movie",
              Poster: "https://m.media-amazon.com/images/M/MV5BMTdmYjEyNzEtOWE5OC00NzNkLWI1YmItNTgwYjE2MGI5N2VmXkEyXkFqcGdeQXVyMjAyNTUxMw@@._V1_SX300.jpg"
          },
          {
              Title: "Harry Potter 2",
              Year: "2019",
              imdbID: "tt9831136",
              Type: "movie",
              Poster: "https://m.media-amazon.com/images/M/MV5BYWVjMGI4ZTAtOTJjYS00NjZkLWEzZGUtNDMxZTEyMjE5ODdjXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg"
          },
      ],
      totalResults: "2",
      Response: "True",
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
  });

 
      
    fireEvent.click(screen.getByText('Search'));

    await waitFor(() => {
      const movieList = screen.getByTestId('movies-list');
      expect(movieList).toHaveLength(2);

    });
    
    // expect(movieList[0]).toHaveTextContent('Harry Potter 1');
    // expect(movieList[1]).toHaveTextContent('Harry Potter 2');

    // axios.get.mockImplementationOnce(() => Promise.resolve(mockedMovies));

    // const searchInput = screen.getByPlaceholderText("Search movies...");

    // fireEvent.change(searchInput, { target: { value: "Harry" } });
    // fireEvent.keyDown(searchInput, { key: "Enter", code: 13 });


    // expect(axios.get).toHaveBeenCalledWith(
    //   `https://www.omdbapi.com/?apikey=8cc026ad&s=harry&type=movie&page=1&plot=full`
    // );
  });

  it('handles no movies found scenario', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

  });

});






