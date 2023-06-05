import React from 'react';
import Loading from '../components/Loading';
import AlbunsList from '../components/AlbunsList';
import SearchBar from '../components/SearchBar';
import searchAlbumsAPI, { getSearch, setSearch } from '../services/searchAlbumsAPI';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    searchArtistName: '',
    searchButtonLoad: false,
    albumLoading: true,
    albuns: [],
  };

  componentDidMount() {
    const result = getSearch();
    this.setState({ searchArtistName: result }, () => this.getAlbuns());
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
                searchButtonLoad && (albumLoading ? <Loading /> : (
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
