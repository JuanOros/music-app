const setFavorites = (musics) => localStorage.setItem('musics', JSON.stringify([...musics]));
export const getFavorites = () => JSON.parse(localStorage.getItem('musics')) || [];

export const workFavorite = (newmusic) => {
  const musics = getFavorites();

  if (musics.some((music) => music.trackId === newmusic.trackId)) {
    const newArray = musics.filter((music) => music.trackId !== newmusic.trackId);
    setFavorites(newArray);
    return;
  }

  const newArray = [...musics, newmusic];
  setFavorites(newArray);
  return;
}
