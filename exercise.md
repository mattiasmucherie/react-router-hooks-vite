# Welcome to the exercise

## Part 1

- Create a page component called images
- Add it to App.jsx wrapped in a `<Route>` with the `path="/images"`

## Part 2

- In the page component Images.jsx create a button that on click generates a random number between 1 - 100
- When that random number is generated use the hook `useNavigate` to push a new location state to `/images/${randomNumber}`

## Part 3

- Now create a new page component called ImageViewer
- In App.jsx add a new `<Route>` with the path `/images/:imageId`
- And render our ImageViewer page component when that path matches

## Part 4

- In ImageViewer.jsx create a state called image with the `useState` hook and set the default value to `null`
- Use the react-router hook `useParams()` to retrieve the `:imageId`
- Create a useEffect that only only runs on first render
  - In the useEffect we want to do the same as we did in the PhotoShuffler exercise
  - We want to do a fetch to https://jsonplaceholder.typicode.com/photos/${imageId} and save the result to our image state with setImage
  - In the return section, check if image is null
  - If image is null then render the text `Loading image...`
  - If image is set then render a img tag with the values from the image state object

Hint:

```jsx
let { imageId } = useParams();
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`).then(
    (response) => {
      response.json().then((data) => {
        setImage({
          url: data.url,
          title: data.title,
        });
      });
    }
  );
}, []);
```
