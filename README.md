# Music app


This music app where you can search for an artist and receive their albums, so you can listen to your favorite songs.

Also, this application is intended as an initial training in my front-end skills. For the first time, I was able to use React and Tailwind to build it. After completing it, I gained a better understanding of the use of state and props in each component, resulting in a more organized repository.

Follow the preview at the end of this text...

## Project information

- Tailwind for styling
- React App

## API Reference ( iTunes api )

#### Get album items 

```http
  https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm
```

#### Get albums songs

```http
  https://itunes.apple.com/lookup?id=${id}&entity=song
```
\
\
![previw music aplication](./src/assets/Desktop-Recording-June-11_-2023-12_10-PM.gif)