import React from 'react';
import AlbunsList from '../components/AlbunsList';
import SearchBar from '../components/SearchBar';
import searchAlbumsAPI, { getSearch, setSearch } from '../services/searchAlbumsAPI';
import Header from '../components/Header';
import LoadingCard from '../components/LoadingCard';

class Search extends React.Component {
  state = {
    searchArtistName: '',
    searchButtonLoad: false,
    albumLoading: true,
    albuns: [],
  };

  componentDidMount() {
    const result = getSearch();
    if (result !== '') {
      this.setState({ searchArtistName: result }, () => this.getAlbuns());
    }
  };

  handleChange = ({ target }) => {
    const { name } = target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getAlbuns();
  };

  getAlbuns = async () => {
    const { searchArtistName } = this.state;

    searchArtistName && setSearch(searchArtistName);
    this.setState({
      searchButtonLoad: true,
      albumLoading: true
    });

    const albuns = await searchAlbumsAPI(searchArtistName);

    this.setState({
      albuns,
      albumLoading: false,
      searchArtistName: '',
    });
  };

  render() {
    const {
      searchArtistName,
      searchButtonLoad,
      albumLoading,
      albuns,
    } = this.state;
    return (
        <div className='flex bg-zinc-900'>
          <Header />
          <div className='w-5/6 h-screen overflow-auto'>
            <div
              className="bg-[url('https://images.hdqwalls.com/wallpapers/music-pipes-abstract-4k-dm.jpg')] h-40 bg-no-repeat bg-top bg-cover flex justify-center items-center"
            >
              <SearchBar
                handleChange={ this.handleChange }
                searchArtistName={ searchArtistName }
                handleSubmit={ this.handleSubmit }
              />
            </div>
              {
                !searchButtonLoad ? <h1 className='text-5xl text-white text-center mt-12'>Browser any artist</h1> : (albumLoading ? (
                  <div className='text-white py-8 px-11 flex flex-wrap justify-between'>
                    {
                      Array(40).fill(0).map((_, index) => <LoadingCard key={index} />)
                    }
                  </div>
                ) : (
                  <AlbunsList
                    albuns={ albuns }
                  />
              ))
            }
          </div>
        </div>
    );
  }
}

export default Search;
